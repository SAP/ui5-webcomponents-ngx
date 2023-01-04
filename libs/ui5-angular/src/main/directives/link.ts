import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/Link.js';
import { Observable, NEVER } from 'rxjs';

interface LinkDirectiveEventsMap extends Omit<HTMLElementEventMap, 'click'> {
  click: CustomEvent<{
    altKey: boolean;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
  }>;
}

interface LinkDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibilityAttributes'
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'accessibleRole'
    | 'design'
    | 'disabled'
    | 'href'
    | 'target'
    | 'wrappingType'
    | 'click'
  > {
  accessibilityAttributes: {
    expanded?: boolean;
    hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
  };
  accessibleName: string;
  accessibleNameRef: string;
  accessibleRole: string;
  design: 'Default' | 'Emphasized' | 'Subtle';
  disabled: boolean;
  href: string;
  target: string;
  wrappingType: 'None' | 'Normal';

  addEventListener<K extends keyof LinkDirectiveEventsMap>(
    type: K,
    listener: (
      this: LinkDirectiveElement,
      ev: LinkDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof LinkDirectiveEventsMap>(
    type: K,
    listener: (
      this: LinkDirectiveElement,
      ev: LinkDirectiveEventsMap[K]
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
  selector: 'ui5-link',
  exportAs: 'ui5Link',
})
class LinkDirective {
  @Input()
  set accessibilityAttributes(
    val: LinkDirectiveElement['accessibilityAttributes']
  ) {
    this.elementRef.nativeElement.accessibilityAttributes = val;
  }
  get accessibilityAttributes(): LinkDirectiveElement['accessibilityAttributes'] {
    return this.elementRef.nativeElement.accessibilityAttributes;
  }

  @Input()
  set accessibleName(val: LinkDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): LinkDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: LinkDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): LinkDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set accessibleRole(val: LinkDirectiveElement['accessibleRole']) {
    this.elementRef.nativeElement.accessibleRole = val;
  }
  get accessibleRole(): LinkDirectiveElement['accessibleRole'] {
    return this.elementRef.nativeElement.accessibleRole;
  }

  @Input()
  set design(val: LinkDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): LinkDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set disabled(val: LinkDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): LinkDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set href(val: LinkDirectiveElement['href']) {
    this.elementRef.nativeElement.href = val;
  }
  get href(): LinkDirectiveElement['href'] {
    return this.elementRef.nativeElement.href;
  }

  @Input()
  set target(val: LinkDirectiveElement['target']) {
    this.elementRef.nativeElement.target = val;
  }
  get target(): LinkDirectiveElement['target'] {
    return this.elementRef.nativeElement.target;
  }

  @Input()
  set wrappingType(val: LinkDirectiveElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType(): LinkDirectiveElement['wrappingType'] {
    return this.elementRef.nativeElement.wrappingType;
  }
  @Output() click: Observable<LinkDirectiveEventsMap['click']> = NEVER as any;
  constructor(private elementRef: ElementRef<LinkDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { LinkDirective, LinkDirectiveEventsMap, LinkDirectiveElement };
