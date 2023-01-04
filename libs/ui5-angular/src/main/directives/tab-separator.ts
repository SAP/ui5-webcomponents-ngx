import { Directive, ElementRef } from '@angular/core';
import '@ui5/webcomponents/dist/TabSeparator.js';

interface TabSeparatorDirectiveElement extends HTMLElement {
  getTabInStripDomRef(): any;
}

@Directive({
  selector: 'ui5-tab-separator',
  exportAs: 'ui5TabSeparator',
})
class TabSeparatorDirective {
  constructor(private elementRef: ElementRef<TabSeparatorDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  getTabInStripDomRef(): any {
    return this.elementRef.nativeElement.getTabInStripDomRef();
  }
}

export { TabSeparatorDirective, TabSeparatorDirectiveElement };
