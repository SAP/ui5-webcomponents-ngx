import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/FilterItem.js';
import { FilterItemOptionDirective } from './filter-item-option';

interface FilterItemDirectiveElement
  extends Omit<HTMLElement, 'text' | 'values'> {
  text: string;

  values: Array<FilterItemOptionDirective['element']>;
}

@Directive({
  selector: 'ui5-filter-item',
  exportAs: 'ui5FilterItem',
})
class FilterItemDirective {
  @Input()
  set text(val: FilterItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): FilterItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(private elementRef: ElementRef<FilterItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get values(): Array<FilterItemOptionDirective['element']> {
    return this.elementRef.nativeElement.values;
  }
}

export { FilterItemDirective, FilterItemDirectiveElement };
