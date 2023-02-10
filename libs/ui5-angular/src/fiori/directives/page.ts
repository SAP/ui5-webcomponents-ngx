import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/Page.js';
import { BarDirective } from './bar';

interface PageDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'backgroundDesign'
    | 'disableScrolling'
    | 'floatingFooter'
    | 'hideFooter'
    | 'footer'
    | 'header'
  > {
  effectiveDir: any;
  isUi5Element: any;
  backgroundDesign: 'List' | 'Solid' | 'Transparent';
  disableScrolling: boolean;
  floatingFooter: boolean;
  hideFooter: boolean;

  footer: BarDirective['element'];
  header: BarDirective['element'];

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
  selector: 'ui5-page',
  exportAs: 'ui5Page',
})
class PageDirective {
  @Input()
  set effectiveDir(val: PageDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): PageDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: PageDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): PageDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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

export { PageDirective, PageDirectiveElement };
