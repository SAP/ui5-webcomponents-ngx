import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Breadcrumbs.js';
import { Observable, NEVER } from 'rxjs';

interface BreadcrumbsDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'itemClick'> {
  itemClick: CustomEvent<{
    item: HTMLElement;
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
  }>;
}

interface BreadcrumbsDirectiveElement
  extends Omit<
    HTMLElement,
    'effectiveDir' | 'isUi5Element' | 'design' | 'separatorStyle' | 'itemClick'
  > {
  effectiveDir: any;
  isUi5Element: any;
  design: 'NoCurrentPage' | 'Standard';
  separatorStyle:
    | 'BackSlash'
    | 'DoubleBackSlash'
    | 'DoubleGreaterThan'
    | 'DoubleSlash'
    | 'GreaterThan'
    | 'Slash';

  addEventListener<K extends keyof BreadcrumbsDirectiveEventsMap>(
    type: K,
    listener: (
      this: BreadcrumbsDirectiveElement,
      ev: BreadcrumbsDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof BreadcrumbsDirectiveEventsMap>(
    type: K,
    listener: (
      this: BreadcrumbsDirectiveElement,
      ev: BreadcrumbsDirectiveEventsMap[K]
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
  selector: 'ui5-breadcrumbs',
  exportAs: 'ui5Breadcrumbs',
})
class BreadcrumbsDirective {
  @Input()
  set effectiveDir(val: BreadcrumbsDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): BreadcrumbsDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: BreadcrumbsDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): BreadcrumbsDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set design(val: BreadcrumbsDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): BreadcrumbsDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set separatorStyle(val: BreadcrumbsDirectiveElement['separatorStyle']) {
    this.elementRef.nativeElement.separatorStyle = val;
  }
  get separatorStyle(): BreadcrumbsDirectiveElement['separatorStyle'] {
    return this.elementRef.nativeElement.separatorStyle;
  }
  @Output() itemClick: Observable<BreadcrumbsDirectiveEventsMap['itemClick']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<BreadcrumbsDirectiveElement>) {}

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
  BreadcrumbsDirective,
  BreadcrumbsDirectiveEventsMap,
  BreadcrumbsDirectiveElement,
};
