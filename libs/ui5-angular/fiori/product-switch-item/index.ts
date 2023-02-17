import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/ProductSwitchItem.js';
import { Observable, NEVER } from 'rxjs';

interface ProductSwitchItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'click'> {
  click: CustomEvent<void>;
}

interface ProductSwitchItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'icon'
    | 'subtitleText'
    | 'target'
    | 'targetSrc'
    | 'titleText'
    | 'click'
  > {
  effectiveDir: any;
  isUi5Element: any;
  icon: string;
  subtitleText: string;
  target: string;
  targetSrc: string;
  titleText: string;

  addEventListener<K extends keyof ProductSwitchItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: ProductSwitchItemDirectiveElement,
      ev: ProductSwitchItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ProductSwitchItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: ProductSwitchItemDirectiveElement,
      ev: ProductSwitchItemDirectiveEventsMap[K]
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
  selector: 'ui5-product-switch-item',
  exportAs: 'ui5ProductSwitchItem',
  standalone: true,
  providers: [],
})
class ProductSwitchItemDirective {
  @Input()
  set effectiveDir(val: ProductSwitchItemDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): ProductSwitchItemDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: ProductSwitchItemDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): ProductSwitchItemDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set icon(val: ProductSwitchItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): ProductSwitchItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set subtitleText(val: ProductSwitchItemDirectiveElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText(): ProductSwitchItemDirectiveElement['subtitleText'] {
    return this.elementRef.nativeElement.subtitleText;
  }

  @Input()
  set target(val: ProductSwitchItemDirectiveElement['target']) {
    this.elementRef.nativeElement.target = val;
  }
  get target(): ProductSwitchItemDirectiveElement['target'] {
    return this.elementRef.nativeElement.target;
  }

  @Input()
  set targetSrc(val: ProductSwitchItemDirectiveElement['targetSrc']) {
    this.elementRef.nativeElement.targetSrc = val;
  }
  get targetSrc(): ProductSwitchItemDirectiveElement['targetSrc'] {
    return this.elementRef.nativeElement.targetSrc;
  }

  @Input()
  set titleText(val: ProductSwitchItemDirectiveElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText(): ProductSwitchItemDirectiveElement['titleText'] {
    return this.elementRef.nativeElement.titleText;
  }
  @Output() click: Observable<ProductSwitchItemDirectiveEventsMap['click']> =
    NEVER as any;
  constructor(
    private elementRef: ElementRef<ProductSwitchItemDirectiveElement>
  ) {}

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
  ProductSwitchItemDirective,
  ProductSwitchItemDirectiveEventsMap,
  ProductSwitchItemDirectiveElement,
};
