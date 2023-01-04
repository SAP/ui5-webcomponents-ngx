import { Directive, ElementRef, Input } from '@angular/core';
import '@ui5/webcomponents-fiori/dist/IllustratedMessage.js';

interface IllustratedMessageDirectiveElement
  extends Omit<
    HTMLElement,
    | 'accessibleNameRef'
    | 'name'
    | 'size'
    | 'subtitleText'
    | 'titleText'
    | 'subtitle'
    | 'title'
  > {
  accessibleNameRef: string;
  name:
    | 'AddColumn'
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
    | 'UploadCollection';
  size: 'Auto' | 'Base' | 'Dialog' | 'Scene' | 'Spot';
  subtitleText: string;
  titleText: string;

  subtitle: HTMLElement;
  title: HTMLElement;
}

@Directive({
  selector: 'ui5-illustrated-message',
  exportAs: 'ui5IllustratedMessage',
})
class IllustratedMessageDirective {
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
}

export { IllustratedMessageDirective, IllustratedMessageDirectiveElement };
