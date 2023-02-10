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
  selector: 'ui5-multi-input',
  exportAs: 'ui5MultiInput',
})
class MultiInputDirective {
  @Input()
  set effectiveDir(val: MultiInputDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): MultiInputDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: MultiInputDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): MultiInputDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

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
