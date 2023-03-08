import {AfterViewChecked, ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ButtonComponent} from "@ui5/webcomponents-ngx/main/button";

@Component({
  selector: 'ui-angular-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewChecked {
  title = 'ng-add-test';
  form = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
  });

  @ViewChild(ButtonComponent)
  button!: ButtonComponent;

  ngAfterViewChecked() {
    console.log('check');
  }

  onFormSubmit() {
    console.log(this.form.value);
  }

  onChange($event: any) {
    console.log($event);
  }
}
