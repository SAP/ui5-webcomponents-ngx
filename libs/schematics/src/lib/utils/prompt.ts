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

  const { default: inquirer } = await import('inquirer');
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

  const { default: inquirer } = await import('inquirer');
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

  const { default: inquirer } = await import('inquirer');
  const answers = await inquirer.prompt([question]);

  return answers['answer'];
}
