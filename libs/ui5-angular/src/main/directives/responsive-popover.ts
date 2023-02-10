import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/ResponsivePopover.js';
import { Observable, NEVER } from 'rxjs';

interface ResponsivePopoverDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'afterClose' | 'afterOpen' | 'beforeClose' | 'beforeOpen'
  > {
  afterClose: CustomEvent<void>;
  afterOpen: CustomEvent<void>;
  beforeClose: CustomEvent<{ escPressed: boolean }>;
  beforeOpen: CustomEvent<void>;
}

interface ResponsivePopoverDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
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
  effectiveDir: any;
  isUi5Element: any;
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

  addEventListener<K extends keyof ResponsivePopoverDirectiveEventsMap>(
    type: K,
    listener: (
      this: ResponsivePopoverDirectiveElement,
      ev: ResponsivePopoverDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ResponsivePopoverDirectiveEventsMap>(
    type: K,
    listener: (
      this: ResponsivePopoverDirectiveElement,
      ev: ResponsivePopoverDirectiveEventsMap[K]
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

  applyFocus(): any;

  close(): any;

  isOpen(): boolean;

  showAt(opener: HTMLElement, preventInitialFocus: boolean): any;
}

@Directive({
  selector: 'ui5-responsive-popover',
  exportAs: 'ui5ResponsivePopover',
})
class ResponsivePopoverDirective {
  @Input()
  set effectiveDir(val: ResponsivePopoverDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): ResponsivePopoverDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: ResponsivePopoverDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): ResponsivePopoverDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: ResponsivePopoverDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): ResponsivePopoverDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(
    val: ResponsivePopoverDirectiveElement['accessibleNameRef']
  ) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): ResponsivePopoverDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set initialFocus(val: ResponsivePopoverDirectiveElement['initialFocus']) {
    this.elementRef.nativeElement.initialFocus = val;
  }
  get initialFocus(): ResponsivePopoverDirectiveElement['initialFocus'] {
    return this.elementRef.nativeElement.initialFocus;
  }

  @Input()
  set open(val: ResponsivePopoverDirectiveElement['open']) {
    this.elementRef.nativeElement.open = val;
  }
  get open(): ResponsivePopoverDirectiveElement['open'] {
    return this.elementRef.nativeElement.open;
  }

  @Input()
  set preventFocusRestore(
    val: ResponsivePopoverDirectiveElement['preventFocusRestore']
  ) {
    this.elementRef.nativeElement.preventFocusRestore = val;
  }
  get preventFocusRestore(): ResponsivePopoverDirectiveElement['preventFocusRestore'] {
    return this.elementRef.nativeElement.preventFocusRestore;
  }

  @Input()
  set allowTargetOverlap(
    val: ResponsivePopoverDirectiveElement['allowTargetOverlap']
  ) {
    this.elementRef.nativeElement.allowTargetOverlap = val;
  }
  get allowTargetOverlap(): ResponsivePopoverDirectiveElement['allowTargetOverlap'] {
    return this.elementRef.nativeElement.allowTargetOverlap;
  }

  @Input()
  set headerText(val: ResponsivePopoverDirectiveElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText(): ResponsivePopoverDirectiveElement['headerText'] {
    return this.elementRef.nativeElement.headerText;
  }

  @Input()
  set hideArrow(val: ResponsivePopoverDirectiveElement['hideArrow']) {
    this.elementRef.nativeElement.hideArrow = val;
  }
  get hideArrow(): ResponsivePopoverDirectiveElement['hideArrow'] {
    return this.elementRef.nativeElement.hideArrow;
  }

  @Input()
  set hideBackdrop(val: ResponsivePopoverDirectiveElement['hideBackdrop']) {
    this.elementRef.nativeElement.hideBackdrop = val;
  }
  get hideBackdrop(): ResponsivePopoverDirectiveElement['hideBackdrop'] {
    return this.elementRef.nativeElement.hideBackdrop;
  }

  @Input()
  set horizontalAlign(
    val: ResponsivePopoverDirectiveElement['horizontalAlign']
  ) {
    this.elementRef.nativeElement.horizontalAlign = val;
  }
  get horizontalAlign(): ResponsivePopoverDirectiveElement['horizontalAlign'] {
    return this.elementRef.nativeElement.horizontalAlign;
  }

  @Input()
  set modal(val: ResponsivePopoverDirectiveElement['modal']) {
    this.elementRef.nativeElement.modal = val;
  }
  get modal(): ResponsivePopoverDirectiveElement['modal'] {
    return this.elementRef.nativeElement.modal;
  }

  @Input()
  set opener(val: ResponsivePopoverDirectiveElement['opener']) {
    this.elementRef.nativeElement.opener = val;
  }
  get opener(): ResponsivePopoverDirectiveElement['opener'] {
    return this.elementRef.nativeElement.opener;
  }

  @Input()
  set placementType(val: ResponsivePopoverDirectiveElement['placementType']) {
    this.elementRef.nativeElement.placementType = val;
  }
  get placementType(): ResponsivePopoverDirectiveElement['placementType'] {
    return this.elementRef.nativeElement.placementType;
  }

  @Input()
  set verticalAlign(val: ResponsivePopoverDirectiveElement['verticalAlign']) {
    this.elementRef.nativeElement.verticalAlign = val;
  }
  get verticalAlign(): ResponsivePopoverDirectiveElement['verticalAlign'] {
    return this.elementRef.nativeElement.verticalAlign;
  }
  @Output() afterClose: Observable<
    ResponsivePopoverDirectiveEventsMap['afterClose']
  > = NEVER as any;
  @Output() afterOpen: Observable<
    ResponsivePopoverDirectiveEventsMap['afterOpen']
  > = NEVER as any;
  @Output() beforeClose: Observable<
    ResponsivePopoverDirectiveEventsMap['beforeClose']
  > = NEVER as any;
  @Output() beforeOpen: Observable<
    ResponsivePopoverDirectiveEventsMap['beforeOpen']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<ResponsivePopoverDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get footer(): Array<HTMLElement> {
    return this.elementRef.nativeElement.footer;
  }
  get header(): Array<HTMLElement> {
    return this.elementRef.nativeElement.header;
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

  applyFocus(): any {
    return this.elementRef.nativeElement.applyFocus();
  }

  close(): any {
    return this.elementRef.nativeElement.close();
  }

  isOpen(): boolean {
    return this.elementRef.nativeElement.isOpen();
  }

  showAt(opener: HTMLElement, preventInitialFocus: boolean): any {
    return this.elementRef.nativeElement.showAt(opener, preventInitialFocus);
  }
}

export {
  ResponsivePopoverDirective,
  ResponsivePopoverDirectiveEventsMap,
  ResponsivePopoverDirectiveElement,
};
