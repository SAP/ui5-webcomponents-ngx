import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/MessageStrip.js';
import { Observable, NEVER } from 'rxjs';
import { IconDirective } from './icon';

interface MessageStripDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'close'> {
  close: CustomEvent<void>;
}

interface MessageStripDirectiveElement
  extends Omit<
    HTMLElement,
    'design' | 'hideCloseButton' | 'hideIcon' | 'close' | 'icon'
  > {
  design: 'Information' | 'Negative' | 'Positive' | 'Warning';
  hideCloseButton: boolean;
  hideIcon: boolean;

  icon: IconDirective['element'];

  addEventListener<K extends keyof MessageStripDirectiveEventsMap>(
    type: K,
    listener: (
      this: MessageStripDirectiveElement,
      ev: MessageStripDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof MessageStripDirectiveEventsMap>(
    type: K,
    listener: (
      this: MessageStripDirectiveElement,
      ev: MessageStripDirectiveEventsMap[K]
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
  selector: 'ui5-message-strip',
  exportAs: 'ui5MessageStrip',
})
class MessageStripDirective {
  @Input()
  set design(val: MessageStripDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): MessageStripDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set hideCloseButton(val: MessageStripDirectiveElement['hideCloseButton']) {
    this.elementRef.nativeElement.hideCloseButton = val;
  }
  get hideCloseButton(): MessageStripDirectiveElement['hideCloseButton'] {
    return this.elementRef.nativeElement.hideCloseButton;
  }

  @Input()
  set hideIcon(val: MessageStripDirectiveElement['hideIcon']) {
    this.elementRef.nativeElement.hideIcon = val;
  }
  get hideIcon(): MessageStripDirectiveElement['hideIcon'] {
    return this.elementRef.nativeElement.hideIcon;
  }
  @Output() close: Observable<MessageStripDirectiveEventsMap['close']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<MessageStripDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get icon(): IconDirective['element'] {
    return this.elementRef.nativeElement.icon;
  }
}

export {
  MessageStripDirective,
  MessageStripDirectiveEventsMap,
  MessageStripDirectiveElement,
};
