import {Component} from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'ui-angular-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  radioControl = new FormControl('Option 2');
  selectControl = new FormControl('desktop');

  updateSelectFormModel() {
    this.selectControl.setValue("phone");
  }
  updateRadioFormModel() {
    this.radioControl.setValue("Option 1");
  }
}
