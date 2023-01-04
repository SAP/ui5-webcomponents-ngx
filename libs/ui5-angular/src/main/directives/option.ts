import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Option.js';

interface OptionDirectiveElement
  extends Omit<
    HTMLElement,
    'additionalText' | 'disabled' | 'icon' | 'selected' | 'value'
  > {
  additionalText: string;
  disabled: boolean;
  icon: string;
  selected: boolean;
  value: string;
}

@Directive({
  selector: 'ui5-option',
  exportAs: 'ui5Option',
})
class OptionDirective {
  @Input()
  set additionalText(val: OptionDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): OptionDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set disabled(val: OptionDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): OptionDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: OptionDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): OptionDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set selected(val: OptionDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): OptionDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set value(val: OptionDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): OptionDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  constructor(private elementRef: ElementRef<OptionDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { OptionDirective, OptionDirectiveElement };
