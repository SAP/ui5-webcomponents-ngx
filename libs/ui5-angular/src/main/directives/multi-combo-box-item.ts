import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/MultiComboBoxItem.js';

interface MultiComboBoxItemDirectiveElement
  extends Omit<HTMLElement, 'additionalText' | 'text' | 'selected'> {
  additionalText: string;
  text: string;
  selected: boolean;
}

@Directive({
  selector: 'ui5-mcb-item',
  exportAs: 'ui5McbItem',
})
class MultiComboBoxItemDirective {
  @Input()
  set additionalText(val: MultiComboBoxItemDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): MultiComboBoxItemDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set text(val: MultiComboBoxItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): MultiComboBoxItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  @Input()
  set selected(val: MultiComboBoxItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): MultiComboBoxItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  constructor(
    private elementRef: ElementRef<MultiComboBoxItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { MultiComboBoxItemDirective, MultiComboBoxItemDirectiveElement };
