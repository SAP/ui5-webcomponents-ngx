import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/FilterItemOption.js';

interface FilterItemOptionDirectiveElement
  extends Omit<HTMLElement, 'selected' | 'text'> {
  selected: boolean;
  text: string;
}

@Directive({
  selector: 'ui5-filter-item-option',
  exportAs: 'ui5FilterItemOption',
})
class FilterItemOptionDirective {
  @Input()
  set selected(val: FilterItemOptionDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): FilterItemOptionDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set text(val: FilterItemOptionDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): FilterItemOptionDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<FilterItemOptionDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { FilterItemOptionDirective, FilterItemOptionDirectiveElement };
