import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/RatingIndicator.js';
import { Observable, NEVER } from 'rxjs';

interface RatingIndicatorDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change'> {
  change: CustomEvent<void>;
}

interface RatingIndicatorDirectiveElement
  extends Omit<
    HTMLElement,
    'accessibleName' | 'disabled' | 'max' | 'readonly' | 'value' | 'change'
  > {
  accessibleName: string;
  disabled: boolean;
  max: any;
  readonly: boolean;
  value: any;

  addEventListener<K extends keyof RatingIndicatorDirectiveEventsMap>(
    type: K,
    listener: (
      this: RatingIndicatorDirectiveElement,
      ev: RatingIndicatorDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof RatingIndicatorDirectiveEventsMap>(
    type: K,
    listener: (
      this: RatingIndicatorDirectiveElement,
      ev: RatingIndicatorDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

@Directive({
  selector: 'ui5-rating-indicator',
  exportAs: 'ui5RatingIndicator',
})
class RatingIndicatorDirective {
  @Input()
  set accessibleName(val: RatingIndicatorDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): RatingIndicatorDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set disabled(val: RatingIndicatorDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): RatingIndicatorDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set max(val: RatingIndicatorDirectiveElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max(): RatingIndicatorDirectiveElement['max'] {
    return this.elementRef.nativeElement.max;
  }

  @Input()
  set readonly(val: RatingIndicatorDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): RatingIndicatorDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set value(val: RatingIndicatorDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): RatingIndicatorDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }
  @Output() change: Observable<RatingIndicatorDirectiveEventsMap['change']> =
    NEVER as any;
  constructor(
    private elementRef: ElementRef<RatingIndicatorDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export {
  RatingIndicatorDirective,
  RatingIndicatorDirectiveEventsMap,
  RatingIndicatorDirectiveElement,
};
