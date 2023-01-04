import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/CalendarDate.js';

interface CalendarDateDirectiveElement extends Omit<HTMLElement, 'value'> {
  value: string;
}

@Directive({
  selector: 'ui5-date',
  exportAs: 'ui5Date',
})
class CalendarDateDirective {
  @Input()
  set value(val: CalendarDateDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): CalendarDateDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  constructor(private elementRef: ElementRef<CalendarDateDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { CalendarDateDirective, CalendarDateDirectiveElement };
