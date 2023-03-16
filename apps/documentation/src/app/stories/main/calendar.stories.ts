import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  CalendarComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3>

The <code>ui5-calendar</code> component allows users to select one or more dates. <br><br> Currently selected dates are represented with instances of <code>ui5-date</code> as children of the <code>ui5-calendar</code>. The value property of each <code>ui5-date</code> must be a date string, correctly formatted according to the <code>ui5-calendar</code>'s <code>formatPattern</code> property. Whenever the user changes the date selection, <code>ui5-calendar</code> will automatically create/remove instances of <code>ui5-date</code> in itself, unless you prevent this behavior by calling <code>preventDefault()</code> for the <code>selected-dates-change</code> event. This is useful if you want to control the selected dates externally. <br><br>

<h3>Usage</h3>

The user can navigate to a particular date by: <br> <ul> <li>Pressing over a month inside the months view</li> <li>Pressing over an year inside the years view</li> </ul> <br> The user can confirm a date selection by pressing over a date inside the days view. <br><br>

<h3>Keyboard Handling</h3> The <code>ui5-calendar</code> provides advanced keyboard handling. When a picker is showed and focused the user can use the following keyboard shortcuts in order to perform a navigation: <br> - Day picker: <br> <ul> <li>[F4] - Shows month picker</li> <li>[SHIFT] + [F4] - Shows year picker</li> <li>[PAGEUP] - Navigate to the previous month</li> <li>[PAGEDOWN] - Navigate to the next month</li> <li>[SHIFT] + [PAGEUP] - Navigate to the previous year</li> <li>[SHIFT] + [PAGEDOWN] - Navigate to the next year</li> <li>[CTRL] + [SHIFT] + [PAGEUP] - Navigate ten years backwards</li> <li>[CTRL] + [SHIFT] + [PAGEDOWN] - Navigate ten years forwards</li> <li>[HOME] - Navigate to the first day of the week</li> <li>[END] - Navigate to the last day of the week</li> <li>[CTRL] + [HOME] - Navigate to the first day of the month</li> <li>[CTRL] + [END] - Navigate to the last day of the month</li> </ul> <br> - Month picker: <br> <ul> <li>[PAGEUP] - Navigate to the previous year</li> <li>[PAGEDOWN] - Navigate to the next year</li> <li>[HOME] - Navigate to the first month of the current row</li> <li>[END] - Navigate to the last month of the current row</li> <li>[CTRL] + [HOME] - Navigate to the first month of the current year</li> <li>[CTRL] + [END] - Navigate to the last month of the year</li> </ul> <br> - Year picker: <br> <ul> <li>[PAGEUP] - Navigate to the previous year range</li> <li>[PAGEDOWN] - Navigate the next year range</li> <li>[HOME] - Navigate to the first year of the current row</li> <li>[END] - Navigate to the last year of the current row</li> <li>[CTRL] + [HOME] - Navigate to the first year of the current year range</li> <li>[CTRL] + [END] - Navigate to the last year of the current year range</li> </ul> <br>

<h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

<h3>Calendar types</h3> The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian. By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar, you need to set the <code>primaryCalendarType</code> property and import one or more of the following modules: <br><br>

<code>import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";</code> <br> <code>import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";</code> <br> <code>import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";</code> <br> <code>import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";</code> <br><br>

Or, you can use the global configuration and set the <code>calendarType</code> key: <br> <code> &lt;script data-id="sap-ui-config" type="application/json"&gt; { "calendarType": "Japanese" } &lt;/script&gt; </code>

<h3>ES6 Module Import</h3>

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
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const ApplyChanges: Story<CalendarComponent> = (
  args: CalendarComponent & any
) => ({
  props: args,
  template: `
          <ui5-calendar>
            ${args.content}
          </ui5-calendar>
        `,
});

export const basicCalendar: Story<CalendarComponent> = (
  args: CalendarComponent & any
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar></ui5-calendar>
		</div>
	`,
});

export const calendarWithMinimumAndMaximumDateFormatPattern: Story<
  CalendarComponent
> = (args: CalendarComponent & any) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar min-date="7/7/2020" max-date="20/10/2020" format-pattern="dd/MM/yyyy"></ui5-calendar>
		</div>
	`,
});

export const calendarWithHiddenWeekNumbers: Story<CalendarComponent> = (
  args: CalendarComponent & any
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar hide-week-numbers=""></ui5-calendar>
		</div>
	`,
});

export const calendarWithSelectionModeMultiple: Story<CalendarComponent> = (
  args: CalendarComponent & any
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar selection-mode="Multiple"></ui5-calendar>
		</div>
	`,
});

export const calendarWithSelectionModeRange: Story<CalendarComponent> = (
  args: CalendarComponent & any
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar selection-mode="Range"></ui5-calendar>
		</div>
	`,
});

export const japaneseCalendar: Story<CalendarComponent> = (
  args: CalendarComponent & any
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Japanese"></ui5-calendar>
		</div>
	`,
});

export const islamicCalendar: Story<CalendarComponent> = (
  args: CalendarComponent & any
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Islamic"></ui5-calendar>
		</div>
	`,
});

export const buddhistCalendar: Story<CalendarComponent> = (
  args: CalendarComponent & any
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Buddhist"></ui5-calendar>
		</div>
	`,
});

export const persianCalendar: Story<CalendarComponent> = (
  args: CalendarComponent & any
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Persian"></ui5-calendar>
		</div>
	`,
});
