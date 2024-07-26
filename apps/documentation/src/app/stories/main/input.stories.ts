import { Meta, moduleMetadata } from '@storybook/angular';
import { InputComponent, Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-input</code> component allows the user to enter and edit text or numeric values in one line. <br> Additionally, you can provide <code>suggestionItems</code>, that are displayed in a popover right under the input. <br><br> The text field can be editable or read-only (<code>readonly</code> property), and it can be enabled or disabled (<code>disabled</code> property). To visualize semantic states, such as "Negative" or "Critical", the <code>valueState</code> property is provided. When the user makes changes to the text, the change event is fired, which enables you to react on any text change. <br><br> <b>Note:</b> If you are using the <code>ui5-input</code> as a single npm module, don't forget to import the <code>InputSuggestions</code> module from "@ui5/webcomponents/dist/features/InputSuggestions.js" to enable the suggestions functionality.

<h3>Keyboard Handling</h3> The <code>ui5-input</code> provides the following keyboard shortcuts: <br>

<ul> <li>[ESC] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.</li> <li>[ENTER] or [RETURN] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.</li> <li>[DOWN] - Focuses the next matching item in the suggestion list.</li> <li>[UP] - Focuses the previous matching item in the suggestion list.</li> <li>[HOME] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.</li> <li>[END] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.</li> <li>[PAGEUP] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.</li> <li>[PAGEDOWN] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { InputComponent } from "@ui5/webcomponents-ngx/main/input";</code> <br> <code>import "@ui5/webcomponents/dist/features/InputSuggestions.js";</code> (optional - for input suggestions support)`;
export default {
  title: 'UI5 Web Components / Main / Input',
  component: InputComponent,
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

export const basicInput = (
  args: InputComponent & any
) => ({
  props: args,
  template: `
		<ui5-input class="samples-margin samples-responsive-margin-bottom" show-clear-icon value="Input"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" readonly value="readonly Input"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" disabled value="Disabled Input"></ui5-input>
	`,
});

export const inputWithValueState = (
  args: InputComponent & any
) => ({
  props: args,
  template: `
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Positive" value-state="Positive"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Critical" value-state="Critical"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Negative" value-state="Negative"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Information" value-state="Information"></ui5-input>
	`,
});

export const inputAsSearchField = (
  args: InputComponent & any
) => ({
  props: args,
  template: `
		<div class="flex-column samples-margin">
			<ui5-input id="searchInput" placeholder="Enter search criteria ..." style="width: 100%">
				<ui5-icon id="searchIcon" slot="icon" name="search"></ui5-icon>
			</ui5-input>
		</div>
	`,
});

export const inputWithLabel = (
  args: InputComponent & any
) => ({
  props: args,
  template: `
		<div class="flex-column samples-margin">
			<ui5-label class="samples-big-margin-right" for="myInput" required showColon>Name</ui5-label>
			<ui5-input id="myInput" placeholder="Enter your Name" required></ui5-input>
		</div>
		<div class="flex-column">
			<ui5-label class="samples-big-margin-right" for="myPassword" required showColon>Secret Code</ui5-label>
			<ui5-input id="myPassword" type="Password" value-state="Negative" placeholder="Enter your Secret Code" required></ui5-input>
		</div>
	`,
});
