import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/NotificationListItemBase.js';
import { Observable, NEVER } from 'rxjs';
import { NotificationActionDirective } from './notification-action';

interface NotificationListItemBaseDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'close'> {
  close: CustomEvent<{ item: HTMLElement }>;
}

interface NotificationListItemBaseDirectiveElement
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
    | 'close'
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

  actions: Array<NotificationActionDirective['element']>;

  addEventListener<K extends keyof NotificationListItemBaseDirectiveEventsMap>(
    type: K,
    listener: (
      this: NotificationListItemBaseDirectiveElement,
      ev: NotificationListItemBaseDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<
    K extends keyof NotificationListItemBaseDirectiveEventsMap
  >(
    type: K,
    listener: (
      this: NotificationListItemBaseDirectiveElement,
      ev: NotificationListItemBaseDirectiveEventsMap[K]
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
class NotificationListItemBaseDirective {
  @Input()
  set effectiveDir(
    val: NotificationListItemBaseDirectiveElement['effectiveDir']
  ) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): NotificationListItemBaseDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(
    val: NotificationListItemBaseDirectiveElement['isUi5Element']
  ) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): NotificationListItemBaseDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set selected(val: NotificationListItemBaseDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): NotificationListItemBaseDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set busy(val: NotificationListItemBaseDirectiveElement['busy']) {
    this.elementRef.nativeElement.busy = val;
  }
  get busy(): NotificationListItemBaseDirectiveElement['busy'] {
    return this.elementRef.nativeElement.busy;
  }

  @Input()
  set busyDelay(val: NotificationListItemBaseDirectiveElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay(): NotificationListItemBaseDirectiveElement['busyDelay'] {
    return this.elementRef.nativeElement.busyDelay;
  }

  @Input()
  set priority(val: NotificationListItemBaseDirectiveElement['priority']) {
    this.elementRef.nativeElement.priority = val;
  }
  get priority(): NotificationListItemBaseDirectiveElement['priority'] {
    return this.elementRef.nativeElement.priority;
  }

  @Input()
  set read(val: NotificationListItemBaseDirectiveElement['read']) {
    this.elementRef.nativeElement.read = val;
  }
  get read(): NotificationListItemBaseDirectiveElement['read'] {
    return this.elementRef.nativeElement.read;
  }

  @Input()
  set showClose(val: NotificationListItemBaseDirectiveElement['showClose']) {
    this.elementRef.nativeElement.showClose = val;
  }
  get showClose(): NotificationListItemBaseDirectiveElement['showClose'] {
    return this.elementRef.nativeElement.showClose;
  }

  @Input()
  set titleText(val: NotificationListItemBaseDirectiveElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText(): NotificationListItemBaseDirectiveElement['titleText'] {
    return this.elementRef.nativeElement.titleText;
  }
  @Output() close: Observable<
    NotificationListItemBaseDirectiveEventsMap['close']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<NotificationListItemBaseDirectiveElement>
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
  NotificationListItemBaseDirective,
  NotificationListItemBaseDirectiveEventsMap,
  NotificationListItemBaseDirectiveElement,
};
