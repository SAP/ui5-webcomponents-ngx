import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'ui-angular-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ng-add-test';
  form = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
  });
}
