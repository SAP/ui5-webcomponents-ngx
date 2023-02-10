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
    | 'effectiveDir'
    | 'isUi5Element'
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
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  accessibleNameRef: string;
  disabled: boolean;
  maxlength: any;
  name: string;
  noTypeahead: boolean;
  placeholder: string;
  previewItem: any;
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

  openPicker(): any;
}

@Directive({
  selector: 'ui5-input',
  exportAs: 'ui5Input',
})
class InputDirective {
  @Input()
  set effectiveDir(val: InputDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): InputDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: InputDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): InputDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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

  openPicker(): any {
    return this.elementRef.nativeElement.openPicker();
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
