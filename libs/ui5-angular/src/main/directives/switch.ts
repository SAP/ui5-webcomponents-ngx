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
}

@Directive({
  selector: 'ui5-switch',
  exportAs: 'ui5Switch',
})
class SwitchDirective {
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
