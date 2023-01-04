import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/NotificationAction.js';

interface NotificationActionDirectiveElement
  extends Omit<HTMLElement, 'design' | 'disabled' | 'icon' | 'text'> {
  design:
    | 'Attention'
    | 'Default'
    | 'Emphasized'
    | 'Negative'
    | 'Positive'
    | 'Transparent';
  disabled: boolean;
  icon: string;
  text: string;
}

@Directive({
  selector: 'ui5-notification-action',
  exportAs: 'ui5NotificationAction',
})
class NotificationActionDirective {
  @Input()
  set design(val: NotificationActionDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): NotificationActionDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set disabled(val: NotificationActionDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): NotificationActionDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: NotificationActionDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): NotificationActionDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set text(val: NotificationActionDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): NotificationActionDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(
    private elementRef: ElementRef<NotificationActionDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { NotificationActionDirective, NotificationActionDirectiveElement };
