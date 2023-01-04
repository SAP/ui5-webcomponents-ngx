import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/Bar.js';

interface BarDirectiveElement
  extends Omit<HTMLElement, 'design' | 'endContent' | 'startContent'> {
  design: 'FloatingFooter' | 'Footer' | 'Header' | 'Subheader';

  endContent: Array<HTMLElement>;
  startContent: Array<HTMLElement>;
}

@Directive({
  selector: 'ui5-bar',
  exportAs: 'ui5Bar',
})
class BarDirective {
  @Input()
  set design(val: BarDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): BarDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  constructor(private elementRef: ElementRef<BarDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get endContent(): Array<HTMLElement> {
    return this.elementRef.nativeElement.endContent;
  }
  get startContent(): Array<HTMLElement> {
    return this.elementRef.nativeElement.startContent;
  }
}

export { BarDirective, BarDirectiveElement };
