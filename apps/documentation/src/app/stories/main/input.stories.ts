import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / Input',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicInput: Story = (args) => ({
  props: args,
  template: `
		<ui5-input class="samples-margin samples-responsive-margin-bottom" show-clear-icon="" value="Input"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" readonly="" value="readonly Input"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" disabled="" value="Disabled Input"></ui5-input>
	`,
});

export const inputWithValueState: Story = (args) => ({
  props: args,
  template: `
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Success" value-state="Success"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Warning" value-state="Warning"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Error" value-state="Error"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Information" value-state="Information"></ui5-input>
	`,
});

export const inputAsSearchField: Story = (args) => ({
  props: args,
  template: `
		<div class="flex-column samples-margin">
			<ui5-input id="searchInput" placeholder="Enter search criteria ..." style="width: 100%">
				<ui5-icon id="searchIcon" slot="icon" name="search"></ui5-icon>
			</ui5-input>
		</div>
	`,
});

export const inputWithLabel: Story = (args) => ({
  props: args,
  template: `
		<div class="flex-column samples-margin">
			<ui5-label class="samples-big-margin-right" for="myInput" required="" show-colon="">Name</ui5-label>
			<ui5-input id="myInput" placeholder="Enter your Name" required=""></ui5-input>
		</div>
		<div class="flex-column">
			<ui5-label class="samples-big-margin-right" for="myPassword" required="" show-colon="">Secret Code</ui5-label>
			<ui5-input id="myPassword" type="Password" value-state="Error" placeholder="Enter your Secret Code" required=""></ui5-input>
		</div>
	`,
});
