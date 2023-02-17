import {NgModule} from "@angular/core";
import {Ui5WebcomponentsThemingService} from "./theming.service";

@NgModule({
  exports: [],
  declarations: [],
  providers: [Ui5WebcomponentsThemingService]
})
export class Ui5WebcomponentsThemingModule {
  constructor(public theming: Ui5WebcomponentsThemingService) {
  }
}
