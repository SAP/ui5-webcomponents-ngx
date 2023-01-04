import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/ComboBox.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';
import { IconDirective } from './icon';

interface ComboBoxDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input' | 'selectionChange'> {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
  selectionChange: CustomEvent<{ item: HTMLElement }>;
}

interface ComboBoxDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'disabled'
    | 'filter'
    | 'loading'
    | 'placeholder'
    | 'readonly'
    | 'required'
    | 'value'
    | 'valueState'
    | 'change'
    | 'input'
    | 'selectionChange'
    | 'icon'
    | 'valueStateMessage'
  > {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: boolean;
  filter: string;
  loading: boolean;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  icon: IconDirective['element'];
  valueStateMessage: Array<HTMLElement>;

  addEventListener<K extends keyof ComboBoxDirectiveEventsMap>(
    type: K,
    listener: (
      this: ComboBoxDirectiveElement,
      ev: ComboBoxDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ComboBoxDirectiveEventsMap>(
    type: K,
    listener: (
      this: ComboBoxDirectiveElement,
      ev: ComboBoxDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

@Directive({
  selector: 'ui5-combobox',
  exportAs: 'ui5Combobox',
})
class ComboBoxDirective {
  @Input()
  set accessibleName(val: ComboBoxDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): ComboBoxDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: ComboBoxDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): ComboBoxDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set disabled(val: ComboBoxDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): ComboBoxDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set filter(val: ComboBoxDirectiveElement['filter']) {
    this.elementRef.nativeElement.filter = val;
  }
  get filter(): ComboBoxDirectiveElement['filter'] {
    return this.elementRef.nativeElement.filter;
  }

  @Input()
  set loading(val: ComboBoxDirectiveElement['loading']) {
    this.elementRef.nativeElement.loading = val;
  }
  get loading(): ComboBoxDirectiveElement['loading'] {
    return this.elementRef.nativeElement.loading;
  }

  @Input()
  set placeholder(val: ComboBoxDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): ComboBoxDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set readonly(val: ComboBoxDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): ComboBoxDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: ComboBoxDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): ComboBoxDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set value(val: ComboBoxDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): ComboBoxDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: ComboBoxDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): ComboBoxDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }
  @Output() change: Observable<ComboBoxDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<ComboBoxDirectiveEventsMap['input']> =
    NEVER as any;
  @Output() selectionChange: Observable<
    ComboBoxDirectiveEventsMap['selectionChange']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<ComboBoxDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get icon(): IconDirective['element'] {
    return this.elementRef.nativeElement.icon;
  }
  get valueStateMessage(): Array<HTMLElement> {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}

@Directive({
  selector: 'ui5-combobox',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboBoxDirectiveCva),
      multi: true,
    },
  ],
})
class ComboBoxDirectiveCva extends GenericControlValueAccessor {
  constructor(private elementRef: ElementRef<ComboBoxDirective['element']>) {
    super({
      get value() {
        return elementRef.nativeElement.value;
      },
      set value(val) {
        elementRef.nativeElement.value = val;
      },
      valueUpdatedNotifier$: merge(
        fromEvent(elementRef.nativeElement, 'change'),
        fromEvent(elementRef.nativeElement, 'input')
      ),
      setDisabledState: (isDisabled: boolean): void => {
        elementRef.nativeElement.disabled = isDisabled;
      },
    });
  }
}

export {
  ComboBoxDirective,
  ComboBoxDirectiveCva,
  ComboBoxDirectiveEventsMap,
  ComboBoxDirectiveElement,
};
