import {
  NgModule,
  ModuleWithProviders,
  Optional,
  isDevMode,
} from '@angular/core';
import { Ui5FundamentalThemingService } from './theming.service';
import { FdActionBarDirective } from '@fundamental-styles/theming-ngx/src/directives/action-bar';
import { FdActionSheetDirective } from '@fundamental-styles/theming-ngx/src/directives/action-sheet';
import { FdAlertDirective } from '@fundamental-styles/theming-ngx/src/directives/alert';
import { FdAvatarGroupDirective } from '@fundamental-styles/theming-ngx/src/directives/avatar-group';
import { FdAvatarDirective } from '@fundamental-styles/theming-ngx/src/directives/avatar';
import { FdBadgeDirective } from '@fundamental-styles/theming-ngx/src/directives/badge';
import { FdBarDirective } from '@fundamental-styles/theming-ngx/src/directives/bar';
import { FdBreadcrumbDirective } from '@fundamental-styles/theming-ngx/src/directives/breadcrumb';
import { FdBusyIndicatorDirective } from '@fundamental-styles/theming-ngx/src/directives/busy-indicator';
import { FdButtonSplitDirective } from '@fundamental-styles/theming-ngx/src/directives/button-split';
import { FdButtonDirective } from '@fundamental-styles/theming-ngx/src/directives/button';
import { FdCalendarDirective } from '@fundamental-styles/theming-ngx/src/directives/calendar';
import { FdCardDirective } from '@fundamental-styles/theming-ngx/src/directives/card';
import { FdCarouselDirective } from '@fundamental-styles/theming-ngx/src/directives/carousel';
import { FdCheckboxDirective } from '@fundamental-styles/theming-ngx/src/directives/checkbox';
import { FdCodeDirective } from '@fundamental-styles/theming-ngx/src/directives/code';
import { FdCounterDirective } from '@fundamental-styles/theming-ngx/src/directives/counter';
import { FdDialogDirective } from '@fundamental-styles/theming-ngx/src/directives/dialog';
import { FdDynamicPageDirective } from '@fundamental-styles/theming-ngx/src/directives/dynamic-page';
import { FdDynamicSideContentDirective } from '@fundamental-styles/theming-ngx/src/directives/dynamic-side-content';
import { FdFacetDirective } from '@fundamental-styles/theming-ngx/src/directives/facet';
import { FdFeedInputDirective } from '@fundamental-styles/theming-ngx/src/directives/feed-input';
import { FdFeedListDirective } from '@fundamental-styles/theming-ngx/src/directives/feed-list';
import { FdFieldsetDirective } from '@fundamental-styles/theming-ngx/src/directives/fieldset';
import { FdFileUploaderDirective } from '@fundamental-styles/theming-ngx/src/directives/file-uploader';
import { FdFixedCardLayoutDirective } from '@fundamental-styles/theming-ngx/src/directives/fixed-card-layout';
import { FdFlexibleColumnLayoutDirective } from '@fundamental-styles/theming-ngx/src/directives/flexible-column-layout';
import { FdFormGroupDirective } from '@fundamental-styles/theming-ngx/src/directives/form-group';
import { FdFormHeaderDirective } from '@fundamental-styles/theming-ngx/src/directives/form-header';
import { FdFormItemDirective } from '@fundamental-styles/theming-ngx/src/directives/form-item';
import { FdFormLabelDirective } from '@fundamental-styles/theming-ngx/src/directives/form-label';
import { FdFormLayoutGridDirective } from '@fundamental-styles/theming-ngx/src/directives/form-layout-grid';
import { FdFormMessageDirective } from '@fundamental-styles/theming-ngx/src/directives/form-message';
import { FdGridListDirective } from '@fundamental-styles/theming-ngx/src/directives/grid-list';
import { FdHelpersDirective } from '@fundamental-styles/theming-ngx/src/directives/helpers';
import { FdHorizontalNavigationDirective } from '@fundamental-styles/theming-ngx/src/directives/horizontal-navigation';
import { FdIconTabBarDirective } from '@fundamental-styles/theming-ngx/src/directives/icon-tab-bar';
import { FdIconDirective } from '@fundamental-styles/theming-ngx/src/directives/icon';
import { FdIllustratedMessageDirective } from '@fundamental-styles/theming-ngx/src/directives/illustrated-message';
import { FdInfoLabelDirective } from '@fundamental-styles/theming-ngx/src/directives/info-label';
import { FdInputGroupDirective } from '@fundamental-styles/theming-ngx/src/directives/input-group';
import { FdInputDirective } from '@fundamental-styles/theming-ngx/src/directives/input';
import { FdLayoutGridDirective } from '@fundamental-styles/theming-ngx/src/directives/layout-grid';
import { FdLayoutPanelDirective } from '@fundamental-styles/theming-ngx/src/directives/layout-panel';
import { FdLayoutDirective } from '@fundamental-styles/theming-ngx/src/directives/layout';
import { FdLinkDirective } from '@fundamental-styles/theming-ngx/src/directives/link';
import { FdListDirective } from '@fundamental-styles/theming-ngx/src/directives/list';
import { FdMarginsDirective } from '@fundamental-styles/theming-ngx/src/directives/margins';
import { FdMenuDirective } from '@fundamental-styles/theming-ngx/src/directives/menu';
import { FdMessageBoxDirective } from '@fundamental-styles/theming-ngx/src/directives/message-box';
import { FdMessagePageDirective } from '@fundamental-styles/theming-ngx/src/directives/message-page';
import { FdMessagePopoverDirective } from '@fundamental-styles/theming-ngx/src/directives/message-popover';
import { FdMessageStripDirective } from '@fundamental-styles/theming-ngx/src/directives/message-strip';
import { FdMessageToastDirective } from '@fundamental-styles/theming-ngx/src/directives/message-toast';
import { FdMicroProcessFlowDirective } from '@fundamental-styles/theming-ngx/src/directives/micro-process-flow';
import { FdNotificationDirective } from '@fundamental-styles/theming-ngx/src/directives/notification';
import { FdNumericContentDirective } from '@fundamental-styles/theming-ngx/src/directives/numeric-content';
import { FdObjectAttributeDirective } from '@fundamental-styles/theming-ngx/src/directives/object-attribute';
import { FdObjectIdentifierDirective } from '@fundamental-styles/theming-ngx/src/directives/object-identifier';
import { FdObjectListDirective } from '@fundamental-styles/theming-ngx/src/directives/object-list';
import { FdObjectMarkerDirective } from '@fundamental-styles/theming-ngx/src/directives/object-marker';
import { FdObjectNumberDirective } from '@fundamental-styles/theming-ngx/src/directives/object-number';
import { FdObjectStatusDirective } from '@fundamental-styles/theming-ngx/src/directives/object-status';
import { FdOffScreenDirective } from '@fundamental-styles/theming-ngx/src/directives/off-screen';
import { FdPaddingsDirective } from '@fundamental-styles/theming-ngx/src/directives/paddings';
import { FdPageFooterDirective } from '@fundamental-styles/theming-ngx/src/directives/page-footer';
import { FdPageDirective } from '@fundamental-styles/theming-ngx/src/directives/page';
import { FdPaginationDirective } from '@fundamental-styles/theming-ngx/src/directives/pagination';
import { FdPanelDirective } from '@fundamental-styles/theming-ngx/src/directives/panel';
import { FdPopoverDirective } from '@fundamental-styles/theming-ngx/src/directives/popover';
import { FdProductSwitchDirective } from '@fundamental-styles/theming-ngx/src/directives/product-switch';
import { FdProgressIndicatorDirective } from '@fundamental-styles/theming-ngx/src/directives/progress-indicator';
import { FdQuickViewDirective } from '@fundamental-styles/theming-ngx/src/directives/quick-view';
import { FdRadioDirective } from '@fundamental-styles/theming-ngx/src/directives/radio';
import { FdRatingIndicatorDirective } from '@fundamental-styles/theming-ngx/src/directives/rating-indicator';
import { FdResizableCardLayoutDirective } from '@fundamental-styles/theming-ngx/src/directives/resizable-card-layout';
import { FdScrollbarDirective } from '@fundamental-styles/theming-ngx/src/directives/scrollbar';
import { FdSectionDirective } from '@fundamental-styles/theming-ngx/src/directives/section';
import { FdSegmentedButtonDirective } from '@fundamental-styles/theming-ngx/src/directives/segmented-button';
import { FdSelectDirective } from '@fundamental-styles/theming-ngx/src/directives/select';
import { FdShellbarDirective } from '@fundamental-styles/theming-ngx/src/directives/shellbar';
import { FdSideNavDirective } from '@fundamental-styles/theming-ngx/src/directives/side-nav';
import { FdSliderDirective } from '@fundamental-styles/theming-ngx/src/directives/slider';
import { FdSplitterDirective } from '@fundamental-styles/theming-ngx/src/directives/splitter';
import { FdStatusIndicatorDirective } from '@fundamental-styles/theming-ngx/src/directives/status-indicator';
import { FdStepInputDirective } from '@fundamental-styles/theming-ngx/src/directives/step-input';
import { FdSwitchDirective } from '@fundamental-styles/theming-ngx/src/directives/switch';
import { FdTableDirective } from '@fundamental-styles/theming-ngx/src/directives/table';
import { FdTabsDirective } from '@fundamental-styles/theming-ngx/src/directives/tabs';
import { FdTextDirective } from '@fundamental-styles/theming-ngx/src/directives/text';
import { FdTextareaDirective } from '@fundamental-styles/theming-ngx/src/directives/textarea';
import { FdTileDirective } from '@fundamental-styles/theming-ngx/src/directives/tile';
import { FdTimeDirective } from '@fundamental-styles/theming-ngx/src/directives/time';
import { FdTimepickerDirective } from '@fundamental-styles/theming-ngx/src/directives/timepicker';
import { FdTitleDirective } from '@fundamental-styles/theming-ngx/src/directives/title';
import { FdTokenDirective } from '@fundamental-styles/theming-ngx/src/directives/token';
import { FdTokenizerDirective } from '@fundamental-styles/theming-ngx/src/directives/tokenizer';
import { FdToolHeaderDirective } from '@fundamental-styles/theming-ngx/src/directives/tool-header';
import { FdToolbarDirective } from '@fundamental-styles/theming-ngx/src/directives/toolbar';
import { FdTreeDirective } from '@fundamental-styles/theming-ngx/src/directives/tree';
import { FdUploadCollectionDirective } from '@fundamental-styles/theming-ngx/src/directives/upload-collection';
import { FdUserMenuDirective } from '@fundamental-styles/theming-ngx/src/directives/user-menu';
import { FdVariantManagementDirective } from '@fundamental-styles/theming-ngx/src/directives/variant-management';
import { FdVerticalNavDirective } from '@fundamental-styles/theming-ngx/src/directives/vertical-nav';
import { FdWizardDirective } from '@fundamental-styles/theming-ngx/src/directives/wizard';

const declarations = [
  FdActionBarDirective,
  FdActionSheetDirective,
  FdAlertDirective,
  FdAvatarGroupDirective,
  FdAvatarDirective,
  FdBadgeDirective,
  FdBarDirective,
  FdBreadcrumbDirective,
  FdBusyIndicatorDirective,
  FdButtonSplitDirective,
  FdButtonDirective,
  FdCalendarDirective,
  FdCardDirective,
  FdCarouselDirective,
  FdCheckboxDirective,
  FdCodeDirective,
  FdCounterDirective,
  FdDialogDirective,
  FdDynamicPageDirective,
  FdDynamicSideContentDirective,
  FdFacetDirective,
  FdFeedInputDirective,
  FdFeedListDirective,
  FdFieldsetDirective,
  FdFileUploaderDirective,
  FdFixedCardLayoutDirective,
  FdFlexibleColumnLayoutDirective,
  FdFormGroupDirective,
  FdFormHeaderDirective,
  FdFormItemDirective,
  FdFormLabelDirective,
  FdFormLayoutGridDirective,
  FdFormMessageDirective,
  FdGridListDirective,
  FdHelpersDirective,
  FdHorizontalNavigationDirective,
  FdIconTabBarDirective,
  FdIconDirective,
  FdIllustratedMessageDirective,
  FdInfoLabelDirective,
  FdInputGroupDirective,
  FdInputDirective,
  FdLayoutGridDirective,
  FdLayoutPanelDirective,
  FdLayoutDirective,
  FdLinkDirective,
  FdListDirective,
  FdMarginsDirective,
  FdMenuDirective,
  FdMessageBoxDirective,
  FdMessagePageDirective,
  FdMessagePopoverDirective,
  FdMessageStripDirective,
  FdMessageToastDirective,
  FdMicroProcessFlowDirective,
  FdNotificationDirective,
  FdNumericContentDirective,
  FdObjectAttributeDirective,
  FdObjectIdentifierDirective,
  FdObjectListDirective,
  FdObjectMarkerDirective,
  FdObjectNumberDirective,
  FdObjectStatusDirective,
  FdOffScreenDirective,
  FdPaddingsDirective,
  FdPageFooterDirective,
  FdPageDirective,
  FdPaginationDirective,
  FdPanelDirective,
  FdPopoverDirective,
  FdProductSwitchDirective,
  FdProgressIndicatorDirective,
  FdQuickViewDirective,
  FdRadioDirective,
  FdRatingIndicatorDirective,
  FdResizableCardLayoutDirective,
  FdScrollbarDirective,
  FdSectionDirective,
  FdSegmentedButtonDirective,
  FdSelectDirective,
  FdShellbarDirective,
  FdSideNavDirective,
  FdSliderDirective,
  FdSplitterDirective,
  FdStatusIndicatorDirective,
  FdStepInputDirective,
  FdSwitchDirective,
  FdTableDirective,
  FdTabsDirective,
  FdTextDirective,
  FdTextareaDirective,
  FdTileDirective,
  FdTimeDirective,
  FdTimepickerDirective,
  FdTitleDirective,
  FdTokenDirective,
  FdTokenizerDirective,
  FdToolHeaderDirective,
  FdToolbarDirective,
  FdTreeDirective,
  FdUploadCollectionDirective,
  FdUserMenuDirective,
  FdVariantManagementDirective,
  FdVerticalNavDirective,
  FdWizardDirective,
];
@NgModule({
  exports: [...declarations],
  imports: [...declarations],
})
export class FundamentalStylesThemingModule {
  constructor(@Optional() public theming: Ui5FundamentalThemingService) {
    if (!this.theming && isDevMode()) {
      console.error(
        'Could not find Ui5FundamentalThemingService. Make sure you called .forRoot() for FundamentalStylesThemingModule'
      );
    }
  }
  static forRoot(): ModuleWithProviders<FundamentalStylesThemingModule> {
    return {
      ngModule: FundamentalStylesThemingModule,
      providers: [Ui5FundamentalThemingService],
    };
  }
}
