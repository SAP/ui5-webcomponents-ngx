import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/MessageStrip.js';
import { Observable, NEVER } from 'rxjs';
import { IconDirective } from '@ui5/webcomponents-ngx/main/icon';

interface MessageStripDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'close'> {
  close: CustomEvent<void>;
}

interface MessageStripDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'design'
    | 'hideCloseButton'
    | 'hideIcon'
    | 'close'
    | 'icon'
  > {
  effectiveDir: any;
  isUi5Element: any;
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
  selector: 'ui5-message-strip',
  exportAs: 'ui5MessageStrip',
  standalone: true,
  providers: [],
})
class MessageStripDirective {
  @Input()
  set effectiveDir(val: MessageStripDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): MessageStripDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: MessageStripDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): MessageStripDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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
  MessageStripDirective,
  MessageStripDirectiveEventsMap,
  MessageStripDirectiveElement,
};
