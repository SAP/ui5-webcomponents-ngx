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
    | 'interactiveDisplayArea'
    | 'layout'
    | 'menuHorizontalAlign'
    | 'menuVerticalAlign'
    | 'showAllThumbnails'
    | 'displayAreaClick'
    | 'overflowClick'
    | 'selectionChange'
  > {
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
}

@Directive({
  selector: 'ui5-media-gallery',
  exportAs: 'ui5MediaGallery',
})
class MediaGalleryDirective {
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
}

export {
  MediaGalleryDirective,
  MediaGalleryDirectiveEventsMap,
  MediaGalleryDirectiveElement,
};
