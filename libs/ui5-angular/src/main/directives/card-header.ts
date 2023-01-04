import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/CardHeader.js';
import { Observable, NEVER } from 'rxjs';

interface CardHeaderDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'click'> {
  click: CustomEvent<void>;
}

interface CardHeaderDirectiveElement
  extends Omit<
    HTMLElement,
    | 'interactive'
    | 'status'
    | 'subtitleText'
    | 'titleText'
    | 'click'
    | 'action'
    | 'avatar'
  > {
  interactive: boolean;
  status: string;
  subtitleText: string;
  titleText: string;

  action: Array<HTMLElement>;
  avatar: Array<HTMLElement>;

  addEventListener<K extends keyof CardHeaderDirectiveEventsMap>(
    type: K,
    listener: (
      this: CardHeaderDirectiveElement,
      ev: CardHeaderDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof CardHeaderDirectiveEventsMap>(
    type: K,
    listener: (
      this: CardHeaderDirectiveElement,
      ev: CardHeaderDirectiveEventsMap[K]
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
  selector: 'ui5-card-header',
  exportAs: 'ui5CardHeader',
})
class CardHeaderDirective {
  @Input()
  set interactive(val: CardHeaderDirectiveElement['interactive']) {
    this.elementRef.nativeElement.interactive = val;
  }
  get interactive(): CardHeaderDirectiveElement['interactive'] {
    return this.elementRef.nativeElement.interactive;
  }

  @Input()
  set status(val: CardHeaderDirectiveElement['status']) {
    this.elementRef.nativeElement.status = val;
  }
  get status(): CardHeaderDirectiveElement['status'] {
    return this.elementRef.nativeElement.status;
  }

  @Input()
  set subtitleText(val: CardHeaderDirectiveElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText(): CardHeaderDirectiveElement['subtitleText'] {
    return this.elementRef.nativeElement.subtitleText;
  }

  @Input()
  set titleText(val: CardHeaderDirectiveElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText(): CardHeaderDirectiveElement['titleText'] {
    return this.elementRef.nativeElement.titleText;
  }
  @Output() click: Observable<CardHeaderDirectiveEventsMap['click']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<CardHeaderDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get action(): Array<HTMLElement> {
    return this.elementRef.nativeElement.action;
  }
  get avatar(): Array<HTMLElement> {
    return this.elementRef.nativeElement.avatar;
  }
}

export {
  CardHeaderDirective,
  CardHeaderDirectiveEventsMap,
  CardHeaderDirectiveElement,
};
