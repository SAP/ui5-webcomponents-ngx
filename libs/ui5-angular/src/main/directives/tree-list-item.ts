import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/TreeListItem.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from './button';

interface TreeListItemDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'detailClick' | 'stepIn' | 'stepOut' | 'toggle'
  > {
  detailClick: CustomEvent<void>;
  stepIn: CustomEvent<{ item: HTMLElement }>;
  stepOut: CustomEvent<{ item: HTMLElement }>;
  toggle: CustomEvent<{ item: HTMLElement }>;
}

interface TreeListItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'selected'
    | 'type'
    | 'accessibleName'
    | 'additionalText'
    | 'additionalTextState'
    | 'expanded'
    | 'icon'
    | 'level'
    | 'showToggleButton'
    | 'detailClick'
    | 'stepIn'
    | 'stepOut'
    | 'toggle'
    | 'deleteButton'
  > {
  selected: boolean;
  type: 'Active' | 'Detail' | 'Inactive';
  accessibleName: string;
  additionalText: string;
  additionalTextState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  expanded: boolean;
  icon: string;
  level: any;
  showToggleButton: boolean;

  deleteButton: ButtonDirective['element'];

  addEventListener<K extends keyof TreeListItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: TreeListItemDirectiveElement,
      ev: TreeListItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TreeListItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: TreeListItemDirectiveElement,
      ev: TreeListItemDirectiveEventsMap[K]
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
  selector: 'ui5-li-tree',
  exportAs: 'ui5LiTree',
})
class TreeListItemDirective {
  @Input()
  set selected(val: TreeListItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): TreeListItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set type(val: TreeListItemDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): TreeListItemDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  @Input()
  set accessibleName(val: TreeListItemDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): TreeListItemDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set additionalText(val: TreeListItemDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): TreeListItemDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set additionalTextState(
    val: TreeListItemDirectiveElement['additionalTextState']
  ) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState(): TreeListItemDirectiveElement['additionalTextState'] {
    return this.elementRef.nativeElement.additionalTextState;
  }

  @Input()
  set expanded(val: TreeListItemDirectiveElement['expanded']) {
    this.elementRef.nativeElement.expanded = val;
  }
  get expanded(): TreeListItemDirectiveElement['expanded'] {
    return this.elementRef.nativeElement.expanded;
  }

  @Input()
  set icon(val: TreeListItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): TreeListItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set level(val: TreeListItemDirectiveElement['level']) {
    this.elementRef.nativeElement.level = val;
  }
  get level(): TreeListItemDirectiveElement['level'] {
    return this.elementRef.nativeElement.level;
  }

  @Input()
  set showToggleButton(val: TreeListItemDirectiveElement['showToggleButton']) {
    this.elementRef.nativeElement.showToggleButton = val;
  }
  get showToggleButton(): TreeListItemDirectiveElement['showToggleButton'] {
    return this.elementRef.nativeElement.showToggleButton;
  }
  @Output() detailClick: Observable<
    TreeListItemDirectiveEventsMap['detailClick']
  > = NEVER as any;
  @Output() stepIn: Observable<TreeListItemDirectiveEventsMap['stepIn']> =
    NEVER as any;
  @Output() stepOut: Observable<TreeListItemDirectiveEventsMap['stepOut']> =
    NEVER as any;
  @Output() toggle: Observable<TreeListItemDirectiveEventsMap['toggle']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<TreeListItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get deleteButton(): ButtonDirective['element'] {
    return this.elementRef.nativeElement.deleteButton;
  }
}

export {
  TreeListItemDirective,
  TreeListItemDirectiveEventsMap,
  TreeListItemDirectiveElement,
};
