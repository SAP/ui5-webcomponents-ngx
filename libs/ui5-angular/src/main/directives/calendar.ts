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
    | 'formatPattern'
    | 'maxDate'
    | 'minDate'
    | 'primaryCalendarType'
    | 'secondaryCalendarType'
    | 'hideWeekNumbers'
    | 'selectionMode'
    | 'selectedDatesChange'
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

  _safelyModifyTimestampBy(amount: any, unit: any): any;

  _safelySetTimestamp(timestamp: any): any;
}

@Directive({
  selector: 'ui5-calendar',
  exportAs: 'ui5Calendar',
})
class CalendarDirective {
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
