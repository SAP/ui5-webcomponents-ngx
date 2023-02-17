import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/ToggleButton.js';
import { Observable, NEVER } from 'rxjs';

interface ToggleButtonDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'click'> {
  click: CustomEvent<void>;
}

interface ToggleButtonDirectiveElement
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

  addEventListener<K extends keyof ToggleButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: ToggleButtonDirectiveElement,
      ev: ToggleButtonDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ToggleButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: ToggleButtonDirectiveElement,
      ev: ToggleButtonDirectiveEventsMap[K]
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
  selector: 'ui5-toggle-button',
  exportAs: 'ui5ToggleButton',
  standalone: true,
  providers: [],
})
class ToggleButtonDirective {
  @Input()
  set effectiveDir(val: ToggleButtonDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): ToggleButtonDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: ToggleButtonDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): ToggleButtonDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibilityAttributes(
    val: ToggleButtonDirectiveElement['accessibilityAttributes']
  ) {
    this.elementRef.nativeElement.accessibilityAttributes = val;
  }
  get accessibilityAttributes(): ToggleButtonDirectiveElement['accessibilityAttributes'] {
    return this.elementRef.nativeElement.accessibilityAttributes;
  }

  @Input()
  set accessibleName(val: ToggleButtonDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): ToggleButtonDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(
    val: ToggleButtonDirectiveElement['accessibleNameRef']
  ) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): ToggleButtonDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set design(val: ToggleButtonDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): ToggleButtonDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set disabled(val: ToggleButtonDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): ToggleButtonDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: ToggleButtonDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): ToggleButtonDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set iconEnd(val: ToggleButtonDirectiveElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd(): ToggleButtonDirectiveElement['iconEnd'] {
    return this.elementRef.nativeElement.iconEnd;
  }

  @Input()
  set submits(val: ToggleButtonDirectiveElement['submits']) {
    this.elementRef.nativeElement.submits = val;
  }
  get submits(): ToggleButtonDirectiveElement['submits'] {
    return this.elementRef.nativeElement.submits;
  }

  @Input()
  set tooltip(val: ToggleButtonDirectiveElement['tooltip']) {
    this.elementRef.nativeElement.tooltip = val;
  }
  get tooltip(): ToggleButtonDirectiveElement['tooltip'] {
    return this.elementRef.nativeElement.tooltip;
  }

  @Input()
  set pressed(val: ToggleButtonDirectiveElement['pressed']) {
    this.elementRef.nativeElement.pressed = val;
  }
  get pressed(): ToggleButtonDirectiveElement['pressed'] {
    return this.elementRef.nativeElement.pressed;
  }
  @Output() click: Observable<ToggleButtonDirectiveEventsMap['click']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<ToggleButtonDirectiveElement>) {}

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
  ToggleButtonDirective,
  ToggleButtonDirectiveEventsMap,
  ToggleButtonDirectiveElement,
};
