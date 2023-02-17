import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/TreeItemCustom.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from '@ui5/webcomponents-ngx/main/button';

interface TreeItemCustomDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'detailClick'> {
  detailClick: CustomEvent<void>;
}

interface TreeItemCustomDirectiveElement
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
    | 'hideSelectionElement'
    | 'detailClick'
    | 'deleteButton'
    | 'content'
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
  selector: 'ui5-tree-item-custom',
  exportAs: 'ui5TreeItemCustom',
  standalone: true,
  providers: [],
})
class TreeItemCustomDirective {
  @Input()
  set effectiveDir(val: TreeItemCustomDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): TreeItemCustomDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: TreeItemCustomDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): TreeItemCustomDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set selected(val: TreeItemCustomDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): TreeItemCustomDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set navigated(val: TreeItemCustomDirectiveElement['navigated']) {
    this.elementRef.nativeElement.navigated = val;
  }
  get navigated(): TreeItemCustomDirectiveElement['navigated'] {
    return this.elementRef.nativeElement.navigated;
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
  TreeItemCustomDirective,
  TreeItemCustomDirectiveEventsMap,
  TreeItemCustomDirectiveElement,
};
