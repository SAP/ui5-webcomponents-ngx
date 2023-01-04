import { Directive, ElementRef, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/Wizard.js';
import { Observable, NEVER } from 'rxjs';

interface WizardDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'stepChange'> {
  stepChange: CustomEvent<{
    step: HTMLElement;
    previousStep: HTMLElement;
    changeWithClick: boolean;
  }>;
}

interface WizardDirectiveElement extends Omit<HTMLElement, 'stepChange'> {
  addEventListener<K extends keyof WizardDirectiveEventsMap>(
    type: K,
    listener: (
      this: WizardDirectiveElement,
      ev: WizardDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof WizardDirectiveEventsMap>(
    type: K,
    listener: (
      this: WizardDirectiveElement,
      ev: WizardDirectiveEventsMap[K]
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
  selector: 'ui5-wizard',
  exportAs: 'ui5Wizard',
})
class WizardDirective {
  @Output() stepChange: Observable<WizardDirectiveEventsMap['stepChange']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<WizardDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { WizardDirective, WizardDirectiveEventsMap, WizardDirectiveElement };
