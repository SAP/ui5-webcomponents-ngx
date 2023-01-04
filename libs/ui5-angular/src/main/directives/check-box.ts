import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/CheckBox.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';

interface CheckBoxDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change'> {
  change: CustomEvent<void>;
}

interface CheckBoxDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'checked'
    | 'disabled'
    | 'indeterminate'
    | 'name'
    | 'readonly'
    | 'required'
    | 'text'
    | 'valueState'
    | 'wrappingType'
    | 'change'
  > {
  accessibleName: string;
  accessibleNameRef: string;
  checked: boolean;
  disabled: boolean;
  indeterminate: boolean;
  name: string;
  readonly: boolean;
  required: boolean;
  text: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  wrappingType: 'None' | 'Normal';

  addEventListener<K extends keyof CheckBoxDirectiveEventsMap>(
    type: K,
    listener: (
      this: CheckBoxDirectiveElement,
      ev: CheckBoxDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof CheckBoxDirectiveEventsMap>(
    type: K,
    listener: (
      this: CheckBoxDirectiveElement,
      ev: CheckBoxDirectiveEventsMap[K]
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
  selector: 'ui5-checkbox',
  exportAs: 'ui5Checkbox',
})
class CheckBoxDirective {
  @Input()
  set accessibleName(val: CheckBoxDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): CheckBoxDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: CheckBoxDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): CheckBoxDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set checked(val: CheckBoxDirectiveElement['checked']) {
    this.elementRef.nativeElement.checked = val;
  }
  get checked(): CheckBoxDirectiveElement['checked'] {
    return this.elementRef.nativeElement.checked;
  }

  @Input()
  set disabled(val: CheckBoxDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): CheckBoxDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set indeterminate(val: CheckBoxDirectiveElement['indeterminate']) {
    this.elementRef.nativeElement.indeterminate = val;
  }
  get indeterminate(): CheckBoxDirectiveElement['indeterminate'] {
    return this.elementRef.nativeElement.indeterminate;
  }

  @Input()
  set name(val: CheckBoxDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): CheckBoxDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set readonly(val: CheckBoxDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): CheckBoxDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: CheckBoxDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): CheckBoxDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set text(val: CheckBoxDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): CheckBoxDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  @Input()
  set valueState(val: CheckBoxDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): CheckBoxDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }

  @Input()
  set wrappingType(val: CheckBoxDirectiveElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType(): CheckBoxDirectiveElement['wrappingType'] {
    return this.elementRef.nativeElement.wrappingType;
  }
  @Output() change: Observable<CheckBoxDirectiveEventsMap['change']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<CheckBoxDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }
}

@Directive({
  selector: 'ui5-checkbox',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxDirectiveCva),
      multi: true,
    },
  ],
})
class CheckBoxDirectiveCva extends GenericControlValueAccessor {
  constructor(private elementRef: ElementRef<CheckBoxDirective['element']>) {
    super({
      get value() {
        return elementRef.nativeElement.checked;
      },
      set value(val) {
        elementRef.nativeElement.checked = val;
      },
      valueUpdatedNotifier$: merge(
        fromEvent(elementRef.nativeElement, 'change')
      ),
      setDisabledState: (isDisabled: boolean): void => {
        elementRef.nativeElement.disabled = isDisabled;
      },
    });
  }
}

export {
  CheckBoxDirective,
  CheckBoxDirectiveCva,
  CheckBoxDirectiveEventsMap,
  CheckBoxDirectiveElement,
};
