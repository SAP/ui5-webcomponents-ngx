import {
  NgModule,
  ModuleWithProviders,
  Optional,
  isDevMode,
} from '@angular/core';
import { Ui5WebcomponentsThemingService } from './ui5-webcomponents-theming.service';

const declarations = [];
@NgModule({
  exports: [],
  declarations: [],
  providers: [Ui5WebcomponentsThemingService],
})
export class Ui5WebcomponentsThemingModule {
  constructor(public theming: Ui5WebcomponentsThemingService) {}
}
