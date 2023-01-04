import { NgModule } from '@angular/core';
import { AvatarDirective } from './directives/avatar';
import { AvatarGroupDirective } from './directives/avatar-group';
import { BadgeDirective } from './directives/badge';
import { BreadcrumbsDirective } from './directives/breadcrumbs';
import { BreadcrumbsItemDirective } from './directives/breadcrumbs-item';
import { BusyIndicatorDirective } from './directives/busy-indicator';
import { ButtonDirective } from './directives/button';
import { CalendarDirective } from './directives/calendar';
import { CalendarDateDirective } from './directives/calendar-date';
import { CardDirective } from './directives/card';
import { CardHeaderDirective } from './directives/card-header';
import { CarouselDirective } from './directives/carousel';
import {
  CheckBoxDirective,
  CheckBoxDirectiveCva,
} from './directives/check-box';
import { ColorPaletteDirective } from './directives/color-palette';
import { ColorPaletteItemDirective } from './directives/color-palette-item';
import { ColorPalettePopoverDirective } from './directives/color-palette-popover';
import { ColorPickerDirective } from './directives/color-picker';
import {
  ComboBoxDirective,
  ComboBoxDirectiveCva,
} from './directives/combo-box';
import { ComboBoxGroupItemDirective } from './directives/combo-box-group-item';
import { ComboBoxItemDirective } from './directives/combo-box-item';
import { CustomListItemDirective } from './directives/custom-list-item';
import {
  DatePickerDirective,
  DatePickerDirectiveCva,
} from './directives/date-picker';
import {
  DateRangePickerDirective,
  DateRangePickerDirectiveCva,
} from './directives/date-range-picker';
import {
  DateTimePickerDirective,
  DateTimePickerDirectiveCva,
} from './directives/date-time-picker';
import { DayPickerDirective } from './directives/day-picker';
import { DialogDirective } from './directives/dialog';
import {
  FileUploaderDirective,
  FileUploaderDirectiveCva,
} from './directives/file-uploader';
import { GroupHeaderListItemDirective } from './directives/group-header-list-item';
import { IconDirective } from './directives/icon';
import { InputDirective, InputDirectiveCva } from './directives/input';
import { LabelDirective } from './directives/label';
import { LinkDirective } from './directives/link';
import { ListDirective } from './directives/list';
import { MenuDirective } from './directives/menu';
import { MenuItemDirective } from './directives/menu-item';
import { MessageStripDirective } from './directives/message-strip';
import { MonthPickerDirective } from './directives/month-picker';
import {
  MultiComboBoxDirective,
  MultiComboBoxDirectiveCva,
} from './directives/multi-combo-box';
import { MultiComboBoxGroupItemDirective } from './directives/multi-combo-box-group-item';
import { MultiComboBoxItemDirective } from './directives/multi-combo-box-item';
import {
  MultiInputDirective,
  MultiInputDirectiveCva,
} from './directives/multi-input';
import { OptionDirective } from './directives/option';
import { PanelDirective } from './directives/panel';
import { PopoverDirective } from './directives/popover';
import { ProgressIndicatorDirective } from './directives/progress-indicator';
import {
  RadioButtonDirective,
  RadioButtonDirectiveCva,
} from './directives/radio-button';
import {
  RangeSliderDirective,
  RangeSliderDirectiveCva,
} from './directives/range-slider';
import { RatingIndicatorDirective } from './directives/rating-indicator';
import { ResponsivePopoverDirective } from './directives/responsive-popover';
import { SegmentedButtonDirective } from './directives/segmented-button';
import { SegmentedButtonItemDirective } from './directives/segmented-button-item';
import { SelectDirective } from './directives/select';
import { SliderDirective, SliderDirectiveCva } from './directives/slider';
import { SliderBaseDirective } from './directives/slider-base';
import { SplitButtonDirective } from './directives/split-button';
import { StandardListItemDirective } from './directives/standard-list-item';
import { StepInputDirective } from './directives/step-input';
import { SuggestionGroupItemDirective } from './directives/suggestion-group-item';
import { SuggestionItemDirective } from './directives/suggestion-item';
import { SwitchDirective, SwitchDirectiveCva } from './directives/switch';
import { TabDirective } from './directives/tab';
import { TabContainerDirective } from './directives/tab-container';
import { TableDirective } from './directives/table';
import { TableCellDirective } from './directives/table-cell';
import { TableColumnDirective } from './directives/table-column';
import { TableGroupRowDirective } from './directives/table-group-row';
import { TableRowDirective } from './directives/table-row';
import { TabSeparatorDirective } from './directives/tab-separator';
import { TextAreaDirective } from './directives/text-area';
import {
  TimePickerDirective,
  TimePickerDirectiveCva,
} from './directives/time-picker';
import { TitleDirective } from './directives/title';
import { ToastDirective } from './directives/toast';
import { ToggleButtonDirective } from './directives/toggle-button';
import { TokenDirective } from './directives/token';
import { TreeDirective } from './directives/tree';
import { TreeItemDirective } from './directives/tree-item';
import { TreeItemCustomDirective } from './directives/tree-item-custom';
import { WheelSliderDirective } from './directives/wheel-slider';
import { YearPickerDirective } from './directives/year-picker';

const declarations = [
  AvatarDirective,
  AvatarGroupDirective,
  BadgeDirective,
  BreadcrumbsDirective,
  BreadcrumbsItemDirective,
  BusyIndicatorDirective,
  ButtonDirective,
  CalendarDirective,
  CalendarDateDirective,
  CardDirective,
  CardHeaderDirective,
  CarouselDirective,
  CheckBoxDirective,
  CheckBoxDirectiveCva,
  ColorPaletteDirective,
  ColorPaletteItemDirective,
  ColorPalettePopoverDirective,
  ColorPickerDirective,
  ComboBoxDirective,
  ComboBoxDirectiveCva,
  ComboBoxGroupItemDirective,
  ComboBoxItemDirective,
  CustomListItemDirective,
  DatePickerDirective,
  DatePickerDirectiveCva,
  DateRangePickerDirective,
  DateRangePickerDirectiveCva,
  DateTimePickerDirective,
  DateTimePickerDirectiveCva,
  DayPickerDirective,
  DialogDirective,
  FileUploaderDirective,
  FileUploaderDirectiveCva,
  GroupHeaderListItemDirective,
  IconDirective,
  InputDirective,
  InputDirectiveCva,
  LabelDirective,
  LinkDirective,
  ListDirective,
  MenuDirective,
  MenuItemDirective,
  MessageStripDirective,
  MonthPickerDirective,
  MultiComboBoxDirective,
  MultiComboBoxDirectiveCva,
  MultiComboBoxGroupItemDirective,
  MultiComboBoxItemDirective,
  MultiInputDirective,
  MultiInputDirectiveCva,
  OptionDirective,
  PanelDirective,
  PopoverDirective,
  ProgressIndicatorDirective,
  RadioButtonDirective,
  RadioButtonDirectiveCva,
  RangeSliderDirective,
  RangeSliderDirectiveCva,
  RatingIndicatorDirective,
  ResponsivePopoverDirective,
  SegmentedButtonDirective,
  SegmentedButtonItemDirective,
  SelectDirective,
  SliderDirective,
  SliderDirectiveCva,
  SliderBaseDirective,
  SplitButtonDirective,
  StandardListItemDirective,
  StepInputDirective,
  SuggestionGroupItemDirective,
  SuggestionItemDirective,
  SwitchDirective,
  SwitchDirectiveCva,
  TabDirective,
  TabContainerDirective,
  TableDirective,
  TableCellDirective,
  TableColumnDirective,
  TableGroupRowDirective,
  TableRowDirective,
  TabSeparatorDirective,
  TextAreaDirective,
  TimePickerDirective,
  TimePickerDirectiveCva,
  TitleDirective,
  ToastDirective,
  ToggleButtonDirective,
  TokenDirective,
  TreeDirective,
  TreeItemDirective,
  TreeItemCustomDirective,
  WheelSliderDirective,
  YearPickerDirective,
];
const imports = [];
@NgModule({
  imports: [...imports],
  declarations: [...declarations],
  exports: [...declarations, ...imports],
})
class Ui5MainModule {}
export { Ui5MainModule };
