import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
import { Observable, NEVER } from 'rxjs';

interface BarcodeScannerDialogDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'scanError' | 'scanSuccess'> {
  scanError: CustomEvent<{ message: string }>;
  scanSuccess: CustomEvent<{ text: string; rawBytes: Record<string, any> }>;
}

interface BarcodeScannerDialogDirectiveElement
  extends Omit<
    HTMLElement,
    'effectiveDir' | 'isUi5Element' | 'scanError' | 'scanSuccess'
  > {
  effectiveDir: any;
  isUi5Element: any;

  addEventListener<K extends keyof BarcodeScannerDialogDirectiveEventsMap>(
    type: K,
    listener: (
      this: BarcodeScannerDialogDirectiveElement,
      ev: BarcodeScannerDialogDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof BarcodeScannerDialogDirectiveEventsMap>(
    type: K,
    listener: (
      this: BarcodeScannerDialogDirectiveElement,
      ev: BarcodeScannerDialogDirectiveEventsMap[K]
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

  close(): any;

  show(): any;
}

@Directive({
  selector: 'ui5-barcode-scanner-dialog',
  exportAs: 'ui5BarcodeScannerDialog',
  standalone: true,
  providers: [],
})
class BarcodeScannerDialogDirective {
  @Input()
  set effectiveDir(val: BarcodeScannerDialogDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): BarcodeScannerDialogDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: BarcodeScannerDialogDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): BarcodeScannerDialogDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }
  @Output() scanError: Observable<
    BarcodeScannerDialogDirectiveEventsMap['scanError']
  > = NEVER as any;
  @Output() scanSuccess: Observable<
    BarcodeScannerDialogDirectiveEventsMap['scanSuccess']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<BarcodeScannerDialogDirectiveElement>
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

  close(): any {
    return this.elementRef.nativeElement.close();
  }

  show(): any {
    return this.elementRef.nativeElement.show();
  }
}

export {
  BarcodeScannerDialogDirective,
  BarcodeScannerDialogDirectiveEventsMap,
  BarcodeScannerDialogDirectiveElement,
};
