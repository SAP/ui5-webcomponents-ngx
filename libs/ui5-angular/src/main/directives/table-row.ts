import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/TableRow.js';

interface TableRowDirectiveElement
  extends Omit<HTMLElement, 'navigated' | 'selected' | 'type'> {
  navigated: boolean;
  selected: boolean;
  type: 'Active' | 'Inactive';
}

@Directive({
  selector: 'ui5-table-row',
  exportAs: 'ui5TableRow',
})
class TableRowDirective {
  @Input()
  set navigated(val: TableRowDirectiveElement['navigated']) {
    this.elementRef.nativeElement.navigated = val;
  }
  get navigated(): TableRowDirectiveElement['navigated'] {
    return this.elementRef.nativeElement.navigated;
  }

  @Input()
  set selected(val: TableRowDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): TableRowDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set type(val: TableRowDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): TableRowDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  constructor(private elementRef: ElementRef<TableRowDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { TableRowDirective, TableRowDirectiveElement };
