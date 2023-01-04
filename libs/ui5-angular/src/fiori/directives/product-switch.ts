import { Directive, ElementRef } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/ProductSwitch.js';

interface ProductSwitchDirectiveElement extends HTMLElement {}

@Directive({
  selector: 'ui5-product-switch',
  exportAs: 'ui5ProductSwitch',
})
class ProductSwitchDirective {
  constructor(private elementRef: ElementRef<ProductSwitchDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { ProductSwitchDirective, ProductSwitchDirectiveElement };
