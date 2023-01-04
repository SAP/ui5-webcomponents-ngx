import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Table.js';
import { Observable, NEVER } from 'rxjs';
import { TableColumnDirective } from './table-column';

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
}

@Directive({
  selector: 'ui5-table',
  exportAs: 'ui5Table',
})
class TableDirective {
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
}

export { TableDirective, TableDirectiveEventsMap, TableDirectiveElement };
