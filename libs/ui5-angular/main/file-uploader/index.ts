import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/FileUploader.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '@ui5/webcomponents-ngx/generic-cva';

interface FileUploaderDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change'> {
  change: CustomEvent<{ files: any }>;
}

interface FileUploaderDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accept'
    | 'disabled'
    | 'files'
    | 'hideInput'
    | 'multiple'
    | 'name'
    | 'placeholder'
    | 'value'
    | 'valueState'
    | 'change'
    | 'valueStateMessage'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accept: string;
  disabled: boolean;
  files: any;
  hideInput: boolean;
  multiple: boolean;
  name: string;
  placeholder: string;
  value: string;
  valueState: 'Error' | 'Information' | 'None' | 'Success' | 'Warning';

  valueStateMessage: Array<HTMLElement>;

  addEventListener<K extends keyof FileUploaderDirectiveEventsMap>(
    type: K,
    listener: (
      this: FileUploaderDirectiveElement,
      ev: FileUploaderDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof FileUploaderDirectiveEventsMap>(
    type: K,
    listener: (
      this: FileUploaderDirectiveElement,
      ev: FileUploaderDirectiveEventsMap[K]
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
  selector: 'ui5-file-uploader',
  exportAs: 'ui5FileUploader',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploaderDirective),
      multi: true,
    },
  ],
})
class FileUploaderDirective extends GenericControlValueAccessor {
  @Input()
  set effectiveDir(val: FileUploaderDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): FileUploaderDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: FileUploaderDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): FileUploaderDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accept(val: FileUploaderDirectiveElement['accept']) {
    this.elementRef.nativeElement.accept = val;
  }
  get accept(): FileUploaderDirectiveElement['accept'] {
    return this.elementRef.nativeElement.accept;
  }

  @Input()
  set disabled(val: FileUploaderDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): FileUploaderDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set files(val: FileUploaderDirectiveElement['files']) {
    this.elementRef.nativeElement.files = val;
  }
  get files(): FileUploaderDirectiveElement['files'] {
    return this.elementRef.nativeElement.files;
  }

  @Input()
  set hideInput(val: FileUploaderDirectiveElement['hideInput']) {
    this.elementRef.nativeElement.hideInput = val;
  }
  get hideInput(): FileUploaderDirectiveElement['hideInput'] {
    return this.elementRef.nativeElement.hideInput;
  }

  @Input()
  set multiple(val: FileUploaderDirectiveElement['multiple']) {
    this.elementRef.nativeElement.multiple = val;
  }
  get multiple(): FileUploaderDirectiveElement['multiple'] {
    return this.elementRef.nativeElement.multiple;
  }

  @Input()
  set name(val: FileUploaderDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): FileUploaderDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set placeholder(val: FileUploaderDirectiveElement['placeholder']) {
    this.elementRef.nativeElement.placeholder = val;
  }
  get placeholder(): FileUploaderDirectiveElement['placeholder'] {
    return this.elementRef.nativeElement.placeholder;
  }

  @Input()
  set value(val: FileUploaderDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): FileUploaderDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }

  @Input()
  set valueState(val: FileUploaderDirectiveElement['valueState']) {
    this.elementRef.nativeElement.valueState = val;
  }
  get valueState(): FileUploaderDirectiveElement['valueState'] {
    return this.elementRef.nativeElement.valueState;
  }
  @Output() change: Observable<FileUploaderDirectiveEventsMap['change']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<FileUploaderDirectiveElement>) {
    super({
      get value() {
        return elementRef.nativeElement.value;
      },
      set value(val) {
        elementRef.nativeElement.value = val;
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
  FileUploaderDirective,
  FileUploaderDirectiveEventsMap,
  FileUploaderDirectiveElement,
};
