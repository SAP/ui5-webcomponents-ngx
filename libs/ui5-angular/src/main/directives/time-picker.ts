import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/TimePicker.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';

interface TimePickerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input'> {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
}

interface TimePickerDirectiveElement
  extends Omit<
    HTMLElement,
    | 'disabled'
    | 'formatPattern'
    | 'placeholder'
    | 'readonly'
    | 'value'
    | 'valueState'
    | 'dateValue'
    | 'change'
    | 'input'
    | 'valueStateMessage'
  > {
  disabled: boolean;
  formatPattern: string;
  placeholder: string;
  readonly: boolean;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  dateValue: any;

  valueStateMessage: HTMLElement;

  addEventListener<K extends keyof TimePickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: TimePickerDirectiveElement,
      ev: TimePickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TimePickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: TimePickerDirectiveElement,
      ev: TimePickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  closePicker(): any;

  formatValue(date: Record<string, any>): string;

  isOpen(): boolean;

  isValid(value: string): boolean;

  openPicker(): any;
}

@Directive({
  selector: 'ui5-time-picker',
  exportAs: 'ui5TimePicker',
})
class TimePickerDirective {
  @Input()
  set disabled(val: TimePickerDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): TimePickerDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set formatPattern(val: TimePickerDirectiveElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern(): TimePickerDirectiveElement['formatPattern'] {
    return this.elementRef.nativeElement.formatPattern;
  }

  @Input()
  set placeholder(val: TimePickerDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): TimePickerDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set readonly(val: TimePickerDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): TimePickerDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set value(val: TimePickerDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): TimePickerDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: TimePickerDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): TimePickerDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }

  @Input()
  set dateValue(val: TimePickerDirectiveElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue(): TimePickerDirectiveElement['dateValue'] {
    return this.elementRef.nativeElement.dateValue;
  }
  @Output() change: Observable<TimePickerDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<TimePickerDirectiveEventsMap['input']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<TimePickerDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): HTMLElement {
    return this.elementRef.nativeElement.valueStateMessage;
  }

  closePicker(): any {
    return this.elementRef.nativeElement.closePicker();
  }

  formatValue(date: Record<string, any>): string {
    return this.elementRef.nativeElement.formatValue(date);
  }

  isOpen(): boolean {
    return this.elementRef.nativeElement.isOpen();
  }

  isValid(value: string): boolean {
    return this.elementRef.nativeElement.isValid(value);
  }

  openPicker(): any {
    return this.elementRef.nativeElement.openPicker();
  }
}

@Directive({
  selector: 'ui5-time-picker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimePickerDirectiveCva),
      multi: true,
    },
  ],
})
class TimePickerDirectiveCva extends GenericControlValueAccessor {
  constructor(private elementRef: ElementRef<TimePickerDirective['element']>) {
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
  TimePickerDirective,
  TimePickerDirectiveCva,
  TimePickerDirectiveEventsMap,
  TimePickerDirectiveElement,
};
