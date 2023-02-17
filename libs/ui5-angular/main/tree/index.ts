import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Tree.js';
import { Observable, NEVER } from 'rxjs';

interface TreeDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    | 'itemClick'
    | 'itemDelete'
    | 'itemMouseout'
    | 'itemMouseover'
    | 'itemToggle'
    | 'selectionChange'
  > {
  itemClick: CustomEvent<{ item: HTMLElement }>;
  itemDelete: CustomEvent<{ item: HTMLElement }>;
  itemMouseout: CustomEvent<{ item: HTMLElement }>;
  itemMouseover: CustomEvent<{ item: HTMLElement }>;
  itemToggle: CustomEvent<{ item: HTMLElement }>;
  selectionChange: CustomEvent<{
    selectedItems: Array<any>;
    previouslySelectedItems: Array<any>;
    targetItem: HTMLElement;
  }>;
}

interface TreeDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'footerText'
    | 'headerText'
    | 'mode'
    | 'noDataText'
    | 'itemClick'
    | 'itemDelete'
    | 'itemMouseout'
    | 'itemMouseover'
    | 'itemToggle'
    | 'selectionChange'
    | 'header'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  accessibleNameRef: string;
  footerText: string;
  headerText: string;
  mode:
    | 'Delete'
    | 'MultiSelect'
    | 'None'
    | 'SingleSelect'
    | 'SingleSelectAuto'
    | 'SingleSelectBegin'
    | 'SingleSelectEnd';
  noDataText: string;

  header: Array<HTMLElement>;

  addEventListener<K extends keyof TreeDirectiveEventsMap>(
    type: K,
    listener: (
      this: TreeDirectiveElement,
      ev: TreeDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TreeDirectiveEventsMap>(
    type: K,
    listener: (
      this: TreeDirectiveElement,
      ev: TreeDirectiveEventsMap[K]
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

  _getListItemForTreeItem(item: any): any;

  focusItemByIndex(index: any): any;

  getItems(): Array<any>;

  walk(callback: any): any;
}

@Directive({
  selector: 'ui5-tree',
  exportAs: 'ui5Tree',
  standalone: true,
  providers: [],
})
class TreeDirective {
  @Input()
  set effectiveDir(val: TreeDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): TreeDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: TreeDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): TreeDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: TreeDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): TreeDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: TreeDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): TreeDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set footerText(val: TreeDirectiveElement['footerText']) {
    this.elementRef.nativeElement.footerText = val;
  }
  get footerText(): TreeDirectiveElement['footerText'] {
    return this.elementRef.nativeElement.footerText;
  }

  @Input()
  set headerText(val: TreeDirectiveElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText(): TreeDirectiveElement['headerText'] {
    return this.elementRef.nativeElement.headerText;
  }

  @Input()
  set mode(val: TreeDirectiveElement['mode']) {
    this.elementRef.nativeElement.mode = val;
  }
  get mode(): TreeDirectiveElement['mode'] {
    return this.elementRef.nativeElement.mode;
  }

  @Input()
  set noDataText(val: TreeDirectiveElement['noDataText']) {
    this.elementRef.nativeElement.noDataText = val;
  }
  get noDataText(): TreeDirectiveElement['noDataText'] {
    return this.elementRef.nativeElement.noDataText;
  }
  @Output() itemClick: Observable<TreeDirectiveEventsMap['itemClick']> =
    NEVER as any;
  @Output() itemDelete: Observable<TreeDirectiveEventsMap['itemDelete']> =
    NEVER as any;
  @Output() itemMouseout: Observable<TreeDirectiveEventsMap['itemMouseout']> =
    NEVER as any;
  @Output() itemMouseover: Observable<TreeDirectiveEventsMap['itemMouseover']> =
    NEVER as any;
  @Output() itemToggle: Observable<TreeDirectiveEventsMap['itemToggle']> =
    NEVER as any;
  @Output() selectionChange: Observable<
    TreeDirectiveEventsMap['selectionChange']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<TreeDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
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

  _getListItemForTreeItem(item: any): any {
    return this.elementRef.nativeElement._getListItemForTreeItem(item);
  }

  focusItemByIndex(index: any): any {
    return this.elementRef.nativeElement.focusItemByIndex(index);
  }

  getItems(): Array<any> {
    return this.elementRef.nativeElement.getItems();
  }

  walk(callback: any): any {
    return this.elementRef.nativeElement.walk(callback);
  }
}

export { TreeDirective, TreeDirectiveEventsMap, TreeDirectiveElement };
