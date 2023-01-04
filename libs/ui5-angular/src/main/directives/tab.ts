import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Tab.js';
import { TabSeparatorDirective } from './tab-separator';

interface TabDirectiveElement
  extends Omit<
    HTMLElement,
    | 'additionalText'
    | 'design'
    | 'disabled'
    | 'icon'
    | 'selected'
    | 'text'
    | 'subTabs'
  > {
  additionalText: string;
  design: 'Critical' | 'Default' | 'Negative' | 'Neutral' | 'Positive';
  disabled: boolean;
  icon: string;
  selected: boolean;
  text: string;

  subTabs: Array<TabSeparatorDirective['element'] | TabDirective['element']>;

  getTabInStripDomRef(): any;
}

@Directive({
  selector: 'ui5-tab',
  exportAs: 'ui5Tab',
})
class TabDirective {
  @Input()
  set additionalText(val: TabDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): TabDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set design(val: TabDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): TabDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set disabled(val: TabDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): TabDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: TabDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): TabDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set selected(val: TabDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): TabDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set text(val: TabDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): TabDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(private elementRef: ElementRef<TabDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get subTabs(): Array<
    TabSeparatorDirective['element'] | TabDirective['element']
  > {
    return this.elementRef.nativeElement.subTabs;
  }

  getTabInStripDomRef(): any {
    return this.elementRef.nativeElement.getTabInStripDomRef();
  }
}

export { TabDirective, TabDirectiveElement };
