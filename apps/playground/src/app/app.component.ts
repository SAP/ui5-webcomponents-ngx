import {Component} from '@angular/core';
import {I18nService} from "@ui5/webcomponents-ngx/i18n";

@Component({
  selector: 'ui-angular-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  value!: string;

}
