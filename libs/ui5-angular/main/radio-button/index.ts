import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/RadioButton.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '@ui5/webcomponents-ngx/generic-cva';

interface RadioButtonDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change'> {
  change: CustomEvent<void>;
}

interface RadioButtonDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'checked'
    | 'disabled'
    | 'name'
    | 'readonly'
    | 'required'
    | 'text'
    | 'value'
    | 'valueState'
    | 'wrappingType'
    | 'change'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  accessibleNameRef: string;
  checked: boolean;
  disabled: boolean;
  name: string;
  readonly: boolean;
  required: boolean;
  text: string;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  wrappingType: 'None' | 'Normal';

  addEventListener<K extends keyof RadioButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: RadioButtonDirectiveElement,
      ev: RadioButtonDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof RadioButtonDirectiveEventsMap>(
    type: K,
    listener: (
      this: RadioButtonDirectiveElement,
      ev: RadioButtonDirectiveEventsMap[K]
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
  selector: 'ui5-radio-button',
  exportAs: 'ui5RadioButton',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonDirective),
      multi: true,
    },
  ],
})
class RadioButtonDirective extends GenericControlValueAccessor {
  @Input()
  set effectiveDir(val: RadioButtonDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): RadioButtonDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: RadioButtonDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): RadioButtonDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: RadioButtonDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): RadioButtonDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: RadioButtonDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): RadioButtonDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set checked(val: RadioButtonDirectiveElement['checked']) {
    this.elementRef.nativeElement.checked = val;
  }
  get checked(): RadioButtonDirectiveElement['checked'] {
    return this.elementRef.nativeElement.checked;
  }

  @Input()
  set disabled(val: RadioButtonDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): RadioButtonDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set name(val: RadioButtonDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): RadioButtonDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set readonly(val: RadioButtonDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): RadioButtonDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: RadioButtonDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): RadioButtonDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set text(val: RadioButtonDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): RadioButtonDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  @Input()
  set value(val: RadioButtonDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): RadioButtonDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: RadioButtonDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): RadioButtonDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }

  @Input()
  set wrappingType(val: RadioButtonDirectiveElement['wrappingType']) {
    this.elementRef.nativeElement.wrappingType = val;
  }
  get wrappingType(): RadioButtonDirectiveElement['wrappingType'] {
    return this.elementRef.nativeElement.wrappingType;
  }
  @Output() change: Observable<RadioButtonDirectiveEventsMap['change']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<RadioButtonDirectiveElement>) {
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

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
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
  RadioButtonDirective,
  RadioButtonDirectiveEventsMap,
  RadioButtonDirectiveElement,
};
