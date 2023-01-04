import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/ColorPaletteItem.js';

interface ColorPaletteItemDirectiveElement extends Omit<HTMLElement, 'value'> {
  value: any;
}

@Directive({
  selector: 'ui5-color-palette-item',
  exportAs: 'ui5ColorPaletteItem',
})
class ColorPaletteItemDirective {
  @Input()
  set value(val: ColorPaletteItemDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): ColorPaletteItemDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  constructor(
    private elementRef: ElementRef<ColorPaletteItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { ColorPaletteItemDirective, ColorPaletteItemDirectiveElement };
