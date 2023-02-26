import {Inject, NgModule} from '@angular/core';
import {setLanguage, setFetchDefaultLanguage} from '@ui5/webcomponents-base/dist/config/Language.js';
import {setAnimationMode} from '@ui5/webcomponents-base/dist/config/AnimationMode.js';
const availableLanguages = ['ar', 'bg', 'ca', 'cs', 'cy', 'da', 'de', 'el', 'en', 'en_GB', 'es', 'es_MX', 'et', 'fi', 'fr', 'fr_CA', 'hi', 'hr', 'hu', 'in', 'it', 'iw', 'ja', 'kk', 'ko', 'lt', 'lv', 'ms', 'nl', 'no', 'pl', 'pt_PT', 'pt', 'ro', 'ru', 'sh', 'sk', 'sl', 'sv', 'th', 'tr', 'uk', 'vi', 'zh_CN', 'zh_TW'] as const;

interface Ui5Config {
  language: typeof availableLanguages[number];
  animationMode: string;
  fetchDefaultLanguage: boolean;
}

const setters: Record<keyof Ui5Config, (val: any) => void> = {
  language: setLanguage,
  animationMode: setAnimationMode,
  fetchDefaultLanguage: setFetchDefaultLanguage
};

@NgModule({})
export class Ui5WebcomponentsConfigModule {
  constructor(@Inject('rootConfig') config: Ui5Config) {
    console.log({config});
  }

  static forRoot(config: Partial<Ui5Config>) {
    return {
      ngModule: Ui5WebcomponentsConfigModule,
      providers: [
        {
          provide: 'rootConfig',
          useFactory: () => {
            Object.entries(config).filter(([, val]) => val !== undefined).forEach(([key, val]) => {
              setters[key](val);
            });
            return config;
          }
        }
      ]
    };
  }
}
