import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Table.js';
import { Observable, NEVER } from 'rxjs';
import { TableColumnDirective } from '@ui5/webcomponents-ngx/main/table-column';

interface TableDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'loadMore' | 'popinChange' | 'rowClick' | 'selectionChange'
  > {
  loadMore: CustomEvent<void>;
  popinChange: CustomEvent<{ poppedColumns: Array<any> }>;
  rowClick: CustomEvent<{ row: HTMLElement }>;
  selectionChange: CustomEvent<{
    selectedRows: Array<any>;
    previouslySelectedRows: Array<any>;
  }>;
}

interface TableDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'busy'
    | 'busyDelay'
    | 'growing'
    | 'growingButtonSubtext'
    | 'growingButtonText'
    | 'hideNoData'
    | 'mode'
    | 'noDataText'
    | 'stickyColumnHeader'
    | 'loadMore'
    | 'popinChange'
    | 'rowClick'
    | 'selectionChange'
    | 'columns'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  accessibleNameRef: string;
  busy: boolean;
  busyDelay: any;
  growing: 'Button' | 'None' | 'Scroll';
  growingButtonSubtext: string;
  growingButtonText: string;
  hideNoData: boolean;
  mode: 'MultiSelect' | 'None' | 'SingleSelect';
  noDataText: string;
  stickyColumnHeader: boolean;

  columns: Array<TableColumnDirective['element']>;

  addEventListener<K extends keyof TableDirectiveEventsMap>(
    type: K,
    listener: (
      this: TableDirectiveElement,
      ev: TableDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TableDirectiveEventsMap>(
    type: K,
    listener: (
      this: TableDirectiveElement,
      ev: TableDirectiveEventsMap[K]
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
}

@Directive({
  selector: 'ui5-table',
  exportAs: 'ui5Table',
  standalone: true,
  providers: [],
})
class TableDirective {
  @Input()
  set effectiveDir(val: TableDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): TableDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: TableDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): TableDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: TableDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): TableDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: TableDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): TableDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set busy(val: TableDirectiveElement['busy']) {
    this.elementRef.nativeElement.busy = val;
  }
  get busy(): TableDirectiveElement['busy'] {
    return this.elementRef.nativeElement.busy;
  }

  @Input()
  set busyDelay(val: TableDirectiveElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay(): TableDirectiveElement['busyDelay'] {
    return this.elementRef.nativeElement.busyDelay;
  }

  @Input()
  set growing(val: TableDirectiveElement['growing']) {
    this.elementRef.nativeElement.growing = val;
  }
  get growing(): TableDirectiveElement['growing'] {
    return this.elementRef.nativeElement.growing;
  }

  @Input()
  set growingButtonSubtext(val: TableDirectiveElement['growingButtonSubtext']) {
    this.elementRef.nativeElement.growingButtonSubtext = val;
  }
  get growingButtonSubtext(): TableDirectiveElement['growingButtonSubtext'] {
    return this.elementRef.nativeElement.growingButtonSubtext;
  }

  @Input()
  set growingButtonText(val: TableDirectiveElement['growingButtonText']) {
    this.elementRef.nativeElement.growingButtonText = val;
  }
  get growingButtonText(): TableDirectiveElement['growingButtonText'] {
    return this.elementRef.nativeElement.growingButtonText;
  }

  @Input()
  set hideNoData(val: TableDirectiveElement['hideNoData']) {
    this.elementRef.nativeElement.hideNoData = val;
  }
  get hideNoData(): TableDirectiveElement['hideNoData'] {
    return this.elementRef.nativeElement.hideNoData;
  }

  @Input()
  set mode(val: TableDirectiveElement['mode']) {
    this.elementRef.nativeElement.mode = val;
  }
  get mode(): TableDirectiveElement['mode'] {
    return this.elementRef.nativeElement.mode;
  }

  @Input()
  set noDataText(val: TableDirectiveElement['noDataText']) {
    this.elementRef.nativeElement.noDataText = val;
  }
  get noDataText(): TableDirectiveElement['noDataText'] {
    return this.elementRef.nativeElement.noDataText;
  }

  @Input()
  set stickyColumnHeader(val: TableDirectiveElement['stickyColumnHeader']) {
    this.elementRef.nativeElement.stickyColumnHeader = val;
  }
  get stickyColumnHeader(): TableDirectiveElement['stickyColumnHeader'] {
    return this.elementRef.nativeElement.stickyColumnHeader;
  }
  @Output() loadMore: Observable<TableDirectiveEventsMap['loadMore']> =
    NEVER as any;
  @Output() popinChange: Observable<TableDirectiveEventsMap['popinChange']> =
    NEVER as any;
  @Output() rowClick: Observable<TableDirectiveEventsMap['rowClick']> =
    NEVER as any;
  @Output() selectionChange: Observable<
    TableDirectiveEventsMap['selectionChange']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<TableDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get columns(): Array<TableColumnDirective['element']> {
    return this.elementRef.nativeElement.columns;
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

export { TableDirective, TableDirectiveEventsMap, TableDirectiveElement };
