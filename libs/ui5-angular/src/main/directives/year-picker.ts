import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/YearPicker.js';
import { Observable, NEVER } from 'rxjs';

interface YearPickerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'navigate'> {
  change: CustomEvent<void>;
  navigate: CustomEvent<void>;
}

interface YearPickerDirectiveElement
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

  addEventListener<K extends keyof YearPickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: YearPickerDirectiveElement,
      ev: YearPickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof YearPickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: YearPickerDirectiveElement,
      ev: YearPickerDirectiveEventsMap[K]
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
  selector: 'ui5-yearpicker',
  exportAs: 'ui5Yearpicker',
})
class YearPickerDirective {
  @Input()
  set formatPattern(val: YearPickerDirectiveElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern(): YearPickerDirectiveElement['formatPattern'] {
    return this.elementRef.nativeElement.formatPattern;
  }

  @Input()
  set maxDate(val: YearPickerDirectiveElement['maxDate']) {
    this.elementRef.nativeElement.maxDate = val;
  }
  get maxDate(): YearPickerDirectiveElement['maxDate'] {
    return this.elementRef.nativeElement.maxDate;
  }

  @Input()
  set minDate(val: YearPickerDirectiveElement['minDate']) {
    this.elementRef.nativeElement.minDate = val;
  }
  get minDate(): YearPickerDirectiveElement['minDate'] {
    return this.elementRef.nativeElement.minDate;
  }

  @Input()
  set primaryCalendarType(
    val: YearPickerDirectiveElement['primaryCalendarType']
  ) {
    this.elementRef.nativeElement.primaryCalendarType = val;
  }
  get primaryCalendarType(): YearPickerDirectiveElement['primaryCalendarType'] {
    return this.elementRef.nativeElement.primaryCalendarType;
  }

  @Input()
  set secondaryCalendarType(
    val: YearPickerDirectiveElement['secondaryCalendarType']
  ) {
    this.elementRef.nativeElement.secondaryCalendarType = val;
  }
  get secondaryCalendarType(): YearPickerDirectiveElement['secondaryCalendarType'] {
    return this.elementRef.nativeElement.secondaryCalendarType;
  }

  @Input()
  set selectedDates(val: YearPickerDirectiveElement['selectedDates']) {
    this.elementRef.nativeElement.selectedDates = val;
  }
  get selectedDates(): YearPickerDirectiveElement['selectedDates'] {
    return this.elementRef.nativeElement.selectedDates;
  }
  @Output() change: Observable<YearPickerDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() navigate: Observable<YearPickerDirectiveEventsMap['navigate']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<YearPickerDirectiveElement>) {}

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
  YearPickerDirective,
  YearPickerDirectiveEventsMap,
  YearPickerDirectiveElement,
};
