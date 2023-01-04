import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Card.js';

interface CardDirectiveElement
  extends Omit<HTMLElement, 'accessibleName' | 'accessibleNameRef' | 'header'> {
  accessibleName: string;
  accessibleNameRef: string;

  header: Array<HTMLElement>;
}

@Directive({
  selector: 'ui5-card',
  exportAs: 'ui5Card',
})
class CardDirective {
  @Input()
  set accessibleName(val: CardDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): CardDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: CardDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): CardDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  constructor(private elementRef: ElementRef<CardDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get header(): Array<HTMLElement> {
    return this.elementRef.nativeElement.header;
  }
}

export { CardDirective, CardDirectiveElement };
