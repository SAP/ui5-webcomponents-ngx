import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/DateTimePicker.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '@ui5/webcomponents-ngx/generic-cva';

interface DateTimePickerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input'> {
  change: CustomEvent<{ value: string; valid: boolean }>;
  input: CustomEvent<{ value: string; valid: boolean }>;
}

interface DateTimePickerDirectiveElement
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

  addEventListener<K extends keyof DateTimePickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: DateTimePickerDirectiveElement,
      ev: DateTimePickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof DateTimePickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: DateTimePickerDirectiveElement,
      ev: DateTimePickerDirectiveEventsMap[K]
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
  selector: 'ui5-datetime-picker',
  exportAs: 'ui5DatetimePicker',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimePickerDirective),
      multi: true,
    },
  ],
})
class DateTimePickerDirective extends GenericControlValueAccessor {
  @Input()
  set effectiveDir(val: DateTimePickerDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): DateTimePickerDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: DateTimePickerDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): DateTimePickerDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set formatPattern(val: DateTimePickerDirectiveElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern(): DateTimePickerDirectiveElement['formatPattern'] {
    return this.elementRef.nativeElement.formatPattern;
  }

  @Input()
  set maxDate(val: DateTimePickerDirectiveElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate(): DateTimePickerDirectiveElement['maxDate'] {
    return this.elementRef.nativeElement.maxDate;
  }

  @Input()
  set minDate(val: DateTimePickerDirectiveElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate(): DateTimePickerDirectiveElement['minDate'] {
    return this.elementRef.nativeElement.minDate;
  }

  @Input()
  set primaryCalendarType(
    val: DateTimePickerDirectiveElement['primaryCalendarType']
  ) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType(): DateTimePickerDirectiveElement['primaryCalendarType'] {
    return this.elementRef.nativeElement.primaryCalendarType;
  }

  @Input()
  set secondaryCalendarType(
    val: DateTimePickerDirectiveElement['secondaryCalendarType']
  ) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType(): DateTimePickerDirectiveElement['secondaryCalendarType'] {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }

  @Input()
  set accessibleName(val: DateTimePickerDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): DateTimePickerDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(
    val: DateTimePickerDirectiveElement['accessibleNameRef']
  ) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): DateTimePickerDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set dateValue(val: DateTimePickerDirectiveElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue(): DateTimePickerDirectiveElement['dateValue'] {
    return this.elementRef.nativeElement.dateValue;
  }

  @Input()
  set disabled(val: DateTimePickerDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): DateTimePickerDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set hideWeekNumbers(val: DateTimePickerDirectiveElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = val;
  }
  get hideWeekNumbers(): DateTimePickerDirectiveElement['hideWeekNumbers'] {
    return this.elementRef.nativeElement.hideWeekNumbers;
  }

  @Input()
  set name(val: DateTimePickerDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): DateTimePickerDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set placeholder(val: DateTimePickerDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): DateTimePickerDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set readonly(val: DateTimePickerDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): DateTimePickerDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: DateTimePickerDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): DateTimePickerDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set value(val: DateTimePickerDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): DateTimePickerDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: DateTimePickerDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): DateTimePickerDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }
  @Output() change: Observable<DateTimePickerDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<DateTimePickerDirectiveEventsMap['input']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<DateTimePickerDirectiveElement>) {
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
  DateTimePickerDirective,
  DateTimePickerDirectiveEventsMap,
  DateTimePickerDirectiveElement,
};
