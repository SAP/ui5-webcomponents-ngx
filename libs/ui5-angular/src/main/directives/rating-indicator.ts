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
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'disabled'
    | 'max'
    | 'readonly'
    | 'value'
    | 'change'
  > {
  effectiveDir: any;
  isUi5Element: any;
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

  _render(): any;

  attachInvalidate(callback: any): any;

  define(): any;

  detachInvalidate(callback: any): any;

  fireEvent(name: any, data: any, cancelable: any, bubbles: any): boolean;

  focus(): any;

  getDomRef(): any;

  getFocusDomRef(): any;

  getFocusDomRefAsync(): any;

  getMetadata(): any;

  getSlottedNodes(): any;

  getStaticAreaItemDomRef(): any;

  getUniqueDependencies(): any;

  onAfterRendering(): any;

  onBeforeRendering(): any;

  onDefine(): any;

  onEnterDOM(): any;

  onExitDOM(): any;

  onInvalidation(changeInfo: any): any;
}

@Directive({
  selector: 'ui5-rating-indicator',
  exportAs: 'ui5RatingIndicator',
})
class RatingIndicatorDirective {
  @Input()
  set effectiveDir(val: RatingIndicatorDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): RatingIndicatorDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: RatingIndicatorDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): RatingIndicatorDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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

  _render(): any {
    return this.elementRef.nativeElement._render();
  }

  attachInvalidate(callback: any): any {
    return this.elementRef.nativeElement.attachInvalidate(callback);
  }

  define(): any {
    return this.elementRef.nativeElement.define();
  }

  detachInvalidate(callback: any): any {
    return this.elementRef.nativeElement.detachInvalidate(callback);
  }

  fireEvent(name: any, data: any, cancelable: any, bubbles: any): boolean {
    return this.elementRef.nativeElement.fireEvent(
      name,
      data,
      cancelable,
      bubbles
    );
  }

  focus(): any {
    return this.elementRef.nativeElement.focus();
  }

  getDomRef(): any {
    return this.elementRef.nativeElement.getDomRef();
  }

  getFocusDomRef(): any {
    return this.elementRef.nativeElement.getFocusDomRef();
  }

  getFocusDomRefAsync(): any {
    return this.elementRef.nativeElement.getFocusDomRefAsync();
  }

  getMetadata(): any {
    return this.elementRef.nativeElement.getMetadata();
  }

  getSlottedNodes(): any {
    return this.elementRef.nativeElement.getSlottedNodes();
  }

  getStaticAreaItemDomRef(): any {
    return this.elementRef.nativeElement.getStaticAreaItemDomRef();
  }

  getUniqueDependencies(): any {
    return this.elementRef.nativeElement.getUniqueDependencies();
  }

  onAfterRendering(): any {
    return this.elementRef.nativeElement.onAfterRendering();
  }

  onBeforeRendering(): any {
    return this.elementRef.nativeElement.onBeforeRendering();
  }

  onDefine(): any {
    return this.elementRef.nativeElement.onDefine();
  }

  onEnterDOM(): any {
    return this.elementRef.nativeElement.onEnterDOM();
  }

  onExitDOM(): any {
    return this.elementRef.nativeElement.onExitDOM();
  }

  onInvalidation(changeInfo: any): any {
    return this.elementRef.nativeElement.onInvalidation(changeInfo);
  }
}

export {
  RatingIndicatorDirective,
  RatingIndicatorDirectiveEventsMap,
  RatingIndicatorDirectiveElement,
};
