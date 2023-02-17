import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/ProgressIndicator.js';

interface ProgressIndicatorDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'disabled'
    | 'displayValue'
    | 'hideValue'
    | 'value'
    | 'valueState'
  > {
  effectiveDir: any;
  isUi5Element: any;
  disabled: boolean;
  displayValue: string;
  hideValue: boolean;
  value: any;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

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
  selector: 'ui5-progress-indicator',
  exportAs: 'ui5ProgressIndicator',
  standalone: true,
  providers: [],
})
class ProgressIndicatorDirective {
  @Input()
  set effectiveDir(val: ProgressIndicatorDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): ProgressIndicatorDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: ProgressIndicatorDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): ProgressIndicatorDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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

export { ProgressIndicatorDirective, ProgressIndicatorDirectiveElement };
