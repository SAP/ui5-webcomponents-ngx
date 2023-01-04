import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/TreeItemCustom.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from './button';

interface TreeItemCustomDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'detailClick'> {
  detailClick: CustomEvent<void>;
}

interface TreeItemCustomDirectiveElement
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
    | 'hideSelectionElement'
    | 'detailClick'
    | 'deleteButton'
    | 'content'
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
  hideSelectionElement: boolean;

  deleteButton: ButtonDirective['element'];
  content: Array<HTMLElement>;

  addEventListener<K extends keyof TreeItemCustomDirectiveEventsMap>(
    type: K,
    listener: (
      this: TreeItemCustomDirectiveElement,
      ev: TreeItemCustomDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TreeItemCustomDirectiveEventsMap>(
    type: K,
    listener: (
      this: TreeItemCustomDirectiveElement,
      ev: TreeItemCustomDirectiveEventsMap[K]
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
  selector: 'ui5-tree-item-custom',
  exportAs: 'ui5TreeItemCustom',
})
class TreeItemCustomDirective {
  @Input()
  set selected(val: TreeItemCustomDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): TreeItemCustomDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set type(val: TreeItemCustomDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): TreeItemCustomDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  @Input()
  set accessibleName(val: TreeItemCustomDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): TreeItemCustomDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set additionalTextState(
    val: TreeItemCustomDirectiveElement['additionalTextState']
  ) {
    this.elementRef.nativeElement.additionalTextState = val;
  }
  get additionalTextState(): TreeItemCustomDirectiveElement['additionalTextState'] {
    return this.elementRef.nativeElement.additionalTextState;
  }

  @Input()
  set expanded(val: TreeItemCustomDirectiveElement['expanded']) {
    this.elementRef.nativeElement.expanded = val;
  }
  get expanded(): TreeItemCustomDirectiveElement['expanded'] {
    return this.elementRef.nativeElement.expanded;
  }

  @Input()
  set hasChildren(val: TreeItemCustomDirectiveElement['hasChildren']) {
    this.elementRef.nativeElement.hasChildren = val;
  }
  get hasChildren(): TreeItemCustomDirectiveElement['hasChildren'] {
    return this.elementRef.nativeElement.hasChildren;
  }

  @Input()
  set icon(val: TreeItemCustomDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): TreeItemCustomDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set indeterminate(val: TreeItemCustomDirectiveElement['indeterminate']) {
    this.elementRef.nativeElement.indeterminate = val;
  }
  get indeterminate(): TreeItemCustomDirectiveElement['indeterminate'] {
    return this.elementRef.nativeElement.indeterminate;
  }

  @Input()
  set isTreeItem(val: TreeItemCustomDirectiveElement['isTreeItem']) {
    this.elementRef.nativeElement.isTreeItem = val;
  }
  get isTreeItem(): TreeItemCustomDirectiveElement['isTreeItem'] {
    return this.elementRef.nativeElement.isTreeItem;
  }

  @Input()
  set hideSelectionElement(
    val: TreeItemCustomDirectiveElement['hideSelectionElement']
  ) {
    this.elementRef.nativeElement.hideSelectionElement = val;
  }
  get hideSelectionElement(): TreeItemCustomDirectiveElement['hideSelectionElement'] {
    return this.elementRef.nativeElement.hideSelectionElement;
  }
  @Output() detailClick: Observable<
    TreeItemCustomDirectiveEventsMap['detailClick']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<TreeItemCustomDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get deleteButton(): ButtonDirective['element'] {
    return this.elementRef.nativeElement.deleteButton;
  }
  get content(): Array<HTMLElement> {
    return this.elementRef.nativeElement.content;
  }

  toggle(): any {
    return this.elementRef.nativeElement.toggle();
  }
}

export {
  TreeItemCustomDirective,
  TreeItemCustomDirectiveEventsMap,
  TreeItemCustomDirectiveElement,
};
