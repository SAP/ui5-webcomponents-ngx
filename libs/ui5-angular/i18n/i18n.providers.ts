import { setFetchDefaultLanguage, setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";
import { I18nConfig } from "./i18n.types";
import { I18N_NAMESPACE, I18N_ROOT_CONFIG } from "./i18n.tokens";
import { resolveTranslationsProvider } from "./i18n.utils";
import { I18nService } from "./i18n.service";

let childIds = 0;
export function i18nRootProviders(config: I18nConfig) {
  return [
    {
      provide: I18N_ROOT_CONFIG,
      useFactory: () => {
        if (config.language) {
          setLanguage(config.language);
        }
        if (config.fetchDefaultLanguage) {
          setFetchDefaultLanguage(config.fetchDefaultLanguage);
        }
        return config;
      }
    },
    {
      provide: I18N_NAMESPACE,
      useValue: config.bundle?.name || 'root_i18n'
    },
    resolveTranslationsProvider(config.bundle?.translations),
    I18nService
  ]
}

export function i18nChildProviders(config: I18nConfig['bundle']) {
  return [
    {
      provide: I18N_NAMESPACE,
      useValue: config?.name || ++childIds + '_i18n'
    },
    resolveTranslationsProvider(config?.translations),
    I18nService
  ]
}
