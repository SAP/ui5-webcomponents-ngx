import {ModuleWithProviders, NgModule} from "@angular/core";
import {Ui5WebcomponentsThemingService} from "./theming.service";

@NgModule({
  exports: [],
  declarations: []
})
export class Ui5WebcomponentsThemingModule {
  constructor(readonly theming: Ui5WebcomponentsThemingService) {
  }

  static forRoot(): ModuleWithProviders<Ui5WebcomponentsThemingModule> {
    return {
      ngModule: Ui5WebcomponentsThemingModule,
      providers: [Ui5WebcomponentsThemingService]
    }
  }
}
