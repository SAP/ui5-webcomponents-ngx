import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/SliderBase.js';
import { Observable, NEVER } from 'rxjs';

interface SliderBaseDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input'> {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
}

interface SliderBaseDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'disabled'
    | 'labelInterval'
    | 'max'
    | 'min'
    | 'showTickmarks'
    | 'showTooltip'
    | 'step'
    | 'change'
    | 'input'
  > {
  accessibleName: string;
  disabled: boolean;
  labelInterval: any;
  max: any;
  min: any;
  showTickmarks: boolean;
  showTooltip: boolean;
  step: any;

  addEventListener<K extends keyof SliderBaseDirectiveEventsMap>(
    type: K,
    listener: (
      this: SliderBaseDirectiveElement,
      ev: SliderBaseDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SliderBaseDirectiveEventsMap>(
    type: K,
    listener: (
      this: SliderBaseDirectiveElement,
      ev: SliderBaseDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  clipValue(): any;

  computedValueFromPageX(): any;

  focusInnerElement(): any;

  getPageXValueFromEvent(): any;

  getSteppedValue(): any;

  getStoredPropertyState(): any;

  getValueFromInteraction(): any;

  handleDownBase(): any;

  handleUpBase(): any;

  isCurrentStateOutdated(): any;

  isPropertyUpdated(): any;

  storePropertyState(): any;

  syncUIAndState(): any;

  updateValue(): any;
}

@Directive({
  selector: 'ui5-slider',
  exportAs: 'ui5Slider',
})
class SliderBaseDirective {
  @Input()
  set accessibleName(val: SliderBaseDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): SliderBaseDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set disabled(val: SliderBaseDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): SliderBaseDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set labelInterval(val: SliderBaseDirectiveElement['labelInterval']) {
    this.elementRef.nativeElement.labelInterval = val;
  }
  get labelInterval(): SliderBaseDirectiveElement['labelInterval'] {
    return this.elementRef.nativeElement.labelInterval;
  }

  @Input()
  set max(val: SliderBaseDirectiveElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max(): SliderBaseDirectiveElement['max'] {
    return this.elementRef.nativeElement.max;
  }

  @Input()
  set min(val: SliderBaseDirectiveElement['min']) {
    this.elementRef.nativeElement.min = val;
  }
  get min(): SliderBaseDirectiveElement['min'] {
    return this.elementRef.nativeElement.min;
  }

  @Input()
  set showTickmarks(val: SliderBaseDirectiveElement['showTickmarks']) {
    this.elementRef.nativeElement.showTickmarks = val;
  }
  get showTickmarks(): SliderBaseDirectiveElement['showTickmarks'] {
    return this.elementRef.nativeElement.showTickmarks;
  }

  @Input()
  set showTooltip(val: SliderBaseDirectiveElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = val;
  }
  get showTooltip(): SliderBaseDirectiveElement['showTooltip'] {
    return this.elementRef.nativeElement.showTooltip;
  }

  @Input()
  set step(val: SliderBaseDirectiveElement['step']) {
    this.elementRef.nativeElement.step = val;
  }
  get step(): SliderBaseDirectiveElement['step'] {
    return this.elementRef.nativeElement.step;
  }
  @Output() change: Observable<SliderBaseDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<SliderBaseDirectiveEventsMap['input']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<SliderBaseDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  clipValue(): any {
    return this.elementRef.nativeElement.clipValue();
  }

  computedValueFromPageX(): any {
    return this.elementRef.nativeElement.computedValueFromPageX();
  }

  focusInnerElement(): any {
    return this.elementRef.nativeElement.focusInnerElement();
  }

  getPageXValueFromEvent(): any {
    return this.elementRef.nativeElement.getPageXValueFromEvent();
  }

  getSteppedValue(): any {
    return this.elementRef.nativeElement.getSteppedValue();
  }

  getStoredPropertyState(): any {
    return this.elementRef.nativeElement.getStoredPropertyState();
  }

  getValueFromInteraction(): any {
    return this.elementRef.nativeElement.getValueFromInteraction();
  }

  handleDownBase(): any {
    return this.elementRef.nativeElement.handleDownBase();
  }

  handleUpBase(): any {
    return this.elementRef.nativeElement.handleUpBase();
  }

  isCurrentStateOutdated(): any {
    return this.elementRef.nativeElement.isCurrentStateOutdated();
  }

  isPropertyUpdated(): any {
    return this.elementRef.nativeElement.isPropertyUpdated();
  }

  storePropertyState(): any {
    return this.elementRef.nativeElement.storePropertyState();
  }

  syncUIAndState(): any {
    return this.elementRef.nativeElement.syncUIAndState();
  }

  updateValue(): any {
    return this.elementRef.nativeElement.updateValue();
  }
}

export {
  SliderBaseDirective,
  SliderBaseDirectiveEventsMap,
  SliderBaseDirectiveElement,
};
