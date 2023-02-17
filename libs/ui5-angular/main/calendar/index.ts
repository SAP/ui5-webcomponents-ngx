import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Calendar.js';
import { Observable, NEVER } from 'rxjs';

interface CalendarDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'selectedDatesChange'> {
  selectedDatesChange: CustomEvent<{ values: Array<any>; dates: Array<any> }>;
}

interface CalendarDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'formatPattern'
    | 'maxDate'
    | 'minDate'
    | 'primaryCalendarType'
    | 'secondaryCalendarType'
    | 'hideWeekNumbers'
    | 'selectionMode'
    | 'selectedDatesChange'
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
  hideWeekNumbers: boolean;
  selectionMode: 'Multiple' | 'Range' | 'Single';

  addEventListener<K extends keyof CalendarDirectiveEventsMap>(
    type: K,
    listener: (
      this: CalendarDirectiveElement,
      ev: CalendarDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof CalendarDirectiveEventsMap>(
    type: K,
    listener: (
      this: CalendarDirectiveElement,
      ev: CalendarDirectiveEventsMap[K]
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
  selector: 'ui5-calendar',
  exportAs: 'ui5Calendar',
  standalone: true,
  providers: [],
})
class CalendarDirective {
  @Input()
  set effectiveDir(val: CalendarDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): CalendarDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: CalendarDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): CalendarDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set formatPattern(val: CalendarDirectiveElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern(): CalendarDirectiveElement['formatPattern'] {
    return this.elementRef.nativeElement.formatPattern;
  }

  @Input()
  set maxDate(val: CalendarDirectiveElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate(): CalendarDirectiveElement['maxDate'] {
    return this.elementRef.nativeElement.maxDate;
  }

  @Input()
  set minDate(val: CalendarDirectiveElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate(): CalendarDirectiveElement['minDate'] {
    return this.elementRef.nativeElement.minDate;
  }

  @Input()
  set primaryCalendarType(
    val: CalendarDirectiveElement['primaryCalendarType']
  ) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType(): CalendarDirectiveElement['primaryCalendarType'] {
    return this.elementRef.nativeElement.primaryCalendarType;
  }

  @Input()
  set secondaryCalendarType(
    val: CalendarDirectiveElement['secondaryCalendarType']
  ) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType(): CalendarDirectiveElement['secondaryCalendarType'] {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }

  @Input()
  set hideWeekNumbers(val: CalendarDirectiveElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = val;
  }
  get hideWeekNumbers(): CalendarDirectiveElement['hideWeekNumbers'] {
    return this.elementRef.nativeElement.hideWeekNumbers;
  }

  @Input()
  set selectionMode(val: CalendarDirectiveElement['selectionMode']) {
    this.elementRef.nativeElement.selectionMode = val;
  }
  get selectionMode(): CalendarDirectiveElement['selectionMode'] {
    return this.elementRef.nativeElement.selectionMode;
  }
  @Output() selectedDatesChange: Observable<
    CalendarDirectiveEventsMap['selectedDatesChange']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<CalendarDirectiveElement>) {}

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
  CalendarDirective,
  CalendarDirectiveEventsMap,
  CalendarDirectiveElement,
};
