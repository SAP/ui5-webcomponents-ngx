import {Inject, ModuleWithProviders, NgModule} from "@angular/core";
import {setLanguage, setFetchDefaultLanguage} from "@ui5/webcomponents-base/dist/config/Language.js";
import {I18nPipe} from "./i18n.pipe";
import {I18nService} from "./i18n.service";
import {I18nConfig} from "./i18n.types";
import {I18N_ROOT_CONFIG, I18N_NAMESPACE, I18N_TRANSLATIONS} from "./i18n.tokens";


let childIds = 0;

@NgModule({
  declarations: [I18nPipe],
  exports: [I18nPipe]
})
export class Ui5I18nModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(@Inject(I18N_ROOT_CONFIG) private config: I18nConfig) {
  }

  static forRoot(config: I18nConfig = {}): ModuleWithProviders<Ui5I18nModule> {
    return {
      ngModule: Ui5I18nModule,
      providers: [
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
        {
          provide: I18N_TRANSLATIONS,
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
          provide: I18N_NAMESPACE,
          useValue: config?.name || ++childIds + '_i18n'
        },
        {
          provide: I18N_TRANSLATIONS,
          useValue: config?.translations || {}
        },
        I18nService
      ]
    }
  }
}
