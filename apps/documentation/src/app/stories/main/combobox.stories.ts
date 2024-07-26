import { Meta, moduleMetadata } from '@storybook/angular';
import { ComboBoxComponent, Ui5WebcomponentsModule, } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-combobox</code> component represents a drop-down menu with a list of the available options and a text input field to narrow down the options.

It is commonly used to enable users to select an option from a predefined list.

<h3>Structure</h3> The <code>ui5-combobox</code> consists of the following elements:

<ul> <li> Input field - displays the selected option or a custom user entry. Users can type to narrow down the list or enter their own value.</li> <li> Drop-down arrow - expands\collapses the option list.</li> <li> Option list - the list of available options.</li> </ul>

<h3>Keyboard Handling</h3>

The <code>ui5-combobox</code> provides advanced keyboard handling. <br>

<ul> <li>[F4], [ALT]+[UP], or [ALT]+[DOWN] - Toggles the picker.</li> <li>[ESC] - Closes the picker, if open. If closed, cancels changes and reverts the typed in value.</li> <li>[ENTER] or [RETURN] - If picker is open, takes over the currently selected item and closes it.</li> <li>[DOWN] - Selects the next matching item in the picker.</li> <li>[UP] - Selects the previous matching item in the picker.</li> <li>[PAGEDOWN] - Moves selection down by page size (10 items by default).</li> <li>[PAGEUP] - Moves selection up by page size (10 items by default). </li> <li>[HOME] - If focus is in the ComboBox, moves cursor at the beginning of text. If focus is in the picker, selects the first item.</li> <li>[END] - If focus is in the ComboBox, moves cursor at the end of text. If focus is in the picker, selects the last item.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { ComboBoxComponent } from "@ui5/webcomponents-ngx/main/combo-box";</code>`;
export default {
  title: 'UI5 Web Components / Main / ComboBox',
  component: ComboBoxComponent,
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

export const basicExample = (
  args: ComboBoxComponent & any
) => ({
  props: args,
  template: `
		<ui5-combobox placeholder="Enter value">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value-state="Positive" value="Item 1">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value-state="Critical" value="Item 2">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value-state="Negative" value="Item 3">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>
	`,
});

export const disabledAndReadonlyProperties = (
  args: ComboBoxComponent & any
) => ({
  props: args,
  template: `
		<ui5-combobox value="Disabled" disabled>
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value="Readonly" readonly>
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>
	`,
});

export const filtersStartsWithPerTermDefaultStartsWithContains = (args: ComboBoxComponent & any) => ({
  props: args,
  template: `
			<ui5-combobox placeholder="Starts With Per Term filter (default)">
				<ui5-cb-item text="Austria"></ui5-cb-item>
				<ui5-cb-item text="Bulgaria"></ui5-cb-item>
				<ui5-cb-item text="Germany"></ui5-cb-item>
				<ui5-cb-item text="United Kingdom"></ui5-cb-item>
				<ui5-cb-item text="Kazakhstan"></ui5-cb-item>
			</ui5-combobox>

			<ui5-combobox placeholder="StartsWith" filter="StartsWith">
				<ui5-cb-item text="Austria"></ui5-cb-item>
				<ui5-cb-item text="Bulgaria"></ui5-cb-item>
				<ui5-cb-item text="Germany"></ui5-cb-item>
				<ui5-cb-item text="United Kingdom"></ui5-cb-item>
				<ui5-cb-item text="Kazakhstan"></ui5-cb-item>
			</ui5-combobox>

			<ui5-combobox placeholder="Contains" filter="Contains">
				<ui5-cb-item text="Austria"></ui5-cb-item>
				<ui5-cb-item text="Bulgaria"></ui5-cb-item>
				<ui5-cb-item text="Germany"></ui5-cb-item>
				<ui5-cb-item text="United Kingdom"></ui5-cb-item>
				<ui5-cb-item text="Kazakhstan"></ui5-cb-item>
			</ui5-combobox>

		`,
});

export const comboBoxWithTwoColumnLayoutItems = (
  args: ComboBoxComponent & any
) => ({
  props: args,
  template: `
		<ui5-combobox placeholder="Two-column Layout">
			<ui5-cb-item text="Austria" additional-text="AT"></ui5-cb-item>
			<ui5-cb-item text="Belgium" additional-text="BE"></ui5-cb-item>
			<ui5-cb-item text="Brazil" additional-text="BR"></ui5-cb-item>
			<ui5-cb-item text="Bulgaria" additional-text="BG"></ui5-cb-item>
			<ui5-cb-item text="Canada" additional-text="CA"></ui5-cb-item>
		</ui5-combobox>
	`,
});

export const comboBoxWithGroupingOfItems = (
  args: ComboBoxComponent & any
) => ({
  props: args,
  template: `
		<ui5-combobox placeholder="Grouping of items">
			<ui5-cb-item-group header-text="A">
				<ui5-cb-item text="Argentina"></ui5-cb-item>
				<ui5-cb-item text="Australia"></ui5-cb-item>
				<ui5-cb-item text="Austria"></ui5-cb-item>
			</ui5-cb-item-group>

			<ui5-cb-item-group header-text="B">
				<ui5-cb-item text="Bahrain"></ui5-cb-item>
				<ui5-cb-item text="Belgium"></ui5-cb-item>
				<ui5-cb-item text="Brazil"></ui5-cb-item>
			</ui5-cb-item-group>

			<ui5-cb-item-group header-text="C">
				<ui5-cb-item text="Canada"></ui5-cb-item>
				<ui5-cb-item text="Chile"></ui5-cb-item>
			</ui5-cb-item-group>
	  </ui5-combobox>
	`,
});
