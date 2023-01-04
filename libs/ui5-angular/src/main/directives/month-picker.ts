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
    | 'formatPattern'
    | 'maxDate'
    | 'minDate'
    | 'primaryCalendarType'
    | 'secondaryCalendarType'
    | 'selectedDates'
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

  _safelyModifyTimestampBy(amount: any, unit: any): any;

  _safelySetTimestamp(timestamp: any): any;

  _hasNextPage(): any;

  _hasPreviousPage(): any;

  _showNextPage(): any;

  _showPreviousPage(): any;
}

@Directive({
  selector: 'ui5-monthpicker',
  exportAs: 'ui5Monthpicker',
})
class MonthPickerDirective {
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
  MonthPickerDirective,
  MonthPickerDirectiveEventsMap,
  MonthPickerDirectiveElement,
};
