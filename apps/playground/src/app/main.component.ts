import {Component, ViewChild} from "@angular/core";
import {ButtonComponent} from "@ui5/webcomponents-ngx/main/button";

@Component({
    templateUrl: './main.component.html',
    standalone: false
})
export class MainComponent {
  @ViewChild(ButtonComponent) button!: ButtonComponent;
}
