import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Icon.js';

interface IconDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'accessibleRole'
    | 'design'
    | 'interactive'
    | 'name'
    | 'showTooltip'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  accessibleRole: string;
  design:
    | 'Contrast'
    | 'Critical'
    | 'Default'
    | 'Information'
    | 'Negative'
    | 'Neutral'
    | 'NonInteractive'
    | 'Positive';
  interactive: boolean;
  name: string;
  showTooltip: boolean;

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
  selector: 'ui5-icon',
  exportAs: 'ui5Icon',
  standalone: true,
  providers: [],
})
class IconDirective {
  @Input()
  set effectiveDir(val: IconDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): IconDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: IconDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): IconDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: IconDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): IconDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set accessibleRole(val: IconDirectiveElement['accessibleRole']) {
    this.elementRef.nativeElement.accessibleRole = val;
  }
  get accessibleRole(): IconDirectiveElement['accessibleRole'] {
    return this.elementRef.nativeElement.accessibleRole;
  }

  @Input()
  set design(val: IconDirectiveElement['design']) {
    this.elementRef.nativeElement.design = val;
  }
  get design(): IconDirectiveElement['design'] {
    return this.elementRef.nativeElement.design;
  }

  @Input()
  set interactive(val: IconDirectiveElement['interactive']) {
    this.elementRef.nativeElement.interactive = val;
  }
  get interactive(): IconDirectiveElement['interactive'] {
    return this.elementRef.nativeElement.interactive;
  }

  @Input()
  set name(val: IconDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): IconDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set showTooltip(val: IconDirectiveElement['showTooltip']) {
    this.elementRef.nativeElement.showTooltip = val;
  }
  get showTooltip(): IconDirectiveElement['showTooltip'] {
    return this.elementRef.nativeElement.showTooltip;
  }

  constructor(private elementRef: ElementRef<IconDirectiveElement>) {}

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

export { IconDirective, IconDirectiveElement };
