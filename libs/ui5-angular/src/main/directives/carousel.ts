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
    | 'arrowsPlacement'
    | 'cyclic'
    | 'hideNavigationArrows'
    | 'hidePageIndicator'
    | 'itemsPerPageL'
    | 'itemsPerPageM'
    | 'itemsPerPageS'
    | 'navigate'
  > {
  arrowsPlacement: 'Content' | 'Navigation';
  cyclic: boolean;
  hideNavigationArrows: boolean;
  hidePageIndicator: boolean;
  itemsPerPageL: any;
  itemsPerPageM: any;
  itemsPerPageS: any;

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

  navigateTo(itemIndex: number): any;
}

@Directive({
  selector: 'ui5-carousel',
  exportAs: 'ui5Carousel',
})
class CarouselDirective {
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
  @Output() navigate: Observable<CarouselDirectiveEventsMap['navigate']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<CarouselDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
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
