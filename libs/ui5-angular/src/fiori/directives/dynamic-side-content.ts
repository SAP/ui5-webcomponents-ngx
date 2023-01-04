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
    | 'equalSplit'
    | 'hideMainContent'
    | 'hideSideContent'
    | 'sideContentFallDown'
    | 'sideContentPosition'
    | 'sideContentVisibility'
    | 'layoutChange'
    | 'sideContent'
  > {
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

  toggleContents(): any;
}

@Directive({
  selector: 'ui5-dynamic-side-content',
  exportAs: 'ui5DynamicSideContent',
})
class DynamicSideContentDirective {
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

  toggleContents(): any {
    return this.elementRef.nativeElement.toggleContents();
  }
}

export {
  DynamicSideContentDirective,
  DynamicSideContentDirectiveEventsMap,
  DynamicSideContentDirectiveElement,
};
