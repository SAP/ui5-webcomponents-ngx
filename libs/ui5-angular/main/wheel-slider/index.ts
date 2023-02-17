import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/WheelSlider.js';

interface WheelSliderDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'cyclic'
    | 'disabled'
    | 'expanded'
    | 'label'
    | 'value'
  > {
  effectiveDir: any;
  isUi5Element: any;
  cyclic: boolean;
  disabled: boolean;
  expanded: boolean;
  label: string;
  value: string;

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
  selector: 'ui5-wheelslider',
  exportAs: 'ui5Wheelslider',
  standalone: true,
  providers: [],
})
class WheelSliderDirective {
  @Input()
  set effectiveDir(val: WheelSliderDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): WheelSliderDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: WheelSliderDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): WheelSliderDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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

export { WheelSliderDirective, WheelSliderDirectiveElement };
