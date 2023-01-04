import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/Timeline.js';

interface TimelineDirectiveElement
  extends Omit<HTMLElement, 'accessibleName' | 'layout'> {
  accessibleName: string;
  layout: 'Horizontal' | 'Vertical';
}

@Directive({
  selector: 'ui5-timeline',
  exportAs: 'ui5Timeline',
})
class TimelineDirective {
  @Input()
  set accessibleName(val: TimelineDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): TimelineDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set layout(val: TimelineDirectiveElement['layout']) {
    this.elementRef.nativeElement.layout = val;
  }
  get layout(): TimelineDirectiveElement['layout'] {
    return this.elementRef.nativeElement.layout;
  }

  constructor(private elementRef: ElementRef<TimelineDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { TimelineDirective, TimelineDirectiveElement };
