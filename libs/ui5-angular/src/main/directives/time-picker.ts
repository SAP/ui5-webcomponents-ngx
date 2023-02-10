import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/TimePicker.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';

interface TimePickerDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input'> {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
}

interface TimePickerDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'disabled'
    | 'readonly'
    | 'value'
    | 'valueState'
    | 'dateValue'
    | 'formatPattern'
    | 'placeholder'
    | 'change'
    | 'input'
    | 'valueStateMessage'
  > {
  effectiveDir: any;
  isUi5Element: any;
  disabled: boolean;
  readonly: boolean;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';
  dateValue: any;
  formatPattern: string;
  placeholder: string;

  valueStateMessage: HTMLElement;

  addEventListener<K extends keyof TimePickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: TimePickerDirectiveElement,
      ev: TimePickerDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof TimePickerDirectiveEventsMap>(
    type: K,
    listener: (
      this: TimePickerDirectiveElement,
      ev: TimePickerDirectiveEventsMap[K]
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

  closePicker(): any;

  formatValue(date: Record<string, any>): string;

  isOpen(): boolean;

  isValid(value: string): boolean;

  openPicker(): any;
}

@Directive({
  selector: 'ui5-time-picker',
  exportAs: 'ui5TimePicker',
})
class TimePickerDirective {
  @Input()
  set effectiveDir(val: TimePickerDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): TimePickerDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: TimePickerDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): TimePickerDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set disabled(val: TimePickerDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): TimePickerDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set readonly(val: TimePickerDirectiveElement['readonly']) {
    this.elementRef.nativeElement.readonly = val;
  }
  get readonly(): TimePickerDirectiveElement['readonly'] {
    return this.elementRef.nativeElement.readonly;
  }

  @Input()
  set value(val: TimePickerDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): TimePickerDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: TimePickerDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): TimePickerDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }

  @Input()
  set dateValue(val: TimePickerDirectiveElement['dateValue']) {
    this.elementRef.nativeElement.dateValue = val;
  }
  get dateValue(): TimePickerDirectiveElement['dateValue'] {
    return this.elementRef.nativeElement.dateValue;
  }

  @Input()
  set formatPattern(val: TimePickerDirectiveElement['formatPattern']) {
    this.elementRef.nativeElement.formatPattern = val;
  }
  get formatPattern(): TimePickerDirectiveElement['formatPattern'] {
    return this.elementRef.nativeElement.formatPattern;
  }

  @Input()
  set placeholder(val: TimePickerDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): TimePickerDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }
  @Output() change: Observable<TimePickerDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<TimePickerDirectiveEventsMap['input']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<TimePickerDirectiveElement>) {}

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

  closePicker(): any {
    return this.elementRef.nativeElement.closePicker();
  }

  formatValue(date: Record<string, any>): string {
    return this.elementRef.nativeElement.formatValue(date);
  }

  isOpen(): boolean {
    return this.elementRef.nativeElement.isOpen();
  }

  isValid(value: string): boolean {
    return this.elementRef.nativeElement.isValid(value);
  }

  openPicker(): any {
    return this.elementRef.nativeElement.openPicker();
  }
}

@Directive({
  selector: 'ui5-time-picker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TimePickerDirectiveCva),
      multi: true,
    },
  ],
})
class TimePickerDirectiveCva extends GenericControlValueAccessor {
  constructor(private elementRef: ElementRef<TimePickerDirective['element']>) {
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
  TimePickerDirective,
  TimePickerDirectiveCva,
  TimePickerDirectiveEventsMap,
  TimePickerDirectiveElement,
};
