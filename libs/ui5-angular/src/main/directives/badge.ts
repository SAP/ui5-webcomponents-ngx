import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Badge.js';
import { IconDirective } from './icon';

interface BadgeDirectiveElement
  extends Omit<HTMLElement, 'colorScheme' | 'icon'> {
  colorScheme: string;

  icon: IconDirective['element'];
}

@Directive({
  selector: 'ui5-badge',
  exportAs: 'ui5Badge',
})
class BadgeDirective {
  @Input()
  set colorScheme(val: BadgeDirectiveElement['colorScheme']) {
    this.elementRef.nativeElement.colorScheme = val;
  }
  get colorScheme(): BadgeDirectiveElement['colorScheme'] {
    return this.elementRef.nativeElement.colorScheme;
  }

  constructor(private elementRef: ElementRef<BadgeDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get icon(): IconDirective['element'] {
    return this.elementRef.nativeElement.icon;
  }
}

export { BadgeDirective, BadgeDirectiveElement };
