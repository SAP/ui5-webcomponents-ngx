import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Dialog.js';
import { Observable, NEVER } from 'rxjs';

interface DialogDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'afterClose' | 'afterOpen' | 'beforeClose' | 'beforeOpen'
  > {
  afterClose: CustomEvent<void>;
  afterOpen: CustomEvent<void>;
  beforeClose: CustomEvent<{ escPressed: boolean }>;
  beforeOpen: CustomEvent<void>;
}

interface DialogDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'initialFocus'
    | 'open'
    | 'preventFocusRestore'
    | 'draggable'
    | 'headerText'
    | 'resizable'
    | 'state'
    | 'stretch'
    | 'afterClose'
    | 'afterOpen'
    | 'beforeClose'
    | 'beforeOpen'
    | 'footer'
    | 'header'
  > {
  accessibleName: string;
  accessibleNameRef: string;
  initialFocus: string;
  open: boolean;
  preventFocusRestore: boolean;
  draggable: boolean;
  headerText: string;
  resizable: boolean;
  state: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  stretch: boolean;

  footer: Array<HTMLElement>;
  header: Array<HTMLElement>;

  addEventListener<K extends keyof DialogDirectiveEventsMap>(
    type: K,
    listener: (
      this: DialogDirectiveElement,
      ev: DialogDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof DialogDirectiveEventsMap>(
    type: K,
    listener: (
      this: DialogDirectiveElement,
      ev: DialogDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  _addOpenedPopup(): any;

  _open(): any;

  _removeOpenedPopup(): any;

  _show(): any;

  applyFocus(): any;

  applyInitialFocus(): any;

  blockPageScrolling(): any;

  close(): any;

  hide(): any;

  isOpen(): boolean;

  resetFocus(): any;

  unblockPageScrolling(): any;

  show(preventInitialFocus: boolean): any;
}

@Directive({
  selector: 'ui5-dialog',
  exportAs: 'ui5Dialog',
})
class DialogDirective {
  @Input()
  set accessibleName(val: DialogDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): DialogDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: DialogDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): DialogDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set initialFocus(val: DialogDirectiveElement['initialFocus']) {
    this.elementRef.nativeElement.initialFocus = val;
  }
  get initialFocus(): DialogDirectiveElement['initialFocus'] {
    return this.elementRef.nativeElement.initialFocus;
  }

  @Input()
  set open(val: DialogDirectiveElement['open']) {
    this.elementRef.nativeElement.open = val;
  }
  get open(): DialogDirectiveElement['open'] {
    return this.elementRef.nativeElement.open;
  }

  @Input()
  set preventFocusRestore(val: DialogDirectiveElement['preventFocusRestore']) {
    this.elementRef.nativeElement.preventFocusRestore = val;
  }
  get preventFocusRestore(): DialogDirectiveElement['preventFocusRestore'] {
    return this.elementRef.nativeElement.preventFocusRestore;
  }

  @Input()
  set draggable(val: DialogDirectiveElement['draggable']) {
    this.elementRef.nativeElement.draggable = val;
  }
  get draggable(): DialogDirectiveElement['draggable'] {
    return this.elementRef.nativeElement.draggable;
  }

  @Input()
  set headerText(val: DialogDirectiveElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText(): DialogDirectiveElement['headerText'] {
    return this.elementRef.nativeElement.headerText;
  }

  @Input()
  set resizable(val: DialogDirectiveElement['resizable']) {
    this.elementRef.nativeElement.resizable = val;
  }
  get resizable(): DialogDirectiveElement['resizable'] {
    return this.elementRef.nativeElement.resizable;
  }

  @Input()
  set state(val: DialogDirectiveElement['state']) {
    this.elementRef.nativeElement.state = val;
  }
  get state(): DialogDirectiveElement['state'] {
    return this.elementRef.nativeElement.state;
  }

  @Input()
  set stretch(val: DialogDirectiveElement['stretch']) {
    this.elementRef.nativeElement.stretch = val;
  }
  get stretch(): DialogDirectiveElement['stretch'] {
    return this.elementRef.nativeElement.stretch;
  }
  @Output() afterClose: Observable<DialogDirectiveEventsMap['afterClose']> =
    NEVER as any;
  @Output() afterOpen: Observable<DialogDirectiveEventsMap['afterOpen']> =
    NEVER as any;
  @Output() beforeClose: Observable<DialogDirectiveEventsMap['beforeClose']> =
    NEVER as any;
  @Output() beforeOpen: Observable<DialogDirectiveEventsMap['beforeOpen']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<DialogDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get footer(): Array<HTMLElement> {
    return this.elementRef.nativeElement.footer;
  }
  get header(): Array<HTMLElement> {
    return this.elementRef.nativeElement.header;
  }

  _addOpenedPopup(): any {
    return this.elementRef.nativeElement._addOpenedPopup();
  }

  _open(): any {
    return this.elementRef.nativeElement._open();
  }

  _removeOpenedPopup(): any {
    return this.elementRef.nativeElement._removeOpenedPopup();
  }

  _show(): any {
    return this.elementRef.nativeElement._show();
  }

  applyFocus(): any {
    return this.elementRef.nativeElement.applyFocus();
  }

  applyInitialFocus(): any {
    return this.elementRef.nativeElement.applyInitialFocus();
  }

  blockPageScrolling(): any {
    return this.elementRef.nativeElement.blockPageScrolling();
  }

  close(): any {
    return this.elementRef.nativeElement.close();
  }

  hide(): any {
    return this.elementRef.nativeElement.hide();
  }

  isOpen(): boolean {
    return this.elementRef.nativeElement.isOpen();
  }

  resetFocus(): any {
    return this.elementRef.nativeElement.resetFocus();
  }

  unblockPageScrolling(): any {
    return this.elementRef.nativeElement.unblockPageScrolling();
  }

  show(preventInitialFocus: boolean): any {
    return this.elementRef.nativeElement.show(preventInitialFocus);
  }
}

export { DialogDirective, DialogDirectiveEventsMap, DialogDirectiveElement };
