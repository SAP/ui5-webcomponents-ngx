import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/StandardListItem.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from './button';

interface StandardListItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'detailClick'> {
  detailClick: CustomEvent<void>;
}

interface StandardListItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'selected'
    | 'type'
    | 'accessibleName'
    | 'additionalText'
    | 'additionalTextState'
    | 'description'
    | 'icon'
    | 'iconEnd'
    | 'image'
    | 'detailClick'
    | 'deleteButton'
  > {
  selected: boolean;
  type: 'Active' | 'Detail' | 'Inactive';
  accessibleName: string;
  additionalText: string;
  additionalTextState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  description: string;
  icon: string;
  iconEnd: boolean;
  image: string;

  deleteButton: ButtonDirective['element'];

  addEventListener<K extends keyof StandardListItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: StandardListItemDirectiveElement,
      ev: StandardListItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof StandardListItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: StandardListItemDirectiveElement,
      ev: StandardListItemDirectiveEventsMap[K]
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
  selector: 'ui5-li',
  exportAs: 'ui5Li',
})
class StandardListItemDirective {
  @Input()
  set selected(val: StandardListItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): StandardListItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set type(val: StandardListItemDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): StandardListItemDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  @Input()
  set accessibleName(val: StandardListItemDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): StandardListItemDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set additionalText(val: StandardListItemDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): StandardListItemDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set additionalTextState(
    val: StandardListItemDirectiveElement['additionalTextState']
  ) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState(): StandardListItemDirectiveElement['additionalTextState'] {
    return this.elementRef.nativeElement.additionalTextState;
  }

  @Input()
  set description(val: StandardListItemDirectiveElement['description']) {
    this.elementRef.nativeElement.description = val;
  }
  get description(): StandardListItemDirectiveElement['description'] {
    return this.elementRef.nativeElement.description;
  }

  @Input()
  set icon(val: StandardListItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): StandardListItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set iconEnd(val: StandardListItemDirectiveElement['iconEnd']) {
    this.elementRef.nativeElement.iconEnd = val;
  }
  get iconEnd(): StandardListItemDirectiveElement['iconEnd'] {
    return this.elementRef.nativeElement.iconEnd;
  }

  @Input()
  set image(val: StandardListItemDirectiveElement['image']) {
    this.elementRef.nativeElement.image = val;
  }
  get image(): StandardListItemDirectiveElement['image'] {
    return this.elementRef.nativeElement.image;
  }
  @Output() detailClick: Observable<
    StandardListItemDirectiveEventsMap['detailClick']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<StandardListItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get deleteButton(): ButtonDirective['element'] {
    return this.elementRef.nativeElement.deleteButton;
  }
}

export {
  StandardListItemDirective,
  StandardListItemDirectiveEventsMap,
  StandardListItemDirectiveElement,
};
