import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'ui-angular-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  radioControl = new FormControl('Option 2');
  selectControl = new FormControl('desktop');
  inpControl = new FormControl('test');
  dpControl = new FormControl('17 мая 2024 г.');
  cbControl = new FormControl(false);

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  updateSelectFormModel() {
    this.selectControl.setValue("phone");
  }
  updateRadioFormModel() {
    this.radioControl.setValue("Option 1");
  }

  updateDPFormModel() {
    this.dpControl.setValue("29 мая 2024 г.");
  }

  updateCbFormModel() {
    this.cbControl.setValue(true);
  }
  updateInpFormModel() {
    this.inpControl.setValue("form updated");
  }

  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
