import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/DateRangePicker.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';

interface DateRangePickerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input'> {
  change: CustomEvent<{ value: string; valid: boolean }>;
  input: CustomEvent<{ value: string; valid: boolean }>;
}

interface DateRangePickerDirectiveElement
  extends Omit<
    HTMLElement,
    | 'formatPattern'
    | 'maxDate'
    | 'minDate'
    | 'primaryCalendarType'
    | 'secondaryCalendarType'
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'dateValue'
    | 'disabled'
    | 'hideWeekNumbers'
    | 'name'
    | 'placeholder'
    | 'readonly'
    | 'required'
    | 'value'
    | 'valueState'
    | 'dateValueUtc'
    | 'delimiter'
    | 'endDateValue'
    | 'startDateValue'
    | 'change'
    | 'input'
    | 'valueStateMessage'
  > {
  formatPattern: string;
  maxDate: string;
  minDate: string;
  primaryCalendarType:
    | 'Buddhist'
    | 'Gregorian'
    | 'Islamic'
    | 'Japanese'
    | 'Persian';
  secondaryCalendarType:
    | 'Buddhist'
    | 'Gregorian'
    | 'Islamic'
    | 'Japanese'
    | 'Persian';
  accessibleName: string;
  accessibleNameRef: string;
  dateValue: any;
  disabled: boolean;
  hideWeekNumbers: boolean;
  name: string;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  dateValueUtc: any;
  delimiter: string;
  endDateValue: any;
  startDateValue: any;

  valueStateMessage: HTMLElement;

  addEventListener<K extends keyof DateRangePickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: DateRangePickerDirectiveElement,
      ev: DateRangePickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof DateRangePickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: DateRangePickerDirectiveElement,
      ev: DateRangePickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  _checkValueValidity(): any;

  _modifyDateValue(amount: any, unit: any): any;

  _onInputChange(): any;

  _onInputInput(): any;

  _onInputSubmit(): any;

  closePicker(): any;

  formatValue(date: Record<string, any>): string;

  isInValidRange(value: string): boolean;

  isOpen(): boolean;

  isValid(value: string): boolean;

  normalizeValue(): any;

  onResponsivePopoverAfterClose(): any;

  onSelectedDatesChange(event: any): any;

  openPicker(): any;
}

@Directive({
  selector: 'ui5-daterange-picker',
  exportAs: 'ui5DaterangePicker',
})
class DateRangePickerDirective {
  @Input()
  set formatPattern(val: DateRangePickerDirectiveElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern(): DateRangePickerDirectiveElement['formatPattern'] {
    return this.elementRef.nativeElement.formatPattern;
  }

  @Input()
  set maxDate(val: DateRangePickerDirectiveElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate(): DateRangePickerDirectiveElement['maxDate'] {
    return this.elementRef.nativeElement.maxDate;
  }

  @Input()
  set minDate(val: DateRangePickerDirectiveElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate(): DateRangePickerDirectiveElement['minDate'] {
    return this.elementRef.nativeElement.minDate;
  }

  @Input()
  set primaryCalendarType(
    val: DateRangePickerDirectiveElement['primaryCalendarType']
  ) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType(): DateRangePickerDirectiveElement['primaryCalendarType'] {
    return this.elementRef.nativeElement.primaryCalendarType;
  }

  @Input()
  set secondaryCalendarType(
    val: DateRangePickerDirectiveElement['secondaryCalendarType']
  ) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType(): DateRangePickerDirectiveElement['secondaryCalendarType'] {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }

  @Input()
  set accessibleName(val: DateRangePickerDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): DateRangePickerDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(
    val: DateRangePickerDirectiveElement['accessibleNameRef']
  ) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): DateRangePickerDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set dateValue(val: DateRangePickerDirectiveElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue(): DateRangePickerDirectiveElement['dateValue'] {
    return this.elementRef.nativeElement.dateValue;
  }

  @Input()
  set disabled(val: DateRangePickerDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): DateRangePickerDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set hideWeekNumbers(val: DateRangePickerDirectiveElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = val;
  }
  get hideWeekNumbers(): DateRangePickerDirectiveElement['hideWeekNumbers'] {
    return this.elementRef.nativeElement.hideWeekNumbers;
  }

  @Input()
  set name(val: DateRangePickerDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): DateRangePickerDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set placeholder(val: DateRangePickerDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): DateRangePickerDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set readonly(val: DateRangePickerDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): DateRangePickerDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: DateRangePickerDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): DateRangePickerDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set value(val: DateRangePickerDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): DateRangePickerDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: DateRangePickerDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): DateRangePickerDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }

  @Input()
  set dateValueUtc(val: DateRangePickerDirectiveElement['dateValueUtc']) {
    this.elementRef.nativeElement.dateValueUtc = val;
  }
  get dateValueUtc(): DateRangePickerDirectiveElement['dateValueUtc'] {
    return this.elementRef.nativeElement.dateValueUtc;
  }

  @Input()
  set delimiter(val: DateRangePickerDirectiveElement['delimiter']) {
    this.elementRef.nativeElement.delimiter = val;
  }
  get delimiter(): DateRangePickerDirectiveElement['delimiter'] {
    return this.elementRef.nativeElement.delimiter;
  }

  @Input()
  set endDateValue(val: DateRangePickerDirectiveElement['endDateValue']) {
    this.elementRef.nativeElement.endDateValue = val;
  }
  get endDateValue(): DateRangePickerDirectiveElement['endDateValue'] {
    return this.elementRef.nativeElement.endDateValue;
  }

  @Input()
  set startDateValue(val: DateRangePickerDirectiveElement['startDateValue']) {
    this.elementRef.nativeElement.startDateValue = val;
  }
  get startDateValue(): DateRangePickerDirectiveElement['startDateValue'] {
    return this.elementRef.nativeElement.startDateValue;
  }
  @Output() change: Observable<DateRangePickerDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<DateRangePickerDirectiveEventsMap['input']> =
    NEVER as any;
  constructor(
    private elementRef: ElementRef<DateRangePickerDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): HTMLElement {
    return this.elementRef.nativeElement.valueStateMessage;
  }

  _checkValueValidity(): any {
    return this.elementRef.nativeElement._checkValueValidity();
  }

  _modifyDateValue(amount: any, unit: any): any {
    return this.elementRef.nativeElement._modifyDateValue(amount, unit);
  }

  _onInputChange(): any {
    return this.elementRef.nativeElement._onInputChange();
  }

  _onInputInput(): any {
    return this.elementRef.nativeElement._onInputInput();
  }

  _onInputSubmit(): any {
    return this.elementRef.nativeElement._onInputSubmit();
  }

  closePicker(): any {
    return this.elementRef.nativeElement.closePicker();
  }

  formatValue(date: Record<string, any>): string {
    return this.elementRef.nativeElement.formatValue(date);
  }

  isInValidRange(value: string): boolean {
    return this.elementRef.nativeElement.isInValidRange(value);
  }

  isOpen(): boolean {
    return this.elementRef.nativeElement.isOpen();
  }

  isValid(value: string): boolean {
    return this.elementRef.nativeElement.isValid(value);
  }

  normalizeValue(): any {
    return this.elementRef.nativeElement.normalizeValue();
  }

  onResponsivePopoverAfterClose(): any {
    return this.elementRef.nativeElement.onResponsivePopoverAfterClose();
  }

  onSelectedDatesChange(event: any): any {
    return this.elementRef.nativeElement.onSelectedDatesChange(event);
  }

  openPicker(): any {
    return this.elementRef.nativeElement.openPicker();
  }
}

@Directive({
  selector: 'ui5-daterange-picker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerDirectiveCva),
      multi: true,
    },
  ],
})
class DateRangePickerDirectiveCva extends GenericControlValueAccessor {
  constructor(
    private elementRef: ElementRef<DateRangePickerDirective['element']>
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
  DateRangePickerDirective,
  DateRangePickerDirectiveCva,
  DateRangePickerDirectiveEventsMap,
  DateRangePickerDirectiveElement,
};
