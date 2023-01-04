import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/ComboBoxItem.js';

interface ComboBoxItemDirectiveElement
  extends Omit<HTMLElement, 'additionalText' | 'text'> {
  additionalText: string;
  text: string;
}

@Directive({
  selector: 'ui5-cb-item',
  exportAs: 'ui5CbItem',
})
class ComboBoxItemDirective {
  @Input()
  set additionalText(val: ComboBoxItemDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): ComboBoxItemDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set text(val: ComboBoxItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): ComboBoxItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(private elementRef: ElementRef<ComboBoxItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { ComboBoxItemDirective, ComboBoxItemDirectiveElement };
