import { NgModule } from '@angular/core';
import { BarDirective } from '@ui5/webcomponents-ngx/fiori/bar';
import { BarcodeScannerDialogDirective } from '@ui5/webcomponents-ngx/fiori/barcode-scanner-dialog';
import { DynamicSideContentDirective } from '@ui5/webcomponents-ngx/fiori/dynamic-side-content';
import { FilterItemDirective } from '@ui5/webcomponents-ngx/fiori/filter-item';
import { FilterItemOptionDirective } from '@ui5/webcomponents-ngx/fiori/filter-item-option';
import { FlexibleColumnLayoutDirective } from '@ui5/webcomponents-ngx/fiori/flexible-column-layout';
import { IllustratedMessageDirective } from '@ui5/webcomponents-ngx/fiori/illustrated-message';
import { MediaGalleryDirective } from '@ui5/webcomponents-ngx/fiori/media-gallery';
import { MediaGalleryItemDirective } from '@ui5/webcomponents-ngx/fiori/media-gallery-item';
import { NotificationActionDirective } from '@ui5/webcomponents-ngx/fiori/notification-action';
import { NotificationListGroupItemDirective } from '@ui5/webcomponents-ngx/fiori/notification-list-group-item';
import { NotificationListItemDirective } from '@ui5/webcomponents-ngx/fiori/notification-list-item';
import { NotificationListItemBaseDirective } from '@ui5/webcomponents-ngx/fiori/notification-list-item-base';
import { PageDirective } from '@ui5/webcomponents-ngx/fiori/page';
import { ProductSwitchDirective } from '@ui5/webcomponents-ngx/fiori/product-switch';
import { ProductSwitchItemDirective } from '@ui5/webcomponents-ngx/fiori/product-switch-item';
import { ShellBarDirective } from '@ui5/webcomponents-ngx/fiori/shell-bar';
import { ShellBarItemDirective } from '@ui5/webcomponents-ngx/fiori/shell-bar-item';
import { SideNavigationDirective } from '@ui5/webcomponents-ngx/fiori/side-navigation';
import { SideNavigationItemDirective } from '@ui5/webcomponents-ngx/fiori/side-navigation-item';
import { SideNavigationSubItemDirective } from '@ui5/webcomponents-ngx/fiori/side-navigation-sub-item';
import { SortItemDirective } from '@ui5/webcomponents-ngx/fiori/sort-item';
import { TimelineDirective } from '@ui5/webcomponents-ngx/fiori/timeline';
import { TimelineItemDirective } from '@ui5/webcomponents-ngx/fiori/timeline-item';
import { UploadCollectionDirective } from '@ui5/webcomponents-ngx/fiori/upload-collection';
import { UploadCollectionItemDirective } from '@ui5/webcomponents-ngx/fiori/upload-collection-item';
import { ViewSettingsDialogDirective } from '@ui5/webcomponents-ngx/fiori/view-settings-dialog';
import { WizardDirective } from '@ui5/webcomponents-ngx/fiori/wizard';
import { WizardStepDirective } from '@ui5/webcomponents-ngx/fiori/wizard-step';

const declarations = [];
const imports = [
  BarDirective,
  BarcodeScannerDialogDirective,
  DynamicSideContentDirective,
  FilterItemDirective,
  FilterItemOptionDirective,
  FlexibleColumnLayoutDirective,
  IllustratedMessageDirective,
  MediaGalleryDirective,
  MediaGalleryItemDirective,
  NotificationActionDirective,
  NotificationListGroupItemDirective,
  NotificationListItemDirective,
  NotificationListItemBaseDirective,
  PageDirective,
  ProductSwitchDirective,
  ProductSwitchItemDirective,
  ShellBarDirective,
  ShellBarItemDirective,
  SideNavigationDirective,
  SideNavigationItemDirective,
  SideNavigationSubItemDirective,
  SortItemDirective,
  TimelineDirective,
  TimelineItemDirective,
  UploadCollectionDirective,
  UploadCollectionItemDirective,
  ViewSettingsDialogDirective,
  WizardDirective,
  WizardStepDirective,
];
const providers = [];

@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  providers: [...providers],
  exports: [...imports, ...declarations],
})
class Ui5FioriModule {}
export { Ui5FioriModule };
