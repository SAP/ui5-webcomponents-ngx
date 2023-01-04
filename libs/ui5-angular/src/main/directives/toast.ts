import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Toast.js';

interface ToastDirectiveElement
  extends Omit<HTMLElement, 'duration' | 'placement'> {
  duration: any;
  placement:
    | 'BottomCenter'
    | 'BottomEnd'
    | 'BottomStart'
    | 'MiddleCenter'
    | 'MiddleEnd'
    | 'MiddleStart'
    | 'TopCenter'
    | 'TopEnd'
    | 'TopStart';

  show(): any;
}

@Directive({
  selector: 'ui5-toast',
  exportAs: 'ui5Toast',
})
class ToastDirective {
  @Input()
  set duration(val: ToastDirectiveElement['duration']) {
    this.elementRef.nativeElement.duration = val;
  }
  get duration(): ToastDirectiveElement['duration'] {
    return this.elementRef.nativeElement.duration;
  }

  @Input()
  set placement(val: ToastDirectiveElement['placement']) {
    this.elementRef.nativeElement.placement = val;
  }
  get placement(): ToastDirectiveElement['placement'] {
    return this.elementRef.nativeElement.placement;
  }

  constructor(private elementRef: ElementRef<ToastDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  show(): any {
    return this.elementRef.nativeElement.show();
  }
}

export { ToastDirective, ToastDirectiveElement };
