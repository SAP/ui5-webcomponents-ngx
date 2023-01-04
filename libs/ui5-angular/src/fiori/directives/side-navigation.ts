import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/SideNavigation.js';
import { Observable, NEVER } from 'rxjs';
import { SideNavigationItemDirective } from './side-navigation-item';

interface SideNavigationDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'selectionChange'> {
  selectionChange: CustomEvent<{ item: HTMLElement }>;
}

interface SideNavigationDirectiveElement
  extends Omit<
    HTMLElement,
    'collapsed' | 'selectionChange' | 'fixedItems' | 'header'
  > {
  collapsed: boolean;

  fixedItems: SideNavigationItemDirective['element'];
  header: Array<HTMLElement>;

  addEventListener<K extends keyof SideNavigationDirectiveEventsMap>(
    type: K,
    listener: (
      this: SideNavigationDirectiveElement,
      ev: SideNavigationDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SideNavigationDirectiveEventsMap>(
    type: K,
    listener: (
      this: SideNavigationDirectiveElement,
      ev: SideNavigationDirectiveEventsMap[K]
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
  selector: 'ui5-side-navigation',
  exportAs: 'ui5SideNavigation',
})
class SideNavigationDirective {
  @Input()
  set collapsed(val: SideNavigationDirectiveElement['collapsed']) {
    this.elementRef.nativeElement.collapsed = val;
  }
  get collapsed(): SideNavigationDirectiveElement['collapsed'] {
    return this.elementRef.nativeElement.collapsed;
  }
  @Output() selectionChange: Observable<
    SideNavigationDirectiveEventsMap['selectionChange']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<SideNavigationDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get fixedItems(): SideNavigationItemDirective['element'] {
    return this.elementRef.nativeElement.fixedItems;
  }
  get header(): Array<HTMLElement> {
    return this.elementRef.nativeElement.header;
  }
}

export {
  SideNavigationDirective,
  SideNavigationDirectiveEventsMap,
  SideNavigationDirectiveElement,
};
