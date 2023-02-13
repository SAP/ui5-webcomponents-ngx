import {Component, ViewChild} from '@angular/core';
import {ButtonDirective, MultiComboBoxDirective} from "@ui5/webcomponents-ngx";
import {FormControl, FormGroup} from "@angular/forms";
import {Ui5ThemingService} from '@ui5/theming-ngx';
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
  currentTheme = 'sap_horizon';
  themes: Observable<string[]> = this.theming.getAvailableThemes();

  constructor(
    private theming: Ui5ThemingService
  ) {
    this.form = new FormGroup({
      name: new FormControl(''),
    });
    this.theming.getAvailableThemes().pipe(first()).subscribe((themes) => this.changeTheme(themes));
  }

  onButtonClick(item: ButtonDirective) {
    console.log({item})
  }

  onFormSubmit() {
    console.log(this.form.value);
  }

  changeTheme(themes: string[], explicitNext?: string): void {
    const next = explicitNext || (() => {
      const index = themes.indexOf(this.currentTheme);
      if (index === themes.length - 1) {
        return themes[0];
      }
      return themes[index + 1];
    })();
    console.log({themes, next})
    this.changeTheme$(next).subscribe();
  }

  changeTheme$(next: string): Observable<boolean> {
    return this.theming.setTheme(next).pipe(first(), tap(r => {
      if (r) {
        this.currentTheme = next;
      }
    }));
  }
}
