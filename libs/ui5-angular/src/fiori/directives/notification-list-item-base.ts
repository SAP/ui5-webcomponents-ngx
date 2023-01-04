import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/NotificationListItemBase.js';
import { Observable, NEVER } from 'rxjs';
import { NotificationActionDirective } from './notification-action';

interface NotificationListItemBaseDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'close'> {
  close: CustomEvent<void>;
}

interface NotificationListItemBaseDirectiveElement
  extends Omit<
    HTMLElement,
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
}

@Directive({
  selector: 'ui5-li-notification-group',
  exportAs: 'ui5LiNotificationGroup',
})
class NotificationListItemBaseDirective {
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
}

export {
  NotificationListItemBaseDirective,
  NotificationListItemBaseDirectiveEventsMap,
  NotificationListItemBaseDirectiveElement,
};
