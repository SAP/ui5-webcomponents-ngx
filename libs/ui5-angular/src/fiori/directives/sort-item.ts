import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/SortItem.js';

interface SortItemDirectiveElement
  extends Omit<HTMLElement, 'selected' | 'text'> {
  selected: boolean;
  text: string;
}

@Directive({
  selector: 'ui5-sort-item',
  exportAs: 'ui5SortItem',
})
class SortItemDirective {
  @Input()
  set selected(val: SortItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): SortItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set text(val: SortItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): SortItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(private elementRef: ElementRef<SortItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { SortItemDirective, SortItemDirectiveElement };
