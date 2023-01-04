import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';
import { Observable, NEVER } from 'rxjs';

interface ShellBarItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'click'> {
  click: CustomEvent<{ targetRef: HTMLElement }>;
}

interface ShellBarItemDirectiveElement
  extends Omit<HTMLElement, 'count' | 'icon' | 'text' | 'click'> {
  count: string;
  icon: string;
  text: string;

  addEventListener<K extends keyof ShellBarItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: ShellBarItemDirectiveElement,
      ev: ShellBarItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ShellBarItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: ShellBarItemDirectiveElement,
      ev: ShellBarItemDirectiveEventsMap[K]
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
  selector: 'ui5-shellbar-item',
  exportAs: 'ui5ShellbarItem',
})
class ShellBarItemDirective {
  @Input()
  set count(val: ShellBarItemDirectiveElement['count']) {
    this.elementRef.nativeElement.count = val;
  }
  get count(): ShellBarItemDirectiveElement['count'] {
    return this.elementRef.nativeElement.count;
  }

  @Input()
  set icon(val: ShellBarItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): ShellBarItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set text(val: ShellBarItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): ShellBarItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }
  @Output() click: Observable<ShellBarItemDirectiveEventsMap['click']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<ShellBarItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export {
  ShellBarItemDirective,
  ShellBarItemDirectiveEventsMap,
  ShellBarItemDirectiveElement,
};
