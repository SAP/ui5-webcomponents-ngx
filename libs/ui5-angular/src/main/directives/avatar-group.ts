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
    | 'effectiveDir'
    | 'isUi5Element'
    | 'colorScheme'
    | 'hiddenItems'
    | 'type'
    | 'click'
    | 'overflow'
    | 'overflowButton'
  > {
  effectiveDir: any;
  isUi5Element: any;
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
  selector: 'ui5-avatar-group',
  exportAs: 'ui5AvatarGroup',
})
class AvatarGroupDirective {
  @Input()
  set effectiveDir(val: AvatarGroupDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): AvatarGroupDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: AvatarGroupDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): AvatarGroupDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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
  AvatarGroupDirective,
  AvatarGroupDirectiveEventsMap,
  AvatarGroupDirectiveElement,
};
