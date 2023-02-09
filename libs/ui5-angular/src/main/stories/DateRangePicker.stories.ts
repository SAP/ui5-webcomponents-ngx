import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { DateRangePickerDirective } from '../directives/date-range-picker';

export default {
  component: DateRangePickerDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicDateRangePicker: Story = (args) => ({
  props: args,
  template: `
        <div class="daterange-picker-width">
			<ui5-daterange-picker id="mydaterange-picker1"></ui5-daterange-picker>
		</div>
      `,
});

export const dateRangePickerWithMinimumAndMaximumDate112020452020FormatPatternDdMmYyyy: Story =
  (args) => ({
    props: args,
    template: `
        <div class="daterange-picker-width">
			<ui5-daterange-picker id="mydaterange-picker12" min-date="1/1/2020" max-date="4/5/2020" format-pattern="dd/MM/yyyy"></ui5-daterange-picker>
		</div>
      `,
  });

export const dateRangePickerWithFormatPatternLong: Story = (args) => ({
  props: args,
  template: `
        <div class="daterange-picker-width">
			<ui5-daterange-picker format-pattern="long"></ui5-daterange-picker>
		</div>
      `,
});

export const disabledDateRangePicker: Story = (args) => ({
  props: args,
  template: `
        <div class="daterange-picker-width">
			<ui5-daterange-picker disabled="" value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>
		</div>
      `,
});

export const readonlyDateRangePicker: Story = (args) => ({
  props: args,
  template: `
        <div class="daterange-picker-width">
			<ui5-daterange-picker readonly="" value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>
		</div>
      `,
});
