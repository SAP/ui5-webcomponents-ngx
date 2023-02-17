import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/UploadCollectionItem.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from '@ui5/webcomponents-ngx/main/button';

interface UploadCollectionItemDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'detailClick' | 'fileNameClick' | 'rename' | 'retry' | 'terminate'
  > {
  detailClick: CustomEvent<void>;
  fileNameClick: CustomEvent<void>;
  rename: CustomEvent<void>;
  retry: CustomEvent<void>;
  terminate: CustomEvent<void>;
}

interface UploadCollectionItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'selected'
    | 'navigated'
    | 'type'
    | 'disableDeleteButton'
    | 'file'
    | 'fileName'
    | 'fileNameClickable'
    | 'hideRetryButton'
    | 'hideTerminateButton'
    | 'progress'
    | 'uploadState'
    | 'detailClick'
    | 'fileNameClick'
    | 'rename'
    | 'retry'
    | 'terminate'
    | 'deleteButton'
    | 'thumbnail'
  > {
  effectiveDir: any;
  isUi5Element: any;
  selected: boolean;
  navigated: boolean;
  type: 'Active' | 'Detail' | 'Inactive' | 'Navigation';
  disableDeleteButton: boolean;
  file: any;
  fileName: string;
  fileNameClickable: boolean;
  hideRetryButton: boolean;
  hideTerminateButton: boolean;
  progress: any;
  uploadState: 'Complete' | 'Error' | 'Ready' | 'Uploading';

  deleteButton: ButtonDirective['element'];
  thumbnail: HTMLElement;

  addEventListener<K extends keyof UploadCollectionItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: UploadCollectionItemDirectiveElement,
      ev: UploadCollectionItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof UploadCollectionItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: UploadCollectionItemDirectiveElement,
      ev: UploadCollectionItemDirectiveEventsMap[K]
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
  selector: 'ui5-upload-collection-item',
  exportAs: 'ui5UploadCollectionItem',
  standalone: true,
  providers: [],
})
class UploadCollectionItemDirective {
  @Input()
  set effectiveDir(val: UploadCollectionItemDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): UploadCollectionItemDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: UploadCollectionItemDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): UploadCollectionItemDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set selected(val: UploadCollectionItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): UploadCollectionItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set navigated(val: UploadCollectionItemDirectiveElement['navigated']) {
    this.elementRef.nativeElement.navigated = val;
  }
  get navigated(): UploadCollectionItemDirectiveElement['navigated'] {
    return this.elementRef.nativeElement.navigated;
  }

  @Input()
  set type(val: UploadCollectionItemDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): UploadCollectionItemDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  @Input()
  set disableDeleteButton(
    val: UploadCollectionItemDirectiveElement['disableDeleteButton']
  ) {
    this.elementRef.nativeElement.disableDeleteButton = val;
  }
  get disableDeleteButton(): UploadCollectionItemDirectiveElement['disableDeleteButton'] {
    return this.elementRef.nativeElement.disableDeleteButton;
  }

  @Input()
  set file(val: UploadCollectionItemDirectiveElement['file']) {
    this.elementRef.nativeElement.file = val;
  }
  get file(): UploadCollectionItemDirectiveElement['file'] {
    return this.elementRef.nativeElement.file;
  }

  @Input()
  set fileName(val: UploadCollectionItemDirectiveElement['fileName']) {
    this.elementRef.nativeElement.fileName = val;
  }
  get fileName(): UploadCollectionItemDirectiveElement['fileName'] {
    return this.elementRef.nativeElement.fileName;
  }

  @Input()
  set fileNameClickable(
    val: UploadCollectionItemDirectiveElement['fileNameClickable']
  ) {
    this.elementRef.nativeElement.fileNameClickable = val;
  }
  get fileNameClickable(): UploadCollectionItemDirectiveElement['fileNameClickable'] {
    return this.elementRef.nativeElement.fileNameClickable;
  }

  @Input()
  set hideRetryButton(
    val: UploadCollectionItemDirectiveElement['hideRetryButton']
  ) {
    this.elementRef.nativeElement.hideRetryButton = val;
  }
  get hideRetryButton(): UploadCollectionItemDirectiveElement['hideRetryButton'] {
    return this.elementRef.nativeElement.hideRetryButton;
  }

  @Input()
  set hideTerminateButton(
    val: UploadCollectionItemDirectiveElement['hideTerminateButton']
  ) {
    this.elementRef.nativeElement.hideTerminateButton = val;
  }
  get hideTerminateButton(): UploadCollectionItemDirectiveElement['hideTerminateButton'] {
    return this.elementRef.nativeElement.hideTerminateButton;
  }

  @Input()
  set progress(val: UploadCollectionItemDirectiveElement['progress']) {
    this.elementRef.nativeElement.progress = val;
  }
  get progress(): UploadCollectionItemDirectiveElement['progress'] {
    return this.elementRef.nativeElement.progress;
  }

  @Input()
  set uploadState(val: UploadCollectionItemDirectiveElement['uploadState']) {
    this.elementRef.nativeElement.uploadState = val;
  }
  get uploadState(): UploadCollectionItemDirectiveElement['uploadState'] {
    return this.elementRef.nativeElement.uploadState;
  }
  @Output() detailClick: Observable<
    UploadCollectionItemDirectiveEventsMap['detailClick']
  > = NEVER as any;
  @Output() fileNameClick: Observable<
    UploadCollectionItemDirectiveEventsMap['fileNameClick']
  > = NEVER as any;
  @Output() rename: Observable<
    UploadCollectionItemDirectiveEventsMap['rename']
  > = NEVER as any;
  @Output() retry: Observable<UploadCollectionItemDirectiveEventsMap['retry']> =
    NEVER as any;
  @Output() terminate: Observable<
    UploadCollectionItemDirectiveEventsMap['terminate']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<UploadCollectionItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get deleteButton(): ButtonDirective['element'] {
    return this.elementRef.nativeElement.deleteButton;
  }
  get thumbnail(): HTMLElement {
    return this.elementRef.nativeElement.thumbnail;
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
  UploadCollectionItemDirective,
  UploadCollectionItemDirectiveEventsMap,
  UploadCollectionItemDirectiveElement,
};
