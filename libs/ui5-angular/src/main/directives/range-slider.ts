import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/RangeSlider.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';

interface RangeSliderDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input'> {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
}

interface RangeSliderDirectiveElement
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
    | 'endValue'
    | 'startValue'
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
  endValue: any;
  startValue: any;

  addEventListener<K extends keyof RangeSliderDirectiveEventsMap>(
    type: K,
    listener: (
      this: RangeSliderDirectiveElement,
      ev: RangeSliderDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof RangeSliderDirectiveEventsMap>(
    type: K,
    listener: (
      this: RangeSliderDirectiveElement,
      ev: RangeSliderDirectiveEventsMap[K]
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
  selector: 'ui5-range-slider',
  exportAs: 'ui5RangeSlider',
})
class RangeSliderDirective {
  @Input()
  set accessibleName(val: RangeSliderDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): RangeSliderDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set disabled(val: RangeSliderDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): RangeSliderDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set labelInterval(val: RangeSliderDirectiveElement['labelInterval']) {
    this.elementRef.nativeElement.labelInterval = val;
  }
  get labelInterval(): RangeSliderDirectiveElement['labelInterval'] {
    return this.elementRef.nativeElement.labelInterval;
  }

  @Input()
  set max(val: RangeSliderDirectiveElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max(): RangeSliderDirectiveElement['max'] {
    return this.elementRef.nativeElement.max;
  }

  @Input()
  set min(val: RangeSliderDirectiveElement['min']) {
    this.elementRef.nativeElement.min = val;
  }
  get min(): RangeSliderDirectiveElement['min'] {
    return this.elementRef.nativeElement.min;
  }

  @Input()
  set showTickmarks(val: RangeSliderDirectiveElement['showTickmarks']) {
    this.elementRef.nativeElement.showTickmarks = val;
  }
  get showTickmarks(): RangeSliderDirectiveElement['showTickmarks'] {
    return this.elementRef.nativeElement.showTickmarks;
  }

  @Input()
  set showTooltip(val: RangeSliderDirectiveElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = val;
  }
  get showTooltip(): RangeSliderDirectiveElement['showTooltip'] {
    return this.elementRef.nativeElement.showTooltip;
  }

  @Input()
  set step(val: RangeSliderDirectiveElement['step']) {
    this.elementRef.nativeElement.step = val;
  }
  get step(): RangeSliderDirectiveElement['step'] {
    return this.elementRef.nativeElement.step;
  }

  @Input()
  set endValue(val: RangeSliderDirectiveElement['endValue']) {
    this.elementRef.nativeElement.endValue = val;
  }
  get endValue(): RangeSliderDirectiveElement['endValue'] {
    return this.elementRef.nativeElement.endValue;
  }

  @Input()
  set startValue(val: RangeSliderDirectiveElement['startValue']) {
    this.elementRef.nativeElement.startValue = val;
  }
  get startValue(): RangeSliderDirectiveElement['startValue'] {
    return this.elementRef.nativeElement.startValue;
  }
  @Output() change: Observable<RangeSliderDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<RangeSliderDirectiveEventsMap['input']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<RangeSliderDirectiveElement>) {}

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

@Directive({
  selector: 'ui5-range-slider',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeSliderDirectiveCva),
      multi: true,
    },
  ],
})
class RangeSliderDirectiveCva extends GenericControlValueAccessor {
  constructor(private elementRef: ElementRef<RangeSliderDirective['element']>) {
    super({
      get value() {
        return {
          endValue: elementRef.nativeElement.endValue,
          startValue: elementRef.nativeElement.startValue,
        };
      },
      set value(val) {
        elementRef.nativeElement.endValue = val?.endValue;
        elementRef.nativeElement.startValue = val?.startValue;
      },
      valueUpdatedNotifier$: merge(
        fromEvent(elementRef.nativeElement, 'change'),
        fromEvent(elementRef.nativeElement, 'input')
      ),
      setDisabledState: (isDisabled: boolean): void => {
        elementRef.nativeElement.disabled = isDisabled;
      },
    });
  }
}

export {
  RangeSliderDirective,
  RangeSliderDirectiveCva,
  RangeSliderDirectiveEventsMap,
  RangeSliderDirectiveElement,
};
