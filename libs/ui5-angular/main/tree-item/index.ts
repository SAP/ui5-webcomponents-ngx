import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/TreeItem.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from '@ui5/webcomponents-ngx/main/button';

interface TreeItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'detailClick'> {
  detailClick: CustomEvent<void>;
}

interface TreeItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'selected'
    | 'navigated'
    | 'type'
    | 'accessibleName'
    | 'additionalTextState'
    | 'expanded'
    | 'hasChildren'
    | 'icon'
    | 'indeterminate'
    | 'additionalText'
    | 'text'
    | 'detailClick'
    | 'deleteButton'
  > {
  effectiveDir: any;
  isUi5Element: any;
  selected: boolean;
  navigated: boolean;
  type: 'Active' | 'Detail' | 'Inactive' | 'Navigation';
  accessibleName: string;
  additionalTextState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  expanded: boolean;
  hasChildren: boolean;
  icon: string;
  indeterminate: boolean;
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

  _render(): any;

  attachInvalidate(callback: any): any;

  define(): any;

  detachInvalidate(callback: any): any;

  fireEvent(name: any, data: any, cancelable: any, bubbles: any): boolean;

  focus(): any;

  getDomRef(): any;

  getFocusDomRef(): any;

  getFocusDomRefAsync(): any;

  getMetadata(): any;

  getSlottedNodes(): any;

  getStaticAreaItemDomRef(): any;

  getUniqueDependencies(): any;

  onAfterRendering(): any;

  onBeforeRendering(): any;

  onDefine(): any;

  onEnterDOM(): any;

  onExitDOM(): any;

  onInvalidation(changeInfo: any): any;

  toggle(): any;
}

@Directive({
  selector: 'ui5-tree-item',
  exportAs: 'ui5TreeItem',
  standalone: true,
  providers: [],
})
class TreeItemDirective {
  @Input()
  set effectiveDir(val: TreeItemDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): TreeItemDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: TreeItemDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): TreeItemDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set selected(val: TreeItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): TreeItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set navigated(val: TreeItemDirectiveElement['navigated']) {
    this.elementRef.nativeElement.navigated = val;
  }
  get navigated(): TreeItemDirectiveElement['navigated'] {
    return this.elementRef.nativeElement.navigated;
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

  _render(): any {
    return this.elementRef.nativeElement._render();
  }

  attachInvalidate(callback: any): any {
    return this.elementRef.nativeElement.attachInvalidate(callback);
  }

  define(): any {
    return this.elementRef.nativeElement.define();
  }

  detachInvalidate(callback: any): any {
    return this.elementRef.nativeElement.detachInvalidate(callback);
  }

  fireEvent(name: any, data: any, cancelable: any, bubbles: any): boolean {
    return this.elementRef.nativeElement.fireEvent(
      name,
      data,
      cancelable,
      bubbles
    );
  }

  focus(): any {
    return this.elementRef.nativeElement.focus();
  }

  getDomRef(): any {
    return this.elementRef.nativeElement.getDomRef();
  }

  getFocusDomRef(): any {
    return this.elementRef.nativeElement.getFocusDomRef();
  }

  getFocusDomRefAsync(): any {
    return this.elementRef.nativeElement.getFocusDomRefAsync();
  }

  getMetadata(): any {
    return this.elementRef.nativeElement.getMetadata();
  }

  getSlottedNodes(): any {
    return this.elementRef.nativeElement.getSlottedNodes();
  }

  getStaticAreaItemDomRef(): any {
    return this.elementRef.nativeElement.getStaticAreaItemDomRef();
  }

  getUniqueDependencies(): any {
    return this.elementRef.nativeElement.getUniqueDependencies();
  }

  onAfterRendering(): any {
    return this.elementRef.nativeElement.onAfterRendering();
  }

  onBeforeRendering(): any {
    return this.elementRef.nativeElement.onBeforeRendering();
  }

  onDefine(): any {
    return this.elementRef.nativeElement.onDefine();
  }

  onEnterDOM(): any {
    return this.elementRef.nativeElement.onEnterDOM();
  }

  onExitDOM(): any {
    return this.elementRef.nativeElement.onExitDOM();
  }

  onInvalidation(changeInfo: any): any {
    return this.elementRef.nativeElement.onInvalidation(changeInfo);
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
