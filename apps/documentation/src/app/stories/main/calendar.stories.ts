import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { CalendarComponent } from '@ui5/webcomponents-ngx/main/calendar';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';
import '@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Islamic.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Japanese.js';
import '@ui5/webcomponents-localization/dist/features/calendar/Persian.js';

const description = `

<h3>Module Import</h3>

<code>import { CalendarComponent } from "@ui5/webcomponents-ngx/main/calendar";</code>`;
export default {
  title: 'UI5 Web Components / Main / Calendar',
  component: CalendarComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('CalendarComponent', CalendarComponent, description),
      },
    },
  },
} as Meta;

export const BasicCalendar: StoryObj<CalendarComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <div class="datepicker-width">
        <ui5-calendar></ui5-calendar>
      </div>
    `,
  }),
};

export const CalendarWithMinimumAndMaximumDateFormatPattern: StoryObj<CalendarComponent> =
  {
    render: (args: CalendarComponent & any) => ({
      props: args,
      template: `
		<div class="datepicker-width">
			<ui5-calendar min-date="7/7/2020" max-date="20/10/2020" format-pattern="dd/MM/yyyy"></ui5-calendar>
		</div>
	`,
    }),
  };

export const CalendarWithHiddenWeekNumbers: StoryObj<CalendarComponent> = {
  render: (args: CalendarComponent & any) => ({
    props: args,
    template: `
		<div class="datepicker-width">
			<ui5-calendar hide-week-numbers></ui5-calendar>
		</div>
	`,
  }),
};

export const CalendarWithSelectionModeMultiple: StoryObj<CalendarComponent> = {
  render: (args: CalendarComponent & any) => ({
    props: args,
    template: `
		<div class="datepicker-width">
			<ui5-calendar selection-mode="Multiple"></ui5-calendar>
		</div>
	`,
  }),
};

export const CalendarWithSelectionModeRange: StoryObj<CalendarComponent> = {
  render: (args: CalendarComponent & any) => ({
    props: args,
    template: `
		<div class="datepicker-width">
			<ui5-calendar selection-mode="Range"></ui5-calendar>
		</div>
	`,
  }),
};

export const JapaneseCalendar: StoryObj<CalendarComponent> = {
  render: (args: CalendarComponent & any) => ({
    props: args,
    template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Japanese"></ui5-calendar>
		</div>
	`,
  }),
};

export const IslamicCalendar: StoryObj<CalendarComponent> = {
  render: (args: CalendarComponent & any) => ({
    props: args,
    template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Islamic"></ui5-calendar>
		</div>
	`,
  }),
};

export const BuddhistCalendar: StoryObj<CalendarComponent> = {
  render: (args: CalendarComponent & any) => ({
    props: args,
    template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Buddhist"></ui5-calendar>
		</div>
	`,
  }),
};

export const PersianCalendar: StoryObj<CalendarComponent> = {
  render: (args: CalendarComponent & any) => ({
    props: args,
    template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Persian"></ui5-calendar>
		</div>
	`,
  }),
};
