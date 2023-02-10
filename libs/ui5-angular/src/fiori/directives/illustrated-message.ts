import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/IllustratedMessage.js';

interface IllustratedMessageDirectiveElement
  extends Omit<
    HTMLElement,
    | 'effectiveDir'
    | 'isUi5Element'
    | 'accessibleNameRef'
    | 'name'
    | 'size'
    | 'subtitleText'
    | 'titleText'
    | 'subtitle'
    | 'title'
  > {
  effectiveDir: any;
  isUi5Element: any;
  accessibleNameRef: string;
  name:
    | 'AddColumn'
    | 'AddDimensions'
    | 'AddPeople'
    | 'BalloonSky'
    | 'BeforeSearch'
    | 'Connection'
    | 'EmptyCalendar'
    | 'EmptyList'
    | 'EmptyPlanningCalendar'
    | 'ErrorScreen'
    | 'FilterTable'
    | 'GroupTable'
    | 'NoActivities'
    | 'NoData'
    | 'NoDimensionsSet'
    | 'NoEntries'
    | 'NoFilterResults'
    | 'NoMail'
    | 'NoMail_v1'
    | 'NoNotifications'
    | 'NoSavedItems'
    | 'NoSavedItems_v1'
    | 'NoSearchResults'
    | 'NoTasks'
    | 'NoTasks_v1'
    | 'PageNotFound'
    | 'ReloadScreen'
    | 'ResizeColumn'
    | 'SearchEarth'
    | 'SearchFolder'
    | 'SimpleBalloon'
    | 'SimpleBell'
    | 'SimpleCalendar'
    | 'SimpleCheckMark'
    | 'SimpleConnection'
    | 'SimpleEmptyDoc'
    | 'SimpleEmptyList'
    | 'SimpleError'
    | 'SimpleMagnifier'
    | 'SimpleMail'
    | 'SimpleNoSavedItems'
    | 'SimpleNotFoundMagnifier'
    | 'SimpleReload'
    | 'SimpleTask'
    | 'SleepingBell'
    | 'SortColumn'
    | 'SuccessBalloon'
    | 'SuccessCheckMark'
    | 'SuccessHighFive'
    | 'SuccessScreen'
    | 'Tent'
    | 'TntChartArea'
    | 'TntChartArea2'
    | 'TntChartBar'
    | 'TntChartBPMNFlow'
    | 'TntChartBullet'
    | 'TntChartDoughnut'
    | 'TntChartFlow'
    | 'TntChartGantt'
    | 'TntChartOrg'
    | 'TntChartPie'
    | 'TntCodePlaceholder'
    | 'TntCompany'
    | 'TntComponents'
    | 'TntExternalLink'
    | 'TntFaceID'
    | 'TntFingerprint'
    | 'TntLock'
    | 'TntMission'
    | 'TntNoApplications'
    | 'TntNoFlows'
    | 'TntNoUsers'
    | 'TntRadar'
    | 'TntSecrets'
    | 'TntServices'
    | 'TntSessionExpired'
    | 'TntSessionExpiring'
    | 'TntSuccess'
    | 'TntSuccessfulAuth'
    | 'TntSystems'
    | 'TntTeams'
    | 'TntTools'
    | 'TntUnableToLoad'
    | 'TntUnlock'
    | 'TntUnsuccessfulAuth'
    | 'TntUser2'
    | 'UnableToLoad'
    | 'UnableToLoadImage'
    | 'UnableToUpload'
    | 'UploadCollection'
    | 'UploadToCloud';
  size: 'Auto' | 'Base' | 'Dialog' | 'Scene' | 'Spot';
  subtitleText: string;
  titleText: string;

  subtitle: HTMLElement;
  title: HTMLElement;

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
  selector: 'ui5-illustrated-message',
  exportAs: 'ui5IllustratedMessage',
})
class IllustratedMessageDirective {
  @Input()
  set effectiveDir(val: IllustratedMessageDirectiveElement['effectiveDir']) {
    this.elementRef.nativeElement.effectiveDir = val;
  }
  get effectiveDir(): IllustratedMessageDirectiveElement['effectiveDir'] {
    return this.elementRef.nativeElement.effectiveDir;
  }

  @Input()
  set isUi5Element(val: IllustratedMessageDirectiveElement['isUi5Element']) {
    this.elementRef.nativeElement.isUi5Element = val;
  }
  get isUi5Element(): IllustratedMessageDirectiveElement['isUi5Element'] {
    return this.elementRef.nativeElement.isUi5Element;
  }

  @Input()
  set accessibleNameRef(
    val: IllustratedMessageDirectiveElement['accessibleNameRef']
  ) {
    this.elementRef.nativeElement.accessibleNameRef = val;
  }
  get accessibleNameRef(): IllustratedMessageDirectiveElement['accessibleNameRef'] {
    return this.elementRef.nativeElement.accessibleNameRef;
  }

  @Input()
  set name(val: IllustratedMessageDirectiveElement['name']) {
    this.elementRef.nativeElement.name = val;
  }
  get name(): IllustratedMessageDirectiveElement['name'] {
    return this.elementRef.nativeElement.name;
  }

  @Input()
  set size(val: IllustratedMessageDirectiveElement['size']) {
    this.elementRef.nativeElement.size = val;
  }
  get size(): IllustratedMessageDirectiveElement['size'] {
    return this.elementRef.nativeElement.size;
  }

  @Input()
  set subtitleText(val: IllustratedMessageDirectiveElement['subtitleText']) {
    this.elementRef.nativeElement.subtitleText = val;
  }
  get subtitleText(): IllustratedMessageDirectiveElement['subtitleText'] {
    return this.elementRef.nativeElement.subtitleText;
  }

  @Input()
  set titleText(val: IllustratedMessageDirectiveElement['titleText']) {
    this.elementRef.nativeElement.titleText = val;
  }
  get titleText(): IllustratedMessageDirectiveElement['titleText'] {
    return this.elementRef.nativeElement.titleText;
  }

  constructor(
    private elementRef: ElementRef<IllustratedMessageDirectiveElement>
  ) {}

  get element(): typeof this.elementRef.nativeElement {
    return this.elementRef.nativeElement;
  }

  get subtitle(): HTMLElement {
    return this.elementRef.nativeElement.subtitle;
  }
  get title(): HTMLElement {
    return this.elementRef.nativeElement.title;
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

export { IllustratedMessageDirective, IllustratedMessageDirectiveElement };
