import { NgModule } from '@angular/core';
import { Ui5FioriModule } from '@ui5/webcomponents-ngx/fiori';
import { Ui5MainModule } from '@ui5/webcomponents-ngx/main';

const declarations = [];
const imports = [Ui5FioriModule, Ui5MainModule];
const providers = [];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  providers: [...providers],
  exports: [...imports, ...declarations],
})
class Ui5WebcomponentsModule {}
export { Ui5WebcomponentsModule };
