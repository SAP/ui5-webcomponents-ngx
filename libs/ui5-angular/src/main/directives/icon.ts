import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Icon.js';

interface IconDirectiveElement
  extends Omit<
    HTMLElement,
    'accessibleName' | 'accessibleRole' | 'interactive' | 'name' | 'showTooltip'
  > {
  accessibleName: string;
  accessibleRole: string;
  interactive: boolean;
  name: string;
  showTooltip: boolean;
}

@Directive({
  selector: 'ui5-icon',
  exportAs: 'ui5Icon',
})
class IconDirective {
  @Input()
  set accessibleName(val: IconDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): IconDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleRole(val: IconDirectiveElement['accessibleRole']) {
    this.elementRef.nativeElement.accessibleRole = val;
  }
  get accessibleRole(): IconDirectiveElement['accessibleRole'] {
    return this.elementRef.nativeElement.accessibleRole;
  }

  @Input()
  set interactive(val: IconDirectiveElement['interactive']) {
    this.elementRef.nativeElement.interactive = val;
  }
  get interactive(): IconDirectiveElement['interactive'] {
    return this.elementRef.nativeElement.interactive;
  }

  @Input()
  set name(val: IconDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): IconDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set showTooltip(val: IconDirectiveElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = val;
  }
  get showTooltip(): IconDirectiveElement['showTooltip'] {
    return this.elementRef.nativeElement.showTooltip;
  }

  constructor(private elementRef: ElementRef<IconDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { IconDirective, IconDirectiveElement };
