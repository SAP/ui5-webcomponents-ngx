import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/MenuItem.js';

interface MenuItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'additionalText'
    | 'disabled'
    | 'icon'
    | 'startsSection'
    | 'text'
  > {
  accessibleName: string;
  additionalText: string;
  disabled: boolean;
  icon: string;
  startsSection: boolean;
  text: string;
}

@Directive({
  selector: 'ui5-menu-item',
  exportAs: 'ui5MenuItem',
})
class MenuItemDirective {
  @Input()
  set accessibleName(val: MenuItemDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): MenuItemDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set additionalText(val: MenuItemDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): MenuItemDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set disabled(val: MenuItemDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): MenuItemDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: MenuItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): MenuItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set startsSection(val: MenuItemDirectiveElement['startsSection']) {
    this.elementRef.nativeElement.startsSection = val;
  }
  get startsSection(): MenuItemDirectiveElement['startsSection'] {
    return this.elementRef.nativeElement.startsSection;
  }

  @Input()
  set text(val: MenuItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): MenuItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(private elementRef: ElementRef<MenuItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { MenuItemDirective, MenuItemDirectiveElement };
