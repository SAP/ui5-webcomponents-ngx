import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/SplitButton.js';
import { Observable, NEVER } from 'rxjs';

interface SplitButtonDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'arrowClick' | 'click'> {
  arrowClick: CustomEvent<void>;
  click: CustomEvent<void>;
}

interface SplitButtonDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'activeIcon'
    | 'design'
    | 'disabled'
    | 'icon'
    | 'arrowClick'
    | 'click'
  > {
  accessibleName: string;
  activeIcon: string;
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  disabled: boolean;
  icon: string;

  addEventListener<K extends keyof SplitButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: SplitButtonDirectiveElement,
      ev: SplitButtonDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SplitButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: SplitButtonDirectiveElement,
      ev: SplitButtonDirectiveEventsMap[K]
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
  selector: 'ui5-split-button',
  exportAs: 'ui5SplitButton',
})
class SplitButtonDirective {
  @Input()
  set accessibleName(val: SplitButtonDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): SplitButtonDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set activeIcon(val: SplitButtonDirectiveElement['activeIcon']) {
    this.elementRef.nativeElement.activeIcon = val;
  }
  get activeIcon(): SplitButtonDirectiveElement['activeIcon'] {
    return this.elementRef.nativeElement.activeIcon;
  }

  @Input()
  set design(val: SplitButtonDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): SplitButtonDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set disabled(val: SplitButtonDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): SplitButtonDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: SplitButtonDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): SplitButtonDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }
  @Output() arrowClick: Observable<
    SplitButtonDirectiveEventsMap['arrowClick']
  > = NEVER as any;
  @Output() click: Observable<SplitButtonDirectiveEventsMap['click']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<SplitButtonDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export {
  SplitButtonDirective,
  SplitButtonDirectiveEventsMap,
  SplitButtonDirectiveElement,
};
