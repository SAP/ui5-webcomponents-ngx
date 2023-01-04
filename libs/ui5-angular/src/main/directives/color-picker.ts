import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/ColorPicker.js';
import { Observable, NEVER } from 'rxjs';

interface ColorPickerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change'> {
  change: CustomEvent<void>;
}

interface ColorPickerDirectiveElement
  extends Omit<HTMLElement, 'color' | 'change'> {
  color: any;

  addEventListener<K extends keyof ColorPickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: ColorPickerDirectiveElement,
      ev: ColorPickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ColorPickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: ColorPickerDirectiveElement,
      ev: ColorPickerDirectiveEventsMap[K]
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
  selector: 'ui5-color-picker',
  exportAs: 'ui5ColorPicker',
})
class ColorPickerDirective {
  @Input()
  set color(val: ColorPickerDirectiveElement['color']) {
    this.elementRef.nativeElement.color = val;
  }
  get color(): ColorPickerDirectiveElement['color'] {
    return this.elementRef.nativeElement.color;
  }
  @Output() change: Observable<ColorPickerDirectiveEventsMap['change']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<ColorPickerDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export {
  ColorPickerDirective,
  ColorPickerDirectiveEventsMap,
  ColorPickerDirectiveElement,
};
