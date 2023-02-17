import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/MediaGallery.js';
import { Observable, NEVER } from 'rxjs';

interface MediaGalleryDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'displayAreaClick' | 'overflowClick' | 'selectionChange'
  > {
  displayAreaClick: CustomEvent<void>;
  overflowClick: CustomEvent<void>;
  selectionChange: CustomEvent<{ item: HTMLElement }>;
}

interface MediaGalleryDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'interactiveDisplayArea'
    | 'layout'
    | 'menuHorizontalAlign'
    | 'menuVerticalAlign'
    | 'showAllThumbnails'
    | 'displayAreaClick'
    | 'overflowClick'
    | 'selectionChange'
  > {
  effectiveDir: any;
  isUi5Element: any;
  interactiveDisplayArea: boolean;
  layout: 'Auto' | 'Horizontal' | 'Vertical';
  menuHorizontalAlign: 'Left' | 'Right';
  menuVerticalAlign: 'Bottom' | 'Top';
  showAllThumbnails: boolean;

  addEventListener<K extends keyof MediaGalleryDirectiveEventsMap>(
    type: K,
    listener: (
      this: MediaGalleryDirectiveElement,
      ev: MediaGalleryDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof MediaGalleryDirectiveEventsMap>(
    type: K,
    listener: (
      this: MediaGalleryDirectiveElement,
      ev: MediaGalleryDirectiveEventsMap[K]
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
  selector: 'ui5-media-gallery',
  exportAs: 'ui5MediaGallery',
  standalone: true,
  providers: [],
})
class MediaGalleryDirective {
  @Input()
  set effectiveDir(val: MediaGalleryDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): MediaGalleryDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: MediaGalleryDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): MediaGalleryDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set interactiveDisplayArea(
    val: MediaGalleryDirectiveElement['interactiveDisplayArea']
  ) {
    this.elementRef.nativeElement.interactiveDisplayArea = val;
  }
  get interactiveDisplayArea(): MediaGalleryDirectiveElement['interactiveDisplayArea'] {
    return this.elementRef.nativeElement.interactiveDisplayArea;
  }

  @Input()
  set layout(val: MediaGalleryDirectiveElement['layout']) {
    this.elementRef.nativeElement.layout = val;
  }
  get layout(): MediaGalleryDirectiveElement['layout'] {
    return this.elementRef.nativeElement.layout;
  }

  @Input()
  set menuHorizontalAlign(
    val: MediaGalleryDirectiveElement['menuHorizontalAlign']
  ) {
    this.elementRef.nativeElement.menuHorizontalAlign = val;
  }
  get menuHorizontalAlign(): MediaGalleryDirectiveElement['menuHorizontalAlign'] {
    return this.elementRef.nativeElement.menuHorizontalAlign;
  }

  @Input()
  set menuVerticalAlign(
    val: MediaGalleryDirectiveElement['menuVerticalAlign']
  ) {
    this.elementRef.nativeElement.menuVerticalAlign = val;
  }
  get menuVerticalAlign(): MediaGalleryDirectiveElement['menuVerticalAlign'] {
    return this.elementRef.nativeElement.menuVerticalAlign;
  }

  @Input()
  set showAllThumbnails(
    val: MediaGalleryDirectiveElement['showAllThumbnails']
  ) {
    this.elementRef.nativeElement.showAllThumbnails = val;
  }
  get showAllThumbnails(): MediaGalleryDirectiveElement['showAllThumbnails'] {
    return this.elementRef.nativeElement.showAllThumbnails;
  }
  @Output() displayAreaClick: Observable<
    MediaGalleryDirectiveEventsMap['displayAreaClick']
  > = NEVER as any;
  @Output() overflowClick: Observable<
    MediaGalleryDirectiveEventsMap['overflowClick']
  > = NEVER as any;
  @Output() selectionChange: Observable<
    MediaGalleryDirectiveEventsMap['selectionChange']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<MediaGalleryDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
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
  MediaGalleryDirective,
  MediaGalleryDirectiveEventsMap,
  MediaGalleryDirectiveElement,
};
