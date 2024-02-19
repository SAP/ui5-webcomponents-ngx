import { askConfirmation } from "@angular/cli/src/utilities/prompt";
import * as readline from "readline/promises";

const askInput = async (question: string, defaultAnswer: string) => {
  const int = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const result = await int.question(question);
  return result || defaultAnswer;
};


const defaultLanguageInputResult = async (): Promise<string> => {
  return await askInput('What is the default language of your application? (en)', 'en');
}

export async function getI18nConfig() {
  const useI18n = await askConfirmation('Would you like to add i18n capabilities into your application?', false);
  const defaultLanguage = (useI18n ? await defaultLanguageInputResult() : undefined);
  return {
    useI18n,
    defaultLanguage
  };
}
