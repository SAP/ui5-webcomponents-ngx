import { Meta, moduleMetadata } from '@storybook/angular';
import { TimePickerComponent, Ui5WebcomponentsModule, } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview The <code>ui5-time-picker</code> component provides an input field with assigned sliders which are opened on user action. The <code>ui5-time-picker</code> allows users to select a localized time using touch, mouse, or keyboard input. It consists of two parts: the time input field and the sliders.

<h3>Usage</h3> The user can enter a time by: <ul> <li>Using the sliders that are displayed in a popup</li> <li>Typing it in directly in the input field</li> </ul> <br><br> When the user makes an entry and chooses the enter key, the sliders shows the corresponding time. When the user directly triggers the sliders display, the actual time is displayed. For the <code>ui5-time-picker</code>

<h3>Formatting</h3>

If a time is entered by typing it into the input field, it must fit to the used time format. <br><br> Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table" class="api-table-content-cell-link">UTS #35: Unicode Locale Data Markup Language</ui5-link>. <br><br> For example, if the <code>format-pattern</code> is "HH:mm:ss", a valid value string is "11:42:35" and the same is displayed in the input.

<h3>Keyboard handling</h3> [F4], [ALT]+[UP], [ALT]+[DOWN] Open/Close picker dialog and move focus to it. <br> When closed: <ul> <li>[PAGEUP] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.</li> <li>[PAGEDOWN] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.</li> <li>[SHIFT]+[PAGEUP] Increments minutes by 1.</li> <li>[SHIFT]+ [PAGEDOWN] Decrements minutes by 1.</li> <li>[SHIFT]+[CTRL]+[PAGEUP] Increments seconds by 1.</li> <li>[SHIFT]+[CTRL]+ [PAGEDOWN] Decrements seconds by 1.</li> </ul> When opened: <ul> <li>[UP] If focus is on one of the selection lists: Select the value which is above the current value. If the first value is selected, select the last value in the list. Exception: AM/ PM List: stay on the first item.</li> <li>[DOWN] If focus is on one of the selection lists: Select the value which is below the current value. If the last value is selected, select the first value in the list. Exception: AM/ PM List: stay on the last item.</li> <li>[LEFT] If focus is on one of the selection lists: Move focus to the selection list which is left of the current selection list. If focus is at the first selection list, move focus to the last selection list.</li> <li>[RIGHT] If focus is on one of the selection lists: Move focus to the selection list which is right of the current selection list. When focus is at the last selection list, move focus to the first selection list.</li> <li>[PAGEUP] If focus is on one of the selection lists: Move focus to the first entry of this list.</li> <li>[PAGEDOWN] If focus is on one of the selection lists: Move focus to the last entry of this list.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { TimePickerComponent } from "@ui5/webcomponents-ngx/main/time-picker";</code>`;
export default {
  title: 'UI5 Web Components / Main / TimePicker',
  component: TimePickerComponent,
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

export const basicTimePicker = (
  args: TimePickerComponent & any
) => ({
  props: args,
  template: `
			<ui5-time-picker id="timepicker1"></ui5-time-picker>
	`,
});

export const timePickerInTwelveHoursFormat = (
  args: TimePickerComponent & any
) => ({
  props: args,
  template: `
			<ui5-time-picker id="timepicker1" format-pattern="hh:mm:ss a"></ui5-time-picker>
	`,
});

export const timePickerWithOnlyMinutesAndSeconds = (
  args: TimePickerComponent & any
) => ({
  props: args,
  template: `
			<ui5-time-picker id="timepicker1" format-pattern="mm:ss"></ui5-time-picker>
	`,
});

export const timePickerWithValueStateAndValueStateMessage = (args: TimePickerComponent & any) => ({
  props: args,
  template: `
		<ui5-time-picker id="timepicker3" format-pattern="mm:ss" value-state="Negative">
			<div slot="valueStateMessage">Please provide valid value</div>
		</ui5-time-picker>
	`,
});
