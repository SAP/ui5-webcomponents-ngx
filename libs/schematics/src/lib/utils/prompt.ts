import type { CheckboxChoiceOptions, CheckboxQuestion, ListChoiceOptions, ListQuestion, Question, } from 'inquirer';

import * as readline from "readline/promises";

export const askInput = async (question: string, defaultAnswer: string, noTTYResponse?: string) => {
  if (!isTTY()) {
    return noTTYResponse ?? defaultAnswer;
  }
  const int = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const result = await int.question(question);
  return result || defaultAnswer;
};

function _isTruthy(value: undefined | string): boolean {
  // Returns true if value is a string that is anything but 0 or false.
  return value !== undefined && value !== '0' && value.toUpperCase() !== 'FALSE';
}

/**
 * Lazily compiled dynamic import loader function.
 */
let load: (<T>(modulePath: string | URL) => Promise<T>) | undefined;

/**
 * This uses a dynamic import to load a module which may be ESM.
 * CommonJS code can load ESM code via a dynamic import. Unfortunately, TypeScript
 * will currently, unconditionally downlevel dynamic import into a require call.
 * require calls cannot load ESM code and will result in a runtime error. To workaround
 * this, a Function constructor is used to prevent TypeScript from changing the dynamic import.
 * Once TypeScript provides support for keeping the dynamic import this workaround can
 * be dropped.
 *
 * @param modulePath The path of the module to load.
 * @returns A Promise that resolves to the dynamically imported module.
 */
export function loadEsmModule<T>(modulePath: string | URL): Promise<T> {
  load ??= new Function('modulePath', `return import(modulePath);`) as Exclude<
    typeof load,
    undefined
  >;

  return load(modulePath);
}

export function isTTY(): boolean {
  // If we force TTY, we always return true.
  const force = process.env['NG_FORCE_TTY'];
  if (force !== undefined) {
    return _isTruthy(force);
  }

  return !!process.stdout.isTTY && !_isTruthy(process.env['CI']);
}

export async function askConfirmation(
  message: string,
  defaultResponse: boolean,
  noTTYResponse?: boolean,
): Promise<boolean> {
  if (!isTTY()) {
    return noTTYResponse ?? defaultResponse;
  }

  const question: Question = {
    type: 'confirm',
    name: 'confirmation',
    prefix: '',
    message,
    default: defaultResponse,
  };

  // @ts-expect-error
  const { default: inquirer } = await loadEsmModule<typeof import('inquirer')>('inquirer');
  const answers = await inquirer.prompt([question]);

  return answers['confirmation'];
}

export async function askChoices(
  message: string,
  choices: CheckboxChoiceOptions[],
  noTTYResponse: string[] | null,
): Promise<string[] | null> {
  if (!isTTY()) {
    return noTTYResponse;
  }

  const question: CheckboxQuestion = {
    type: 'checkbox',
    name: 'answer',
    prefix: '',
    message,
    choices,
  };

  // @ts-expect-error
  const { default: inquirer } = await loadEsmModule<typeof import('inquirer')>('inquirer');
  const answers = await inquirer.prompt([question]);

  return answers['answer'];
}


export async function askQuestion(
  message: string,
  choices: ListChoiceOptions[],
  defaultResponseIndex: number,
  noTTYResponse: null | string,
): Promise<string | null> {
  if (!isTTY()) {
    return noTTYResponse;
  }

  const question: ListQuestion = {
    type: 'list',
    name: 'answer',
    prefix: '',
    message,
    choices,
    default: defaultResponseIndex,
  };

  // @ts-expect-error
  const { default: inquirer } = await loadEsmModule<typeof import('inquirer')>('inquirer');
  const answers = await inquirer.prompt([question]);

  return answers['answer'];
}
