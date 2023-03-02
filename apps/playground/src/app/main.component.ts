import {Component, ViewChild} from "@angular/core";
import {ButtonComponent} from "@ui5/webcomponents-ngx/main/button";

@Component({
  templateUrl: './main.component.html',
})
export class MainComponent {
  @ViewChild(ButtonComponent) button!: ButtonComponent;
}
