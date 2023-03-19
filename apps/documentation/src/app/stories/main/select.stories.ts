import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  SelectComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> The <code>ui5-select</code> component is used to create a drop-down list. The items inside the <code>ui5-select</code> define the available options by using the <code>ui5-option</code> component.

<h3>Keyboard Handling</h3> The <code>ui5-select</code> provides advanced keyboard handling. <br> <ul> <li>[F4, ALT+UP, ALT+DOWN, SPACE, ENTER] - Opens/closes the drop-down.</li> <li>[UP, DOWN] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.</li> <li>[SPACE, ENTER] - If the drop-down is opened - selects the focused option.</li> <li>[ESC] - Closes the drop-down without changing the selection.</li> <li>[HOME] - Navigates to first option</li> <li>[END] - Navigates to the last option</li> </ul> <br>

<h3>ES6 Module Import</h3> <code>import { SelectComponent } from "@ui5/webcomponents-ngx/main/select";</code> (comes with <code>ui5-select</code>)`;
export default {
  title: 'UI5 Web Components / Main / Select',
  component: SelectComponent,
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

export const basicSelect: Story<SelectComponent> = (
  args: SelectComponent & any
) => ({
  props: args,
  template: `
		<ui5-select class="select">
			<ui5-option icon="iphone">Phone</ui5-option>
			<ui5-option icon="ipad">Tablet</ui5-option>
			<ui5-option icon="laptop" selected="">Desktop</ui5-option>
		</ui5-select>
		<ui5-select disabled="" class="select">
				<ui5-option icon="iphone" selected="">Phone</ui5-option>
				<ui5-option icon="ipad">Tablet</ui5-option>
				<ui5-option icon="laptop">Desktop</ui5-option>
		</ui5-select>
	`,
});

export const selectWithValueStateAndValueStateMessage: Story<
  SelectComponent
> = (args: SelectComponent & any) => ({
  props: args,
  template: `
		<ui5-select value-state="Success" class="select">
				<ui5-option icon="meal" selected="">Apple</ui5-option>
				<ui5-option icon="meal">Avocado</ui5-option>
				<ui5-option icon="meal">Mango</ui5-option>
		</ui5-select>
		<ui5-select value-state="Warning" class="select">
				<ui5-option icon="meal">Orange</ui5-option>
				<ui5-option icon="meal" selected="">Pumpkin</ui5-option>
				<ui5-option icon="meal">Carrot</ui5-option>
				<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
				<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
		</ui5-select>
		<ui5-select value-state="Error" class="select">
				<ui5-option icon="meal">Strawberry</ui5-option>
				<ui5-option icon="meal">Tomato</ui5-option>
				<ui5-option icon="meal" selected="">Red Chili Pepper</ui5-option>
				<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
				<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
		</ui5-select>
		<ui5-select value-state="Information" class="select">
			<ui5-option icon="meal">Blueberry</ui5-option>
			<ui5-option icon="meal">Grape</ui5-option>
			<ui5-option icon="meal" selected="">Plum</ui5-option>
			<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
			<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
		</ui5-select>
	`,
});

export const selectWithTwoColumnLayoutItems: Story<SelectComponent> = (
  args: SelectComponent & any
) => ({
  props: args,
  template: `
		<ui5-select class="select">
			<ui5-option additional-text="AT">Austria</ui5-option>
			<ui5-option additional-text="BE">Belgium</ui5-option>
			<ui5-option additional-text="BR">Brazil</ui5-option>
			<ui5-option additional-text="BG">Bulgaria</ui5-option>
			<ui5-option additional-text="CA">Canada</ui5-option>
		</ui5-select>
	`,
});
