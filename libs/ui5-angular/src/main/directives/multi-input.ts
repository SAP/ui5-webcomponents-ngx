import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/MultiInput.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';
import { SuggestionGroupItemDirective } from './suggestion-group-item';
import { SuggestionItemDirective } from './suggestion-item';
import { IconDirective } from './icon';
import { TokenDirective } from './token';

interface MultiInputDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    | 'change'
    | 'input'
    | 'suggestionItemPreview'
    | 'suggestionItemSelect'
    | 'tokenDelete'
    | 'valueHelpTrigger'
  > {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
  suggestionItemPreview: CustomEvent<{
    item: HTMLElement;
    targetRef: HTMLElement;
  }>;
  suggestionItemSelect: CustomEvent<{ item: HTMLElement }>;
  tokenDelete: CustomEvent<{ token: HTMLElement }>;
  valueHelpTrigger: CustomEvent<void>;
}

interface MultiInputDirectiveElement
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
    | 'showValueHelpIcon'
    | 'change'
    | 'input'
    | 'suggestionItemPreview'
    | 'suggestionItemSelect'
    | 'tokenDelete'
    | 'valueHelpTrigger'
    | 'icon'
    | 'valueStateMessage'
    | 'tokens'
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
  showValueHelpIcon: boolean;

  icon: Array<IconDirective['element']>;
  valueStateMessage: Array<HTMLElement>;
  tokens: Array<TokenDirective['element']>;

  addEventListener<K extends keyof MultiInputDirectiveEventsMap>(
    type: K,
    listener: (
      this: MultiInputDirectiveElement,
      ev: MultiInputDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof MultiInputDirectiveEventsMap>(
    type: K,
    listener: (
      this: MultiInputDirectiveElement,
      ev: MultiInputDirectiveEventsMap[K]
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
  selector: 'ui5-multi-input',
  exportAs: 'ui5MultiInput',
})
class MultiInputDirective {
  @Input()
  set accessibleName(val: MultiInputDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): MultiInputDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: MultiInputDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): MultiInputDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set disabled(val: MultiInputDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): MultiInputDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set maxlength(val: MultiInputDirectiveElement['maxlength']) {
    this.elementRef.nativeElement.maxlength = val;
  }
  get maxlength(): MultiInputDirectiveElement['maxlength'] {
    return this.elementRef.nativeElement.maxlength;
  }

  @Input()
  set name(val: MultiInputDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): MultiInputDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set noTypeahead(val: MultiInputDirectiveElement['noTypeahead']) {
    this.elementRef.nativeElement.noTypeahead = val;
  }
  get noTypeahead(): MultiInputDirectiveElement['noTypeahead'] {
    return this.elementRef.nativeElement.noTypeahead;
  }

  @Input()
  set placeholder(val: MultiInputDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): MultiInputDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set previewItem(val: MultiInputDirectiveElement['previewItem']) {
    this.elementRef.nativeElement.previewItem = val;
  }
  get previewItem(): MultiInputDirectiveElement['previewItem'] {
    return this.elementRef.nativeElement.previewItem;
  }

  @Input()
  set readonly(val: MultiInputDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): MultiInputDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: MultiInputDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): MultiInputDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set showClearIcon(val: MultiInputDirectiveElement['showClearIcon']) {
    this.elementRef.nativeElement.showClearIcon = val;
  }
  get showClearIcon(): MultiInputDirectiveElement['showClearIcon'] {
    return this.elementRef.nativeElement.showClearIcon;
  }

  @Input()
  set showSuggestions(val: MultiInputDirectiveElement['showSuggestions']) {
    this.elementRef.nativeElement.showSuggestions = val;
  }
  get showSuggestions(): MultiInputDirectiveElement['showSuggestions'] {
    return this.elementRef.nativeElement.showSuggestions;
  }

  @Input()
  set type(val: MultiInputDirectiveElement['type']) {
    this.elementRef.nativeElement.type = val;
  }
  get type(): MultiInputDirectiveElement['type'] {
    return this.elementRef.nativeElement.type;
  }

  @Input()
  set value(val: MultiInputDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): MultiInputDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: MultiInputDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): MultiInputDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }

  @Input()
  set showValueHelpIcon(val: MultiInputDirectiveElement['showValueHelpIcon']) {
    this.elementRef.nativeElement.showValueHelpIcon = val;
  }
  get showValueHelpIcon(): MultiInputDirectiveElement['showValueHelpIcon'] {
    return this.elementRef.nativeElement.showValueHelpIcon;
  }
  @Output() change: Observable<MultiInputDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<MultiInputDirectiveEventsMap['input']> =
    NEVER as any;
  @Output() suggestionItemPreview: Observable<
    MultiInputDirectiveEventsMap['suggestionItemPreview']
  > = NEVER as any;
  @Output() suggestionItemSelect: Observable<
    MultiInputDirectiveEventsMap['suggestionItemSelect']
  > = NEVER as any;
  @Output() tokenDelete: Observable<
    MultiInputDirectiveEventsMap['tokenDelete']
  > = NEVER as any;
  @Output() valueHelpTrigger: Observable<
    MultiInputDirectiveEventsMap['valueHelpTrigger']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<MultiInputDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get icon(): Array<IconDirective['element']> {
    return this.elementRef.nativeElement.icon;
  }
  get valueStateMessage(): Array<HTMLElement> {
    return this.elementRef.nativeElement.valueStateMessage;
  }
  get tokens(): Array<TokenDirective['element']> {
    return this.elementRef.nativeElement.tokens;
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
  selector: 'ui5-multi-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiInputDirectiveCva),
      multi: true,
    },
  ],
})
class MultiInputDirectiveCva extends GenericControlValueAccessor {
  constructor(private elementRef: ElementRef<MultiInputDirective['element']>) {
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
  MultiInputDirective,
  MultiInputDirectiveCva,
  MultiInputDirectiveEventsMap,
  MultiInputDirectiveElement,
};
