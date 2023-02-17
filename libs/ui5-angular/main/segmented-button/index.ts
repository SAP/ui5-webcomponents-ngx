import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/SegmentedButton.js';
import { SegmentedButtonItemDirective } from '@ui5/webcomponents-ngx/main/segmented-button-item';
import { Observable, NEVER } from 'rxjs';

interface SegmentedButtonDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'selectionChange'> {
  selectionChange: CustomEvent<{ selectedItem: HTMLElement }>;
}

interface SegmentedButtonDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'selectedItem'
    | 'selectionChange'
  > {
  effectiveDir: any;
  isUi5Element: any;
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
  selector: 'ui5-segmented-button',
  exportAs: 'ui5SegmentedButton',
  standalone: true,
  providers: [],
})
class SegmentedButtonDirective {
  @Input()
  set effectiveDir(val: SegmentedButtonDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): SegmentedButtonDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: SegmentedButtonDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): SegmentedButtonDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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
  SegmentedButtonDirective,
  SegmentedButtonDirectiveEventsMap,
  SegmentedButtonDirectiveElement,
};
