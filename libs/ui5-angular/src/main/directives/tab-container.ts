import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/TabContainer.js';
import { TabDirective } from './tab';
import { TabSeparatorDirective } from './tab-separator';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from './button';

interface TabContainerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'tabSelect'> {
  tabSelect: CustomEvent<{ tab: HTMLElement; tabIndex: number }>;
}

interface TabContainerDirectiveElement
  extends Omit<
    HTMLElement,
    | 'allItems'
    | 'collapsed'
    | 'contentBackgroundDesign'
    | 'fixed'
    | 'headerBackgroundDesign'
    | 'showOverflow'
    | 'tabLayout'
    | 'tabsOverflowMode'
    | 'tabSelect'
    | 'overflowButton'
    | 'startOverflowButton'
  > {
  allItems: Array<TabDirective['element'] | TabSeparatorDirective['element']>;
  collapsed: boolean;
  contentBackgroundDesign: 'Solid' | 'Translucent' | 'Transparent';
  fixed: boolean;
  headerBackgroundDesign: 'Solid' | 'Translucent' | 'Transparent';
  showOverflow: boolean;
  tabLayout: 'Inline' | 'Standard';
  tabsOverflowMode: 'End' | 'StartAndEnd';

  overflowButton: ButtonDirective['element'];
  startOverflowButton: ButtonDirective['element'];

  addEventListener<K extends keyof TabContainerDirectiveEventsMap>(
    type: K,
    listener: (
      this: TabContainerDirectiveElement,
      ev: TabContainerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TabContainerDirectiveEventsMap>(
    type: K,
    listener: (
      this: TabContainerDirectiveElement,
      ev: TabContainerDirectiveEventsMap[K]
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
  selector: 'ui5-tabcontainer',
  exportAs: 'ui5Tabcontainer',
})
class TabContainerDirective {
  @Input()
  set allItems(val: TabContainerDirectiveElement['allItems']) {
    this.elementRef.nativeElement.allItems = val;
  }
  get allItems(): TabContainerDirectiveElement['allItems'] {
    return this.elementRef.nativeElement.allItems;
  }

  @Input()
  set collapsed(val: TabContainerDirectiveElement['collapsed']) {
    this.elementRef.nativeElement.collapsed = val;
  }
  get collapsed(): TabContainerDirectiveElement['collapsed'] {
    return this.elementRef.nativeElement.collapsed;
  }

  @Input()
  set contentBackgroundDesign(
    val: TabContainerDirectiveElement['contentBackgroundDesign']
  ) {
    this.elementRef.nativeElement.contentBackgroundDesign = val;
  }
  get contentBackgroundDesign(): TabContainerDirectiveElement['contentBackgroundDesign'] {
    return this.elementRef.nativeElement.contentBackgroundDesign;
  }

  @Input()
  set fixed(val: TabContainerDirectiveElement['fixed']) {
    this.elementRef.nativeElement.fixed = val;
  }
  get fixed(): TabContainerDirectiveElement['fixed'] {
    return this.elementRef.nativeElement.fixed;
  }

  @Input()
  set headerBackgroundDesign(
    val: TabContainerDirectiveElement['headerBackgroundDesign']
  ) {
    this.elementRef.nativeElement.headerBackgroundDesign = val;
  }
  get headerBackgroundDesign(): TabContainerDirectiveElement['headerBackgroundDesign'] {
    return this.elementRef.nativeElement.headerBackgroundDesign;
  }

  @Input()
  set showOverflow(val: TabContainerDirectiveElement['showOverflow']) {
    this.elementRef.nativeElement.showOverflow = val;
  }
  get showOverflow(): TabContainerDirectiveElement['showOverflow'] {
    return this.elementRef.nativeElement.showOverflow;
  }

  @Input()
  set tabLayout(val: TabContainerDirectiveElement['tabLayout']) {
    this.elementRef.nativeElement.tabLayout = val;
  }
  get tabLayout(): TabContainerDirectiveElement['tabLayout'] {
    return this.elementRef.nativeElement.tabLayout;
  }

  @Input()
  set tabsOverflowMode(val: TabContainerDirectiveElement['tabsOverflowMode']) {
    this.elementRef.nativeElement.tabsOverflowMode = val;
  }
  get tabsOverflowMode(): TabContainerDirectiveElement['tabsOverflowMode'] {
    return this.elementRef.nativeElement.tabsOverflowMode;
  }
  @Output() tabSelect: Observable<TabContainerDirectiveEventsMap['tabSelect']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<TabContainerDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get overflowButton(): ButtonDirective['element'] {
    return this.elementRef.nativeElement.overflowButton;
  }
  get startOverflowButton(): ButtonDirective['element'] {
    return this.elementRef.nativeElement.startOverflowButton;
  }
}

export {
  TabContainerDirective,
  TabContainerDirectiveEventsMap,
  TabContainerDirectiveElement,
};
