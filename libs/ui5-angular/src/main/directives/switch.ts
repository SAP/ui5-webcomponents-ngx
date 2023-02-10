import {
  Directive,
  ElementRef,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import '@ui5/webcomponents/dist/Switch.js';
import { Observable, fromEvent, merge, NEVER } from 'rxjs';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { GenericControlValueAccessor } from '../../generic-cva';

interface SwitchDirectiveEventsMap extends Omit<HTMLElementEventMap, 'change'> {
  change: CustomEvent<void>;
}

interface SwitchDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'accessibleNameRef'
    | 'checked'
    | 'design'
    | 'disabled'
    | 'textOff'
    | 'textOn'
    | 'tooltip'
    | 'change'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  accessibleNameRef: string;
  checked: boolean;
  design: 'Graphical' | 'Textual';
  disabled: boolean;
  textOff: string;
  textOn: string;
  tooltip: string;

  addEventListener<K extends keyof SwitchDirectiveEventsMap>(
    type: K,
    listener: (
      this: SwitchDirectiveElement,
      ev: SwitchDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof SwitchDirectiveEventsMap>(
    type: K,
    listener: (
      this: SwitchDirectiveElement,
      ev: SwitchDirectiveEventsMap[K]
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
  selector: 'ui5-switch',
  exportAs: 'ui5Switch',
})
class SwitchDirective {
  @Input()
  set effectiveDir(val: SwitchDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): SwitchDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: SwitchDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): SwitchDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: SwitchDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): SwitchDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleNameRef(val: SwitchDirectiveElement['accessibleNameRef']) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): SwitchDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set checked(val: SwitchDirectiveElement['checked']) {
    this.elementRef.nativeElement.checked = val;
  }
  get checked(): SwitchDirectiveElement['checked'] {
    return this.elementRef.nativeElement.checked;
  }

  @Input()
  set design(val: SwitchDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): SwitchDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set disabled(val: SwitchDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): SwitchDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set textOff(val: SwitchDirectiveElement['textOff']) {
    this.elementRef.nativeElement.textOff = val;
  }
  get textOff(): SwitchDirectiveElement['textOff'] {
    return this.elementRef.nativeElement.textOff;
  }

  @Input()
  set textOn(val: SwitchDirectiveElement['textOn']) {
    this.elementRef.nativeElement.textOn = val;
  }
  get textOn(): SwitchDirectiveElement['textOn'] {
    return this.elementRef.nativeElement.textOn;
  }

  @Input()
  set tooltip(val: SwitchDirectiveElement['tooltip']) {
    this.elementRef.nativeElement.tooltip = val;
  }
  get tooltip(): SwitchDirectiveElement['tooltip'] {
    return this.elementRef.nativeElement.tooltip;
  }
  @Output() change: Observable<SwitchDirectiveEventsMap['change']> =
    NEVER as any;
  constructor(private elementRef: ElementRef<SwitchDirectiveElement>) {}

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

@Directive({
  selector: 'ui5-switch',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchDirectiveCva),
      multi: true,
    },
  ],
})
class SwitchDirectiveCva extends GenericControlValueAccessor {
  constructor(private elementRef: ElementRef<SwitchDirective['element']>) {
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
}

export {
  SwitchDirective,
  SwitchDirectiveCva,
  SwitchDirectiveEventsMap,
  SwitchDirectiveElement,
};
