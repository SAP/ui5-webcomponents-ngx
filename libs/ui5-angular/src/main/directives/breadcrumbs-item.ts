import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/BreadcrumbsItem.js';

interface BreadcrumbsItemDirectiveElement
  extends Omit<HTMLElement, 'accessibleName' | 'href' | 'target'> {
  accessibleName: string;
  href: string;
  target: string;
}

@Directive({
  selector: 'ui5-breadcrumbs-item',
  exportAs: 'ui5BreadcrumbsItem',
})
class BreadcrumbsItemDirective {
  @Input()
  set accessibleName(val: BreadcrumbsItemDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): BreadcrumbsItemDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set href(val: BreadcrumbsItemDirectiveElement['href']) {
    this.elementRef.nativeElement.href = val;
  }
  get href(): BreadcrumbsItemDirectiveElement['href'] {
    return this.elementRef.nativeElement.href;
  }

  @Input()
  set target(val: BreadcrumbsItemDirectiveElement['target']) {
    this.elementRef.nativeElement.target = val;
  }
  get target(): BreadcrumbsItemDirectiveElement['target'] {
    return this.elementRef.nativeElement.target;
  }

  constructor(
    private elementRef: ElementRef<BreadcrumbsItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { BreadcrumbsItemDirective, BreadcrumbsItemDirectiveElement };
