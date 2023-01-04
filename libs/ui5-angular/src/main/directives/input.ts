import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/Input.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';
import { SuggestionGroupItemDirective } from './suggestion-group-item';
import { SuggestionItemDirective } from './suggestion-item';
import { IconDirective } from './icon';

interface InputDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'change' | 'input' | 'suggestionItemPreview' | 'suggestionItemSelect'
  > {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
  suggestionItemPreview: CustomEvent<{
    item: HTMLElement;
    targetRef: HTMLElement;
  }>;
  suggestionItemSelect: CustomEvent<{ item: HTMLElement }>;
}

interface InputDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'disabled'
    | 'maxlength'
    | 'name'
    | 'noTypeahead'
    | 'placeholder'
    | 'previewItem'
    | 'readonly'
    | 'required'
    | 'showClearIcon'
    | 'showSuggestions'
    | 'type'
    | 'value'
    | 'valueState'
    | 'change'
    | 'input'
    | 'suggestionItemPreview'
    | 'suggestionItemSelect'
    | 'icon'
    | 'valueStateMessage'
  > {
  accessibleName: string;
  accessibleNameRef: string;
  disabled: boolean;
  maxlength: any;
  name: string;
  noTypeahead: boolean;
  placeholder: string;
  previewItem:
    | SuggestionGroupItemDirective['element']
    | SuggestionItemDirective['element'];
  readonly: boolean;
  required: boolean;
  showClearIcon: boolean;
  showSuggestions: boolean;
  type: 'Email' | 'Number' | 'Password' | 'Tel' | 'Text' | 'URL';
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  icon: Array<IconDirective['element']>;
  valueStateMessage: Array<HTMLElement>;

  addEventListener<K extends keyof InputDirectiveEventsMap>(
    type: K,
    listener: (
      this: InputDirectiveElement,
      ev: InputDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof InputDirectiveEventsMap>(
    type: K,
    listener: (
      this: InputDirectiveElement,
      ev: InputDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  getCaretPosition(): any;

  openPicker(): any;

  setCaretPosition(pos: any): any;
}

@Directive({
  selector: 'ui5-input',
  exportAs: 'ui5Input',
})
class InputDirective {
  @Input()
  set accessibleName(val: InputDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): InputDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: InputDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): InputDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set disabled(val: InputDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): InputDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set maxlength(val: InputDirectiveElement['maxlength']) {
    this.elementRef.nativeElement.maxlength = val;
  }
  get maxlength(): InputDirectiveElement['maxlength'] {
    return this.elementRef.nativeElement.maxlength;
  }

  @Input()
  set name(val: InputDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): InputDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set noTypeahead(val: InputDirectiveElement['noTypeahead']) {
    this.elementRef.nativeElement.noTypeahead = val;
  }
  get noTypeahead(): InputDirectiveElement['noTypeahead'] {
    return this.elementRef.nativeElement.noTypeahead;
  }

  @Input()
  set placeholder(val: InputDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): InputDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set previewItem(val: InputDirectiveElement['previewItem']) {
    this.elementRef.nativeElement.previewItem = val;
  }
  get previewItem(): InputDirectiveElement['previewItem'] {
    return this.elementRef.nativeElement.previewItem;
  }

  @Input()
  set readonly(val: InputDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): InputDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: InputDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): InputDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set showClearIcon(val: InputDirectiveElement['showClearIcon']) {
    this.elementRef.nativeElement.showClearIcon = val;
  }
  get showClearIcon(): InputDirectiveElement['showClearIcon'] {
    return this.elementRef.nativeElement.showClearIcon;
  }

  @Input()
  set showSuggestions(val: InputDirectiveElement['showSuggestions']) {
    this.elementRef.nativeElement.showSuggestions = val;
  }
  get showSuggestions(): InputDirectiveElement['showSuggestions'] {
    return this.elementRef.nativeElement.showSuggestions;
  }

  @Input()
  set type(val: InputDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): InputDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  @Input()
  set value(val: InputDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): InputDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: InputDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): InputDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }
  @Output() change: Observable<InputDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<InputDirectiveEventsMap['input']> = NEVER as any;
  @Output() suggestionItemPreview: Observable<
    InputDirectiveEventsMap['suggestionItemPreview']
  > = NEVER as any;
  @Output() suggestionItemSelect: Observable<
    InputDirectiveEventsMap['suggestionItemSelect']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<InputDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get icon(): Array<IconDirective['element']> {
    return this.elementRef.nativeElement.icon;
  }
  get valueStateMessage(): Array<HTMLElement> {
    return this.elementRef.nativeElement.valueStateMessage;
  }

  getCaretPosition(): any {
    return this.elementRef.nativeElement.getCaretPosition();
  }

  openPicker(): any {
    return this.elementRef.nativeElement.openPicker();
  }

  setCaretPosition(pos: any): any {
    return this.elementRef.nativeElement.setCaretPosition(pos);
  }
}

@Directive({
  selector: 'ui5-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDirectiveCva),
      multi: true,
    },
  ],
})
class InputDirectiveCva extends GenericControlValueAccessor {
  constructor(private elementRef: ElementRef<InputDirective['element']>) {
    super({
      get value() {
        return elementRef.nativeElement.value;
      },
      set value(val) {
        elementRef.nativeElement.value = val;
      },
      valueUpdatedNotifier$: merge(
        fromEvent(elementRef.nativeElement, 'change'),
        fromEvent(elementRef.nativeElement, 'input')
      ),
      setDisabledState: (isDisabled: boolean): void => {
        elementRef.nativeElement.disabled = isDisabled;
      },
    });
  }
}

export {
  InputDirective,
  InputDirectiveCva,
  InputDirectiveEventsMap,
  InputDirectiveElement,
};
