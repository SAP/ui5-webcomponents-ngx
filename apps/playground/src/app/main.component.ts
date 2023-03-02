import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {ButtonDirective} from "@ui5/webcomponents-ngx/main/button";
import ButtonDesign from "@ui5/webcomponents/dist/types/ButtonDesign";

@Component({
  templateUrl: './main.component.html',
})
export class MainComponent {
  @ViewChild('button') button!: ButtonDirective;
}
