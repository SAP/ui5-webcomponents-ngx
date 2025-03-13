import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { DateRangePickerComponent } from '@ui5/webcomponents-ngx/main/date-range-picker';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { DateRangePickerComponent } from "@ui5/webcomponents-ngx/main/date-range-picker";</code>`;
export default {
  title: 'UI5 Web Components / Main / DateRangePicker',
  component: DateRangePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('DateRangePickerComponent', DateRangePickerComponent, description),
      },
    },
  },
} as Meta;

export const BasicDateRangePicker: StoryObj<DateRangePickerComponent> = {
  render: (args: DateRangePickerComponent & any) => ({
    props: args,
    template: `
		<div class="daterange-picker-width">
			<ui5-daterange-picker id="mydaterange-picker1"></ui5-daterange-picker>
		</div>
	`,
  }),
};

export const DateRangePickerWithMinimumAndMaximumDate112020452020FormatPatternDdMmYyyy: StoryObj<DateRangePickerComponent> =
  {
    render: (args: DateRangePickerComponent & any) => ({
      props: args,
      template: `
		<div class="daterange-picker-width">
			<ui5-daterange-picker id="mydaterange-picker12" min-date="1/1/2020" max-date="4/5/2020" format-pattern="dd/MM/yyyy"></ui5-daterange-picker>
		</div>
	`,
    }),
  };

export const DateRangePickerWithFormatPatternLong: StoryObj<DateRangePickerComponent> =
  {
    render: (args: DateRangePickerComponent & any) => ({
      props: args,
      template: `
		<div class="daterange-picker-width">
			<ui5-daterange-picker format-pattern="long"></ui5-daterange-picker>
		</div>
	`,
    }),
  };

export const disabledDateRangePicker: StoryObj<DateRangePickerComponent> = {
  render: (args: DateRangePickerComponent & any) => ({
    props: args,
    template: `
		<div class="daterange-picker-width">
			<ui5-daterange-picker disabled value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>
		</div>
	`,
  }),
};

export const ReadonlyDateRangePicker: StoryObj<DateRangePickerComponent> = {
  render: (args: DateRangePickerComponent & any) => ({
    props: args,
    template: `
		<div class="daterange-picker-width">
			<ui5-daterange-picker readonly value="Mar 31, 2021 - Apr 9, 2021"></ui5-daterange-picker>
		</div>
	`,
  }),
};
