import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents/dist/Avatar.js';

interface AvatarDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleName'
    | 'colorScheme'
    | 'icon'
    | 'initials'
    | 'interactive'
    | 'shape'
    | 'size'
    | 'badge'
  > {
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
}

@Directive({
  selector: 'ui5-avatar',
  exportAs: 'ui5Avatar',
})
class AvatarDirective {
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
}

export { AvatarDirective, AvatarDirectiveElement };
