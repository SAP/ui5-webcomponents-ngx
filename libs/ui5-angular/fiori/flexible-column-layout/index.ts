import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';
import { Observable, NEVER } from 'rxjs';

interface FlexibleColumnLayoutDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'layoutChange'> {
  layoutChange: CustomEvent<{
    layout:
      | 'EndColumnFullScreen'
      | 'MidColumnFullScreen'
      | 'OneColumn'
      | 'ThreeColumnsEndExpanded'
      | 'ThreeColumnsMidExpanded'
      | 'ThreeColumnsMidExpandedEndHidden'
      | 'ThreeColumnsStartExpandedEndHidden'
      | 'TwoColumnsMidExpanded'
      | 'TwoColumnsStartExpanded';
    columnLayout: Array<any>;
    startColumnVisible: boolean;
    midColumnVisible: boolean;
    endColumnVisible: boolean;
    arrowsUsed: boolean;
    resize: boolean;
  }>;
}

interface FlexibleColumnLayoutDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibilityRoles'
    | 'accessibilityTexts'
    | 'columnLayout'
    | 'endColumnVisible'
    | 'hideArrows'
    | 'layout'
    | 'midColumnVisible'
    | 'startColumnVisible'
    | 'visibleColumns'
    | 'layoutChange'
    | 'endColumn'
    | 'midColumn'
    | 'startColumn'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibilityRoles: Record<string, any>;
  accessibilityTexts: Record<string, any>;
  columnLayout: Array<any>;
  endColumnVisible: boolean;
  hideArrows: boolean;
  layout:
    | 'EndColumnFullScreen'
    | 'MidColumnFullScreen'
    | 'OneColumn'
    | 'ThreeColumnsEndExpanded'
    | 'ThreeColumnsMidExpanded'
    | 'ThreeColumnsMidExpandedEndHidden'
    | 'ThreeColumnsStartExpandedEndHidden'
    | 'TwoColumnsMidExpanded'
    | 'TwoColumnsStartExpanded';
  midColumnVisible: boolean;
  startColumnVisible: boolean;
  visibleColumns: any;

  endColumn: HTMLElement;
  midColumn: HTMLElement;
  startColumn: HTMLElement;

  addEventListener<K extends keyof FlexibleColumnLayoutDirectiveEventsMap>(
    type: K,
    listener: (
      this: FlexibleColumnLayoutDirectiveElement,
      ev: FlexibleColumnLayoutDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof FlexibleColumnLayoutDirectiveEventsMap>(
    type: K,
    listener: (
      this: FlexibleColumnLayoutDirectiveElement,
      ev: FlexibleColumnLayoutDirectiveEventsMap[K]
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
  selector: 'ui5-flexible-column-layout',
  exportAs: 'ui5FlexibleColumnLayout',
  standalone: true,
  providers: [],
})
class FlexibleColumnLayoutDirective {
  @Input()
  set effectiveDir(val: FlexibleColumnLayoutDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): FlexibleColumnLayoutDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: FlexibleColumnLayoutDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): FlexibleColumnLayoutDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibilityRoles(
    val: FlexibleColumnLayoutDirectiveElement['accessibilityRoles']
  ) {
    this.elementRef.nativeElement.accessibilityRoles = val;
  }
  get accessibilityRoles(): FlexibleColumnLayoutDirectiveElement['accessibilityRoles'] {
    return this.elementRef.nativeElement.accessibilityRoles;
  }

  @Input()
  set accessibilityTexts(
    val: FlexibleColumnLayoutDirectiveElement['accessibilityTexts']
  ) {
    this.elementRef.nativeElement.accessibilityTexts = val;
  }
  get accessibilityTexts(): FlexibleColumnLayoutDirectiveElement['accessibilityTexts'] {
    return this.elementRef.nativeElement.accessibilityTexts;
  }

  @Input()
  set columnLayout(val: FlexibleColumnLayoutDirectiveElement['columnLayout']) {
    this.elementRef.nativeElement.columnLayout = val;
  }
  get columnLayout(): FlexibleColumnLayoutDirectiveElement['columnLayout'] {
    return this.elementRef.nativeElement.columnLayout;
  }

  @Input()
  set endColumnVisible(
    val: FlexibleColumnLayoutDirectiveElement['endColumnVisible']
  ) {
    this.elementRef.nativeElement.endColumnVisible = val;
  }
  get endColumnVisible(): FlexibleColumnLayoutDirectiveElement['endColumnVisible'] {
    return this.elementRef.nativeElement.endColumnVisible;
  }

  @Input()
  set hideArrows(val: FlexibleColumnLayoutDirectiveElement['hideArrows']) {
    this.elementRef.nativeElement.hideArrows = val;
  }
  get hideArrows(): FlexibleColumnLayoutDirectiveElement['hideArrows'] {
    return this.elementRef.nativeElement.hideArrows;
  }

  @Input()
  set layout(val: FlexibleColumnLayoutDirectiveElement['layout']) {
    this.elementRef.nativeElement.layout = val;
  }
  get layout(): FlexibleColumnLayoutDirectiveElement['layout'] {
    return this.elementRef.nativeElement.layout;
  }

  @Input()
  set midColumnVisible(
    val: FlexibleColumnLayoutDirectiveElement['midColumnVisible']
  ) {
    this.elementRef.nativeElement.midColumnVisible = val;
  }
  get midColumnVisible(): FlexibleColumnLayoutDirectiveElement['midColumnVisible'] {
    return this.elementRef.nativeElement.midColumnVisible;
  }

  @Input()
  set startColumnVisible(
    val: FlexibleColumnLayoutDirectiveElement['startColumnVisible']
  ) {
    this.elementRef.nativeElement.startColumnVisible = val;
  }
  get startColumnVisible(): FlexibleColumnLayoutDirectiveElement['startColumnVisible'] {
    return this.elementRef.nativeElement.startColumnVisible;
  }

  @Input()
  set visibleColumns(
    val: FlexibleColumnLayoutDirectiveElement['visibleColumns']
  ) {
    this.elementRef.nativeElement.visibleColumns = val;
  }
  get visibleColumns(): FlexibleColumnLayoutDirectiveElement['visibleColumns'] {
    return this.elementRef.nativeElement.visibleColumns;
  }
  @Output() layoutChange: Observable<
    FlexibleColumnLayoutDirectiveEventsMap['layoutChange']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<FlexibleColumnLayoutDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get endColumn(): HTMLElement {
    return this.elementRef.nativeElement.endColumn;
  }
  get midColumn(): HTMLElement {
    return this.elementRef.nativeElement.midColumn;
  }
  get startColumn(): HTMLElement {
    return this.elementRef.nativeElement.startColumn;
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
  FlexibleColumnLayoutDirective,
  FlexibleColumnLayoutDirectiveEventsMap,
  FlexibleColumnLayoutDirectiveElement,
};
