import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  DateTimePickerComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3> The <code>DateTimePicker</code> component alows users to select both date (day, month and year) and time (hours, minutes and seconds) and for the purpose it consists of input field and Date/Time picker.

<h3>Usage</h3>

Use the <code>DateTimePicker</code> if you need a combined date and time input component. Don't use it if you want to use either date, or time value. In this case, use the <code>DatePicker</code> or the <code>TimePicker</code> components instead. <br><br> The user can set date/time by: <ul> <li>using the calendar and the time selectors</li> <li>typing in the input field</li> </ul>

Programmatically, to set date/time for the <code>DateTimePicker</code>, use the <code>value</code> property

<h3>Formatting</h3>

The value entered by typing into the input field must fit to the used date/time format. <br><br> Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see <ui5-link target="_blank" href="https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table" class="api-table-content-cell-link">UTS #35: Unicode Locale Data Markup Language</ui5-link>. <br><br> <b>Example:</b> the following format <code>dd/MM/yyyy, hh:mm:ss aa</code> corresponds the <code>13/04/2020, 03:16:16 AM</code> value. <br> The small 'h' defines "12" hours format and the "aa" symbols - "AM/PM" time periods.

<br><br> <b>Example:</b> the following format <code>dd/MM/yyyy, HH:mm:ss</code> corresponds the <code>13/04/2020, 15:16:16</code> value. <br> The capital 'H' indicates "24" hours format.

<br><br> <b>Note:</b> If the <code>formatPattern</code> does NOT include time, the <code>DateTimePicker</code> will fallback to the default time format according to the locale.

<br><br> <b>Note:</b> If no placeholder is set to the <code>DateTimePicker</code>, the current <code>formatPattern</code> is displayed as a placeholder. If another placeholder is needed, it must be set or in case no placeholder is needed - it can be set to an empty string.

<br><br> <b>Note:</b> If the user input does NOT match the <code>formatPattern</code>, the <code>DateTimePicker</code> makes an attempt to parse it based on the locale settings.

<h3>Responsive behavior</h3>

The <code>DateTimePicker</code> is responsive and fully adapts to all devices. For larger screens, such as tablet or desktop, it is displayed as a popover, while on phone devices, it is displayed full screen.

<h3>ES6 Module Import</h3>

<code>import { DateTimePickerComponent } from "@ui5/webcomponents-ngx/main/date-time-picker";</code>`;
export default {
  title: 'UI5 Web Components / Main / DateTimePicker',
  component: DateTimePickerComponent,
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

export const ApplyChanges: Story<DateTimePickerComponent> = (
  args: DateTimePickerComponent & any
) => ({
  props: args,
  template: `
          <ui5-datetime-picker>
            <slot slot="valueStateMessage">${args.valueStateMessage}</slot>
          </ui5-datetime-picker>
        `,
});

export const dateTimePicker: Story<DateTimePickerComponent> = (
  args: DateTimePickerComponent & any
) => ({
  props: args,
  template: `
		<ui5-datetime-picker style="width: 230px"></ui5-datetime-picker>
	`,
});

export const dateTimePickerInStates: Story<DateTimePickerComponent> = (
  args: DateTimePickerComponent & any
) => ({
  props: args,
  template: `
		<ui5-datetime-picker value-state="Error"></ui5-datetime-picker>
		<ui5-datetime-picker value-state="Warning"></ui5-datetime-picker>
		<ui5-datetime-picker value-state="Information"></ui5-datetime-picker>
		<ui5-datetime-picker value-state="Success"></ui5-datetime-picker>
		<br><br>
		<ui5-datetime-picker readonly="" value="2020-04-13-04:16:16 AM"></ui5-datetime-picker>
		<ui5-datetime-picker disabled="" value="2020-04-13-04:16:16 AM"></ui5-datetime-picker>
	`,
});
