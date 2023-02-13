import {Component, ViewChild} from '@angular/core';
import {ButtonDirective, MultiComboBoxDirective} from "@ui5/webcomponents-ngx";
import {FormControl, FormGroup} from "@angular/forms";
import { AvailableThemes, Ui5ThemingService } from '@ui5/theming-ngx';
import {first, Observable, tap} from "rxjs";

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
  currentTheme: AvailableThemes = 'sap_horizon';
  themes: AvailableThemes[] = [
    'sap_fiori_3',
    'sap_fiori_3_dark',
    'sap_fiori_3_hcb',
    'sap_fiori_3_hcw',
    'sap_horizon',
    'sap_horizon_dark',
    'sap_horizon_hcb',
    'sap_horizon_hcw',
  ];
  constructor(
    private theming: Ui5ThemingService
  ) {
    this.form = new FormGroup({
      name: new FormControl(''),
    });
    this.changeTheme();
  }

  onButtonClick(item: ButtonDirective) {
    console.log({item})
  }

  onFormSubmit() {
    console.log(this.form.value);
  }

  changeTheme(): void {
    this.changeTheme$().subscribe();
  }

  changeTheme$(): Observable<boolean> {
    const next = (() => {
      const index = this.themes.indexOf(this.currentTheme);
      if (index === this.themes.length - 1) {
        return this.themes[0];
      }
      return this.themes[index + 1];
    })();
    return this.theming.setTheme(next).pipe(first(), tap(r => {
      if (r) {
        this.currentTheme = next;
      }
    }));
  }
}
