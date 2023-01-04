import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/GroupHeaderListItem.js';

interface GroupHeaderListItemDirectiveElement
  extends Omit<HTMLElement, 'selected' | 'accessibleName'> {
  selected: boolean;
  accessibleName: string;
}

@Directive({
  selector: 'ui5-li-groupheader',
  exportAs: 'ui5LiGroupheader',
})
class GroupHeaderListItemDirective {
  @Input()
  set selected(val: GroupHeaderListItemDirectiveElement['selected']) {
    this.elementRef.nativeElement.selected = val;
  }
  get selected(): GroupHeaderListItemDirectiveElement['selected'] {
    return this.elementRef.nativeElement.selected;
  }

  @Input()
  set accessibleName(
    val: GroupHeaderListItemDirectiveElement['accessibleName']
  ) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): GroupHeaderListItemDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  constructor(
    private elementRef: ElementRef<GroupHeaderListItemDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

export { GroupHeaderListItemDirective, GroupHeaderListItemDirectiveElement };
