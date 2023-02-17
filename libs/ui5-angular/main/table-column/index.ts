import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/TableColumn.js';

interface TableColumnDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'demandPopin'
    | 'minWidth'
    | 'popinDisplay'
    | 'popinText'
  > {
  effectiveDir: any;
  isUi5Element: any;
  demandPopin: boolean;
  minWidth: any;
  popinDisplay: any;
  popinText: string;

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
  selector: 'ui5-table-column',
  exportAs: 'ui5TableColumn',
  standalone: true,
  providers: [],
})
class TableColumnDirective {
  @Input()
  set effectiveDir(val: TableColumnDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): TableColumnDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: TableColumnDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): TableColumnDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set demandPopin(val: TableColumnDirectiveElement['demandPopin']) {
    this.elementRef.nativeElement.demandPopin = val;
  }
  get demandPopin(): TableColumnDirectiveElement['demandPopin'] {
    return this.elementRef.nativeElement.demandPopin;
  }

  @Input()
  set minWidth(val: TableColumnDirectiveElement['minWidth']) {
    this.elementRef.nativeElement.minWidth = val;
  }
  get minWidth(): TableColumnDirectiveElement['minWidth'] {
    return this.elementRef.nativeElement.minWidth;
  }

  @Input()
  set popinDisplay(val: TableColumnDirectiveElement['popinDisplay']) {
    this.elementRef.nativeElement.popinDisplay = val;
  }
  get popinDisplay(): TableColumnDirectiveElement['popinDisplay'] {
    return this.elementRef.nativeElement.popinDisplay;
  }

  @Input()
  set popinText(val: TableColumnDirectiveElement['popinText']) {
    this.elementRef.nativeElement.popinText = val;
  }
  get popinText(): TableColumnDirectiveElement['popinText'] {
    return this.elementRef.nativeElement.popinText;
  }

  constructor(private elementRef: ElementRef<TableColumnDirectiveElement>) {}

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

export { TableColumnDirective, TableColumnDirectiveElement };
