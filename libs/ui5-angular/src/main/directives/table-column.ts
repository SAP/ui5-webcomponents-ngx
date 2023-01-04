import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/TableColumn.js';

interface TableColumnDirectiveElement
  extends Omit<HTMLElement, 'demandPopin' | 'minWidth' | 'popinText'> {
  demandPopin: boolean;
  minWidth: any;
  popinText: string;
}

@Directive({
  selector: 'ui5-table-column',
  exportAs: 'ui5TableColumn',
})
class TableColumnDirective {
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
}

export { TableColumnDirective, TableColumnDirectiveElement };
