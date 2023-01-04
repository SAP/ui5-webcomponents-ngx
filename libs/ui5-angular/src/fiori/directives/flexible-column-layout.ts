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
}

@Directive({
  selector: 'ui5-flexible-column-layout',
  exportAs: 'ui5FlexibleColumnLayout',
})
class FlexibleColumnLayoutDirective {
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
}

export {
  FlexibleColumnLayoutDirective,
  FlexibleColumnLayoutDirectiveEventsMap,
  FlexibleColumnLayoutDirectiveElement,
};
