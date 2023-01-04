import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/MultiComboBox.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';
import { IconDirective } from './icon';

interface MultiComboBoxDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'change' | 'input' | 'openChange' | 'selectionChange'
  > {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
  openChange: CustomEvent<void>;
  selectionChange: CustomEvent<{ items: Array<any> }>;
}

interface MultiComboBoxDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'allowCustomValues'
    | 'disabled'
    | 'filter'
    | 'noTypeahead'
    | 'open'
    | 'placeholder'
    | 'readonly'
    | 'required'
    | 'value'
    | 'valueState'
    | 'change'
    | 'input'
    | 'openChange'
    | 'selectionChange'
    | 'icon'
    | 'valueStateMessage'
  > {
  accessibleName: string;
  accessibleNameRef: string;
  allowCustomValues: boolean;
  disabled: boolean;
  filter: string;
  noTypeahead: boolean;
  open: boolean;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  icon: IconDirective['element'];
  valueStateMessage: Array<HTMLElement>;

  addEventListener<K extends keyof MultiComboBoxDirectiveEventsMap>(
    type: K,
    listener: (
      this: MultiComboBoxDirectiveElement,
      ev: MultiComboBoxDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof MultiComboBoxDirectiveEventsMap>(
    type: K,
    listener: (
      this: MultiComboBoxDirectiveElement,
      ev: MultiComboBoxDirectiveEventsMap[K]
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
  selector: 'ui5-multi-combobox',
  exportAs: 'ui5MultiCombobox',
})
class MultiComboBoxDirective {
  @Input()
  set accessibleName(val: MultiComboBoxDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): MultiComboBoxDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(
    val: MultiComboBoxDirectiveElement['accessibleNameRef']
  ) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): MultiComboBoxDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set allowCustomValues(
    val: MultiComboBoxDirectiveElement['allowCustomValues']
  ) {
    this.elementRef.nativeElement.allowCustomValues = val;
  }
  get allowCustomValues(): MultiComboBoxDirectiveElement['allowCustomValues'] {
    return this.elementRef.nativeElement.allowCustomValues;
  }

  @Input()
  set disabled(val: MultiComboBoxDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): MultiComboBoxDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set filter(val: MultiComboBoxDirectiveElement['filter']) {
    this.elementRef.nativeElement.filter = val;
  }
  get filter(): MultiComboBoxDirectiveElement['filter'] {
    return this.elementRef.nativeElement.filter;
  }

  @Input()
  set noTypeahead(val: MultiComboBoxDirectiveElement['noTypeahead']) {
    this.elementRef.nativeElement.noTypeahead = val;
  }
  get noTypeahead(): MultiComboBoxDirectiveElement['noTypeahead'] {
    return this.elementRef.nativeElement.noTypeahead;
  }

  @Input()
  set open(val: MultiComboBoxDirectiveElement['open']) {
    this.elementRef.nativeElement.open = val;
  }
  get open(): MultiComboBoxDirectiveElement['open'] {
    return this.elementRef.nativeElement.open;
  }

  @Input()
  set placeholder(val: MultiComboBoxDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): MultiComboBoxDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set readonly(val: MultiComboBoxDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): MultiComboBoxDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: MultiComboBoxDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): MultiComboBoxDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set value(val: MultiComboBoxDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): MultiComboBoxDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: MultiComboBoxDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): MultiComboBoxDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }
  @Output() change: Observable<MultiComboBoxDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<MultiComboBoxDirectiveEventsMap['input']> =
    NEVER as any;
  @Output() openChange: Observable<
    MultiComboBoxDirectiveEventsMap['openChange']
  > = NEVER as any;
  @Output() selectionChange: Observable<
    MultiComboBoxDirectiveEventsMap['selectionChange']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<MultiComboBoxDirectiveElement>) {}

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
  selector: 'ui5-multi-combobox',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiComboBoxDirectiveCva),
      multi: true,
    },
  ],
})
class MultiComboBoxDirectiveCva extends GenericControlValueAccessor {
  constructor(
    private elementRef: ElementRef<MultiComboBoxDirective['element']>
  ) {
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
  MultiComboBoxDirective,
  MultiComboBoxDirectiveCva,
  MultiComboBoxDirectiveEventsMap,
  MultiComboBoxDirectiveElement,
};
