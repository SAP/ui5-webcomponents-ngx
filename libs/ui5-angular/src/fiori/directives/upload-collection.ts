import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/UploadCollection.js';
import { Observable, NEVER } from 'rxjs';

interface UploadCollectionDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'drop' | 'itemDelete' | 'selectionChange'> {
  drop: CustomEvent<{ dataTransfer: any }>;
  itemDelete: CustomEvent<{ item: HTMLElement }>;
  selectionChange: CustomEvent<{ selectedItems: Array<any> }>;
}

interface UploadCollectionDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'hideDragOverlay'
    | 'mode'
    | 'noDataDescription'
    | 'noDataText'
    | 'drop'
    | 'itemDelete'
    | 'selectionChange'
    | 'header'
  > {
  accessibleName: string;
  hideDragOverlay: boolean;
  mode:
    | 'Delete'
    | 'MultiSelect'
    | 'None'
    | 'SingleSelect'
    | 'SingleSelectAuto'
    | 'SingleSelectBegin'
    | 'SingleSelectEnd';
  noDataDescription: string;
  noDataText: string;

  header: Array<HTMLElement>;

  addEventListener<K extends keyof UploadCollectionDirectiveEventsMap>(
    type: K,
    listener: (
      this: UploadCollectionDirectiveElement,
      ev: UploadCollectionDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof UploadCollectionDirectiveEventsMap>(
    type: K,
    listener: (
      this: UploadCollectionDirectiveElement,
      ev: UploadCollectionDirectiveEventsMap[K]
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
  selector: 'ui5-upload-collection',
  exportAs: 'ui5UploadCollection',
})
class UploadCollectionDirective {
  @Input()
  set accessibleName(val: UploadCollectionDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): UploadCollectionDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set hideDragOverlay(
    val: UploadCollectionDirectiveElement['hideDragOverlay']
  ) {
    this.elementRef.nativeElement.hideDragOverlay = val;
  }
  get hideDragOverlay(): UploadCollectionDirectiveElement['hideDragOverlay'] {
    return this.elementRef.nativeElement.hideDragOverlay;
  }

  @Input()
  set mode(val: UploadCollectionDirectiveElement['mode']) {
    this.elementRef.nativeElement.mode = val;
  }
  get mode(): UploadCollectionDirectiveElement['mode'] {
    return this.elementRef.nativeElement.mode;
  }

  @Input()
  set noDataDescription(
    val: UploadCollectionDirectiveElement['noDataDescription']
  ) {
    this.elementRef.nativeElement.noDataDescription = val;
  }
  get noDataDescription(): UploadCollectionDirectiveElement['noDataDescription'] {
    return this.elementRef.nativeElement.noDataDescription;
  }

  @Input()
  set noDataText(val: UploadCollectionDirectiveElement['noDataText']) {
    this.elementRef.nativeElement.noDataText = val;
  }
  get noDataText(): UploadCollectionDirectiveElement['noDataText'] {
    return this.elementRef.nativeElement.noDataText;
  }
  @Output() drop: Observable<UploadCollectionDirectiveEventsMap['drop']> =
    NEVER as any;
  @Output() itemDelete: Observable<
    UploadCollectionDirectiveEventsMap['itemDelete']
  > = NEVER as any;
  @Output() selectionChange: Observable<
    UploadCollectionDirectiveEventsMap['selectionChange']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<UploadCollectionDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get header(): Array<HTMLElement> {
    return this.elementRef.nativeElement.header;
  }
}

export {
  UploadCollectionDirective,
  UploadCollectionDirectiveEventsMap,
  UploadCollectionDirectiveElement,
};
