import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/SideNavigationItem.js';

interface SideNavigationItemDirectiveElement
  extends Omit<
    HTMLElement,
    'expanded' | 'icon' | 'selected' | 'text' | 'wholeItemToggleable'
  > {
  expanded: boolean;
  icon: string;
  selected: boolean;
  text: string;
  wholeItemToggleable: boolean;
}

@Directive({
  selector: 'ui5-side-navigation-item',
  exportAs: 'ui5SideNavigationItem',
})
class SideNavigationItemDirective {
  @Input()
  set expanded(val: SideNavigationItemDirectiveElement['expanded']) {
    this.elementRef.nativeElement.expanded = val;
  }
  get expanded(): SideNavigationItemDirectiveElement['expanded'] {
    return this.elementRef.nativeElement.expanded;
  }

  @Input()
  set icon(val: SideNavigationItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): SideNavigationItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set selected(val: SideNavigationItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): SideNavigationItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set text(val: SideNavigationItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): SideNavigationItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  @Input()
  set wholeItemToggleable(
    val: SideNavigationItemDirectiveElement['wholeItemToggleable']
  ) {
    this.elementRef.nativeElement.wholeItemToggleable = val;
  }
  get wholeItemToggleable(): SideNavigationItemDirectiveElement['wholeItemToggleable'] {
    return this.elementRef.nativeElement.wholeItemToggleable;
  }

  constructor(
    private elementRef: ElementRef<SideNavigationItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { SideNavigationItemDirective, SideNavigationItemDirectiveElement };
