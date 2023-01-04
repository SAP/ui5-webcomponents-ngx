import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';

interface SideNavigationSubItemDirectiveElement
  extends Omit<HTMLElement, 'icon' | 'selected' | 'text'> {
  icon: string;
  selected: boolean;
  text: string;
}

@Directive({
  selector: 'ui5-side-navigation-sub-item',
  exportAs: 'ui5SideNavigationSubItem',
})
class SideNavigationSubItemDirective {
  @Input()
  set icon(val: SideNavigationSubItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): SideNavigationSubItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set selected(val: SideNavigationSubItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): SideNavigationSubItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set text(val: SideNavigationSubItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): SideNavigationSubItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<SideNavigationSubItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export {
  SideNavigationSubItemDirective,
  SideNavigationSubItemDirectiveElement,
};
