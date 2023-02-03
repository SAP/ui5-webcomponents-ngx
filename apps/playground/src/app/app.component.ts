import {Component, ViewChild} from '@angular/core';
import {ButtonDirective, MultiComboBoxDirective} from "@ui5/webcomponents-ngx";
import {FormControl, FormGroup} from "@angular/forms";
import { AvailableThemes, Ui5ThemingService } from '@ui5/theming-ngx';

@Component({
  selector: 'ui-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  @ViewChild(MultiComboBoxDirective)
  multiComboBox!: MultiComboBoxDirective;
  form: FormGroup;

  constructor(
    private theming: Ui5ThemingService
  ) {
    this.form = new FormGroup({
      name: new FormControl(''),
    });
  }

  onButtonClick(item: ButtonDirective) {
    console.log({item})
  }

  onFormSubmit() {
    console.log(this.form.value);
  }

  changeTheme(theme: AvailableThemes): void {
    this.theming.setTheme(theme);
  }
}
