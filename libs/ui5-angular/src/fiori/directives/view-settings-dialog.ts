import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/ViewSettingsDialog.js';
import { Observable, NEVER } from 'rxjs';
import { FilterItemDirective } from './filter-item';
import { SortItemDirective } from './sort-item';

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
    | 'sortDescending'
    | 'beforeOpen'
    | 'cancel'
    | 'confirm'
    | 'filterItems'
    | 'sortItems'
  > {
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

  setConfirmedSettings(settings: Record<string, any>): any;

  show(): any;
}

@Directive({
  selector: 'ui5-view-settings-dialog',
  exportAs: 'ui5ViewSettingsDialog',
})
class ViewSettingsDialogDirective {
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
