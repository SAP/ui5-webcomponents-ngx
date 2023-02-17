import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Avatar.js';

interface AvatarDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleName'
    | 'colorScheme'
    | 'icon'
    | 'initials'
    | 'interactive'
    | 'shape'
    | 'size'
    | 'badge'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleName: string;
  colorScheme:
    | 'Accent1'
    | 'Accent10'
    | 'Accent2'
    | 'Accent3'
    | 'Accent4'
    | 'Accent5'
    | 'Accent6'
    | 'Accent7'
    | 'Accent8'
    | 'Accent9'
    | 'Placeholder';
  icon: string;
  initials: string;
  interactive: boolean;
  shape: 'Circle' | 'Square';
  size: 'L' | 'M' | 'S' | 'XL' | 'XS';

  badge: HTMLElement;

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
  selector: 'ui5-avatar',
  exportAs: 'ui5Avatar',
  standalone: true,
  providers: [],
})
class AvatarDirective {
  @Input()
  set effectiveDir(val: AvatarDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): AvatarDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: AvatarDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): AvatarDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleName(val: AvatarDirectiveElement['accessibleName']) {
    this.elementRef.nativeElement.accessibleName = val;
  }
  get accessibleName(): AvatarDirectiveElement['accessibleName'] {
    return this.elementRef.nativeElement.accessibleName;
  }

  @Input()
  set colorScheme(val: AvatarDirectiveElement['colorScheme']) {
    this.elementRef.nativeElement.colorScheme = val;
  }
  get colorScheme(): AvatarDirectiveElement['colorScheme'] {
    return this.elementRef.nativeElement.colorScheme;
  }

  @Input()
  set icon(val: AvatarDirectiveElement['icon']) {
    this.elementRef.nativeElement.icon = val;
  }
  get icon(): AvatarDirectiveElement['icon'] {
    return this.elementRef.nativeElement.icon;
  }

  @Input()
  set initials(val: AvatarDirectiveElement['initials']) {
    this.elementRef.nativeElement.initials = val;
  }
  get initials(): AvatarDirectiveElement['initials'] {
    return this.elementRef.nativeElement.initials;
  }

  @Input()
  set interactive(val: AvatarDirectiveElement['interactive']) {
    this.elementRef.nativeElement.interactive = val;
  }
  get interactive(): AvatarDirectiveElement['interactive'] {
    return this.elementRef.nativeElement.interactive;
  }

  @Input()
  set shape(val: AvatarDirectiveElement['shape']) {
    this.elementRef.nativeElement.shape = val;
  }
  get shape(): AvatarDirectiveElement['shape'] {
    return this.elementRef.nativeElement.shape;
  }

  @Input()
  set size(val: AvatarDirectiveElement['size']) {
    this.elementRef.nativeElement.size = val;
  }
  get size(): AvatarDirectiveElement['size'] {
    return this.elementRef.nativeElement.size;
  }

  constructor(private elementRef: ElementRef<AvatarDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get badge(): HTMLElement {
    return this.elementRef.nativeElement.badge;
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

export { AvatarDirective, AvatarDirectiveElement };
