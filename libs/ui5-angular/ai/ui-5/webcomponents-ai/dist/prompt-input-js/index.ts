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
import '@ui5/webcomponents-ai/dist/PromptInput.js';
import PromptInput from '@ui5/webcomponents-ai/dist/PromptInput.js';
import { ProxyInputs, ProxyOutputs } from '@ui5/webcomponents-ngx/utils';
@ProxyInputs([
  'value',
  'placeholder',
  'label',
  'showClearIcon',
  'showExceededText',
  'disabled',
  'readonly',
  'maxlength',
  'valueState',
  'showSuggestions',
])
@ProxyOutputs(['submit: ui5Submit', 'input: ui5Input', 'change: ui5Change'])
@Component({
  standalone: true,
  selector: 'ui5-ai-prompt-input',
  template: '<ng-content></ng-content>',
  inputs: [
    'value',
    'placeholder',
    'label',
    'showClearIcon',
    'showExceededText',
    'disabled',
    'readonly',
    'maxlength',
    'valueState',
    'showSuggestions',
  ],
  outputs: ['ui5Submit', 'ui5Input', 'ui5Change'],
  exportAs: 'ui5AiPromptInput',
})
class PromptInputComponent {
  /**
        Defines the value of the component.
        */
  value!: string;
  /**
        Defines a short hint intended to aid the user with data entry when the
component has no value.
        */
  placeholder!: string | undefined;
  /**
        Defines the label of the input field.
        */
  label!: string | undefined;
  /**
        Defines whether the clear icon of the input will be shown.
        */
  @InputDecorator({ transform: booleanAttribute })
  showClearIcon!: boolean;
  /**
        Determines whether the characters exceeding the maximum allowed character count are visible
in the component.

If set to `false`, the user is not allowed to enter more characters than what is set in the
`maxlength` property.
If set to `true` the characters exceeding the `maxlength` value are selected on
paste and the counter below the component displays their number.
        */
  @InputDecorator({ transform: booleanAttribute })
  showExceededText!: boolean;
  /**
        Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.
        */
  @InputDecorator({ transform: booleanAttribute })
  disabled!: boolean;
  /**
        Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.
        */
  @InputDecorator({ transform: booleanAttribute })
  readonly!: boolean;
  /**
        Sets the maximum number of characters available in the input field.
        */
  maxlength!: number | undefined;
  /**
        Defines the value state of the component.
        */
  valueState!: 'None' | 'Positive' | 'Critical' | 'Negative' | 'Information';
  /**
        Defines whether the component should show suggestions, if such are present.
        */
  @InputDecorator({ transform: booleanAttribute })
  showSuggestions!: boolean;

  /**
     Fired when the input operation has finished by pressing Enter
or AI button is clicked.
    */
  ui5Submit!: EventEmitter<void>;
  /**
     Fired when the value of the component changes at each keystroke,
and when a suggestion item has been selected.
    */
  ui5Input!: EventEmitter<void>;
  /**
     Fired when the input operation has finished by pressing Enter
or on focusout.
    */
  ui5Change!: EventEmitter<void>;

  private elementRef: ElementRef<PromptInput> = inject(ElementRef);
  private zone = inject(NgZone);
  private cdr = inject(ChangeDetectorRef);

  get element(): PromptInput {
    return this.elementRef.nativeElement;
  }

  constructor() {
    this.cdr.detach();
  }
}
export { PromptInputComponent };
