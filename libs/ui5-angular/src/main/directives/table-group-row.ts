import { Directive, ElementRef } from '@angular/core';
import '@ui5/webcomponents/dist/TableGroupRow.js';

interface TableGroupRowDirectiveElement extends HTMLElement {}

@Directive({
  selector: 'ui5-table-group-row',
  exportAs: 'ui5TableGroupRow',
})
class TableGroupRowDirective {
  constructor(private elementRef: ElementRef<TableGroupRowDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { TableGroupRowDirective, TableGroupRowDirectiveElement };
