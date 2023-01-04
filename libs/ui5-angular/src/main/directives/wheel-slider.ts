import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/WheelSlider.js';

interface WheelSliderDirectiveElement
  extends Omit<
    HTMLElement,
    'cyclic' | 'disabled' | 'expanded' | 'label' | 'value'
  > {
  cyclic: boolean;
  disabled: boolean;
  expanded: boolean;
  label: string;
  value: string;
}

@Directive({
  selector: 'ui5-wheelslider',
  exportAs: 'ui5Wheelslider',
})
class WheelSliderDirective {
  @Input()
  set cyclic(val: WheelSliderDirectiveElement['cyclic']) {
    this.elementRef.nativeElement.cyclic = val;
  }
  get cyclic(): WheelSliderDirectiveElement['cyclic'] {
    return this.elementRef.nativeElement.cyclic;
  }

  @Input()
  set disabled(val: WheelSliderDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): WheelSliderDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set expanded(val: WheelSliderDirectiveElement['expanded']) {
    this.elementRef.nativeElement.expanded = val;
  }
  get expanded(): WheelSliderDirectiveElement['expanded'] {
    return this.elementRef.nativeElement.expanded;
  }

  @Input()
  set label(val: WheelSliderDirectiveElement['label']) {
    this.elementRef.nativeElement.label = val;
  }
  get label(): WheelSliderDirectiveElement['label'] {
    return this.elementRef.nativeElement.label;
  }

  @Input()
  set value(val: WheelSliderDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): WheelSliderDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  constructor(private elementRef: ElementRef<WheelSliderDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { WheelSliderDirective, WheelSliderDirectiveElement };
