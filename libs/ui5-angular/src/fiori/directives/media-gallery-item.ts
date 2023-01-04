import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/MediaGalleryItem.js';

interface MediaGalleryItemDirectiveElement
  extends Omit<HTMLElement, 'disabled' | 'layout' | 'selected' | 'thumbnail'> {
  disabled: boolean;
  layout: 'Square' | 'Wide';
  selected: boolean;

  thumbnail: HTMLElement;
}

@Directive({
  selector: 'ui5-media-gallery-item',
  exportAs: 'ui5MediaGalleryItem',
})
class MediaGalleryItemDirective {
  @Input()
  set disabled(val: MediaGalleryItemDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): MediaGalleryItemDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set layout(val: MediaGalleryItemDirectiveElement['layout']) {
    this.elementRef.nativeElement.layout = val;
  }
  get layout(): MediaGalleryItemDirectiveElement['layout'] {
    return this.elementRef.nativeElement.layout;
  }

  @Input()
  set selected(val: MediaGalleryItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): MediaGalleryItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  constructor(
    private elementRef: ElementRef<MediaGalleryItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get thumbnail(): HTMLElement {
    return this.elementRef.nativeElement.thumbnail;
  }
}

export { MediaGalleryItemDirective, MediaGalleryItemDirectiveElement };
