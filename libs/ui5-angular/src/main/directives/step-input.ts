import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents/dist/StepInput.js';
import { Observable, NEVER } from 'rxjs';

interface StepInputDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change'> {
  change: CustomEvent<void>;
}

interface StepInputDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'disabled'
    | 'max'
    | 'min'
    | 'name'
    | 'placeholder'
    | 'readonly'
    | 'required'
    | 'step'
    | 'value'
    | 'valuePrecision'
    | 'valueState'
    | 'change'
    | 'valueStateMessage'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  accessibleNameRef: string;
  disabled: boolean;
  max: any;
  min: any;
  name: string;
  placeholder: string;
  readonly: boolean;
  required: boolean;
  step: any;
  value: any;
  valuePrecision: any;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  valueStateMessage: HTMLElement;

  addEventListener<K extends keyof StepInputDirectiveEventsMap>(
    type: K,
    listener: (
      this: StepInputDirectiveElement,
      ev: StepInputDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof StepInputDirectiveEventsMap>(
    type: K,
    listener: (
      this: StepInputDirectiveElement,
      ev: StepInputDirectiveEventsMap[K]
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
  selector: 'ui5-step-input',
  exportAs: 'ui5StepInput',
})
class StepInputDirective {
  @Input()
  set effectiveDir(val: StepInputDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): StepInputDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: StepInputDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): StepInputDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: StepInputDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): StepInputDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: StepInputDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): StepInputDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set disabled(val: StepInputDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): StepInputDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set max(val: StepInputDirectiveElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max(): StepInputDirectiveElement['max'] {
    return this.elementRef.nativeElement.max;
  }

  @Input()
  set min(val: StepInputDirectiveElement['min']) {
    this.elementRef.nativeElement.min = val;
  }
  get min(): StepInputDirectiveElement['min'] {
    return this.elementRef.nativeElement.min;
  }

  @Input()
  set name(val: StepInputDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): StepInputDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set placeholder(val: StepInputDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): StepInputDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set readonly(val: StepInputDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): StepInputDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set required(val: StepInputDirectiveElement['required']) {
    this.elementRef.nativeElement.required = val;
  }
  get required(): StepInputDirectiveElement['required'] {
    return this.elementRef.nativeElement.required;
  }

  @Input()
  set step(val: StepInputDirectiveElement['step']) {
    this.elementRef.nativeElement.step = val;
  }
  get step(): StepInputDirectiveElement['step'] {
    return this.elementRef.nativeElement.step;
  }

  @Input()
  set value(val: StepInputDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): StepInputDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valuePrecision(val: StepInputDirectiveElement['valuePrecision']) {
    this.elementRef.nativeElement.valuePrecision = val;
  }
  get valuePrecision(): StepInputDirectiveElement['valuePrecision'] {
    return this.elementRef.nativeElement.valuePrecision;
  }

  @Input()
  set valueState(val: StepInputDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): StepInputDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }
  @Output() change: Observable<StepInputDirectiveEventsMap['change']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<StepInputDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get valueStateMessage(): HTMLElement {
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
  StepInputDirective,
  StepInputDirectiveEventsMap,
  StepInputDirectiveElement,
};
