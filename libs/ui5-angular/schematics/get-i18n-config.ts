import { askQuestion } from './utils/promt';

export async function getI18nConfig() {
  const useI18n = await askQuestion({
    type: 'confirm',
    message:
      'Would you like to add i18n capabilities into your application?',
    default: false,
  }) as unknown as boolean;
  const defaultLanguage = (useI18n ? await askQuestion({
    type: 'input',
    message:
      'What is the default language of your application?',
    default: 'en',
  }) as string : undefined);
  return {
    useI18n,
    defaultLanguage
  };
}
