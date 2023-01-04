import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/ComboBoxGroupItem.js';

interface ComboBoxGroupItemDirectiveElement extends Omit<HTMLElement, 'text'> {
  text: string;
}

@Directive({
  selector: 'ui5-cb-group-item',
  exportAs: 'ui5CbGroupItem',
})
class ComboBoxGroupItemDirective {
  @Input()
  set text(val: ComboBoxGroupItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): ComboBoxGroupItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<ComboBoxGroupItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { ComboBoxGroupItemDirective, ComboBoxGroupItemDirectiveElement };
