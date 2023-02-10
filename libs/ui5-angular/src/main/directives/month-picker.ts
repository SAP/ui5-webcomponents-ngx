import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/MonthPicker.js';
import { Observable, NEVER } from 'rxjs';

interface MonthPickerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'navigate'> {
  change: CustomEvent<void>;
  navigate: CustomEvent<void>;
}

interface MonthPickerDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'formatPattern'
    | 'maxDate'
    | 'minDate'
    | 'primaryCalendarType'
    | 'secondaryCalendarType'
    | 'selectedDates'
    | 'change'
    | 'navigate'
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
  selectedDates: Array<any>;

  addEventListener<K extends keyof MonthPickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: MonthPickerDirectiveElement,
      ev: MonthPickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof MonthPickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: MonthPickerDirectiveElement,
      ev: MonthPickerDirectiveEventsMap[K]
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

  _safelyModifyTimestampBy(amount: any, unit: any): any;

  _safelySetTimestamp(timestamp: any): any;
}

@Directive({
  selector: 'ui5-monthpicker',
  exportAs: 'ui5Monthpicker',
})
class MonthPickerDirective {
  @Input()
  set effectiveDir(val: MonthPickerDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): MonthPickerDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: MonthPickerDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): MonthPickerDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set formatPattern(val: MonthPickerDirectiveElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern(): MonthPickerDirectiveElement['formatPattern'] {
    return this.elementRef.nativeElement.formatPattern;
  }

  @Input()
  set maxDate(val: MonthPickerDirectiveElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate(): MonthPickerDirectiveElement['maxDate'] {
    return this.elementRef.nativeElement.maxDate;
  }

  @Input()
  set minDate(val: MonthPickerDirectiveElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate(): MonthPickerDirectiveElement['minDate'] {
    return this.elementRef.nativeElement.minDate;
  }

  @Input()
  set primaryCalendarType(
    val: MonthPickerDirectiveElement['primaryCalendarType']
  ) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType(): MonthPickerDirectiveElement['primaryCalendarType'] {
    return this.elementRef.nativeElement.primaryCalendarType;
  }

  @Input()
  set secondaryCalendarType(
    val: MonthPickerDirectiveElement['secondaryCalendarType']
  ) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType(): MonthPickerDirectiveElement['secondaryCalendarType'] {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }

  @Input()
  set selectedDates(val: MonthPickerDirectiveElement['selectedDates']) {
    this.elementRef.nativeElement.selectedDates = val;
  }
  get selectedDates(): MonthPickerDirectiveElement['selectedDates'] {
    return this.elementRef.nativeElement.selectedDates;
  }
  @Output() change: Observable<MonthPickerDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() navigate: Observable<MonthPickerDirectiveEventsMap['navigate']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<MonthPickerDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
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

  _safelyModifyTimestampBy(amount: any, unit: any): any {
    return this.elementRef.nativeElement._safelyModifyTimestampBy(amount, unit);
  }

  _safelySetTimestamp(timestamp: any): any {
    return this.elementRef.nativeElement._safelySetTimestamp(timestamp);
  }
}

export {
  MonthPickerDirective,
  MonthPickerDirectiveEventsMap,
  MonthPickerDirectiveElement,
};
