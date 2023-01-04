import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Popover.js';
import { Observable, NEVER } from 'rxjs';

interface PopoverDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'afterClose' | 'afterOpen' | 'beforeClose' | 'beforeOpen'
  > {
  afterClose: CustomEvent<void>;
  afterOpen: CustomEvent<void>;
  beforeClose: CustomEvent<{ escPressed: boolean }>;
  beforeOpen: CustomEvent<void>;
}

interface PopoverDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'initialFocus'
    | 'open'
    | 'preventFocusRestore'
    | 'allowTargetOverlap'
    | 'headerText'
    | 'hideArrow'
    | 'hideBackdrop'
    | 'horizontalAlign'
    | 'modal'
    | 'opener'
    | 'placementType'
    | 'verticalAlign'
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
  allowTargetOverlap: boolean;
  headerText: string;
  hideArrow: boolean;
  hideBackdrop: boolean;
  horizontalAlign: 'Center' | 'Left' | 'Right' | 'Stretch';
  modal: boolean;
  opener: any;
  placementType: 'Bottom' | 'Left' | 'Right' | 'Top';
  verticalAlign: 'Bottom' | 'Center' | 'Stretch' | 'Top';

  footer: Array<HTMLElement>;
  header: Array<HTMLElement>;

  addEventListener<K extends keyof PopoverDirectiveEventsMap>(
    type: K,
    listener: (
      this: PopoverDirectiveElement,
      ev: PopoverDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof PopoverDirectiveEventsMap>(
    type: K,
    listener: (
      this: PopoverDirectiveElement,
      ev: PopoverDirectiveEventsMap[K]
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

  showAt(opener: HTMLElement, preventInitialFocus: boolean): any;
}

@Directive({
  selector: 'ui5-popover',
  exportAs: 'ui5Popover',
})
class PopoverDirective {
  @Input()
  set accessibleName(val: PopoverDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): PopoverDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: PopoverDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): PopoverDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set initialFocus(val: PopoverDirectiveElement['initialFocus']) {
    this.elementRef.nativeElement.initialFocus = val;
  }
  get initialFocus(): PopoverDirectiveElement['initialFocus'] {
    return this.elementRef.nativeElement.initialFocus;
  }

  @Input()
  set open(val: PopoverDirectiveElement['open']) {
    this.elementRef.nativeElement.open = val;
  }
  get open(): PopoverDirectiveElement['open'] {
    return this.elementRef.nativeElement.open;
  }

  @Input()
  set preventFocusRestore(val: PopoverDirectiveElement['preventFocusRestore']) {
    this.elementRef.nativeElement.preventFocusRestore = val;
  }
  get preventFocusRestore(): PopoverDirectiveElement['preventFocusRestore'] {
    return this.elementRef.nativeElement.preventFocusRestore;
  }

  @Input()
  set allowTargetOverlap(val: PopoverDirectiveElement['allowTargetOverlap']) {
    this.elementRef.nativeElement.allowTargetOverlap = val;
  }
  get allowTargetOverlap(): PopoverDirectiveElement['allowTargetOverlap'] {
    return this.elementRef.nativeElement.allowTargetOverlap;
  }

  @Input()
  set headerText(val: PopoverDirectiveElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText(): PopoverDirectiveElement['headerText'] {
    return this.elementRef.nativeElement.headerText;
  }

  @Input()
  set hideArrow(val: PopoverDirectiveElement['hideArrow']) {
    this.elementRef.nativeElement.hideArrow = val;
  }
  get hideArrow(): PopoverDirectiveElement['hideArrow'] {
    return this.elementRef.nativeElement.hideArrow;
  }

  @Input()
  set hideBackdrop(val: PopoverDirectiveElement['hideBackdrop']) {
    this.elementRef.nativeElement.hideBackdrop = val;
  }
  get hideBackdrop(): PopoverDirectiveElement['hideBackdrop'] {
    return this.elementRef.nativeElement.hideBackdrop;
  }

  @Input()
  set horizontalAlign(val: PopoverDirectiveElement['horizontalAlign']) {
    this.elementRef.nativeElement.horizontalAlign = val;
  }
  get horizontalAlign(): PopoverDirectiveElement['horizontalAlign'] {
    return this.elementRef.nativeElement.horizontalAlign;
  }

  @Input()
  set modal(val: PopoverDirectiveElement['modal']) {
    this.elementRef.nativeElement.modal = val;
  }
  get modal(): PopoverDirectiveElement['modal'] {
    return this.elementRef.nativeElement.modal;
  }

  @Input()
  set opener(val: PopoverDirectiveElement['opener']) {
    this.elementRef.nativeElement.opener = val;
  }
  get opener(): PopoverDirectiveElement['opener'] {
    return this.elementRef.nativeElement.opener;
  }

  @Input()
  set placementType(val: PopoverDirectiveElement['placementType']) {
    this.elementRef.nativeElement.placementType = val;
  }
  get placementType(): PopoverDirectiveElement['placementType'] {
    return this.elementRef.nativeElement.placementType;
  }

  @Input()
  set verticalAlign(val: PopoverDirectiveElement['verticalAlign']) {
    this.elementRef.nativeElement.verticalAlign = val;
  }
  get verticalAlign(): PopoverDirectiveElement['verticalAlign'] {
    return this.elementRef.nativeElement.verticalAlign;
  }
  @Output() afterClose: Observable<PopoverDirectiveEventsMap['afterClose']> =
    NEVER as any;
  @Output() afterOpen: Observable<PopoverDirectiveEventsMap['afterOpen']> =
    NEVER as any;
  @Output() beforeClose: Observable<PopoverDirectiveEventsMap['beforeClose']> =
    NEVER as any;
  @Output() beforeOpen: Observable<PopoverDirectiveEventsMap['beforeOpen']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<PopoverDirectiveElement>) {}

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

  showAt(opener: HTMLElement, preventInitialFocus: boolean): any {
    return this.elementRef.nativeElement.showAt(opener, preventInitialFocus);
  }
}

export { PopoverDirective, PopoverDirectiveEventsMap, PopoverDirectiveElement };
