import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Toast.js';

interface ToastDirectiveElement
  extends Omit<
    HTMLElement,
    'effectiveDir' | 'isUi5Element' | 'duration' | 'placement'
  > {
  effectiveDir: any;
  isUi5Element: any;
  duration: any;
  placement:
    | 'BottomCenter'
    | 'BottomEnd'
    | 'BottomStart'
    | 'MiddleCenter'
    | 'MiddleEnd'
    | 'MiddleStart'
    | 'TopCenter'
    | 'TopEnd'
    | 'TopStart';

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

  show(): any;
}

@Directive({
  selector: 'ui5-toast',
  exportAs: 'ui5Toast',
  standalone: true,
  providers: [],
})
class ToastDirective {
  @Input()
  set effectiveDir(val: ToastDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): ToastDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: ToastDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): ToastDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set duration(val: ToastDirectiveElement['duration']) {
    this.elementRef.nativeElement.duration = val;
  }
  get duration(): ToastDirectiveElement['duration'] {
    return this.elementRef.nativeElement.duration;
  }

  @Input()
  set placement(val: ToastDirectiveElement['placement']) {
    this.elementRef.nativeElement.placement = val;
  }
  get placement(): ToastDirectiveElement['placement'] {
    return this.elementRef.nativeElement.placement;
  }

  constructor(private elementRef: ElementRef<ToastDirectiveElement>) {}

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

  show(): any {
    return this.elementRef.nativeElement.show();
  }
}

export { ToastDirective, ToastDirectiveElement };
