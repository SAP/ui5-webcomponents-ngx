import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { InputComponent } from '@ui5/webcomponents-ngx/main/input';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { InputComponent } from "@ui5/webcomponents-ngx/main/input";</code>`;
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
        component: extractDescription('InputComponent', InputComponent, description),
      },
    },
  },
} as Meta;

export const BasicInput: StoryObj<InputComponent> = {
  render: (args: InputComponent & any) => ({
    props: args,
    template: `
		<ui5-input class="samples-margin samples-responsive-margin-bottom" show-clear-icon value="Input"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" readonly value="readonly Input"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" disabled value="Disabled Input"></ui5-input>
	`,
  }),
};

export const InputWithValueState: StoryObj<InputComponent> = {
  render: (args: InputComponent & any) => ({
    props: args,
    template: `
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Positive" value-state="Positive"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Critical" value-state="Critical"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Negative" value-state="Negative"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Information" value-state="Information"></ui5-input>
	`,
  }),
};

export const InputAsSearchField: StoryObj<InputComponent> = {
  render: (args: InputComponent & any) => ({
    props: args,
    template: `
		<div class="flex-column samples-margin">
			<ui5-input id="searchInput" placeholder="Enter search criteria ..." style="width: 100%">
				<ui5-icon id="searchIcon" slot="icon" name="search"></ui5-icon>
			</ui5-input>
		</div>
	`,
  }),
};

export const InputWithLabel: StoryObj<InputComponent> = {
  render: (args: InputComponent & any) => ({
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
  }),
};
