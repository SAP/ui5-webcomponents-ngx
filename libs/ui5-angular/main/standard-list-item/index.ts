import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/StandardListItem.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from '@ui5/webcomponents-ngx/main/button';

interface StandardListItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'detailClick'> {
  detailClick: CustomEvent<void>;
}

interface StandardListItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'selected'
    | 'navigated'
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
    | 'imageContent'
  > {
  effectiveDir: any;
  isUi5Element: any;
  selected: boolean;
  navigated: boolean;
  type: 'Active' | 'Detail' | 'Inactive' | 'Navigation';
  accessibleName: string;
  additionalText: string;
  additionalTextState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  description: string;
  icon: string;
  iconEnd: boolean;
  image: string;

  deleteButton: ButtonDirective['element'];
  imageContent: Array<HTMLElement>;

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
}

@Directive({
  selector: 'ui5-li',
  exportAs: 'ui5Li',
  standalone: true,
  providers: [],
})
class StandardListItemDirective {
  @Input()
  set effectiveDir(val: StandardListItemDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): StandardListItemDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: StandardListItemDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): StandardListItemDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set selected(val: StandardListItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): StandardListItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set navigated(val: StandardListItemDirectiveElement['navigated']) {
    this.elementRef.nativeElement.navigated = val;
  }
  get navigated(): StandardListItemDirectiveElement['navigated'] {
    return this.elementRef.nativeElement.navigated;
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
  get imageContent(): Array<HTMLElement> {
    return this.elementRef.nativeElement.imageContent;
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
}

export {
  StandardListItemDirective,
  StandardListItemDirectiveEventsMap,
  StandardListItemDirectiveElement,
};
