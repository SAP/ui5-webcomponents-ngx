import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { DatePickerComponent } from '@ui5/webcomponents-ngx/main/date-picker';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';
import '@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Islamic.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Japanese.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Persian.js';

const description = `

<h3>Module Import</h3>

<code>import { DatePickerComponent } from "@ui5/webcomponents-ngx/main/date-picker";</code>`;
export default {
  title: 'UI5 Web Components / Main / DatePicker',
  component: DatePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('DatePickerComponent', DatePickerComponent, description)
      },
    },
  },
} as Meta;

export const BasicDatePicker: StoryObj<DatePickerComponent> = {
  render: (args: DatePickerComponent & any) => ({
    props: args,
    template: `
		<div class="datepicker-width">
			<ui5-date-picker id="myDatepicker1"></ui5-date-picker>
		</div>
	`,
  }),
};

export const DatePickerWithPlaceholderTooltipEventsValueStateAndValueStateMessage: StoryObj<DatePickerComponent> =
  {
    render: (args: DatePickerComponent & any) => ({
      props: args,
      template: `
		<div class="datepicker-width">
			<ui5-date-picker id="myDatepicker2" placeholder="Delivery Date...">
				<div slot="valueStateMessage">The value is not valid. Please provide valid value</div>
			</ui5-date-picker>
		</div>
	`,
    }),
  };

export const DatePickerWithMinimumAndMaximumDate112020452020FormatPatternDdMmYyyy: StoryObj<DatePickerComponent> =
  {
    render: (args: DatePickerComponent & any) => ({
      props: args,
      template: `
		<div class="datepicker-width">
			<ui5-date-picker value="29/04/2020" min-date="1/1/2020" max-date="4/5/2020" format-pattern="dd/MM/yyyy"></ui5-date-picker>
		</div>
	`,
    }),
  };

export const DatePickerWithShortcutsTypeTodayOrYesterdayAndPressEnter: StoryObj<DatePickerComponent> =
  {
    render: (args: DatePickerComponent & any) => ({
      props: args,
      template: `
		<div class="datepicker-width">
			<ui5-date-picker></ui5-date-picker>
		</div>
	`,
    }),
  };

export const DatePickerWithFormatPatternShort: StoryObj<DatePickerComponent> = {
  render: (args: DatePickerComponent & any) => ({
    props: args,
    template: `
			<div class="datepicker-width">
				<ui5-date-picker format-pattern="short"></ui5-date-picker>
			</div>
		`,
  }),
};

export const DatePickerWithFormatPatternLong: StoryObj<DatePickerComponent> = {
  render: (args: DatePickerComponent & any) => ({
    props: args,
    template: `
			<div class="datepicker-width">
				<ui5-date-picker format-pattern="long"></ui5-date-picker>
			</div>
		`,
  }),
};

export const DatePickerWithFormatPatternQqqYyyyMmmDdValueQ42018Feb14: StoryObj<DatePickerComponent> =
  {
    render: (args: DatePickerComponent & any) => ({
      props: args,
      template: `
		<div class="datepicker-width">
			<ui5-date-picker format-pattern="QQQ yyyy, MMM dd" value="Q4 2018, Feb 14"></ui5-date-picker>
		</div>
	`,
    }),
  };

export const DatePickerWithFormatPatternEeeMDYyyy: StoryObj<DatePickerComponent> =
  {
    render: (args: DatePickerComponent & any) => ({
      props: args,
      template: `
			<div class="datepicker-width">
				<ui5-date-picker format-pattern="EEE, M/d/yyyy"></ui5-date-picker>
			</div>
		`,
    }),
  };

export const DisabledDatePicker: StoryObj<DatePickerComponent> = {
  render: (args: DatePickerComponent & any) => ({
    props: args,
    template: `
			<div class="datepicker-width">
				<ui5-date-picker disabled value="8 September 2021"></ui5-date-picker>
			</div>
		`,
  }),
};

export const ReadonlyDatePicker: StoryObj<DatePickerComponent> = {
  render: (args: DatePickerComponent & any) => ({
    props: args,
    template: `
			<div class="datepicker-width">
				<ui5-date-picker readonly value="8 September 2021"></ui5-date-picker>
			</div>
		`,
  }),
};

export const DatePickerWithJapaneseCalendarType: StoryObj<DatePickerComponent> =
  {
    render: (args: DatePickerComponent & any) => ({
      props: args,
      template: `
			<div class="datepicker-width">
				<ui5-date-picker primary-calendar-type="Japanese"></ui5-date-picker>
			</div>
		`,
    }),
  };

export const DatePickerWithIslamicCalendarType: StoryObj<DatePickerComponent> =
  {
    render: (args: DatePickerComponent & any) => ({
      props: args,
      template: `
			<div class="datepicker-width">
				<ui5-date-picker primary-calendar-type="Islamic"></ui5-date-picker>
			</div>
		`,
    }),
  };

export const DatePickerWithBuddhistCalendarType: StoryObj<DatePickerComponent> =
  {
    render: (args: DatePickerComponent & any) => ({
      props: args,
      template: `
			<div class="datepicker-width">
				<ui5-date-picker primary-calendar-type="Buddhist"></ui5-date-picker>
			</div>
		`,
    }),
  };

export const DatePickerWithPersianCalendarType: StoryObj<DatePickerComponent> =
  {
    render: (args: DatePickerComponent & any) => ({
      props: args,
      template: `
        <div class="datepicker-width">
            <ui5-date-picker primary-calendar-type="Persian"></ui5-date-picker>
        </div>
    `,
    }),
  };

export const DatePickerWithPrimaryAndSecondaryCalendarType: StoryObj<DatePickerComponent> =
  {
    render: (args: DatePickerComponent & any) => ({
      props: args,
      template: `
		<div class="datepicker-width">
			<ui5-date-picker primary-calendar-type="Islamic" secondary-calendar-type="Gregorian"></ui5-date-picker>
		</div>
	`,
    }),
  };
