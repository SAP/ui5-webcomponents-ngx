import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/NotificationListItem.js';
import { Observable, NEVER } from 'rxjs';
import { NotificationActionDirective } from './notification-action';
import { AvatarDirective } from '../../main/directives/avatar';

interface NotificationListItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'close'> {
  close: CustomEvent<void>;
}

interface NotificationListItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'selected'
    | 'busy'
    | 'busyDelay'
    | 'priority'
    | 'read'
    | 'showClose'
    | 'titleText'
    | 'wrappingType'
    | 'close'
    | 'actions'
    | 'avatar'
    | 'footnotes'
  > {
  selected: boolean;
  busy: boolean;
  busyDelay: any;
  priority: 'High' | 'Low' | 'Medium' | 'None';
  read: boolean;
  showClose: boolean;
  titleText: string;
  wrappingType: 'None' | 'Normal';

  actions: Array<NotificationActionDirective['element']>;
  avatar: AvatarDirective['element'];
  footnotes: Array<HTMLElement>;

  addEventListener<K extends keyof NotificationListItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: NotificationListItemDirectiveElement,
      ev: NotificationListItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof NotificationListItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: NotificationListItemDirectiveElement,
      ev: NotificationListItemDirectiveEventsMap[K]
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
  selector: 'ui5-li-notification',
  exportAs: 'ui5LiNotification',
})
class NotificationListItemDirective {
  @Input()
  set selected(val: NotificationListItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): NotificationListItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set busy(val: NotificationListItemDirectiveElement['busy']) {
    this.elementRef.nativeElement.busy = val;
  }
  get busy(): NotificationListItemDirectiveElement['busy'] {
    return this.elementRef.nativeElement.busy;
  }

  @Input()
  set busyDelay(val: NotificationListItemDirectiveElement['busyDelay']) {
    this.elementRef.nativeElement.busyDelay = val;
  }
  get busyDelay(): NotificationListItemDirectiveElement['busyDelay'] {
    return this.elementRef.nativeElement.busyDelay;
  }

  @Input()
  set priority(val: NotificationListItemDirectiveElement['priority']) {
    this.elementRef.nativeElement.priority = val;
  }
  get priority(): NotificationListItemDirectiveElement['priority'] {
    return this.elementRef.nativeElement.priority;
  }

  @Input()
  set read(val: NotificationListItemDirectiveElement['read']) {
    this.elementRef.nativeElement.read = val;
  }
  get read(): NotificationListItemDirectiveElement['read'] {
    return this.elementRef.nativeElement.read;
  }

  @Input()
  set showClose(val: NotificationListItemDirectiveElement['showClose']) {
    this.elementRef.nativeElement.showClose = val;
  }
  get showClose(): NotificationListItemDirectiveElement['showClose'] {
    return this.elementRef.nativeElement.showClose;
  }

  @Input()
  set titleText(val: NotificationListItemDirectiveElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText(): NotificationListItemDirectiveElement['titleText'] {
    return this.elementRef.nativeElement.titleText;
  }

  @Input()
  set wrappingType(val: NotificationListItemDirectiveElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType(): NotificationListItemDirectiveElement['wrappingType'] {
    return this.elementRef.nativeElement.wrappingType;
  }
  @Output() close: Observable<NotificationListItemDirectiveEventsMap['close']> =
    NEVER as any;
  constructor(
    private elementRef: ElementRef<NotificationListItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get actions(): Array<NotificationActionDirective['element']> {
    return this.elementRef.nativeElement.actions;
  }
  get avatar(): AvatarDirective['element'] {
    return this.elementRef.nativeElement.avatar;
  }
  get footnotes(): Array<HTMLElement> {
    return this.elementRef.nativeElement.footnotes;
  }
}

export {
  NotificationListItemDirective,
  NotificationListItemDirectiveEventsMap,
  NotificationListItemDirectiveElement,
};
