import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Token.js';
import { Observable, NEVER } from 'rxjs';
import { IconDirective } from './icon';

interface TokenDirectiveEventsMap extends Omit<HTMLElementEventMap, 'select'> {
  select: CustomEvent<void>;
}

interface TokenDirectiveElement
  extends Omit<
    HTMLElement,
    'readonly' | 'selected' | 'text' | 'select' | 'closeIcon'
  > {
  readonly: boolean;
  selected: boolean;
  text: string;

  closeIcon: IconDirective['element'];

  addEventListener<K extends keyof TokenDirectiveEventsMap>(
    type: K,
    listener: (
      this: TokenDirectiveElement,
      ev: TokenDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TokenDirectiveEventsMap>(
    type: K,
    listener: (
      this: TokenDirectiveElement,
      ev: TokenDirectiveEventsMap[K]
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
  selector: 'ui5-token',
  exportAs: 'ui5Token',
})
class TokenDirective {
  @Input()
  set readonly(val: TokenDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): TokenDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set selected(val: TokenDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): TokenDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set text(val: TokenDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): TokenDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }
  @Output() select: Observable<TokenDirectiveEventsMap['select']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<TokenDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get closeIcon(): IconDirective['element'] {
    return this.elementRef.nativeElement.closeIcon;
  }
}

export { TokenDirective, TokenDirectiveEventsMap, TokenDirectiveElement };
