import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/DatePicker.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '@ui5/webcomponents-ngx/generic-cva';

interface DatePickerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input'> {
  change: CustomEvent<{ value: string; valid: boolean }>;
  input: CustomEvent<{ value: string; valid: boolean }>;
}

interface DatePickerDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
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
    | 'change'
    | 'input'
    | 'valueStateMessage'
  > {
  effectiveDir: any;
  isUi5Element: any;
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

  valueStateMessage: HTMLElement;

  addEventListener<K extends keyof DatePickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: DatePickerDirectiveElement,
      ev: DatePickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof DatePickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: DatePickerDirectiveElement,
      ev: DatePickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  _render(): any;

  attachInvalidate(callback: any): any;

  define(): any;

  detachInvalidate(callback: any): any;

  fireEvent(name: any, data: any, cancelable: any, bubbles: any): boolean;

  focus(): any;

  getDomRef(): any;

  getFocusDomRef(): any;

  getFocusDomRefAsync(): any;

  getMetadata(): any;

  getSlottedNodes(): any;

  getStaticAreaItemDomRef(): any;

  getUniqueDependencies(): any;

  onAfterRendering(): any;

  onBeforeRendering(): any;

  onDefine(): any;

  onEnterDOM(): any;

  onExitDOM(): any;

  onInvalidation(changeInfo: any): any;

  closePicker(): any;

  formatValue(date: Record<string, any>): string;

  isInValidRange(value: string): boolean;

  isOpen(): boolean;

  isValid(value: string): boolean;

  openPicker(): any;
}

@Directive({
  selector: 'ui5-date-picker',
  exportAs: 'ui5DatePicker',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerDirective),
      multi: true,
    },
  ],
})
class DatePickerDirective extends GenericControlValueAccessor {
  @Input()
  set effectiveDir(val: DatePickerDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): DatePickerDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: DatePickerDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): DatePickerDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set formatPattern(val: DatePickerDirectiveElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern(): DatePickerDirectiveElement['formatPattern'] {
    return this.elementRef.nativeElement.formatPattern;
  }

  @Input()
  set maxDate(val: DatePickerDirectiveElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate(): DatePickerDirectiveElement['maxDate'] {
    return this.elementRef.nativeElement.maxDate;
  }

  @Input()
  set minDate(val: DatePickerDirectiveElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate(): DatePickerDirectiveElement['minDate'] {
    return this.elementRef.nativeElement.minDate;
  }

  @Input()
  set primaryCalendarType(
    val: DatePickerDirectiveElement['primaryCalendarType']
  ) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType(): DatePickerDirectiveElement['primaryCalendarType'] {
    return this.elementRef.nativeElement.primaryCalendarType;
  }

  @Input()
  set secondaryCalendarType(
    val: DatePickerDirectiveElement['secondaryCalendarType']
  ) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType(): DatePickerDirectiveElement['secondaryCalendarType'] {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }

  @Input()
  set accessibleName(val: DatePickerDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): DatePickerDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: DatePickerDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): DatePickerDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set dateValue(val: DatePickerDirectiveElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue(): DatePickerDirectiveElement['dateValue'] {
    return this.elementRef.nativeElement.dateValue;
  }

  @Input()
  set disabled(val: DatePickerDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): DatePickerDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set hideWeekNumbers(val: DatePickerDirectiveElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = val;
  }
  get hideWeekNumbers(): DatePickerDirectiveElement['hideWeekNumbers'] {
    return this.elementRef.nativeElement.hideWeekNumbers;
  }

  @Input()
  set name(val: DatePickerDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): DatePickerDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set placeholder(val: DatePickerDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): DatePickerDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set readonly(val: DatePickerDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): DatePickerDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: DatePickerDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): DatePickerDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set value(val: DatePickerDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): DatePickerDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: DatePickerDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): DatePickerDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }
  @Output() change: Observable<DatePickerDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<DatePickerDirectiveEventsMap['input']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<DatePickerDirectiveElement>) {
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

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): HTMLElement {
    return this.elementRef.nativeElement.valueStateMessage;
  }

  _render(): any {
    return this.elementRef.nativeElement._render();
  }

  attachInvalidate(callback: any): any {
    return this.elementRef.nativeElement.attachInvalidate(callback);
  }

  define(): any {
    return this.elementRef.nativeElement.define();
  }

  detachInvalidate(callback: any): any {
    return this.elementRef.nativeElement.detachInvalidate(callback);
  }

  fireEvent(name: any, data: any, cancelable: any, bubbles: any): boolean {
    return this.elementRef.nativeElement.fireEvent(
      name,
      data,
      cancelable,
      bubbles
    );
  }

  focus(): any {
    return this.elementRef.nativeElement.focus();
  }

  getDomRef(): any {
    return this.elementRef.nativeElement.getDomRef();
  }

  getFocusDomRef(): any {
    return this.elementRef.nativeElement.getFocusDomRef();
  }

  getFocusDomRefAsync(): any {
    return this.elementRef.nativeElement.getFocusDomRefAsync();
  }

  getMetadata(): any {
    return this.elementRef.nativeElement.getMetadata();
  }

  getSlottedNodes(): any {
    return this.elementRef.nativeElement.getSlottedNodes();
  }

  getStaticAreaItemDomRef(): any {
    return this.elementRef.nativeElement.getStaticAreaItemDomRef();
  }

  getUniqueDependencies(): any {
    return this.elementRef.nativeElement.getUniqueDependencies();
  }

  onAfterRendering(): any {
    return this.elementRef.nativeElement.onAfterRendering();
  }

  onBeforeRendering(): any {
    return this.elementRef.nativeElement.onBeforeRendering();
  }

  onDefine(): any {
    return this.elementRef.nativeElement.onDefine();
  }

  onEnterDOM(): any {
    return this.elementRef.nativeElement.onEnterDOM();
  }

  onExitDOM(): any {
    return this.elementRef.nativeElement.onExitDOM();
  }

  onInvalidation(changeInfo: any): any {
    return this.elementRef.nativeElement.onInvalidation(changeInfo);
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

  openPicker(): any {
    return this.elementRef.nativeElement.openPicker();
  }
}

export {
  DatePickerDirective,
  DatePickerDirectiveEventsMap,
  DatePickerDirectiveElement,
};
