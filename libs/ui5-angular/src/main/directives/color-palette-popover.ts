import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/ColorPalettePopover.js';
import { Observable, NEVER } from 'rxjs';

interface ColorPalettePopoverDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'itemClick'> {
  itemClick: CustomEvent<{ color: string }>;
}

interface ColorPalettePopoverDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'defaultColor'
    | 'showDefaultColor'
    | 'showMoreColors'
    | 'showRecentColors'
    | 'itemClick'
  > {
  effectiveDir: any;
  isUi5Element: any;
  defaultColor: any;
  showDefaultColor: boolean;
  showMoreColors: boolean;
  showRecentColors: boolean;

  addEventListener<K extends keyof ColorPalettePopoverDirectiveEventsMap>(
    type: K,
    listener: (
      this: ColorPalettePopoverDirectiveElement,
      ev: ColorPalettePopoverDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ColorPalettePopoverDirectiveEventsMap>(
    type: K,
    listener: (
      this: ColorPalettePopoverDirectiveElement,
      ev: ColorPalettePopoverDirectiveEventsMap[K]
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

  openPopover(opener: HTMLElement): any;

  showAt(opener: HTMLElement): any;
}

@Directive({
  selector: 'ui5-color-palette-popover',
  exportAs: 'ui5ColorPalettePopover',
})
class ColorPalettePopoverDirective {
  @Input()
  set effectiveDir(val: ColorPalettePopoverDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): ColorPalettePopoverDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: ColorPalettePopoverDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): ColorPalettePopoverDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set defaultColor(val: ColorPalettePopoverDirectiveElement['defaultColor']) {
    this.elementRef.nativeElement.defaultColor = val;
  }
  get defaultColor(): ColorPalettePopoverDirectiveElement['defaultColor'] {
    return this.elementRef.nativeElement.defaultColor;
  }

  @Input()
  set showDefaultColor(
    val: ColorPalettePopoverDirectiveElement['showDefaultColor']
  ) {
    this.elementRef.nativeElement.showDefaultColor = val;
  }
  get showDefaultColor(): ColorPalettePopoverDirectiveElement['showDefaultColor'] {
    return this.elementRef.nativeElement.showDefaultColor;
  }

  @Input()
  set showMoreColors(
    val: ColorPalettePopoverDirectiveElement['showMoreColors']
  ) {
    this.elementRef.nativeElement.showMoreColors = val;
  }
  get showMoreColors(): ColorPalettePopoverDirectiveElement['showMoreColors'] {
    return this.elementRef.nativeElement.showMoreColors;
  }

  @Input()
  set showRecentColors(
    val: ColorPalettePopoverDirectiveElement['showRecentColors']
  ) {
    this.elementRef.nativeElement.showRecentColors = val;
  }
  get showRecentColors(): ColorPalettePopoverDirectiveElement['showRecentColors'] {
    return this.elementRef.nativeElement.showRecentColors;
  }
  @Output() itemClick: Observable<
    ColorPalettePopoverDirectiveEventsMap['itemClick']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<ColorPalettePopoverDirectiveElement>
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

  openPopover(opener: HTMLElement): any {
    return this.elementRef.nativeElement.openPopover(opener);
  }

  showAt(opener: HTMLElement): any {
    return this.elementRef.nativeElement.showAt(opener);
  }
}

export {
  ColorPalettePopoverDirective,
  ColorPalettePopoverDirectiveEventsMap,
  ColorPalettePopoverDirectiveElement,
};
