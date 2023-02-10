import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/NotificationListGroupItem.js';
import { Observable, NEVER } from 'rxjs';
import { NotificationActionDirective } from './notification-action';

interface NotificationListGroupItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'close' | 'toggle'> {
  close: CustomEvent<{ item: HTMLElement }>;
  toggle: CustomEvent<void>;
}

interface NotificationListGroupItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'selected'
    | 'busy'
    | 'busyDelay'
    | 'priority'
    | 'read'
    | 'showClose'
    | 'titleText'
    | 'collapsed'
    | 'showCounter'
    | 'close'
    | 'toggle'
    | 'actions'
  > {
  effectiveDir: any;
  isUi5Element: any;
  selected: boolean;
  busy: boolean;
  busyDelay: any;
  priority: 'High' | 'Low' | 'Medium' | 'None';
  read: boolean;
  showClose: boolean;
  titleText: string;
  collapsed: boolean;
  showCounter: boolean;

  actions: Array<NotificationActionDirective['element']>;

  addEventListener<K extends keyof NotificationListGroupItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: NotificationListGroupItemDirectiveElement,
      ev: NotificationListGroupItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<
    K extends keyof NotificationListGroupItemDirectiveEventsMap
  >(
    type: K,
    listener: (
      this: NotificationListGroupItemDirectiveElement,
      ev: NotificationListGroupItemDirectiveEventsMap[K]
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
  selector: 'ui5-li-notification-group',
  exportAs: 'ui5LiNotificationGroup',
})
class NotificationListGroupItemDirective {
  @Input()
  set effectiveDir(
    val: NotificationListGroupItemDirectiveElement['effectiveDir']
  ) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): NotificationListGroupItemDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(
    val: NotificationListGroupItemDirectiveElement['isUi5Element']
  ) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): NotificationListGroupItemDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set selected(val: NotificationListGroupItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): NotificationListGroupItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set busy(val: NotificationListGroupItemDirectiveElement['busy']) {
    this.elementRef.nativeElement.busy = val;
  }
  get busy(): NotificationListGroupItemDirectiveElement['busy'] {
    return this.elementRef.nativeElement.busy;
  }

  @Input()
  set busyDelay(val: NotificationListGroupItemDirectiveElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay(): NotificationListGroupItemDirectiveElement['busyDelay'] {
    return this.elementRef.nativeElement.busyDelay;
  }

  @Input()
  set priority(val: NotificationListGroupItemDirectiveElement['priority']) {
    this.elementRef.nativeElement.priority = val;
  }
  get priority(): NotificationListGroupItemDirectiveElement['priority'] {
    return this.elementRef.nativeElement.priority;
  }

  @Input()
  set read(val: NotificationListGroupItemDirectiveElement['read']) {
    this.elementRef.nativeElement.read = val;
  }
  get read(): NotificationListGroupItemDirectiveElement['read'] {
    return this.elementRef.nativeElement.read;
  }

  @Input()
  set showClose(val: NotificationListGroupItemDirectiveElement['showClose']) {
    this.elementRef.nativeElement.showClose = val;
  }
  get showClose(): NotificationListGroupItemDirectiveElement['showClose'] {
    return this.elementRef.nativeElement.showClose;
  }

  @Input()
  set titleText(val: NotificationListGroupItemDirectiveElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText(): NotificationListGroupItemDirectiveElement['titleText'] {
    return this.elementRef.nativeElement.titleText;
  }

  @Input()
  set collapsed(val: NotificationListGroupItemDirectiveElement['collapsed']) {
    this.elementRef.nativeElement.collapsed = val;
  }
  get collapsed(): NotificationListGroupItemDirectiveElement['collapsed'] {
    return this.elementRef.nativeElement.collapsed;
  }

  @Input()
  set showCounter(
    val: NotificationListGroupItemDirectiveElement['showCounter']
  ) {
    this.elementRef.nativeElement.showCounter = val;
  }
  get showCounter(): NotificationListGroupItemDirectiveElement['showCounter'] {
    return this.elementRef.nativeElement.showCounter;
  }
  @Output() close: Observable<
    NotificationListGroupItemDirectiveEventsMap['close']
  > = NEVER as any;
  @Output() toggle: Observable<
    NotificationListGroupItemDirectiveEventsMap['toggle']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<NotificationListGroupItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get actions(): Array<NotificationActionDirective['element']> {
    return this.elementRef.nativeElement.actions;
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
  NotificationListGroupItemDirective,
  NotificationListGroupItemDirectiveEventsMap,
  NotificationListGroupItemDirectiveElement,
};
