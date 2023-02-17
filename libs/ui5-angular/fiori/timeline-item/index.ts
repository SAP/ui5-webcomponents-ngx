import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/TimelineItem.js';
import { Observable, NEVER } from 'rxjs';

interface TimelineItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'nameClick'> {
  nameClick: CustomEvent<void>;
}

interface TimelineItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'icon'
    | 'name'
    | 'nameClickable'
    | 'subtitleText'
    | 'titleText'
    | 'nameClick'
  > {
  effectiveDir: any;
  isUi5Element: any;
  icon: string;
  name: string;
  nameClickable: boolean;
  subtitleText: string;
  titleText: string;

  addEventListener<K extends keyof TimelineItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: TimelineItemDirectiveElement,
      ev: TimelineItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TimelineItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: TimelineItemDirectiveElement,
      ev: TimelineItemDirectiveEventsMap[K]
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

  focusLink(): any;
}

@Directive({
  selector: 'ui5-timeline-item',
  exportAs: 'ui5TimelineItem',
  standalone: true,
  providers: [],
})
class TimelineItemDirective {
  @Input()
  set effectiveDir(val: TimelineItemDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): TimelineItemDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: TimelineItemDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): TimelineItemDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set icon(val: TimelineItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): TimelineItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set name(val: TimelineItemDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): TimelineItemDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set nameClickable(val: TimelineItemDirectiveElement['nameClickable']) {
    this.elementRef.nativeElement.nameClickable = val;
  }
  get nameClickable(): TimelineItemDirectiveElement['nameClickable'] {
    return this.elementRef.nativeElement.nameClickable;
  }

  @Input()
  set subtitleText(val: TimelineItemDirectiveElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText(): TimelineItemDirectiveElement['subtitleText'] {
    return this.elementRef.nativeElement.subtitleText;
  }

  @Input()
  set titleText(val: TimelineItemDirectiveElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText(): TimelineItemDirectiveElement['titleText'] {
    return this.elementRef.nativeElement.titleText;
  }
  @Output() nameClick: Observable<TimelineItemDirectiveEventsMap['nameClick']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<TimelineItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
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

  focusLink(): any {
    return this.elementRef.nativeElement.focusLink();
  }
}

export {
  TimelineItemDirective,
  TimelineItemDirectiveEventsMap,
  TimelineItemDirectiveElement,
};
