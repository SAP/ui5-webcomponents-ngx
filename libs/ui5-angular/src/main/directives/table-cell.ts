import { Directive, ElementRef } from '@angular/core';
import '@ui5/webcomponents/dist/TableCell.js';

interface TableCellDirectiveElement extends HTMLElement {}

@Directive({
  selector: 'ui5-table-cell',
  exportAs: 'ui5TableCell',
})
class TableCellDirective {
  constructor(private elementRef: ElementRef<TableCellDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { TableCellDirective, TableCellDirectiveElement };
