import {
  NgModule,
  ModuleWithProviders,
  Optional,
  isDevMode,
  InjectionToken,
} from '@angular/core';
import { Ui5ThemingService } from './ui5-theming.service';
import { ThemingConfig, UI5_THEMING_CONFIGURATION } from './ui5-theming.models';

@NgModule({
  exports: [],
  declarations: [],
})
export class Ui5ThemingModule {
  constructor(@Optional() public theming: Ui5ThemingService) {
    if (!this.theming && isDevMode()) {
      console.error(
        'Could not find Ui5ThemingService. Make sure you called .forRoot() for Ui5ThemingModule'
      );
    }
  }
  static forRoot(config: ThemingConfig): ModuleWithProviders<Ui5ThemingModule> {
    return {
      ngModule: Ui5ThemingModule,
      providers: [
        Ui5ThemingService,
        {
          provide: UI5_THEMING_CONFIGURATION,
          useValue: config,
        },
      ],
    };
  }
}
