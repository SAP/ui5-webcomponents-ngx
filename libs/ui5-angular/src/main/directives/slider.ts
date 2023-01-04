import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/Slider.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';

interface SliderDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input'> {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
}

interface SliderDirectiveElement
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
    | 'value'
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
  value: any;

  addEventListener<K extends keyof SliderDirectiveEventsMap>(
    type: K,
    listener: (
      this: SliderDirectiveElement,
      ev: SliderDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SliderDirectiveEventsMap>(
    type: K,
    listener: (
      this: SliderDirectiveElement,
      ev: SliderDirectiveEventsMap[K]
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
class SliderDirective {
  @Input()
  set accessibleName(val: SliderDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): SliderDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set disabled(val: SliderDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): SliderDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set labelInterval(val: SliderDirectiveElement['labelInterval']) {
    this.elementRef.nativeElement.labelInterval = val;
  }
  get labelInterval(): SliderDirectiveElement['labelInterval'] {
    return this.elementRef.nativeElement.labelInterval;
  }

  @Input()
  set max(val: SliderDirectiveElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max(): SliderDirectiveElement['max'] {
    return this.elementRef.nativeElement.max;
  }

  @Input()
  set min(val: SliderDirectiveElement['min']) {
    this.elementRef.nativeElement.min = val;
  }
  get min(): SliderDirectiveElement['min'] {
    return this.elementRef.nativeElement.min;
  }

  @Input()
  set showTickmarks(val: SliderDirectiveElement['showTickmarks']) {
    this.elementRef.nativeElement.showTickmarks = val;
  }
  get showTickmarks(): SliderDirectiveElement['showTickmarks'] {
    return this.elementRef.nativeElement.showTickmarks;
  }

  @Input()
  set showTooltip(val: SliderDirectiveElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = val;
  }
  get showTooltip(): SliderDirectiveElement['showTooltip'] {
    return this.elementRef.nativeElement.showTooltip;
  }

  @Input()
  set step(val: SliderDirectiveElement['step']) {
    this.elementRef.nativeElement.step = val;
  }
  get step(): SliderDirectiveElement['step'] {
    return this.elementRef.nativeElement.step;
  }

  @Input()
  set value(val: SliderDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): SliderDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }
  @Output() change: Observable<SliderDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<SliderDirectiveEventsMap['input']> = NEVER as any;
  constructor(private elementRef: ElementRef<SliderDirectiveElement>) {}

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
  selector: 'ui5-slider',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderDirectiveCva),
      multi: true,
    },
  ],
})
class SliderDirectiveCva extends GenericControlValueAccessor {
  constructor(private elementRef: ElementRef<SliderDirective['element']>) {
    super({
      get value() {
        return elementRef.nativeElement.value;
      },
      set value(val) {
        elementRef.nativeElement.value = val;
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
  SliderDirective,
  SliderDirectiveCva,
  SliderDirectiveEventsMap,
  SliderDirectiveElement,
};
