import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Label.js';

interface LabelDirectiveElement
  extends Omit<HTMLElement, 'for' | 'required' | 'showColon' | 'wrappingType'> {
  for: string;
  required: boolean;
  showColon: boolean;
  wrappingType: 'None' | 'Normal';
}

@Directive({
  selector: 'ui5-label',
  exportAs: 'ui5Label',
})
class LabelDirective {
  @Input()
  set for(val: LabelDirectiveElement['for']) {
    this.elementRef.nativeElement.for = val;
  }
  get for(): LabelDirectiveElement['for'] {
    return this.elementRef.nativeElement.for;
  }

  @Input()
  set required(val: LabelDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): LabelDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set showColon(val: LabelDirectiveElement['showColon']) {
    this.elementRef.nativeElement.showColon = val;
  }
  get showColon(): LabelDirectiveElement['showColon'] {
    return this.elementRef.nativeElement.showColon;
  }

  @Input()
  set wrappingType(val: LabelDirectiveElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType(): LabelDirectiveElement['wrappingType'] {
    return this.elementRef.nativeElement.wrappingType;
  }

  constructor(private elementRef: ElementRef<LabelDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { LabelDirective, LabelDirectiveElement };
