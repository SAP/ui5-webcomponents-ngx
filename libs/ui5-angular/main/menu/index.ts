import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Menu.js';
import { Observable, NEVER } from 'rxjs';

interface MenuDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'afterClose' | 'afterOpen' | 'beforeClose' | 'beforeOpen' | 'itemClick'
  > {
  afterClose: CustomEvent<void>;
  afterOpen: CustomEvent<void>;
  beforeClose: CustomEvent<{ escPressed: boolean }>;
  beforeOpen: CustomEvent<void>;
  itemClick: CustomEvent<{ item: Record<string, any>; text: string }>;
}

interface MenuDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'headerText'
    | 'open'
    | 'opener'
    | 'afterClose'
    | 'afterOpen'
    | 'beforeClose'
    | 'beforeOpen'
    | 'itemClick'
  > {
  effectiveDir: any;
  isUi5Element: any;
  headerText: string;
  open: boolean;
  opener: any;

  addEventListener<K extends keyof MenuDirectiveEventsMap>(
    type: K,
    listener: (
      this: MenuDirectiveElement,
      ev: MenuDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof MenuDirectiveEventsMap>(
    type: K,
    listener: (
      this: MenuDirectiveElement,
      ev: MenuDirectiveEventsMap[K]
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

  close(): any;

  showAt(opener: HTMLElement): any;
}

@Directive({
  selector: 'ui5-menu',
  exportAs: 'ui5Menu',
  standalone: true,
  providers: [],
})
class MenuDirective {
  @Input()
  set effectiveDir(val: MenuDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): MenuDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: MenuDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): MenuDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set headerText(val: MenuDirectiveElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText(): MenuDirectiveElement['headerText'] {
    return this.elementRef.nativeElement.headerText;
  }

  @Input()
  set open(val: MenuDirectiveElement['open']) {
    this.elementRef.nativeElement.open = val;
  }
  get open(): MenuDirectiveElement['open'] {
    return this.elementRef.nativeElement.open;
  }

  @Input()
  set opener(val: MenuDirectiveElement['opener']) {
    this.elementRef.nativeElement.opener = val;
  }
  get opener(): MenuDirectiveElement['opener'] {
    return this.elementRef.nativeElement.opener;
  }
  @Output() afterClose: Observable<MenuDirectiveEventsMap['afterClose']> =
    NEVER as any;
  @Output() afterOpen: Observable<MenuDirectiveEventsMap['afterOpen']> =
    NEVER as any;
  @Output() beforeClose: Observable<MenuDirectiveEventsMap['beforeClose']> =
    NEVER as any;
  @Output() beforeOpen: Observable<MenuDirectiveEventsMap['beforeOpen']> =
    NEVER as any;
  @Output() itemClick: Observable<MenuDirectiveEventsMap['itemClick']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<MenuDirectiveElement>) {}

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

  close(): any {
    return this.elementRef.nativeElement.close();
  }

  showAt(opener: HTMLElement): any {
    return this.elementRef.nativeElement.showAt(opener);
  }
}

export { MenuDirective, MenuDirectiveEventsMap, MenuDirectiveElement };
