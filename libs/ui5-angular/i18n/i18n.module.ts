import {Inject, ModuleWithProviders, NgModule} from "@angular/core";
import {setLanguage, setFetchDefaultLanguage} from "@ui5/webcomponents-base/dist/config/Language.js";
import {I18nPipe} from "./i18n.pipe";
import {I18nService} from "./i18n.service";

const availableLanguages = ['ar', 'bg', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'en_GB', 'es', 'es_MX', 'et', 'fi', 'fr', 'fr_CA', 'hi', 'hr', 'hu', 'in', 'it', 'iw', 'ja', 'kk', 'ko', 'lt', 'lv', 'ms', 'nl', 'no', 'pl', 'pt_PT', 'pt', 'ro', 'ru', 'sh', 'sk', 'sl', 'sv', 'th', 'tr', 'uk', 'vi', 'zh_CN', 'zh_TW'] as const;

interface I18nConfig {
  language?: typeof availableLanguages[number] | string;
  fetchDefaultLanguage?: boolean;
  bundle?: {
    name?: string;
    translations?: Record<string, string | Promise<string>>
  };
}

let childIds = 0;

@NgModule({
  declarations: [I18nPipe],
  exports: [I18nPipe]
})
export class Ui5I18nModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(@Inject('rootI18nConfig') config: I18nConfig) {
  }

  static forRoot(config: I18nConfig = {}): ModuleWithProviders<Ui5I18nModule> {
    return {
      ngModule: Ui5I18nModule,
      providers: [
        {
          provide: 'rootI18nConfig',
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
          provide: 'i18nNamespace',
          useValue: config.bundle?.name || 'root_i18n'
        },
        {
          provide: 'i18nTranslations',
          useValue: config.bundle?.translations || {}
        },
        I18nService
      ]
    }
  }

  static forChild(config: I18nConfig['bundle'] = {}): ModuleWithProviders<Ui5I18nModule> {
    return {
      ngModule: Ui5I18nModule,
      providers: [
        {
          provide: 'i18nNamespace',
          useValue: config?.name || ++childIds + '_i18n'
        },
        {
          provide: 'i18nTranslations',
          useValue: config?.translations || {}
        },
        I18nService
      ]
    }
  }
}
