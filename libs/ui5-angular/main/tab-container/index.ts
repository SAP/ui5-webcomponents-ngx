import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/TabContainer.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from '@ui5/webcomponents-ngx/main/button';

interface TabContainerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'tabSelect'> {
  tabSelect: CustomEvent<{ tab: HTMLElement; tabIndex: number }>;
}

interface TabContainerDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
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
  effectiveDir: any;
  isUi5Element: any;
  allItems: any;
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

  _render(): any;

  attachInvalidate(callback: any): any;

  define(): any;

  detachInvalidate(callback: any): any;

  fireEvent(name: any, data: any, cancelable: any, bubbles: any): boolean;

  focus(): any;

  getDomRef(): any;

  getFocusDomRef(): any;

  getFocusDomRefAsync(): any;

  getMetadata(): any;

  getSlottedNodes(): any;

  getStaticAreaItemDomRef(): any;

  getUniqueDependencies(): any;

  onAfterRendering(): any;

  onBeforeRendering(): any;

  onDefine(): any;

  onEnterDOM(): any;

  onExitDOM(): any;

  onInvalidation(changeInfo: any): any;
}

@Directive({
  selector: 'ui5-tabcontainer',
  exportAs: 'ui5Tabcontainer',
  standalone: true,
  providers: [],
})
class TabContainerDirective {
  @Input()
  set effectiveDir(val: TabContainerDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): TabContainerDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: TabContainerDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): TabContainerDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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

  _render(): any {
    return this.elementRef.nativeElement._render();
  }

  attachInvalidate(callback: any): any {
    return this.elementRef.nativeElement.attachInvalidate(callback);
  }

  define(): any {
    return this.elementRef.nativeElement.define();
  }

  detachInvalidate(callback: any): any {
    return this.elementRef.nativeElement.detachInvalidate(callback);
  }

  fireEvent(name: any, data: any, cancelable: any, bubbles: any): boolean {
    return this.elementRef.nativeElement.fireEvent(
      name,
      data,
      cancelable,
      bubbles
    );
  }

  focus(): any {
    return this.elementRef.nativeElement.focus();
  }

  getDomRef(): any {
    return this.elementRef.nativeElement.getDomRef();
  }

  getFocusDomRef(): any {
    return this.elementRef.nativeElement.getFocusDomRef();
  }

  getFocusDomRefAsync(): any {
    return this.elementRef.nativeElement.getFocusDomRefAsync();
  }

  getMetadata(): any {
    return this.elementRef.nativeElement.getMetadata();
  }

  getSlottedNodes(): any {
    return this.elementRef.nativeElement.getSlottedNodes();
  }

  getStaticAreaItemDomRef(): any {
    return this.elementRef.nativeElement.getStaticAreaItemDomRef();
  }

  getUniqueDependencies(): any {
    return this.elementRef.nativeElement.getUniqueDependencies();
  }

  onAfterRendering(): any {
    return this.elementRef.nativeElement.onAfterRendering();
  }

  onBeforeRendering(): any {
    return this.elementRef.nativeElement.onBeforeRendering();
  }

  onDefine(): any {
    return this.elementRef.nativeElement.onDefine();
  }

  onEnterDOM(): any {
    return this.elementRef.nativeElement.onEnterDOM();
  }

  onExitDOM(): any {
    return this.elementRef.nativeElement.onExitDOM();
  }

  onInvalidation(changeInfo: any): any {
    return this.elementRef.nativeElement.onInvalidation(changeInfo);
  }
}

export {
  TabContainerDirective,
  TabContainerDirectiveEventsMap,
  TabContainerDirectiveElement,
};
