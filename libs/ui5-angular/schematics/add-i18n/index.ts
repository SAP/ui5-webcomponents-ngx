import { Rule } from "@angular-devkit/schematics";
import { addRootProvider } from "@ui5/webcomponents-ngx-schematics";

interface I18nOptions {
  useI18n: boolean,
  project: string,
  defaultLanguage?: string,
}

export function addI18n(options: I18nOptions): Rule {
  return async () => {
    if (!options.useI18n) {
      return;
    }
    return addRootProvider(options.project, ({code, external}) => {
      return code`${external('i18nRootProviders', '@ui5/webcomponents-ngx/i18n')}(${rootProviderConfig(options)})`;
    });
  };
}

function rootProviderConfig(options: I18nOptions) {
  return `{
      language: ${JSON.stringify(options.defaultLanguage)},
      fetchDefaultLanguage: true,
      bundle: {
        name: 'app-root-i18n-bundle',
        translations: {
            // You can add your translations here. For more information please refer to the documentation.
            [${JSON.stringify(options.defaultLanguage)}]: {
                'app-root-title': 'Hello World!'
            }
        }
      }
    }`
}
