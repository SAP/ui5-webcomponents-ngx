import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Carousel.js';
import { Observable, NEVER } from 'rxjs';

interface CarouselDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'navigate'> {
  navigate: CustomEvent<{ selectedIndex: number }>;
}

interface CarouselDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'arrowsPlacement'
    | 'cyclic'
    | 'hideNavigationArrows'
    | 'hidePageIndicator'
    | 'itemsPerPageL'
    | 'itemsPerPageM'
    | 'itemsPerPageS'
    | 'pageIndicatorStyle'
    | 'navigate'
  > {
  effectiveDir: any;
  isUi5Element: any;
  arrowsPlacement: 'Content' | 'Navigation';
  cyclic: boolean;
  hideNavigationArrows: boolean;
  hidePageIndicator: boolean;
  itemsPerPageL: any;
  itemsPerPageM: any;
  itemsPerPageS: any;
  pageIndicatorStyle: 'Default' | 'Numeric';

  addEventListener<K extends keyof CarouselDirectiveEventsMap>(
    type: K,
    listener: (
      this: CarouselDirectiveElement,
      ev: CarouselDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof CarouselDirectiveEventsMap>(
    type: K,
    listener: (
      this: CarouselDirectiveElement,
      ev: CarouselDirectiveEventsMap[K]
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

  navigateTo(itemIndex: number): any;
}

@Directive({
  selector: 'ui5-carousel',
  exportAs: 'ui5Carousel',
  standalone: true,
  providers: [],
})
class CarouselDirective {
  @Input()
  set effectiveDir(val: CarouselDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): CarouselDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: CarouselDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): CarouselDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set arrowsPlacement(val: CarouselDirectiveElement['arrowsPlacement']) {
    this.elementRef.nativeElement.arrowsPlacement = val;
  }
  get arrowsPlacement(): CarouselDirectiveElement['arrowsPlacement'] {
    return this.elementRef.nativeElement.arrowsPlacement;
  }

  @Input()
  set cyclic(val: CarouselDirectiveElement['cyclic']) {
    this.elementRef.nativeElement.cyclic = val;
  }
  get cyclic(): CarouselDirectiveElement['cyclic'] {
    return this.elementRef.nativeElement.cyclic;
  }

  @Input()
  set hideNavigationArrows(
    val: CarouselDirectiveElement['hideNavigationArrows']
  ) {
    this.elementRef.nativeElement.hideNavigationArrows = val;
  }
  get hideNavigationArrows(): CarouselDirectiveElement['hideNavigationArrows'] {
    return this.elementRef.nativeElement.hideNavigationArrows;
  }

  @Input()
  set hidePageIndicator(val: CarouselDirectiveElement['hidePageIndicator']) {
    this.elementRef.nativeElement.hidePageIndicator = val;
  }
  get hidePageIndicator(): CarouselDirectiveElement['hidePageIndicator'] {
    return this.elementRef.nativeElement.hidePageIndicator;
  }

  @Input()
  set itemsPerPageL(val: CarouselDirectiveElement['itemsPerPageL']) {
    this.elementRef.nativeElement.itemsPerPageL = val;
  }
  get itemsPerPageL(): CarouselDirectiveElement['itemsPerPageL'] {
    return this.elementRef.nativeElement.itemsPerPageL;
  }

  @Input()
  set itemsPerPageM(val: CarouselDirectiveElement['itemsPerPageM']) {
    this.elementRef.nativeElement.itemsPerPageM = val;
  }
  get itemsPerPageM(): CarouselDirectiveElement['itemsPerPageM'] {
    return this.elementRef.nativeElement.itemsPerPageM;
  }

  @Input()
  set itemsPerPageS(val: CarouselDirectiveElement['itemsPerPageS']) {
    this.elementRef.nativeElement.itemsPerPageS = val;
  }
  get itemsPerPageS(): CarouselDirectiveElement['itemsPerPageS'] {
    return this.elementRef.nativeElement.itemsPerPageS;
  }

  @Input()
  set pageIndicatorStyle(val: CarouselDirectiveElement['pageIndicatorStyle']) {
    this.elementRef.nativeElement.pageIndicatorStyle = val;
  }
  get pageIndicatorStyle(): CarouselDirectiveElement['pageIndicatorStyle'] {
    return this.elementRef.nativeElement.pageIndicatorStyle;
  }
  @Output() navigate: Observable<CarouselDirectiveEventsMap['navigate']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<CarouselDirectiveElement>) {}

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

  navigateTo(itemIndex: number): any {
    return this.elementRef.nativeElement.navigateTo(itemIndex);
  }
}

export {
  CarouselDirective,
  CarouselDirectiveEventsMap,
  CarouselDirectiveElement,
};
