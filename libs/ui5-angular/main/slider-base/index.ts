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
    | 'effectiveDir'
    | 'isUi5Element'
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
  effectiveDir: any;
  isUi5Element: any;
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
  selector: 'ui5-slider',
  exportAs: 'ui5Slider',
  standalone: true,
  providers: [],
})
class SliderBaseDirective {
  @Input()
  set effectiveDir(val: SliderBaseDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): SliderBaseDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: SliderBaseDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): SliderBaseDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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
  SliderBaseDirective,
  SliderBaseDirectiveEventsMap,
  SliderBaseDirectiveElement,
};
