import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/TextArea.js';
import { Observable, NEVER } from 'rxjs';

interface TextAreaDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input'> {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
}

interface TextAreaDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'disabled'
    | 'growing'
    | 'growingMaxLines'
    | 'maxlength'
    | 'name'
    | 'placeholder'
    | 'readonly'
    | 'required'
    | 'rows'
    | 'showExceededText'
    | 'value'
    | 'valueState'
    | 'change'
    | 'input'
    | 'valueStateMessage'
  > {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: boolean;
  growing: boolean;
  growingMaxLines: any;
  maxlength: any;
  name: string;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  rows: any;
  showExceededText: boolean;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  valueStateMessage: Array<HTMLElement>;

  addEventListener<K extends keyof TextAreaDirectiveEventsMap>(
    type: K,
    listener: (
      this: TextAreaDirectiveElement,
      ev: TextAreaDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TextAreaDirectiveEventsMap>(
    type: K,
    listener: (
      this: TextAreaDirectiveElement,
      ev: TextAreaDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

@Directive({
  selector: 'ui5-textarea',
  exportAs: 'ui5Textarea',
})
class TextAreaDirective {
  @Input()
  set accessibleName(val: TextAreaDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): TextAreaDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: TextAreaDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): TextAreaDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set disabled(val: TextAreaDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): TextAreaDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set growing(val: TextAreaDirectiveElement['growing']) {
    this.elementRef.nativeElement.growing = val;
  }
  get growing(): TextAreaDirectiveElement['growing'] {
    return this.elementRef.nativeElement.growing;
  }

  @Input()
  set growingMaxLines(val: TextAreaDirectiveElement['growingMaxLines']) {
    this.elementRef.nativeElement.growingMaxLines = val;
  }
  get growingMaxLines(): TextAreaDirectiveElement['growingMaxLines'] {
    return this.elementRef.nativeElement.growingMaxLines;
  }

  @Input()
  set maxlength(val: TextAreaDirectiveElement['maxlength']) {
    this.elementRef.nativeElement.maxlength = val;
  }
  get maxlength(): TextAreaDirectiveElement['maxlength'] {
    return this.elementRef.nativeElement.maxlength;
  }

  @Input()
  set name(val: TextAreaDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): TextAreaDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set placeholder(val: TextAreaDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): TextAreaDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set readonly(val: TextAreaDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): TextAreaDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: TextAreaDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): TextAreaDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set rows(val: TextAreaDirectiveElement['rows']) {
    this.elementRef.nativeElement.rows = val;
  }
  get rows(): TextAreaDirectiveElement['rows'] {
    return this.elementRef.nativeElement.rows;
  }

  @Input()
  set showExceededText(val: TextAreaDirectiveElement['showExceededText']) {
    this.elementRef.nativeElement.showExceededText = val;
  }
  get showExceededText(): TextAreaDirectiveElement['showExceededText'] {
    return this.elementRef.nativeElement.showExceededText;
  }

  @Input()
  set value(val: TextAreaDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): TextAreaDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: TextAreaDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): TextAreaDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }
  @Output() change: Observable<TextAreaDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<TextAreaDirectiveEventsMap['input']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<TextAreaDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): Array<HTMLElement> {
    return this.elementRef.nativeElement.valueStateMessage;
  }
}

export {
  TextAreaDirective,
  TextAreaDirectiveEventsMap,
  TextAreaDirectiveElement,
};
