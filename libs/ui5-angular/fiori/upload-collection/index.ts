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
    | 'effectiveDir'
    | 'isUi5Element'
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
  effectiveDir: any;
  isUi5Element: any;
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
  selector: 'ui5-upload-collection',
  exportAs: 'ui5UploadCollection',
  standalone: true,
  providers: [],
})
class UploadCollectionDirective {
  @Input()
  set effectiveDir(val: UploadCollectionDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): UploadCollectionDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: UploadCollectionDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): UploadCollectionDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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

export {
  UploadCollectionDirective,
  UploadCollectionDirectiveEventsMap,
  UploadCollectionDirectiveElement,
};
