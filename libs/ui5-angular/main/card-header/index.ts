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
    | 'effectiveDir'
    | 'isUi5Element'
    | 'interactive'
    | 'status'
    | 'subtitleText'
    | 'titleText'
    | 'click'
    | 'action'
    | 'avatar'
  > {
  effectiveDir: any;
  isUi5Element: any;
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
  selector: 'ui5-card-header',
  exportAs: 'ui5CardHeader',
  standalone: true,
  providers: [],
})
class CardHeaderDirective {
  @Input()
  set effectiveDir(val: CardHeaderDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): CardHeaderDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: CardHeaderDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): CardHeaderDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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
  CardHeaderDirective,
  CardHeaderDirectiveEventsMap,
  CardHeaderDirectiveElement,
};
