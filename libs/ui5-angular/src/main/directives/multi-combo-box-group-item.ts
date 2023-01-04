import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/MultiComboBoxGroupItem.js';

interface MultiComboBoxGroupItemDirectiveElement
  extends Omit<HTMLElement, 'text'> {
  text: string;
}

@Directive({
  selector: 'ui5-mcb-group-item',
  exportAs: 'ui5McbGroupItem',
})
class MultiComboBoxGroupItemDirective {
  @Input()
  set text(val: MultiComboBoxGroupItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): MultiComboBoxGroupItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<MultiComboBoxGroupItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export {
  MultiComboBoxGroupItemDirective,
  MultiComboBoxGroupItemDirectiveElement,
};
