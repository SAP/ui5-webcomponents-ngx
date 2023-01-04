import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/SegmentedButton.js';
import { SegmentedButtonItemDirective } from './segmented-button-item';
import { Observable, NEVER } from 'rxjs';

interface SegmentedButtonDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'selectionChange'> {
  selectionChange: CustomEvent<{ selectedItem: HTMLElement }>;
}

interface SegmentedButtonDirectiveElement
  extends Omit<
    HTMLElement,
    'accessibleName' | 'selectedItem' | 'selectionChange'
  > {
  accessibleName: string;
  selectedItem: SegmentedButtonItemDirective['element'];

  addEventListener<K extends keyof SegmentedButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: SegmentedButtonDirectiveElement,
      ev: SegmentedButtonDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SegmentedButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: SegmentedButtonDirectiveElement,
      ev: SegmentedButtonDirectiveEventsMap[K]
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
  selector: 'ui5-segmented-button',
  exportAs: 'ui5SegmentedButton',
})
class SegmentedButtonDirective {
  @Input()
  set accessibleName(val: SegmentedButtonDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): SegmentedButtonDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set selectedItem(val: SegmentedButtonDirectiveElement['selectedItem']) {
    this.elementRef.nativeElement.selectedItem = val;
  }
  get selectedItem(): SegmentedButtonDirectiveElement['selectedItem'] {
    return this.elementRef.nativeElement.selectedItem;
  }
  @Output() selectionChange: Observable<
    SegmentedButtonDirectiveEventsMap['selectionChange']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<SegmentedButtonDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export {
  SegmentedButtonDirective,
  SegmentedButtonDirectiveEventsMap,
  SegmentedButtonDirectiveElement,
};
