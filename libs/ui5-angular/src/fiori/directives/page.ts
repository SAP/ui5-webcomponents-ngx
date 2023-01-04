import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/Page.js';
import { BarDirective } from './bar';

interface PageDirectiveElement
  extends Omit<
    HTMLElement,
    | 'backgroundDesign'
    | 'disableScrolling'
    | 'floatingFooter'
    | 'hideFooter'
    | 'footer'
    | 'header'
  > {
  backgroundDesign: 'List' | 'Solid' | 'Transparent';
  disableScrolling: boolean;
  floatingFooter: boolean;
  hideFooter: boolean;

  footer: BarDirective['element'];
  header: BarDirective['element'];
}

@Directive({
  selector: 'ui5-page',
  exportAs: 'ui5Page',
})
class PageDirective {
  @Input()
  set backgroundDesign(val: PageDirectiveElement['backgroundDesign']) {
    this.elementRef.nativeElement.backgroundDesign = val;
  }
  get backgroundDesign(): PageDirectiveElement['backgroundDesign'] {
    return this.elementRef.nativeElement.backgroundDesign;
  }

  @Input()
  set disableScrolling(val: PageDirectiveElement['disableScrolling']) {
    this.elementRef.nativeElement.disableScrolling = val;
  }
  get disableScrolling(): PageDirectiveElement['disableScrolling'] {
    return this.elementRef.nativeElement.disableScrolling;
  }

  @Input()
  set floatingFooter(val: PageDirectiveElement['floatingFooter']) {
    this.elementRef.nativeElement.floatingFooter = val;
  }
  get floatingFooter(): PageDirectiveElement['floatingFooter'] {
    return this.elementRef.nativeElement.floatingFooter;
  }

  @Input()
  set hideFooter(val: PageDirectiveElement['hideFooter']) {
    this.elementRef.nativeElement.hideFooter = val;
  }
  get hideFooter(): PageDirectiveElement['hideFooter'] {
    return this.elementRef.nativeElement.hideFooter;
  }

  constructor(private elementRef: ElementRef<PageDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get footer(): BarDirective['element'] {
    return this.elementRef.nativeElement.footer;
  }
  get header(): BarDirective['element'] {
    return this.elementRef.nativeElement.header;
  }
}

export { PageDirective, PageDirectiveElement };
