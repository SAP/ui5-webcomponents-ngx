import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Panel.js';
import { Observable, NEVER } from 'rxjs';

interface PanelDirectiveEventsMap extends Omit<HTMLElementEventMap, 'toggle'> {
  toggle: CustomEvent<void>;
}

interface PanelDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'accessibleRole'
    | 'collapsed'
    | 'fixed'
    | 'headerLevel'
    | 'headerText'
    | 'noAnimation'
    | 'toggle'
    | 'header'
  > {
  accessibleName: string;
  accessibleRole: 'Complementary' | 'Form' | 'Region';
  collapsed: boolean;
  fixed: boolean;
  headerLevel: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';
  headerText: string;
  noAnimation: boolean;

  header: Array<HTMLElement>;

  addEventListener<K extends keyof PanelDirectiveEventsMap>(
    type: K,
    listener: (
      this: PanelDirectiveElement,
      ev: PanelDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof PanelDirectiveEventsMap>(
    type: K,
    listener: (
      this: PanelDirectiveElement,
      ev: PanelDirectiveEventsMap[K]
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
  selector: 'ui5-panel',
  exportAs: 'ui5Panel',
})
class PanelDirective {
  @Input()
  set accessibleName(val: PanelDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): PanelDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleRole(val: PanelDirectiveElement['accessibleRole']) {
    this.elementRef.nativeElement.accessibleRole = val;
  }
  get accessibleRole(): PanelDirectiveElement['accessibleRole'] {
    return this.elementRef.nativeElement.accessibleRole;
  }

  @Input()
  set collapsed(val: PanelDirectiveElement['collapsed']) {
    this.elementRef.nativeElement.collapsed = val;
  }
  get collapsed(): PanelDirectiveElement['collapsed'] {
    return this.elementRef.nativeElement.collapsed;
  }

  @Input()
  set fixed(val: PanelDirectiveElement['fixed']) {
    this.elementRef.nativeElement.fixed = val;
  }
  get fixed(): PanelDirectiveElement['fixed'] {
    return this.elementRef.nativeElement.fixed;
  }

  @Input()
  set headerLevel(val: PanelDirectiveElement['headerLevel']) {
    this.elementRef.nativeElement.headerLevel = val;
  }
  get headerLevel(): PanelDirectiveElement['headerLevel'] {
    return this.elementRef.nativeElement.headerLevel;
  }

  @Input()
  set headerText(val: PanelDirectiveElement['headerText']) {
    this.elementRef.nativeElement.headerText = val;
  }
  get headerText(): PanelDirectiveElement['headerText'] {
    return this.elementRef.nativeElement.headerText;
  }

  @Input()
  set noAnimation(val: PanelDirectiveElement['noAnimation']) {
    this.elementRef.nativeElement.noAnimation = val;
  }
  get noAnimation(): PanelDirectiveElement['noAnimation'] {
    return this.elementRef.nativeElement.noAnimation;
  }
  @Output() toggle: Observable<PanelDirectiveEventsMap['toggle']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<PanelDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get header(): Array<HTMLElement> {
    return this.elementRef.nativeElement.header;
  }
}

export { PanelDirective, PanelDirectiveEventsMap, PanelDirectiveElement };
