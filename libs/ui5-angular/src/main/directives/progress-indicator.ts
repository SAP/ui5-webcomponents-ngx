import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/ProgressIndicator.js';

interface ProgressIndicatorDirectiveElement
  extends Omit<
    HTMLElement,
    'disabled' | 'displayValue' | 'hideValue' | 'value' | 'valueState'
  > {
  disabled: boolean;
  displayValue: string;
  hideValue: boolean;
  value: any;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
}

@Directive({
  selector: 'ui5-progress-indicator',
  exportAs: 'ui5ProgressIndicator',
})
class ProgressIndicatorDirective {
  @Input()
  set disabled(val: ProgressIndicatorDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): ProgressIndicatorDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set displayValue(val: ProgressIndicatorDirectiveElement['displayValue']) {
    this.elementRef.nativeElement.displayValue = val;
  }
  get displayValue(): ProgressIndicatorDirectiveElement['displayValue'] {
    return this.elementRef.nativeElement.displayValue;
  }

  @Input()
  set hideValue(val: ProgressIndicatorDirectiveElement['hideValue']) {
    this.elementRef.nativeElement.hideValue = val;
  }
  get hideValue(): ProgressIndicatorDirectiveElement['hideValue'] {
    return this.elementRef.nativeElement.hideValue;
  }

  @Input()
  set value(val: ProgressIndicatorDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): ProgressIndicatorDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: ProgressIndicatorDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): ProgressIndicatorDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }

  constructor(
    private elementRef: ElementRef<ProgressIndicatorDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { ProgressIndicatorDirective, ProgressIndicatorDirectiveElement };
