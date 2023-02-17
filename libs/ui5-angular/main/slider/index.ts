import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/Slider.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '@ui5/webcomponents-ngx/generic-cva';

interface SliderDirectiveEventsMap
  extends Omit<HTMLElementEventMap, 'change' | 'input'> {
  change: CustomEvent<void>;
  input: CustomEvent<void>;
}

interface SliderDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'disabled'
    | 'labelInterval'
    | 'max'
    | 'min'
    | 'showTickmarks'
    | 'showTooltip'
    | 'step'
    | 'value'
    | 'change'
    | 'input'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  disabled: boolean;
  labelInterval: any;
  max: any;
  min: any;
  showTickmarks: boolean;
  showTooltip: boolean;
  step: any;
  value: any;

  addEventListener<K extends keyof SliderDirectiveEventsMap>(
    type: K,
    listener: (
      this: SliderDirectiveElement,
      ev: SliderDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SliderDirectiveEventsMap>(
    type: K,
    listener: (
      this: SliderDirectiveElement,
      ev: SliderDirectiveEventsMap[K]
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
  selector: 'ui5-slider',
  exportAs: 'ui5Slider',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderDirective),
      multi: true,
    },
  ],
})
class SliderDirective extends GenericControlValueAccessor {
  @Input()
  set effectiveDir(val: SliderDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): SliderDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: SliderDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): SliderDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: SliderDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): SliderDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set disabled(val: SliderDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): SliderDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set labelInterval(val: SliderDirectiveElement['labelInterval']) {
    this.elementRef.nativeElement.labelInterval = val;
  }
  get labelInterval(): SliderDirectiveElement['labelInterval'] {
    return this.elementRef.nativeElement.labelInterval;
  }

  @Input()
  set max(val: SliderDirectiveElement['max']) {
    this.elementRef.nativeElement.max = val;
  }
  get max(): SliderDirectiveElement['max'] {
    return this.elementRef.nativeElement.max;
  }

  @Input()
  set min(val: SliderDirectiveElement['min']) {
    this.elementRef.nativeElement.min = val;
  }
  get min(): SliderDirectiveElement['min'] {
    return this.elementRef.nativeElement.min;
  }

  @Input()
  set showTickmarks(val: SliderDirectiveElement['showTickmarks']) {
    this.elementRef.nativeElement.showTickmarks = val;
  }
  get showTickmarks(): SliderDirectiveElement['showTickmarks'] {
    return this.elementRef.nativeElement.showTickmarks;
  }

  @Input()
  set showTooltip(val: SliderDirectiveElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = val;
  }
  get showTooltip(): SliderDirectiveElement['showTooltip'] {
    return this.elementRef.nativeElement.showTooltip;
  }

  @Input()
  set step(val: SliderDirectiveElement['step']) {
    this.elementRef.nativeElement.step = val;
  }
  get step(): SliderDirectiveElement['step'] {
    return this.elementRef.nativeElement.step;
  }

  @Input()
  set value(val: SliderDirectiveElement['value']) {
    this.elementRef.nativeElement.value = val;
  }
  get value(): SliderDirectiveElement['value'] {
    return this.elementRef.nativeElement.value;
  }
  @Output() change: Observable<SliderDirectiveEventsMap['change']> =
    NEVER as any;
  @Output() input: Observable<SliderDirectiveEventsMap['input']> = NEVER as any;
  constructor(private elementRef: ElementRef<SliderDirectiveElement>) {
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

export { SliderDirective, SliderDirectiveEventsMap, SliderDirectiveElement };
