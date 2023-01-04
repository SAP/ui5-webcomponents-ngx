import { Directive, ElementRef, Input, Output } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/ShellBar.js';
import { Observable, NEVER } from 'rxjs';
import { AvatarDirective } from '../../main/directives/avatar';
import { NotificationListGroupItemDirective } from './notification-list-group-item';
import { NotificationListItemDirective } from './notification-list-item';
import { CustomListItemDirective } from '../../main/directives/custom-list-item';
import { GroupHeaderListItemDirective } from '../../main/directives/group-header-list-item';
import { StandardListItemDirective } from '../../main/directives/standard-list-item';
import { InputDirective } from '../../main/directives/input';
import { ButtonDirective } from '../../main/directives/button';

interface ShellBarDirectiveEventsMap
  extends Omit<
    HTMLElementEventMap,
    | 'coPilotClick'
    | 'logoClick'
    | 'menuItemClick'
    | 'notificationsClick'
    | 'productSwitchClick'
    | 'profileClick'
  > {
  coPilotClick: CustomEvent<{ targetRef: HTMLElement }>;
  logoClick: CustomEvent<{ targetRef: HTMLElement }>;
  menuItemClick: CustomEvent<{ item: HTMLElement }>;
  notificationsClick: CustomEvent<{ targetRef: HTMLElement }>;
  productSwitchClick: CustomEvent<{ targetRef: HTMLElement }>;
  profileClick: CustomEvent<{ targetRef: HTMLElement }>;
}

interface ShellBarDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibilityRoles'
    | 'accessibilityTexts'
    | 'copilotDomRef'
    | 'logoDomRef'
    | 'notificationsCount'
    | 'notificationsDomRef'
    | 'overflowDomRef'
    | 'primaryTitle'
    | 'productSwitchDomRef'
    | 'profileDomRef'
    | 'secondaryTitle'
    | 'showCoPilot'
    | 'showNotifications'
    | 'showProductSwitch'
    | 'coPilotClick'
    | 'logoClick'
    | 'menuItemClick'
    | 'notificationsClick'
    | 'productSwitchClick'
    | 'profileClick'
    | 'logo'
    | 'menuItems'
    | 'profile'
    | 'searchField'
    | 'startButton'
  > {
  accessibilityRoles: Record<string, any>;
  accessibilityTexts: Record<string, any>;
  copilotDomRef: HTMLElement;
  logoDomRef: HTMLElement;
  notificationsCount: string;
  notificationsDomRef: HTMLElement;
  overflowDomRef: HTMLElement;
  primaryTitle: string;
  productSwitchDomRef: HTMLElement;
  profileDomRef: HTMLElement;
  secondaryTitle: string;
  showCoPilot: boolean;
  showNotifications: boolean;
  showProductSwitch: boolean;

  logo: AvatarDirective['element'];
  menuItems: Array<
    | NotificationListGroupItemDirective['element']
    | NotificationListItemDirective['element']
    | CustomListItemDirective['element']
    | GroupHeaderListItemDirective['element']
    | StandardListItemDirective['element']
  >;
  profile: AvatarDirective['element'];
  searchField: InputDirective['element'];
  startButton: ButtonDirective['element'];

  addEventListener<K extends keyof ShellBarDirectiveEventsMap>(
    type: K,
    listener: (
      this: ShellBarDirectiveElement,
      ev: ShellBarDirectiveEventsMap[K]
    ) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener<K extends keyof ShellBarDirectiveEventsMap>(
    type: K,
    listener: (
      this: ShellBarDirectiveElement,
      ev: ShellBarDirectiveEventsMap[K]
    ) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;

  closeOverflow(): any;
}

@Directive({
  selector: 'ui5-shellbar',
  exportAs: 'ui5Shellbar',
})
class ShellBarDirective {
  @Input()
  set accessibilityRoles(val: ShellBarDirectiveElement['accessibilityRoles']) {
    this.elementRef.nativeElement.accessibilityRoles = val;
  }
  get accessibilityRoles(): ShellBarDirectiveElement['accessibilityRoles'] {
    return this.elementRef.nativeElement.accessibilityRoles;
  }

  @Input()
  set accessibilityTexts(val: ShellBarDirectiveElement['accessibilityTexts']) {
    this.elementRef.nativeElement.accessibilityTexts = val;
  }
  get accessibilityTexts(): ShellBarDirectiveElement['accessibilityTexts'] {
    return this.elementRef.nativeElement.accessibilityTexts;
  }

  @Input()
  set copilotDomRef(val: ShellBarDirectiveElement['copilotDomRef']) {
    this.elementRef.nativeElement.copilotDomRef = val;
  }
  get copilotDomRef(): ShellBarDirectiveElement['copilotDomRef'] {
    return this.elementRef.nativeElement.copilotDomRef;
  }

  @Input()
  set logoDomRef(val: ShellBarDirectiveElement['logoDomRef']) {
    this.elementRef.nativeElement.logoDomRef = val;
  }
  get logoDomRef(): ShellBarDirectiveElement['logoDomRef'] {
    return this.elementRef.nativeElement.logoDomRef;
  }

  @Input()
  set notificationsCount(val: ShellBarDirectiveElement['notificationsCount']) {
    this.elementRef.nativeElement.notificationsCount = val;
  }
  get notificationsCount(): ShellBarDirectiveElement['notificationsCount'] {
    return this.elementRef.nativeElement.notificationsCount;
  }

  @Input()
  set notificationsDomRef(
    val: ShellBarDirectiveElement['notificationsDomRef']
  ) {
    this.elementRef.nativeElement.notificationsDomRef = val;
  }
  get notificationsDomRef(): ShellBarDirectiveElement['notificationsDomRef'] {
    return this.elementRef.nativeElement.notificationsDomRef;
  }

  @Input()
  set overflowDomRef(val: ShellBarDirectiveElement['overflowDomRef']) {
    this.elementRef.nativeElement.overflowDomRef = val;
  }
  get overflowDomRef(): ShellBarDirectiveElement['overflowDomRef'] {
    return this.elementRef.nativeElement.overflowDomRef;
  }

  @Input()
  set primaryTitle(val: ShellBarDirectiveElement['primaryTitle']) {
    this.elementRef.nativeElement.primaryTitle = val;
  }
  get primaryTitle(): ShellBarDirectiveElement['primaryTitle'] {
    return this.elementRef.nativeElement.primaryTitle;
  }

  @Input()
  set productSwitchDomRef(
    val: ShellBarDirectiveElement['productSwitchDomRef']
  ) {
    this.elementRef.nativeElement.productSwitchDomRef = val;
  }
  get productSwitchDomRef(): ShellBarDirectiveElement['productSwitchDomRef'] {
    return this.elementRef.nativeElement.productSwitchDomRef;
  }

  @Input()
  set profileDomRef(val: ShellBarDirectiveElement['profileDomRef']) {
    this.elementRef.nativeElement.profileDomRef = val;
  }
  get profileDomRef(): ShellBarDirectiveElement['profileDomRef'] {
    return this.elementRef.nativeElement.profileDomRef;
  }

  @Input()
  set secondaryTitle(val: ShellBarDirectiveElement['secondaryTitle']) {
    this.elementRef.nativeElement.secondaryTitle = val;
  }
  get secondaryTitle(): ShellBarDirectiveElement['secondaryTitle'] {
    return this.elementRef.nativeElement.secondaryTitle;
  }

  @Input()
  set showCoPilot(val: ShellBarDirectiveElement['showCoPilot']) {
    this.elementRef.nativeElement.showCoPilot = val;
  }
  get showCoPilot(): ShellBarDirectiveElement['showCoPilot'] {
    return this.elementRef.nativeElement.showCoPilot;
  }

  @Input()
  set showNotifications(val: ShellBarDirectiveElement['showNotifications']) {
    this.elementRef.nativeElement.showNotifications = val;
  }
  get showNotifications(): ShellBarDirectiveElement['showNotifications'] {
    return this.elementRef.nativeElement.showNotifications;
  }

  @Input()
  set showProductSwitch(val: ShellBarDirectiveElement['showProductSwitch']) {
    this.elementRef.nativeElement.showProductSwitch = val;
  }
  get showProductSwitch(): ShellBarDirectiveElement['showProductSwitch'] {
    return this.elementRef.nativeElement.showProductSwitch;
  }
  @Output() coPilotClick: Observable<
    ShellBarDirectiveEventsMap['coPilotClick']
  > = NEVER as any;
  @Output() logoClick: Observable<ShellBarDirectiveEventsMap['logoClick']> =
    NEVER as any;
  @Output() menuItemClick: Observable<
    ShellBarDirectiveEventsMap['menuItemClick']
  > = NEVER as any;
  @Output() notificationsClick: Observable<
    ShellBarDirectiveEventsMap['notificationsClick']
  > = NEVER as any;
  @Output() productSwitchClick: Observable<
    ShellBarDirectiveEventsMap['productSwitchClick']
  > = NEVER as any;
  @Output() profileClick: Observable<
    ShellBarDirectiveEventsMap['profileClick']
  > = NEVER as any;
  constructor(private elementRef: ElementRef<ShellBarDirectiveElement>) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get logo(): AvatarDirective['element'] {
    return this.elementRef.nativeElement.logo;
  }
  get menuItems(): Array<
    | NotificationListGroupItemDirective['element']
    | NotificationListItemDirective['element']
    | CustomListItemDirective['element']
    | GroupHeaderListItemDirective['element']
    | StandardListItemDirective['element']
  > {
    return this.elementRef.nativeElement.menuItems;
  }
  get profile(): AvatarDirective['element'] {
    return this.elementRef.nativeElement.profile;
  }
  get searchField(): InputDirective['element'] {
    return this.elementRef.nativeElement.searchField;
  }
  get startButton(): ButtonDirective['element'] {
    return this.elementRef.nativeElement.startButton;
  }

  closeOverflow(): any {
    return this.elementRef.nativeElement.closeOverflow();
  }
}

export {
  ShellBarDirective,
  ShellBarDirectiveEventsMap,
  ShellBarDirectiveElement,
};
