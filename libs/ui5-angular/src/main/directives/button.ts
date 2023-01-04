import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Button.js';
import { Observable, NEVER } from 'rxjs';

interface ButtonDirectiveEventsMap extends Omit<HTMLElementEventMap, 'click'> {
  click: CustomEvent<void>;
}

interface ButtonDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibilityAttributes'
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'design'
    | 'disabled'
    | 'icon'
    | 'iconEnd'
    | 'submits'
    | 'tooltip'
    | 'click'
  > {
  accessibilityAttributes: {
    expanded?: boolean;
    hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
    controls?: string | HTMLElement | Array<HTMLElement | string>;
  };
  accessibleName: string;
  accessibleNameRef: string;
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  disabled: boolean;
  icon: string;
  iconEnd: boolean;
  submits: boolean;
  tooltip: string;

  addEventListener<K extends keyof ButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: ButtonDirectiveElement,
      ev: ButtonDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: ButtonDirectiveElement,
      ev: ButtonDirectiveEventsMap[K]
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
  selector: 'ui5-button',
  exportAs: 'ui5Button',
})
class ButtonDirective {
  @Input()
  set accessibilityAttributes(
    val: ButtonDirectiveElement['accessibilityAttributes']
  ) {
    this.elementRef.nativeElement.accessibilityAttributes = val;
  }
  get accessibilityAttributes(): ButtonDirectiveElement['accessibilityAttributes'] {
    return this.elementRef.nativeElement.accessibilityAttributes;
  }

  @Input()
  set accessibleName(val: ButtonDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): ButtonDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: ButtonDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): ButtonDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set design(val: ButtonDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): ButtonDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set disabled(val: ButtonDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): ButtonDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: ButtonDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): ButtonDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set iconEnd(val: ButtonDirectiveElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd(): ButtonDirectiveElement['iconEnd'] {
    return this.elementRef.nativeElement.iconEnd;
  }

  @Input()
  set submits(val: ButtonDirectiveElement['submits']) {
    this.elementRef.nativeElement.submits = val;
  }
  get submits(): ButtonDirectiveElement['submits'] {
    return this.elementRef.nativeElement.submits;
  }

  @Input()
  set tooltip(val: ButtonDirectiveElement['tooltip']) {
    this.elementRef.nativeElement.tooltip = val;
  }
  get tooltip(): ButtonDirectiveElement['tooltip'] {
    return this.elementRef.nativeElement.tooltip;
  }
  @Output() click: Observable<ButtonDirectiveEventsMap['click']> = NEVER as any;
  constructor(private elementRef: ElementRef<ButtonDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { ButtonDirective, ButtonDirectiveEventsMap, ButtonDirectiveElement };
