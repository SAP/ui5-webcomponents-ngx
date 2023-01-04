import { Directive, ElementRef, Output } from '@angular/core';
import '@ui5/webcomponents/dist/ColorPalette.js';
import { Observable, NEVER } from 'rxjs';

interface ColorPaletteDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'itemClick'> {
  itemClick: CustomEvent<{ color: string }>;
}

interface ColorPaletteDirectiveElement extends Omit<HTMLElement, 'itemClick'> {
  addEventListener<K extends keyof ColorPaletteDirectiveEventsMap>(
    type: K,
    listener: (
      this: ColorPaletteDirectiveElement,
      ev: ColorPaletteDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ColorPaletteDirectiveEventsMap>(
    type: K,
    listener: (
      this: ColorPaletteDirectiveElement,
      ev: ColorPaletteDirectiveEventsMap[K]
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
  selector: 'ui5-color-palette',
  exportAs: 'ui5ColorPalette',
})
class ColorPaletteDirective {
  @Output() itemClick: Observable<ColorPaletteDirectiveEventsMap['itemClick']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<ColorPaletteDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export {
  ColorPaletteDirective,
  ColorPaletteDirectiveEventsMap,
  ColorPaletteDirectiveElement,
};
