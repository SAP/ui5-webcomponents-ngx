import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Select.js';
import { OptionDirective } from './option';
import { Observable, NEVER } from 'rxjs';

interface SelectDirectiveEventsMap extends Omit<HTMLElementEventMap, 'change'> {
  change: CustomEvent<{ selectedOption: HTMLElement }>;
}

interface SelectDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'disabled'
    | 'name'
    | 'required'
    | 'selectedOption'
    | 'valueState'
    | 'change'
    | 'valueStateMessage'
  > {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: boolean;
  name: string;
  required: boolean;
  selectedOption: OptionDirective['element'];
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  valueStateMessage: Array<HTMLElement>;

  addEventListener<K extends keyof SelectDirectiveEventsMap>(
    type: K,
    listener: (
      this: SelectDirectiveElement,
      ev: SelectDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SelectDirectiveEventsMap>(
    type: K,
    listener: (
      this: SelectDirectiveElement,
      ev: SelectDirectiveEventsMap[K]
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
  selector: 'ui5-select',
  exportAs: 'ui5Select',
})
class SelectDirective {
  @Input()
  set accessibleName(val: SelectDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): SelectDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: SelectDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): SelectDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set disabled(val: SelectDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): SelectDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set name(val: SelectDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): SelectDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set required(val: SelectDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): SelectDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set selectedOption(val: SelectDirectiveElement['selectedOption']) {
    this.elementRef.nativeElement.selectedOption = val;
  }
  get selectedOption(): SelectDirectiveElement['selectedOption'] {
    return this.elementRef.nativeElement.selectedOption;
  }

  @Input()
  set valueState(val: SelectDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): SelectDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }
  @Output() change: Observable<SelectDirectiveEventsMap['change']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<SelectDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): Array<HTMLElement> {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}

export { SelectDirective, SelectDirectiveEventsMap, SelectDirectiveElement };
