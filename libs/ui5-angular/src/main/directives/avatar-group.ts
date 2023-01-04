import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/AvatarGroup.js';
import { Observable, NEVER } from 'rxjs';

interface AvatarGroupDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'click' | 'overflow'> {
  click: CustomEvent<{
    targetRef: HTMLElement;
    overflowButtonClicked: boolean;
  }>;
  overflow: CustomEvent<void>;
}

interface AvatarGroupDirectiveElement
  extends Omit<
    HTMLElement,
    | 'colorScheme'
    | 'hiddenItems'
    | 'type'
    | 'click'
    | 'overflow'
    | 'overflowButton'
  > {
  colorScheme: Array<
    | 'Accent1'
    | 'Accent10'
    | 'Accent2'
    | 'Accent3'
    | 'Accent4'
    | 'Accent5'
    | 'Accent6'
    | 'Accent7'
    | 'Accent8'
    | 'Accent9'
    | 'Placeholder'
  >;
  hiddenItems: Array<HTMLElement>;
  type: 'Group' | 'Individual';

  overflowButton: HTMLElement;

  addEventListener<K extends keyof AvatarGroupDirectiveEventsMap>(
    type: K,
    listener: (
      this: AvatarGroupDirectiveElement,
      ev: AvatarGroupDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof AvatarGroupDirectiveEventsMap>(
    type: K,
    listener: (
      this: AvatarGroupDirectiveElement,
      ev: AvatarGroupDirectiveEventsMap[K]
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
  selector: 'ui5-avatar-group',
  exportAs: 'ui5AvatarGroup',
})
class AvatarGroupDirective {
  @Input()
  set colorScheme(val: AvatarGroupDirectiveElement['colorScheme']) {
    this.elementRef.nativeElement.colorScheme = val;
  }
  get colorScheme(): AvatarGroupDirectiveElement['colorScheme'] {
    return this.elementRef.nativeElement.colorScheme;
  }

  @Input()
  set hiddenItems(val: AvatarGroupDirectiveElement['hiddenItems']) {
    this.elementRef.nativeElement.hiddenItems = val;
  }
  get hiddenItems(): AvatarGroupDirectiveElement['hiddenItems'] {
    return this.elementRef.nativeElement.hiddenItems;
  }

  @Input()
  set type(val: AvatarGroupDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): AvatarGroupDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }
  @Output() click: Observable<AvatarGroupDirectiveEventsMap['click']> =
    NEVER as any;
  @Output() overflow: Observable<AvatarGroupDirectiveEventsMap['overflow']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<AvatarGroupDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get overflowButton(): HTMLElement {
    return this.elementRef.nativeElement.overflowButton;
  }
}

export {
  AvatarGroupDirective,
  AvatarGroupDirectiveEventsMap,
  AvatarGroupDirectiveElement,
};
