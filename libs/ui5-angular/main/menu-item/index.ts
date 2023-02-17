import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/MenuItem.js';

interface MenuItemDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'additionalText'
    | 'disabled'
    | 'icon'
    | 'startsSection'
    | 'text'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  additionalText: string;
  disabled: boolean;
  icon: string;
  startsSection: boolean;
  text: string;

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
  selector: 'ui5-menu-item',
  exportAs: 'ui5MenuItem',
  standalone: true,
  providers: [],
})
class MenuItemDirective {
  @Input()
  set effectiveDir(val: MenuItemDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): MenuItemDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: MenuItemDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): MenuItemDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: MenuItemDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): MenuItemDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set additionalText(val: MenuItemDirectiveElement['additionalText']) {
    this.elementRef.nativeElement.additionalText = val;
  }
  get additionalText(): MenuItemDirectiveElement['additionalText'] {
    return this.elementRef.nativeElement.additionalText;
  }

  @Input()
  set disabled(val: MenuItemDirectiveElement['disabled']) {
    this.elementRef.nativeElement.disabled = val;
  }
  get disabled(): MenuItemDirectiveElement['disabled'] {
    return this.elementRef.nativeElement.disabled;
  }

  @Input()
  set icon(val: MenuItemDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): MenuItemDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set startsSection(val: MenuItemDirectiveElement['startsSection']) {
    this.elementRef.nativeElement.startsSection = val;
  }
  get startsSection(): MenuItemDirectiveElement['startsSection'] {
    return this.elementRef.nativeElement.startsSection;
  }

  @Input()
  set text(val: MenuItemDirectiveElement['text']) {
    this.elementRef.nativeElement.text = val;
  }
  get text(): MenuItemDirectiveElement['text'] {
    return this.elementRef.nativeElement.text;
  }

  constructor(private elementRef: ElementRef<MenuItemDirectiveElement>) {}

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

export { MenuItemDirective, MenuItemDirectiveElement };
