import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  MultiComboBoxComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-multi-combobox</code> component consists of a list box with items and a text field allowing the user to either type a value directly into the text field, or choose from the list of existing items.

The drop-down list is used for selecting and filtering values, it enables users to select one or more options from a predefined list. The control provides an editable input field to filter the list, and a dropdown arrow to expand/collapse the list of available options. The options in the list have checkboxes that permit multi-selection. Entered values are displayed as tokens. <h3>Structure</h3> The <code>ui5-multi-combobox</code> consists of the following elements: <ul> <li> Tokenizer - a list of tokens with selected options.</li> <li> Input field - displays the selected option/s as token/s. Users can type to filter the list.</li> <li> Drop-down arrow - expands\collapses the option list.</li> <li> Option list - the list of available options.</li> </ul> <h3>Keyboard Handling</h3>

The <code>ui5-multi-combobox</code> provides advanced keyboard handling.

<h4>Picker</h4> If the <code>ui5-multi-combobox</code> is focused, you can open or close the drop-down by pressing <code>F4</code>, <code>ALT+UP</code> or <code>ALT+DOWN</code> keys. Once the drop-down is opened, you can use the <code>UP</code> and <code>DOWN</code> arrow keys to navigate through the available options and select one by pressing the <code>Space</code> or <code>Enter</code> keys. <br>

<h4>Tokens</h4> <ul> <li> Left/Right arrow keys - moves the focus selection form the currently focused token to the previous/next one (if available). </li> <li> Delete - deletes the token and focuses the previous token. </li> <li> Backspace - deletes the token and focus the next token. </li> </ul>

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-multi-combobox</code> exposes the following CSS Shadow Parts: <ul> <li>token-{index} - Used to style each token(where <code>token-0</code> corresponds to the first item)</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { MultiComboBoxComponent } from "@ui5/webcomponents-ngx/main/multi-combo-box";</code>`;
export default {
  title: 'UI5 Web Components / Main / MultiComboBox',
  component: MultiComboBoxComponent,
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

export const BasicMultiComboBox: StoryObj<MultiComboBoxComponent> = {
  render: (args: MultiComboBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-multi-combobox placeholder="Type your value">
			<ui5-mcb-item selected text="UI5"></ui5-mcb-item>
		</ui5-multi-combobox>
		<ui5-multi-combobox readonly value="Readonly combo">
			<ui5-mcb-item selected text="UI5"></ui5-mcb-item>
		</ui5-multi-combobox>
		<ui5-multi-combobox disabled value="Disabled combo">
			<ui5-mcb-item selected text="UI5"></ui5-mcb-item>
		</ui5-multi-combobox>
	`,
  }),
};

export const MultiComboBoxWithItems: StoryObj<MultiComboBoxComponent> = {
  render: (args: MultiComboBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-multi-combobox style="width: 100%" placeholder="Choose your countries">
			<ui5-mcb-item selected text="Argentina"></ui5-mcb-item>
			<ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
			<ui5-mcb-item text="Denmark"></ui5-mcb-item>
			<ui5-mcb-item text="England"></ui5-mcb-item>
			<ui5-mcb-item text="Albania"></ui5-mcb-item>
			<ui5-mcb-item text="Morocco"></ui5-mcb-item>
			<ui5-mcb-item text="Portugal"></ui5-mcb-item>
			<ui5-mcb-item text="Germany"></ui5-mcb-item>
			<ui5-mcb-item text="Philippines"></ui5-mcb-item>
			<ui5-mcb-item text="Paraguay"></ui5-mcb-item>
		</ui5-multi-combobox>
	`,
  }),
};

export const MultiComboBoxWithFreeTextInput: StoryObj<MultiComboBoxComponent> =
  {
    render: (args: MultiComboBoxComponent & any) => ({
      props: args,
      template: `
		<ui5-multi-combobox style="width: 100%" placeholder="Choose your countries" allow-custom-values>
			<ui5-mcb-item text="Argentina"></ui5-mcb-item>
			<ui5-mcb-item selected text="Bulgaria"></ui5-mcb-item>
			<ui5-mcb-item text="Denmark"></ui5-mcb-item>
			<ui5-mcb-item selected text="England"></ui5-mcb-item>
			<ui5-mcb-item text="Albania"></ui5-mcb-item>
			<ui5-mcb-item text="Morocco"></ui5-mcb-item>
			<ui5-mcb-item text="Portugal"></ui5-mcb-item>
			<ui5-mcb-item selected text="Germany"></ui5-mcb-item>
			<ui5-mcb-item text="Philippines"></ui5-mcb-item>
			<ui5-mcb-item text="Paraguay"></ui5-mcb-item>
		</ui5-multi-combobox>
	`,
    }),
  };

export const MultiComboBoxWithValueState: StoryObj<MultiComboBoxComponent> = {
  render: (args: MultiComboBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-multi-combobox value-state="Positive">
			<ui5-mcb-item text="Fortune"></ui5-mcb-item>
			<ui5-mcb-item text="Luck"></ui5-mcb-item>
			<ui5-mcb-item selected text="Positive"></ui5-mcb-item>
		</ui5-multi-combobox>
		
		<ui5-multi-combobox value-state="Critical">
			<ui5-mcb-item text="Attention"></ui5-mcb-item>
			<ui5-mcb-item text="Caution"></ui5-mcb-item>
			<ui5-mcb-item selected text="Critical"></ui5-mcb-item>
		</ui5-multi-combobox>
		
		<ui5-multi-combobox value-state="Negative">
			<ui5-mcb-item text="Fault"></ui5-mcb-item>
			<ui5-mcb-item selected text="Negative"></ui5-mcb-item>
			<ui5-mcb-item text="Mistake"></ui5-mcb-item>
		</ui5-multi-combobox>
	`,
  }),
};

export const MultiComboBoxWithGroupingOfItems: StoryObj<MultiComboBoxComponent> =
  {
    render: (args: MultiComboBoxComponent & any) => ({
      props: args,
      template: `
		<ui5-multi-combobox placeholder="Select a country">
			<ui5-mcb-item-group header-text="Asia">
				<ui5-mcb-item text="Afghanistan"></ui5-mcb-item>
				<ui5-mcb-item text="China"></ui5-mcb-item>
				<ui5-mcb-item text="India"></ui5-mcb-item>
				<ui5-mcb-item text="Indonesia"></ui5-mcb-item>
			</ui5-mcb-item-group>

			<ui5-mcb-item-group header-text="Europe">
				<ui5-mcb-item text="Austria"></ui5-mcb-item>
				<ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
				<ui5-mcb-item text="Germany"></ui5-mcb-item>
				<ui5-mcb-item text="Italy"></ui5-mcb-item>
			</ui5-mcb-item-group>

			<ui5-mcb-item-group header-text="North America">
				<ui5-mcb-item text="Canada"></ui5-mcb-item>
				<ui5-mcb-item text="Granada"></ui5-mcb-item>
				<ui5-mcb-item text="Haiti"></ui5-mcb-item>
				<ui5-mcb-item text="United States"></ui5-mcb-item>
			</ui5-mcb-item-group>
		</ui5-multi-combobox>
	`,
    }),
  };
