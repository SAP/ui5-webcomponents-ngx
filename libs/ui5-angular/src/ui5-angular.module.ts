import { NgModule } from '@angular/core';
import { Ui5FioriModule } from './fiori/ui5-fiori.module';
import { Ui5MainModule } from './main/ui5-main.module';
import { Ui5WebcomponentsThemingModule } from './main/ui5-webcomponents-theming.module';

const declarations = [];
const imports = [Ui5FioriModule, Ui5MainModule, Ui5WebcomponentsThemingModule];
@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...declarations, ...imports],
})
class Ui5AngularModule {}
export { Ui5AngularModule };
