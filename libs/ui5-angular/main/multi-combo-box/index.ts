import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/MultiComboBox.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '@ui5/webcomponents-ngx/generic-cva';
import { IconDirective } from '@ui5/webcomponents-ngx/main/icon';

interface MultiComboBoxDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    'change' | 'input' | 'openChange' | 'selectionChange'
  > {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
  openChange: CustomEvent<void>;
  selectionChange: CustomEvent<{ items: Array<any> }>;
}

interface MultiComboBoxDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'allowCustomValues'
    | 'disabled'
    | 'filter'
    | 'noTypeahead'
    | 'open'
    | 'placeholder'
    | 'readonly'
    | 'required'
    | 'value'
    | 'valueState'
    | 'change'
    | 'input'
    | 'openChange'
    | 'selectionChange'
    | 'icon'
    | 'valueStateMessage'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  accessibleNameRef: string;
  allowCustomValues: boolean;
  disabled: boolean;
  filter: string;
  noTypeahead: boolean;
  open: boolean;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  icon: Array<IconDirective['element']>;
  valueStateMessage: Array<HTMLElement>;

  addEventListener<K extends keyof MultiComboBoxDirectiveEventsMap>(
    type: K,
    listener: (
      this: MultiComboBoxDirectiveElement,
      ev: MultiComboBoxDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof MultiComboBoxDirectiveEventsMap>(
    type: K,
    listener: (
      this: MultiComboBoxDirectiveElement,
      ev: MultiComboBoxDirectiveEventsMap[K]
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
}

@Directive({
  selector: 'ui5-multi-combobox',
  exportAs: 'ui5MultiCombobox',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiComboBoxDirective),
      multi: true,
    },
  ],
})
class MultiComboBoxDirective extends GenericControlValueAccessor {
  @Input()
  set effectiveDir(val: MultiComboBoxDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): MultiComboBoxDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: MultiComboBoxDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): MultiComboBoxDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: MultiComboBoxDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): MultiComboBoxDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(
    val: MultiComboBoxDirectiveElement['accessibleNameRef']
  ) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): MultiComboBoxDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set allowCustomValues(
    val: MultiComboBoxDirectiveElement['allowCustomValues']
  ) {
    this.elementRef.nativeElement.allowCustomValues = val;
  }
  get allowCustomValues(): MultiComboBoxDirectiveElement['allowCustomValues'] {
    return this.elementRef.nativeElement.allowCustomValues;
  }

  @Input()
  set disabled(val: MultiComboBoxDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): MultiComboBoxDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set filter(val: MultiComboBoxDirectiveElement['filter']) {
    this.elementRef.nativeElement.filter = val;
  }
  get filter(): MultiComboBoxDirectiveElement['filter'] {
    return this.elementRef.nativeElement.filter;
  }

  @Input()
  set noTypeahead(val: MultiComboBoxDirectiveElement['noTypeahead']) {
    this.elementRef.nativeElement.noTypeahead = val;
  }
  get noTypeahead(): MultiComboBoxDirectiveElement['noTypeahead'] {
    return this.elementRef.nativeElement.noTypeahead;
  }

  @Input()
  set open(val: MultiComboBoxDirectiveElement['open']) {
    this.elementRef.nativeElement.open = val;
  }
  get open(): MultiComboBoxDirectiveElement['open'] {
    return this.elementRef.nativeElement.open;
  }

  @Input()
  set placeholder(val: MultiComboBoxDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): MultiComboBoxDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set readonly(val: MultiComboBoxDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): MultiComboBoxDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: MultiComboBoxDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): MultiComboBoxDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set value(val: MultiComboBoxDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): MultiComboBoxDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: MultiComboBoxDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): MultiComboBoxDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }
  @Output() change: Observable<MultiComboBoxDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<MultiComboBoxDirectiveEventsMap['input']> =
    NEVER as any;
  @Output() openChange: Observable<
    MultiComboBoxDirectiveEventsMap['openChange']
  > = NEVER as any;
  @Output() selectionChange: Observable<
    MultiComboBoxDirectiveEventsMap['selectionChange']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<MultiComboBoxDirectiveElement>) {
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
}

export {
  MultiComboBoxDirective,
  MultiComboBoxDirectiveEventsMap,
  MultiComboBoxDirectiveElement,
};
