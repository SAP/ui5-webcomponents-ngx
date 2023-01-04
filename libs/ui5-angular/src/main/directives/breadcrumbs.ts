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
  extends Omit<HTMLElement, 'design' | 'separatorStyle' | 'itemClick'> {
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
}

@Directive({
  selector: 'ui5-breadcrumbs',
  exportAs: 'ui5Breadcrumbs',
})
class BreadcrumbsDirective {
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
}

export {
  BreadcrumbsDirective,
  BreadcrumbsDirectiveEventsMap,
  BreadcrumbsDirectiveElement,
};
