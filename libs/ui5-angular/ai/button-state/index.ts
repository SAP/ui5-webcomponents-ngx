import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input as InputDecorator,
  NgZone,
  booleanAttribute,
  inject,
} from '@angular/core';
import '@ui5/webcomponents-ai/dist/ButtonState.js';
import ButtonState from '@ui5/webcomponents-ai/dist/ButtonState.js';
import { ProxyInputs } from '@ui5/webcomponents-ngx/utils';
@ProxyInputs(['name', 'text', 'icon', 'endIcon', 'showArrowButton'])
@Component({
  standalone: true,
  selector: 'ui5-ai-button-state',
  template: '<ng-content></ng-content>',
  inputs: ['name', 'text', 'icon', 'endIcon', 'showArrowButton'],
  exportAs: 'ui5AiButtonState',
})
class ButtonStateComponent {
  /**
        Defines the name of the button state.
        */
  name!: string | undefined;
  /**
        Defines the text of the button in this state.
        */
  text!: string | undefined;
  /**
        Defines the icon to be displayed as graphical element within the component before the text.
The SAP-icons font provides numerous options.

**Example:**

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
        */
  icon!: string | undefined;
  /**
        Defines the icon to be displayed as graphical element within the component after the text.
The SAP-icons font provides numerous options.

**Example:**

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).
        */
  endIcon!: string | undefined;
  /**
        Defines if the component is in split button mode.
        */
  @InputDecorator({ transform: booleanAttribute })
  showArrowButton!: boolean;

  private elementRef: ElementRef<ButtonState> = inject(ElementRef);
  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  get element(): ButtonState {
    return this.elementRef.nativeElement;
  }

  constructor() {
    this.cdr.detach();
  }
}
export { ButtonStateComponent };
