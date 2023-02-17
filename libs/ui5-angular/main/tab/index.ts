import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Tab.js';
import { TabSeparatorDirective } from '@ui5/webcomponents-ngx/main/tab-separator';

interface TabDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'additionalText'
    | 'design'
    | 'disabled'
    | 'icon'
    | 'selected'
    | 'text'
    | 'subTabs'
  > {
  effectiveDir: any;
  isUi5Element: any;
  additionalText: string;
  design: 'Critical' | 'Default' | 'Negative' | 'Neutral' | 'Positive';
  disabled: boolean;
  icon: string;
  selected: boolean;
  text: string;

  subTabs: Array<TabSeparatorDirective['element'] | TabDirective['element']>;

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

  getTabInStripDomRef(): any;
}

@Directive({
  selector: 'ui5-tab',
  exportAs: 'ui5Tab',
  standalone: true,
  providers: [],
})
class TabDirective {
  @Input()
  set effectiveDir(val: TabDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): TabDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: TabDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): TabDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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

  getTabInStripDomRef(): any {
    return this.elementRef.nativeElement.getTabInStripDomRef();
  }
}

export { TabDirective, TabDirectiveElement };
