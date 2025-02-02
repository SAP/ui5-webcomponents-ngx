import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  DateRangePickerComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview

The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

### Usage

The user can enter a date by: Using the calendar that opens in a popup or typing it in directly in the input field (not available for mobile devices). For the <code>ui5-daterange-picker</code>

### ES6 Module Import

<code>import { DateRangePickerComponent } from "@ui5/webcomponents-ngx/main/date-range-picker";</code>

### Keyboard Handling

The <code>ui5-daterange-picker</code> provides advanced keyboard handling. <br>

When the <code>ui5-daterange-picker</code> input field is focused the user can increment or decrement respectively the range start or end date, depending on where the cursor is. The following shortcuts are available: <br> <ul> <li>[PAGEDOWN] - Decrements the corresponding day of the month by one</li> <li>[SHIFT] + [PAGEDOWN] - Decrements the corresponding month by one</li> <li>[SHIFT] + [CTRL] + [PAGEDOWN] - Decrements the corresponding year by one</li> <li>[PAGEUP] - Increments the corresponding day of the month by one</li> <li>[SHIFT] + [PAGEUP] - Increments the corresponding month by one</li> <li>[SHIFT] + [CTRL] + [PAGEUP] - Increments the corresponding year by one</li> </ul>`;
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
        component: description,
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
