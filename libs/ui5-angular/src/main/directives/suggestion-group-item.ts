import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/SuggestionGroupItem.js';

interface SuggestionGroupItemDirectiveElement
  extends Omit<HTMLElement, 'text'> {
  text: string;
}

@Directive({
  selector: 'ui5-suggestion-group-item',
  exportAs: 'ui5SuggestionGroupItem',
})
class SuggestionGroupItemDirective {
  @Input()
  set text(val: SuggestionGroupItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): SuggestionGroupItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<SuggestionGroupItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { SuggestionGroupItemDirective, SuggestionGroupItemDirectiveElement };
