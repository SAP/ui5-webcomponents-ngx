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
    | 'defaultColor'
    | 'showDefaultColor'
    | 'showMoreColors'
    | 'showRecentColors'
    | 'itemClick'
  > {
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

  isOpen(): boolean;

  openPopover(opener: HTMLElement): any;

  showAt(opener: HTMLElement): any;
}

@Directive({
  selector: 'ui5-color-palette-popover',
  exportAs: 'ui5ColorPalettePopover',
})
class ColorPalettePopoverDirective {
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

  isOpen(): boolean {
    return this.elementRef.nativeElement.isOpen();
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
