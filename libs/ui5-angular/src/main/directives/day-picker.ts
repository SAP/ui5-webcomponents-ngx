import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/DayPicker.js';
import { Observable, NEVER } from 'rxjs';

interface DayPickerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'navigate'> {
  change: CustomEvent<void>;
  navigate: CustomEvent<void>;
}

interface DayPickerDirectiveElement
  extends Omit<
    HTMLElement,
    | 'formatPattern'
    | 'maxDate'
    | 'minDate'
    | 'primaryCalendarType'
    | 'secondaryCalendarType'
    | 'hideWeekNumbers'
    | 'selectedDates'
    | 'selectionMode'
    | 'change'
    | 'navigate'
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
  selectedDates: Array<any>;
  selectionMode: 'Multiple' | 'Range' | 'Single';

  addEventListener<K extends keyof DayPickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: DayPickerDirectiveElement,
      ev: DayPickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof DayPickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: DayPickerDirectiveElement,
      ev: DayPickerDirectiveEventsMap[K]
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

  _hasNextPage(): any;

  _hasPreviousPage(): any;

  _showNextPage(): any;

  _showPreviousPage(): any;
}

@Directive({
  selector: 'ui5-daypicker',
  exportAs: 'ui5Daypicker',
})
class DayPickerDirective {
  @Input()
  set formatPattern(val: DayPickerDirectiveElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern(): DayPickerDirectiveElement['formatPattern'] {
    return this.elementRef.nativeElement.formatPattern;
  }

  @Input()
  set maxDate(val: DayPickerDirectiveElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate(): DayPickerDirectiveElement['maxDate'] {
    return this.elementRef.nativeElement.maxDate;
  }

  @Input()
  set minDate(val: DayPickerDirectiveElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate(): DayPickerDirectiveElement['minDate'] {
    return this.elementRef.nativeElement.minDate;
  }

  @Input()
  set primaryCalendarType(
    val: DayPickerDirectiveElement['primaryCalendarType']
  ) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType(): DayPickerDirectiveElement['primaryCalendarType'] {
    return this.elementRef.nativeElement.primaryCalendarType;
  }

  @Input()
  set secondaryCalendarType(
    val: DayPickerDirectiveElement['secondaryCalendarType']
  ) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType(): DayPickerDirectiveElement['secondaryCalendarType'] {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }

  @Input()
  set hideWeekNumbers(val: DayPickerDirectiveElement['hideWeekNumbers']) {
    this.elementRef.nativeElement.hideWeekNumbers = val;
  }
  get hideWeekNumbers(): DayPickerDirectiveElement['hideWeekNumbers'] {
    return this.elementRef.nativeElement.hideWeekNumbers;
  }

  @Input()
  set selectedDates(val: DayPickerDirectiveElement['selectedDates']) {
    this.elementRef.nativeElement.selectedDates = val;
  }
  get selectedDates(): DayPickerDirectiveElement['selectedDates'] {
    return this.elementRef.nativeElement.selectedDates;
  }

  @Input()
  set selectionMode(val: DayPickerDirectiveElement['selectionMode']) {
    this.elementRef.nativeElement.selectionMode = val;
  }
  get selectionMode(): DayPickerDirectiveElement['selectionMode'] {
    return this.elementRef.nativeElement.selectionMode;
  }
  @Output() change: Observable<DayPickerDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() navigate: Observable<DayPickerDirectiveEventsMap['navigate']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<DayPickerDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  _safelyModifyTimestampBy(amount: any, unit: any): any {
    return this.elementRef.nativeElement._safelyModifyTimestampBy(amount, unit);
  }

  _safelySetTimestamp(timestamp: any): any {
    return this.elementRef.nativeElement._safelySetTimestamp(timestamp);
  }

  _hasNextPage(): any {
    return this.elementRef.nativeElement._hasNextPage();
  }

  _hasPreviousPage(): any {
    return this.elementRef.nativeElement._hasPreviousPage();
  }

  _showNextPage(): any {
    return this.elementRef.nativeElement._showNextPage();
  }

  _showPreviousPage(): any {
    return this.elementRef.nativeElement._showPreviousPage();
  }
}

export {
  DayPickerDirective,
  DayPickerDirectiveEventsMap,
  DayPickerDirectiveElement,
};
