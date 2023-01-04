import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/List.js';
import { Observable, NEVER } from 'rxjs';

interface ListDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    | 'itemClick'
    | 'itemClose'
    | 'itemDelete'
    | 'itemToggle'
    | 'loadMore'
    | 'selectionChange'
  > {
  itemClick: CustomEvent<{ item: HTMLElement }>;
  itemClose: CustomEvent<{ item: HTMLElement }>;
  itemDelete: CustomEvent<{ item: HTMLElement }>;
  itemToggle: CustomEvent<{ item: HTMLElement }>;
  loadMore: CustomEvent<void>;
  selectionChange: CustomEvent<{
    selectedItems: Array<any>;
    previouslySelectedItems: Array<any>;
  }>;
}

interface ListDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'accessibleRole'
    | 'busy'
    | 'busyDelay'
    | 'footerText'
    | 'growing'
    | 'headerText'
    | 'indent'
    | 'mode'
    | 'noDataText'
    | 'separators'
    | 'itemClick'
    | 'itemClose'
    | 'itemDelete'
    | 'itemToggle'
    | 'loadMore'
    | 'selectionChange'
    | 'header'
  > {
  accessibleName: string;
  accessibleNameRef: string;
  accessibleRole: string;
  busy: boolean;
  busyDelay: any;
  footerText: string;
  growing: 'Button' | 'None' | 'Scroll';
  headerText: string;
  indent: boolean;
  mode:
    | 'Delete'
    | 'MultiSelect'
    | 'None'
    | 'SingleSelect'
    | 'SingleSelectAuto'
    | 'SingleSelectBegin'
    | 'SingleSelectEnd';
  noDataText: string;
  separators: 'All' | 'Inner' | 'None';

  header: Array<HTMLElement>;

  addEventListener<K extends keyof ListDirectiveEventsMap>(
    type: K,
    listener: (
      this: ListDirectiveElement,
      ev: ListDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ListDirectiveEventsMap>(
    type: K,
    listener: (
      this: ListDirectiveElement,
      ev: ListDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  focusFirstItem(): any;

  focusItem(item: any): any;
}

@Directive({
  selector: 'ui5-list',
  exportAs: 'ui5List',
})
class ListDirective {
  @Input()
  set accessibleName(val: ListDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): ListDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: ListDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): ListDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set accessibleRole(val: ListDirectiveElement['accessibleRole']) {
    this.elementRef.nativeElement.accessibleRole = val;
  }
  get accessibleRole(): ListDirectiveElement['accessibleRole'] {
    return this.elementRef.nativeElement.accessibleRole;
  }

  @Input()
  set busy(val: ListDirectiveElement['busy']) {
    this.elementRef.nativeElement.busy = val;
  }
  get busy(): ListDirectiveElement['busy'] {
    return this.elementRef.nativeElement.busy;
  }

  @Input()
  set busyDelay(val: ListDirectiveElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay(): ListDirectiveElement['busyDelay'] {
    return this.elementRef.nativeElement.busyDelay;
  }

  @Input()
  set footerText(val: ListDirectiveElement['footerText']) {
    this.elementRef.nativeElement.footerText = val;
  }
  get footerText(): ListDirectiveElement['footerText'] {
    return this.elementRef.nativeElement.footerText;
  }

  @Input()
  set growing(val: ListDirectiveElement['growing']) {
    this.elementRef.nativeElement.growing = val;
  }
  get growing(): ListDirectiveElement['growing'] {
    return this.elementRef.nativeElement.growing;
  }

  @Input()
  set headerText(val: ListDirectiveElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText(): ListDirectiveElement['headerText'] {
    return this.elementRef.nativeElement.headerText;
  }

  @Input()
  set indent(val: ListDirectiveElement['indent']) {
    this.elementRef.nativeElement.indent = val;
  }
  get indent(): ListDirectiveElement['indent'] {
    return this.elementRef.nativeElement.indent;
  }

  @Input()
  set mode(val: ListDirectiveElement['mode']) {
    this.elementRef.nativeElement.mode = val;
  }
  get mode(): ListDirectiveElement['mode'] {
    return this.elementRef.nativeElement.mode;
  }

  @Input()
  set noDataText(val: ListDirectiveElement['noDataText']) {
    this.elementRef.nativeElement.noDataText = val;
  }
  get noDataText(): ListDirectiveElement['noDataText'] {
    return this.elementRef.nativeElement.noDataText;
  }

  @Input()
  set separators(val: ListDirectiveElement['separators']) {
    this.elementRef.nativeElement.separators = val;
  }
  get separators(): ListDirectiveElement['separators'] {
    return this.elementRef.nativeElement.separators;
  }
  @Output() itemClick: Observable<ListDirectiveEventsMap['itemClick']> =
    NEVER as any;
  @Output() itemClose: Observable<ListDirectiveEventsMap['itemClose']> =
    NEVER as any;
  @Output() itemDelete: Observable<ListDirectiveEventsMap['itemDelete']> =
    NEVER as any;
  @Output() itemToggle: Observable<ListDirectiveEventsMap['itemToggle']> =
    NEVER as any;
  @Output() loadMore: Observable<ListDirectiveEventsMap['loadMore']> =
    NEVER as any;
  @Output() selectionChange: Observable<
    ListDirectiveEventsMap['selectionChange']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<ListDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get header(): Array<HTMLElement> {
    return this.elementRef.nativeElement.header;
  }

  focusFirstItem(): any {
    return this.elementRef.nativeElement.focusFirstItem();
  }

  focusItem(item: any): any {
    return this.elementRef.nativeElement.focusItem(item);
  }
}

export { ListDirective, ListDirectiveEventsMap, ListDirectiveElement };
