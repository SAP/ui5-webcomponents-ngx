import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/TreeItem.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from './button';

interface TreeItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'detailClick'> {
  detailClick: CustomEvent<void>;
}

interface TreeItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'selected'
    | 'type'
    | 'accessibleName'
    | 'additionalTextState'
    | 'expanded'
    | 'hasChildren'
    | 'icon'
    | 'indeterminate'
    | 'isTreeItem'
    | 'additionalText'
    | 'text'
    | 'detailClick'
    | 'deleteButton'
  > {
  selected: boolean;
  type: 'Active' | 'Detail' | 'Inactive';
  accessibleName: string;
  additionalTextState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  expanded: boolean;
  hasChildren: boolean;
  icon: string;
  indeterminate: boolean;
  isTreeItem: boolean;
  additionalText: string;
  text: string;

  deleteButton: ButtonDirective['element'];

  addEventListener<K extends keyof TreeItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: TreeItemDirectiveElement,
      ev: TreeItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TreeItemDirectiveEventsMap>(
    type: K,
    listener: (
      this: TreeItemDirectiveElement,
      ev: TreeItemDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  toggle(): any;
}

@Directive({
  selector: 'ui5-tree-item',
  exportAs: 'ui5TreeItem',
})
class TreeItemDirective {
  @Input()
  set selected(val: TreeItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): TreeItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set type(val: TreeItemDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): TreeItemDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  @Input()
  set accessibleName(val: TreeItemDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): TreeItemDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set additionalTextState(
    val: TreeItemDirectiveElement['additionalTextState']
  ) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState(): TreeItemDirectiveElement['additionalTextState'] {
    return this.elementRef.nativeElement.additionalTextState;
  }

  @Input()
  set expanded(val: TreeItemDirectiveElement['expanded']) {
    this.elementRef.nativeElement.expanded = val;
  }
  get expanded(): TreeItemDirectiveElement['expanded'] {
    return this.elementRef.nativeElement.expanded;
  }

  @Input()
  set hasChildren(val: TreeItemDirectiveElement['hasChildren']) {
    this.elementRef.nativeElement.hasChildren = val;
  }
  get hasChildren(): TreeItemDirectiveElement['hasChildren'] {
    return this.elementRef.nativeElement.hasChildren;
  }

  @Input()
  set icon(val: TreeItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): TreeItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set indeterminate(val: TreeItemDirectiveElement['indeterminate']) {
    this.elementRef.nativeElement.indeterminate = val;
  }
  get indeterminate(): TreeItemDirectiveElement['indeterminate'] {
    return this.elementRef.nativeElement.indeterminate;
  }

  @Input()
  set isTreeItem(val: TreeItemDirectiveElement['isTreeItem']) {
    this.elementRef.nativeElement.isTreeItem = val;
  }
  get isTreeItem(): TreeItemDirectiveElement['isTreeItem'] {
    return this.elementRef.nativeElement.isTreeItem;
  }

  @Input()
  set additionalText(val: TreeItemDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): TreeItemDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set text(val: TreeItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): TreeItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }
  @Output() detailClick: Observable<TreeItemDirectiveEventsMap['detailClick']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<TreeItemDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get deleteButton(): ButtonDirective['element'] {
    return this.elementRef.nativeElement.deleteButton;
  }

  toggle(): any {
    return this.elementRef.nativeElement.toggle();
  }
}

export {
  TreeItemDirective,
  TreeItemDirectiveEventsMap,
  TreeItemDirectiveElement,
};
