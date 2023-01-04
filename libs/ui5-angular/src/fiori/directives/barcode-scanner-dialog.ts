import { Directive, ElementRef, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
import { Observable, NEVER } from 'rxjs';

interface BarcodeScannerDialogDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'scanError' | 'scanSuccess'> {
  scanError: CustomEvent<{ message: string }>;
  scanSuccess: CustomEvent<{ text: string; rawBytes: Record<string, any> }>;
}

interface BarcodeScannerDialogDirectiveElement
  extends Omit<HTMLElement, 'scanError' | 'scanSuccess'> {
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

  close(): any;

  show(): any;
}

@Directive({
  selector: 'ui5-barcode-scanner-dialog',
  exportAs: 'ui5BarcodeScannerDialog',
})
class BarcodeScannerDialogDirective {
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
