import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Title.js';

interface TitleDirectiveElement
  extends Omit<HTMLElement, 'level' | 'wrappingType'> {
  level: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  wrappingType: 'None' | 'Normal';
}

@Directive({
  selector: 'ui5-title',
  exportAs: 'ui5Title',
})
class TitleDirective {
  @Input()
  set level(val: TitleDirectiveElement['level']) {
    this.elementRef.nativeElement.level = val;
  }
  get level(): TitleDirectiveElement['level'] {
    return this.elementRef.nativeElement.level;
  }

  @Input()
  set wrappingType(val: TitleDirectiveElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType(): TitleDirectiveElement['wrappingType'] {
    return this.elementRef.nativeElement.wrappingType;
  }

  constructor(private elementRef: ElementRef<TitleDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { TitleDirective, TitleDirectiveElement };
