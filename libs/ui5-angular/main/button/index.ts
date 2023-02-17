import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Button.js';
import { Observable, NEVER } from 'rxjs';

interface ButtonDirectiveEventsMap extends Omit<HTMLElementEventMap, 'click'> {
  click: CustomEvent<void>;
}

interface ButtonDirectiveElement
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
    | 'click'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibilityAttributes: {
    expanded?: boolean;
    hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
    controls?: string | HTMLElement | Array<HTMLElement | string>;
  };
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

  addEventListener<K extends keyof ButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: ButtonDirectiveElement,
      ev: ButtonDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: ButtonDirectiveElement,
      ev: ButtonDirectiveEventsMap[K]
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
  selector: 'ui5-button',
  exportAs: 'ui5Button',
  standalone: true,
  providers: [],
})
class ButtonDirective {
  @Input()
  set effectiveDir(val: ButtonDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): ButtonDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: ButtonDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): ButtonDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibilityAttributes(
    val: ButtonDirectiveElement['accessibilityAttributes']
  ) {
    this.elementRef.nativeElement.accessibilityAttributes = val;
  }
  get accessibilityAttributes(): ButtonDirectiveElement['accessibilityAttributes'] {
    return this.elementRef.nativeElement.accessibilityAttributes;
  }

  @Input()
  set accessibleName(val: ButtonDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): ButtonDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: ButtonDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): ButtonDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set design(val: ButtonDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): ButtonDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set disabled(val: ButtonDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): ButtonDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: ButtonDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): ButtonDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set iconEnd(val: ButtonDirectiveElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd(): ButtonDirectiveElement['iconEnd'] {
    return this.elementRef.nativeElement.iconEnd;
  }

  @Input()
  set submits(val: ButtonDirectiveElement['submits']) {
    this.elementRef.nativeElement.submits = val;
  }
  get submits(): ButtonDirectiveElement['submits'] {
    return this.elementRef.nativeElement.submits;
  }

  @Input()
  set tooltip(val: ButtonDirectiveElement['tooltip']) {
    this.elementRef.nativeElement.tooltip = val;
  }
  get tooltip(): ButtonDirectiveElement['tooltip'] {
    return this.elementRef.nativeElement.tooltip;
  }
  @Output() click: Observable<ButtonDirectiveEventsMap['click']> = NEVER as any;
  constructor(private elementRef: ElementRef<ButtonDirectiveElement>) {}

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

export { ButtonDirective, ButtonDirectiveEventsMap, ButtonDirectiveElement };
