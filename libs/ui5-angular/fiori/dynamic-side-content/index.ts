import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/DynamicSideContent.js';
import { Observable, NEVER } from 'rxjs';

interface DynamicSideContentDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'layoutChange'> {
  layoutChange: CustomEvent<{
    currentBreakpoint: string;
    previousBreakpoint: string;
    mainContentVisible: boolean;
    sideContentVisible: boolean;
  }>;
}

interface DynamicSideContentDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'equalSplit'
    | 'hideMainContent'
    | 'hideSideContent'
    | 'sideContentFallDown'
    | 'sideContentPosition'
    | 'sideContentVisibility'
    | 'layoutChange'
    | 'sideContent'
  > {
  effectiveDir: any;
  isUi5Element: any;
  equalSplit: boolean;
  hideMainContent: boolean;
  hideSideContent: boolean;
  sideContentFallDown: 'BelowL' | 'BelowM' | 'BelowXL' | 'OnMinimumWidth';
  sideContentPosition: 'End' | 'Start';
  sideContentVisibility:
    | 'AlwaysShow'
    | 'NeverShow'
    | 'ShowAboveL'
    | 'ShowAboveM'
    | 'ShowAboveS';

  sideContent: Array<HTMLElement>;

  addEventListener<K extends keyof DynamicSideContentDirectiveEventsMap>(
    type: K,
    listener: (
      this: DynamicSideContentDirectiveElement,
      ev: DynamicSideContentDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof DynamicSideContentDirectiveEventsMap>(
    type: K,
    listener: (
      this: DynamicSideContentDirectiveElement,
      ev: DynamicSideContentDirectiveEventsMap[K]
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

  toggleContents(): any;
}

@Directive({
  selector: 'ui5-dynamic-side-content',
  exportAs: 'ui5DynamicSideContent',
  standalone: true,
  providers: [],
})
class DynamicSideContentDirective {
  @Input()
  set effectiveDir(val: DynamicSideContentDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): DynamicSideContentDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: DynamicSideContentDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): DynamicSideContentDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set equalSplit(val: DynamicSideContentDirectiveElement['equalSplit']) {
    this.elementRef.nativeElement.equalSplit = val;
  }
  get equalSplit(): DynamicSideContentDirectiveElement['equalSplit'] {
    return this.elementRef.nativeElement.equalSplit;
  }

  @Input()
  set hideMainContent(
    val: DynamicSideContentDirectiveElement['hideMainContent']
  ) {
    this.elementRef.nativeElement.hideMainContent = val;
  }
  get hideMainContent(): DynamicSideContentDirectiveElement['hideMainContent'] {
    return this.elementRef.nativeElement.hideMainContent;
  }

  @Input()
  set hideSideContent(
    val: DynamicSideContentDirectiveElement['hideSideContent']
  ) {
    this.elementRef.nativeElement.hideSideContent = val;
  }
  get hideSideContent(): DynamicSideContentDirectiveElement['hideSideContent'] {
    return this.elementRef.nativeElement.hideSideContent;
  }

  @Input()
  set sideContentFallDown(
    val: DynamicSideContentDirectiveElement['sideContentFallDown']
  ) {
    this.elementRef.nativeElement.sideContentFallDown = val;
  }
  get sideContentFallDown(): DynamicSideContentDirectiveElement['sideContentFallDown'] {
    return this.elementRef.nativeElement.sideContentFallDown;
  }

  @Input()
  set sideContentPosition(
    val: DynamicSideContentDirectiveElement['sideContentPosition']
  ) {
    this.elementRef.nativeElement.sideContentPosition = val;
  }
  get sideContentPosition(): DynamicSideContentDirectiveElement['sideContentPosition'] {
    return this.elementRef.nativeElement.sideContentPosition;
  }

  @Input()
  set sideContentVisibility(
    val: DynamicSideContentDirectiveElement['sideContentVisibility']
  ) {
    this.elementRef.nativeElement.sideContentVisibility = val;
  }
  get sideContentVisibility(): DynamicSideContentDirectiveElement['sideContentVisibility'] {
    return this.elementRef.nativeElement.sideContentVisibility;
  }
  @Output() layoutChange: Observable<
    DynamicSideContentDirectiveEventsMap['layoutChange']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<DynamicSideContentDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get sideContent(): Array<HTMLElement> {
    return this.elementRef.nativeElement.sideContent;
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

  toggleContents(): any {
    return this.elementRef.nativeElement.toggleContents();
  }
}

export {
  DynamicSideContentDirective,
  DynamicSideContentDirectiveEventsMap,
  DynamicSideContentDirectiveElement,
};
