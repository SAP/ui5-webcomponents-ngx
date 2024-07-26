import { Meta, moduleMetadata } from '@storybook/angular';
import { DatePickerComponent, Ui5WebcomponentsModule, } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';
import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";
import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";
import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";
import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";

const description = `### Overview

The <code>ui5-date-picker</code> component provides an input field with assigned calendar which opens on user action. The <code>ui5-date-picker</code> allows users to select a localized date using touch, mouse, or keyboard input. It consists of two parts: the date input field and the date picker.

<h3>Usage</h3>

The user can enter a date by: <ul> <li>Using the calendar that opens in a popup</li> <li>Typing it in directly in the input field</li> </ul> <br><br> When the user makes an entry and presses the enter key, the calendar shows the corresponding date. When the user directly triggers the calendar display, the actual date is displayed.

<h3>Formatting</h3>

If a date is entered by typing it into the input field, it must fit to the used date format. <br><br> Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table" class="api-table-content-cell-link">UTS #35: Unicode Locale Data Markup Language</ui5-link>. <br><br> For example, if the <code>format-pattern</code> is "yyyy-MM-dd", a valid value string is "2015-07-30" and the same is displayed in the input.

<h3>Keyboard Handling</h3> The <code>ui5-date-picker</code> provides advanced keyboard handling. If the <code>ui5-date-picker</code> is focused, you can open or close the drop-down by pressing <code>F4</code>, <code>ALT+UP</code> or <code>ALT+DOWN</code> keys. Once the drop-down is opened, you can use the <code>UP</code>, <code>DOWN</code>, <code>LEFT</code>, <code>RIGHT</code> arrow keys to navigate through the dates and select one by pressing the <code>Space</code> or <code>Enter</code> keys. Moreover you can use TAB to reach the buttons for changing month and year. <br>

If the <code>ui5-date-picker</code> input field is focused and its corresponding picker dialog is not opened, then users can increment or decrement the date referenced by <code>dateValue</code> property by using the following shortcuts: <br> <ul> <li>[PAGEDOWN] - Decrements the corresponding day of the month by one</li> <li>[SHIFT] + [PAGEDOWN] - Decrements the corresponding month by one</li> <li>[SHIFT] + [CTRL] + [PAGEDOWN] - Decrements the corresponding year by one</li> <li>[PAGEUP] - Increments the corresponding day of the month by one</li> <li>[SHIFT] + [PAGEUP] - Increments the corresponding month by one</li> <li>[SHIFT] + [CTRL] + [PAGEUP] - Increments the corresponding year by one</li> </ul>

<h3>Calendar types</h3> The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian. By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar, you need to set the <code>primaryCalendarType</code> property and import one or more of the following modules: <br><br>

<code>import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";</code> <br> <code>import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";</code> <br> <code>import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";</code> <br> <code>import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";</code> <br><br>

Or, you can use the global configuration and set the <code>calendarType</code> key: <br> <pre><code>&lt;script data-id="sap-ui-config" type="application/json"&gt;
{
	"calendarType": "Japanese"
}
&lt;/script&gt;</code></pre>

<h3>ES6 Module Import</h3>

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
        component: description,
      },
    },
  },
} as Meta;

export const basicDatePicker = (
  args: DatePickerComponent & any
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-date-picker id="myDatepicker1"></ui5-date-picker>
		</div>
	`,
});

export const datePickerWithPlaceholderTooltipEventsValueStateAndValueStateMessage = (args: DatePickerComponent & any) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-date-picker id="myDatepicker2" placeholder="Delivery Date...">
				<div slot="valueStateMessage">The value is not valid. Please provide valid value</div>
			</ui5-date-picker>
		</div>
	`,
});

export const datePickerWithMinimumAndMaximumDate112020452020FormatPatternDdMmYyyy = (args: DatePickerComponent & any) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-date-picker value="29/04/2020" min-date="1/1/2020" max-date="4/5/2020" format-pattern="dd/MM/yyyy"></ui5-date-picker>
		</div>
	`,
});

export const datePickerWithShortcutsTypeTodayOrYesterdayAndPressEnter = (args: DatePickerComponent & any) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-date-picker></ui5-date-picker>
		</div>
	`,
});

export const datePickerWithFormatPatternShort = (
  args: DatePickerComponent & any
) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker format-pattern="short"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithFormatPatternLong = (
  args: DatePickerComponent & any
) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker format-pattern="long"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithFormatPatternQqqYyyyMmmDdValueQ42018Feb14 = (args: DatePickerComponent & any) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-date-picker format-pattern="QQQ yyyy, MMM dd" value="Q4 2018, Feb 14"></ui5-date-picker>
		</div>
	`,
});

export const datePickerWithFormatPatternEeeMDYyyy = (args: DatePickerComponent & any) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker format-pattern="EEE, M/d/yyyy"></ui5-date-picker>
			</div>
		`,
});

export const disabledDatePicker = (
  args: DatePickerComponent & any
) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker disabled value="8 September 2021"></ui5-date-picker>
			</div>
		`,
});

export const readonlyDatePicker = (
  args: DatePickerComponent & any
) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker readonly value="8 September 2021"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithJapaneseCalendarType = (
  args: DatePickerComponent & any
) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker primary-calendar-type="Japanese"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithIslamicCalendarType = (
  args: DatePickerComponent & any
) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker primary-calendar-type="Islamic"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithBuddhistCalendarType = (
  args: DatePickerComponent & any
) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker primary-calendar-type="Buddhist"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithPersianCalendarType = (
  args: DatePickerComponent & any
) => ({
  props: args,
  template: `
        <div class="datepicker-width">
            <ui5-date-picker primary-calendar-type="Persian"></ui5-date-picker>
        </div>
    `,
});

export const datePickerWithPrimaryAndSecondaryCalendarType = (args: DatePickerComponent & any) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-date-picker primary-calendar-type="Islamic" secondary-calendar-type="Gregorian"></ui5-date-picker>
		</div>
	`,
});
