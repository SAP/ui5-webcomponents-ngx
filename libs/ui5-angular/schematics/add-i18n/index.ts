import { Rule } from "@angular-devkit/schematics";
import { addRootProvider, askConfirmation, askInput } from "@ui5/webcomponents-ngx-schematics";
import { AddI18nSchemaOptions } from "./schema";

const defaultLanguageInputResult = async (): Promise<string> => {
  return await askInput('What is the default language of your application? (en)', 'en');
}

export function addI18n(options: AddI18nSchemaOptions): Rule {
  return async () => {
    const useI18n = await askConfirmation('Would you like to add i18n capabilities into your application?', false);
    if (!useI18n) {
      return;
    }

    const defaultLanguage = await defaultLanguageInputResult();

    return addRootProvider(options.project, ({ code, external }) => {
      return code`${external('i18nRootProviders', '@ui5/webcomponents-ngx/i18n')}(${rootProviderConfig(defaultLanguage)})`;
    });
  };
}

function rootProviderConfig(defaultLanguage: string) {
  return `{
      language: ${JSON.stringify(defaultLanguage)},
      fetchDefaultLanguage: true,
      bundle: {
        name: 'app-root-i18n-bundle',
        translations: {
            // You can add your translations here. For more information please refer to the documentation.
            [${JSON.stringify(defaultLanguage)}]: {
                'app-root-title': 'Hello World!'
            }
        }
      }
    }`
}
