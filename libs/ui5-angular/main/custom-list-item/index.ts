import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/CustomListItem.js';
import { Observable, NEVER } from 'rxjs';
import { ButtonDirective } from '@ui5/webcomponents-ngx/main/button';

interface CustomListItemDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'detailClick'> {
  detailClick: CustomEvent<void>;
}

interface CustomListItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'selected'
    | 'navigated'
    | 'type'
    | 'accessibleName'
    | 'detailClick'
    | 'deleteButton'
  > {
  effectiveDir: any;
  isUi5Element: any;
  selected: boolean;
  navigated: boolean;
  type: 'Active' | 'Detail' | 'Inactive' | 'Navigation';
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
  selector: 'ui5-li-custom',
  exportAs: 'ui5LiCustom',
  standalone: true,
  providers: [],
})
class CustomListItemDirective {
  @Input()
  set effectiveDir(val: CustomListItemDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): CustomListItemDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: CustomListItemDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): CustomListItemDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set selected(val: CustomListItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): CustomListItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set navigated(val: CustomListItemDirectiveElement['navigated']) {
    this.elementRef.nativeElement.navigated = val;
  }
  get navigated(): CustomListItemDirectiveElement['navigated'] {
    return this.elementRef.nativeElement.navigated;
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
  CustomListItemDirective,
  CustomListItemDirectiveEventsMap,
  CustomListItemDirectiveElement,
};
