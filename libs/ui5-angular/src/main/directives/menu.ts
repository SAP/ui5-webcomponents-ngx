import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Menu.js';
import { Observable, NEVER } from 'rxjs';

interface MenuDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'itemClick'> {
  itemClick: CustomEvent<{ item: Record<string, any>; text: string }>;
}

interface MenuDirectiveElement
  extends Omit<HTMLElement, 'headerText' | 'itemClick'> {
  headerText: string;

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

  close(): any;

  showAt(opener: HTMLElement): any;
}

@Directive({
  selector: 'ui5-menu',
  exportAs: 'ui5Menu',
})
class MenuDirective {
  @Input()
  set headerText(val: MenuDirectiveElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText(): MenuDirectiveElement['headerText'] {
    return this.elementRef.nativeElement.headerText;
  }
  @Output() itemClick: Observable<MenuDirectiveEventsMap['itemClick']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<MenuDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  close(): any {
    return this.elementRef.nativeElement.close();
  }

  showAt(opener: HTMLElement): any {
    return this.elementRef.nativeElement.showAt(opener);
  }
}

export { MenuDirective, MenuDirectiveEventsMap, MenuDirectiveElement };
