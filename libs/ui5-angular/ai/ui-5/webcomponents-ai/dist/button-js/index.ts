import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input as InputDecorator,
  NgZone,
  booleanAttribute,
  inject,
} from '@angular/core';
import '@ui5/webcomponents-ai/dist/Button.js';
import Button from '@ui5/webcomponents-ai/dist/Button.js';
import { ProxyInputs, ProxyOutputs } from '@ui5/webcomponents-ngx/utils';
@ProxyInputs(['design', 'disabled', 'state', 'arrowButtonPressed'])
@ProxyOutputs(['click: ui5Click', 'arrow-button-click: ui5ArrowButtonClick'])
@Component({
  standalone: true,
  selector: 'ui5-ai-button',
  template: '<ng-content></ng-content>',
  inputs: ['design', 'disabled', 'state', 'arrowButtonPressed'],
  outputs: ['ui5Click', 'ui5ArrowButtonClick'],
  exportAs: 'ui5AiButton',
})
class ButtonComponent {
  /**
        Defines the component design.
        */
  design!:
    | 'Default'
    | 'Positive'
    | 'Negative'
    | 'Transparent'
    | 'Emphasized'
    | 'Attention'
    | undefined;
  /**
        Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.
        */
  @InputDecorator({ transform: booleanAttribute })
  disabled!: boolean;
  /**
        Defines the current state of the component.
        */
  state!: string | undefined;
  /**
        Defines the active state of the arrow button in split mode.
Set to true when the button is in split mode and a menu with additional options
is opened by the arrow button. Set back to false when the menu is closed.
        */
  @InputDecorator({ transform: booleanAttribute })
  arrowButtonPressed!: boolean;

  /**
     Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.
    */
  ui5Click!: EventEmitter<void>;
  /**
     Fired when the component is in split mode and after the arrow button
is activated either by clicking or tapping it or by using the [Arrow Up] / [Arrow Down],
[Alt] + [Arrow Up]/ [Arrow Down], or [F4] keyboard keys.
    */
  ui5ArrowButtonClick!: EventEmitter<void>;

  private elementRef: ElementRef<Button> = inject(ElementRef);
  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  get element(): Button {
    return this.elementRef.nativeElement;
  }

  constructor() {
    this.cdr.detach();
  }
}
export { ButtonComponent };
