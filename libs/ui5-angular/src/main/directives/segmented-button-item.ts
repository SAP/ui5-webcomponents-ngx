import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/SegmentedButtonItem.js';
import { Observable, NEVER } from 'rxjs';

interface SegmentedButtonItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'click'> {
  click: CustomEvent<void>;
}

interface SegmentedButtonItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibilityAttributes'
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'design'
    | 'disabled'
    | 'icon'
    | 'iconEnd'
    | 'submits'
    | 'tooltip'
    | 'pressed'
    | 'click'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibilityAttributes: Record<string, any>;
  accessibleName: string;
  accessibleNameRef: string;
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  disabled: boolean;
  icon: string;
  iconEnd: boolean;
  submits: boolean;
  tooltip: string;
  pressed: boolean;

  addEventListener<K extends keyof SegmentedButtonItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: SegmentedButtonItemDirectiveElement,
      ev: SegmentedButtonItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SegmentedButtonItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: SegmentedButtonItemDirectiveElement,
      ev: SegmentedButtonItemDirectiveEventsMap[K]
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
  selector: 'ui5-segmented-button-item',
  exportAs: 'ui5SegmentedButtonItem',
})
class SegmentedButtonItemDirective {
  @Input()
  set effectiveDir(val: SegmentedButtonItemDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): SegmentedButtonItemDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: SegmentedButtonItemDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): SegmentedButtonItemDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibilityAttributes(
    val: SegmentedButtonItemDirectiveElement['accessibilityAttributes']
  ) {
    this.elementRef.nativeElement.accessibilityAttributes = val;
  }
  get accessibilityAttributes(): SegmentedButtonItemDirectiveElement['accessibilityAttributes'] {
    return this.elementRef.nativeElement.accessibilityAttributes;
  }

  @Input()
  set accessibleName(
    val: SegmentedButtonItemDirectiveElement['accessibleName']
  ) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): SegmentedButtonItemDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(
    val: SegmentedButtonItemDirectiveElement['accessibleNameRef']
  ) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): SegmentedButtonItemDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set design(val: SegmentedButtonItemDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): SegmentedButtonItemDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set disabled(val: SegmentedButtonItemDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): SegmentedButtonItemDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: SegmentedButtonItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): SegmentedButtonItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set iconEnd(val: SegmentedButtonItemDirectiveElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd(): SegmentedButtonItemDirectiveElement['iconEnd'] {
    return this.elementRef.nativeElement.iconEnd;
  }

  @Input()
  set submits(val: SegmentedButtonItemDirectiveElement['submits']) {
    this.elementRef.nativeElement.submits = val;
  }
  get submits(): SegmentedButtonItemDirectiveElement['submits'] {
    return this.elementRef.nativeElement.submits;
  }

  @Input()
  set tooltip(val: SegmentedButtonItemDirectiveElement['tooltip']) {
    this.elementRef.nativeElement.tooltip = val;
  }
  get tooltip(): SegmentedButtonItemDirectiveElement['tooltip'] {
    return this.elementRef.nativeElement.tooltip;
  }

  @Input()
  set pressed(val: SegmentedButtonItemDirectiveElement['pressed']) {
    this.elementRef.nativeElement.pressed = val;
  }
  get pressed(): SegmentedButtonItemDirectiveElement['pressed'] {
    return this.elementRef.nativeElement.pressed;
  }
  @Output() click: Observable<SegmentedButtonItemDirectiveEventsMap['click']> =
    NEVER as any;
  constructor(
    private elementRef: ElementRef<SegmentedButtonItemDirectiveElement>
  ) {}

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
}

export {
  SegmentedButtonItemDirective,
  SegmentedButtonItemDirectiveEventsMap,
  SegmentedButtonItemDirectiveElement,
};
