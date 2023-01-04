import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/CustomListItem.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from './button';

interface CustomListItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'detailClick'> {
  detailClick: CustomEvent<void>;
}

interface CustomListItemDirectiveElement
  extends Omit<
    HTMLElement,
    'selected' | 'type' | 'accessibleName' | 'detailClick' | 'deleteButton'
  > {
  selected: boolean;
  type: 'Active' | 'Detail' | 'Inactive';
  accessibleName: string;

  deleteButton: ButtonDirective['element'];

  addEventListener<K extends keyof CustomListItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: CustomListItemDirectiveElement,
      ev: CustomListItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof CustomListItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: CustomListItemDirectiveElement,
      ev: CustomListItemDirectiveEventsMap[K]
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
  selector: 'ui5-li-custom',
  exportAs: 'ui5LiCustom',
})
class CustomListItemDirective {
  @Input()
  set selected(val: CustomListItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): CustomListItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set type(val: CustomListItemDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): CustomListItemDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  @Input()
  set accessibleName(val: CustomListItemDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): CustomListItemDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }
  @Output() detailClick: Observable<
    CustomListItemDirectiveEventsMap['detailClick']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<CustomListItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get deleteButton(): ButtonDirective['element'] {
    return this.elementRef.nativeElement.deleteButton;
  }
}

export {
  CustomListItemDirective,
  CustomListItemDirectiveEventsMap,
  CustomListItemDirectiveElement,
};
