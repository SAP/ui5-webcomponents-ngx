import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/BusyIndicator.js';

interface BusyIndicatorDirectiveElement
  extends Omit<HTMLElement, 'active' | 'delay' | 'size' | 'text'> {
  active: boolean;
  delay: any;
  size: 'Large' | 'Medium' | 'Small';
  text: string;
}

@Directive({
  selector: 'ui5-busy-indicator',
  exportAs: 'ui5BusyIndicator',
})
class BusyIndicatorDirective {
  @Input()
  set active(val: BusyIndicatorDirectiveElement['active']) {
    this.elementRef.nativeElement.active = val;
  }
  get active(): BusyIndicatorDirectiveElement['active'] {
    return this.elementRef.nativeElement.active;
  }

  @Input()
  set delay(val: BusyIndicatorDirectiveElement['delay']) {
    this.elementRef.nativeElement.delay = val;
  }
  get delay(): BusyIndicatorDirectiveElement['delay'] {
    return this.elementRef.nativeElement.delay;
  }

  @Input()
  set size(val: BusyIndicatorDirectiveElement['size']) {
    this.elementRef.nativeElement.size = val;
  }
  get size(): BusyIndicatorDirectiveElement['size'] {
    return this.elementRef.nativeElement.size;
  }

  @Input()
  set text(val: BusyIndicatorDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): BusyIndicatorDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(private elementRef: ElementRef<BusyIndicatorDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { BusyIndicatorDirective, BusyIndicatorDirectiveElement };
