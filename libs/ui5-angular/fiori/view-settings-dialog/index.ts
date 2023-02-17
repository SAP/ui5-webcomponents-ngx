import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js';
import { Observable, NEVER } from 'rxjs';
import { FilterItemDirective } from '@ui5/webcomponents-ngx/fiori/filter-item';
import { SortItemDirective } from '@ui5/webcomponents-ngx/fiori/sort-item';

interface ViewSettingsDialogDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'beforeOpen' | 'cancel' | 'confirm'> {
  beforeOpen: CustomEvent<void>;
  cancel: CustomEvent<{
    sortOrder: string;
    sortBy: string;
    sortByItem: HTMLElement;
    sortDescending: boolean;
    filterItems: Array<any>;
  }>;
  confirm: CustomEvent<{
    sortOrder: string;
    sortBy: string;
    sortByItem: HTMLElement;
    sortDescending: boolean;
    filterItems: Array<any>;
  }>;
}

interface ViewSettingsDialogDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'sortDescending'
    | 'beforeOpen'
    | 'cancel'
    | 'confirm'
    | 'filterItems'
    | 'sortItems'
  > {
  effectiveDir: any;
  isUi5Element: any;
  sortDescending: boolean;

  filterItems: Array<FilterItemDirective['element']>;
  sortItems: Array<SortItemDirective['element']>;

  addEventListener<K extends keyof ViewSettingsDialogDirectiveEventsMap>(
    type: K,
    listener: (
      this: ViewSettingsDialogDirectiveElement,
      ev: ViewSettingsDialogDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ViewSettingsDialogDirectiveEventsMap>(
    type: K,
    listener: (
      this: ViewSettingsDialogDirectiveElement,
      ev: ViewSettingsDialogDirectiveEventsMap[K]
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

  setConfirmedSettings(settings: Record<string, any>): any;

  show(): any;
}

@Directive({
  selector: 'ui5-view-settings-dialog',
  exportAs: 'ui5ViewSettingsDialog',
  standalone: true,
  providers: [],
})
class ViewSettingsDialogDirective {
  @Input()
  set effectiveDir(val: ViewSettingsDialogDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): ViewSettingsDialogDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: ViewSettingsDialogDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): ViewSettingsDialogDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set sortDescending(
    val: ViewSettingsDialogDirectiveElement['sortDescending']
  ) {
    this.elementRef.nativeElement.sortDescending = val;
  }
  get sortDescending(): ViewSettingsDialogDirectiveElement['sortDescending'] {
    return this.elementRef.nativeElement.sortDescending;
  }
  @Output() beforeOpen: Observable<
    ViewSettingsDialogDirectiveEventsMap['beforeOpen']
  > = NEVER as any;
  @Output() cancel: Observable<ViewSettingsDialogDirectiveEventsMap['cancel']> =
    NEVER as any;
  @Output() confirm: Observable<
    ViewSettingsDialogDirectiveEventsMap['confirm']
  > = NEVER as any;
  constructor(
    private elementRef: ElementRef<ViewSettingsDialogDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get filterItems(): Array<FilterItemDirective['element']> {
    return this.elementRef.nativeElement.filterItems;
  }
  get sortItems(): Array<SortItemDirective['element']> {
    return this.elementRef.nativeElement.sortItems;
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

  setConfirmedSettings(settings: Record<string, any>): any {
    return this.elementRef.nativeElement.setConfirmedSettings(settings);
  }

  show(): any {
    return this.elementRef.nativeElement.show();
  }
}

export {
  ViewSettingsDialogDirective,
  ViewSettingsDialogDirectiveEventsMap,
  ViewSettingsDialogDirectiveElement,
};
