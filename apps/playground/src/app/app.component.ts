import {AfterViewChecked, Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'ui-angular-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewChecked {
  title = 'ng-add-test';
  form = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
  });

  ngAfterViewChecked() {
    console.log('check');
  }

  onFormSubmit() {
    console.log(this.form.value);
  }
}
