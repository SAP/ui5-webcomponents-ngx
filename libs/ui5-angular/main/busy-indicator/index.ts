import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/BusyIndicator.js';

interface BusyIndicatorDirectiveElement
  extends Omit<
    HTMLElement,
    'effectiveDir' | 'isUi5Element' | 'active' | 'delay' | 'size' | 'text'
  > {
  effectiveDir: any;
  isUi5Element: any;
  active: boolean;
  delay: any;
  size: 'Large' | 'Medium' | 'Small';
  text: string;

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
  selector: 'ui5-busy-indicator',
  exportAs: 'ui5BusyIndicator',
  standalone: true,
  providers: [],
})
class BusyIndicatorDirective {
  @Input()
  set effectiveDir(val: BusyIndicatorDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): BusyIndicatorDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: BusyIndicatorDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): BusyIndicatorDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set active(val: BusyIndicatorDirectiveElement['active']) {
    this.elementRef.nativeElement.active = val;
  }
  get active(): BusyIndicatorDirectiveElement['active'] {
    return this.elementRef.nativeElement.active;
  }

  @Input()
  set delay(val: BusyIndicatorDirectiveElement['delay']) {
    this.elementRef.nativeElement.delay = val;
  }
  get delay(): BusyIndicatorDirectiveElement['delay'] {
    return this.elementRef.nativeElement.delay;
  }

  @Input()
  set size(val: BusyIndicatorDirectiveElement['size']) {
    this.elementRef.nativeElement.size = val;
  }
  get size(): BusyIndicatorDirectiveElement['size'] {
    return this.elementRef.nativeElement.size;
  }

  @Input()
  set text(val: BusyIndicatorDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): BusyIndicatorDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(private elementRef: ElementRef<BusyIndicatorDirectiveElement>) {}

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

export { BusyIndicatorDirective, BusyIndicatorDirectiveElement };
