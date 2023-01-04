import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/ProductSwitchItem.js';
import { Observable, NEVER } from 'rxjs';

interface ProductSwitchItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'click'> {
  click: CustomEvent<void>;
}

interface ProductSwitchItemDirectiveElement
  extends Omit<
    HTMLElement,
    'icon' | 'subtitleText' | 'target' | 'targetSrc' | 'titleText' | 'click'
  > {
  icon: string;
  subtitleText: string;
  target: string;
  targetSrc: string;
  titleText: string;

  addEventListener<K extends keyof ProductSwitchItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: ProductSwitchItemDirectiveElement,
      ev: ProductSwitchItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ProductSwitchItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: ProductSwitchItemDirectiveElement,
      ev: ProductSwitchItemDirectiveEventsMap[K]
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
  selector: 'ui5-product-switch-item',
  exportAs: 'ui5ProductSwitchItem',
})
class ProductSwitchItemDirective {
  @Input()
  set icon(val: ProductSwitchItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): ProductSwitchItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set subtitleText(val: ProductSwitchItemDirectiveElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText(): ProductSwitchItemDirectiveElement['subtitleText'] {
    return this.elementRef.nativeElement.subtitleText;
  }

  @Input()
  set target(val: ProductSwitchItemDirectiveElement['target']) {
    this.elementRef.nativeElement.target = val;
  }
  get target(): ProductSwitchItemDirectiveElement['target'] {
    return this.elementRef.nativeElement.target;
  }

  @Input()
  set targetSrc(val: ProductSwitchItemDirectiveElement['targetSrc']) {
    this.elementRef.nativeElement.targetSrc = val;
  }
  get targetSrc(): ProductSwitchItemDirectiveElement['targetSrc'] {
    return this.elementRef.nativeElement.targetSrc;
  }

  @Input()
  set titleText(val: ProductSwitchItemDirectiveElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText(): ProductSwitchItemDirectiveElement['titleText'] {
    return this.elementRef.nativeElement.titleText;
  }
  @Output() click: Observable<ProductSwitchItemDirectiveEventsMap['click']> =
    NEVER as any;
  constructor(
    private elementRef: ElementRef<ProductSwitchItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export {
  ProductSwitchItemDirective,
  ProductSwitchItemDirectiveEventsMap,
  ProductSwitchItemDirectiveElement,
};
