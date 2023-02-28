import {Inject, NgModule} from '@angular/core';
import {setAnimationMode} from '@ui5/webcomponents-base/dist/config/AnimationMode.js';

interface Ui5Config {
  animationMode: string;
}

const setters: Record<keyof Ui5Config, (val: any) => void> = {
  animationMode: setAnimationMode,
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
