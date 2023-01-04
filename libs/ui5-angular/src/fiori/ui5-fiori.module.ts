import { NgModule } from '@angular/core';
import { BarDirective } from './directives/bar';
import { BarcodeScannerDialogDirective } from './directives/barcode-scanner-dialog';
import { DynamicSideContentDirective } from './directives/dynamic-side-content';
import { FilterItemDirective } from './directives/filter-item';
import { FilterItemOptionDirective } from './directives/filter-item-option';
import { FlexibleColumnLayoutDirective } from './directives/flexible-column-layout';
import { IllustratedMessageDirective } from './directives/illustrated-message';
import { MediaGalleryDirective } from './directives/media-gallery';
import { MediaGalleryItemDirective } from './directives/media-gallery-item';
import { NotificationActionDirective } from './directives/notification-action';
import { NotificationListGroupItemDirective } from './directives/notification-list-group-item';
import { NotificationListItemDirective } from './directives/notification-list-item';
import { NotificationListItemBaseDirective } from './directives/notification-list-item-base';
import { PageDirective } from './directives/page';
import { ProductSwitchDirective } from './directives/product-switch';
import { ProductSwitchItemDirective } from './directives/product-switch-item';
import { ShellBarDirective } from './directives/shell-bar';
import { ShellBarItemDirective } from './directives/shell-bar-item';
import { SideNavigationDirective } from './directives/side-navigation';
import { SideNavigationItemDirective } from './directives/side-navigation-item';
import { SideNavigationSubItemDirective } from './directives/side-navigation-sub-item';
import { SortItemDirective } from './directives/sort-item';
import { TimelineDirective } from './directives/timeline';
import { TimelineItemDirective } from './directives/timeline-item';
import { UploadCollectionDirective } from './directives/upload-collection';
import { UploadCollectionItemDirective } from './directives/upload-collection-item';
import { ViewSettingsDialogDirective } from './directives/view-settings-dialog';
import { WizardDirective } from './directives/wizard';
import { WizardStepDirective } from './directives/wizard-step';

const declarations = [
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
const imports = [];
@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...declarations, ...imports],
})
class Ui5FioriModule {}
export { Ui5FioriModule };
