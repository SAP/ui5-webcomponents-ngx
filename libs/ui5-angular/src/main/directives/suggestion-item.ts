import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/SuggestionItem.js';

interface SuggestionItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'additionalText'
    | 'additionalTextState'
    | 'description'
    | 'icon'
    | 'iconEnd'
    | 'image'
    | 'text'
    | 'type'
  > {
  additionalText: string;
  additionalTextState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  description: string;
  icon: string;
  iconEnd: boolean;
  image: string;
  text: string;
  type: 'Active' | 'Detail' | 'Inactive';
}

@Directive({
  selector: 'ui5-suggestion-item',
  exportAs: 'ui5SuggestionItem',
})
class SuggestionItemDirective {
  @Input()
  set additionalText(val: SuggestionItemDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): SuggestionItemDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set additionalTextState(
    val: SuggestionItemDirectiveElement['additionalTextState']
  ) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState(): SuggestionItemDirectiveElement['additionalTextState'] {
    return this.elementRef.nativeElement.additionalTextState;
  }

  @Input()
  set description(val: SuggestionItemDirectiveElement['description']) {
    this.elementRef.nativeElement.description = val;
  }
  get description(): SuggestionItemDirectiveElement['description'] {
    return this.elementRef.nativeElement.description;
  }

  @Input()
  set icon(val: SuggestionItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): SuggestionItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set iconEnd(val: SuggestionItemDirectiveElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd(): SuggestionItemDirectiveElement['iconEnd'] {
    return this.elementRef.nativeElement.iconEnd;
  }

  @Input()
  set image(val: SuggestionItemDirectiveElement['image']) {
    this.elementRef.nativeElement.image = val;
  }
  get image(): SuggestionItemDirectiveElement['image'] {
    return this.elementRef.nativeElement.image;
  }

  @Input()
  set text(val: SuggestionItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): SuggestionItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  @Input()
  set type(val: SuggestionItemDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): SuggestionItemDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  constructor(private elementRef: ElementRef<SuggestionItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { SuggestionItemDirective, SuggestionItemDirectiveElement };
