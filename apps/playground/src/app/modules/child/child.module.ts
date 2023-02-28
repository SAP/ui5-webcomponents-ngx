import {NgModule} from "@angular/core";
import {ChildComponent} from "./child.component";
import {CommonModule} from "@angular/common";
import {Ui5MainModule} from "@ui5/webcomponents-ngx";
import {RouterModule} from "@angular/router";
import {Ui5I18nModule} from "@ui5/webcomponents-ngx/i18n";

@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    Ui5MainModule,
    Ui5I18nModule.forChild({
      name: 'i18n_child',
      translations: {
        en: fetch('assets/i18n/child/messages_en').then(r => r.text()),
        ru: fetch('assets/i18n/child/messages_ru').then(r => r.text())
      }
    }),
    RouterModule.forChild([
      {
        path: '',
        component: ChildComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ChildModule {}
