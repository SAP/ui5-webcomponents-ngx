import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / CheckBox',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicCheckBox: Story = (args) => ({
  props: args,
  template: `
		<ui5-checkbox text="Chocolate" checked=""></ui5-checkbox>
		<ui5-checkbox text="Strawberry" checked=""></ui5-checkbox>
		<ui5-checkbox text="Waffles" checked="" value-state="Error"></ui5-checkbox>
		<ui5-checkbox text="Cake" checked="" value-state="Warning"></ui5-checkbox>
	`,
});

export const checkBoxStates: Story = (args) => ({
  props: args,
  template: `
		<ui5-checkbox text="Success" value-state="Success"></ui5-checkbox>
		<ui5-checkbox text="Error" value-state="Error"></ui5-checkbox>
		<ui5-checkbox text="Warning" value-state="Warning"></ui5-checkbox>
		<ui5-checkbox text="Information" value-state="Information"></ui5-checkbox>
		<ui5-checkbox text="Disabled" disabled="" checked=""></ui5-checkbox>
		<ui5-checkbox text="Readonly" readonly="" checked=""></ui5-checkbox>
		<ui5-checkbox text="Success disabled" disabled="" value-state="Success" checked=""></ui5-checkbox>
		<ui5-checkbox text="Error disabled" disabled="" value-state="Error" checked=""></ui5-checkbox>
		<ui5-checkbox text="Warning disabled " disabled="" value-state="Warning" checked=""></ui5-checkbox>
		<ui5-checkbox text="Information disabled " disabled="" value-state="Information" checked=""></ui5-checkbox>
		<ui5-checkbox text="Success readonly" readonly="" value-state="Success" checked=""></ui5-checkbox>
		<ui5-checkbox text="Error readonly" readonly="" value-state="Error" checked=""></ui5-checkbox>
		<ui5-checkbox text="Warning readonly" readonly="" value-state="Warning" checked=""></ui5-checkbox>
		<ui5-checkbox text="Information readonly" readonly="" value-state="Information" checked=""></ui5-checkbox>
		<ui5-checkbox text="Success indeterminate" value-state="Success" indeterminate="" checked=""></ui5-checkbox>
		<ui5-checkbox text="Error indeterminate" value-state="Error" indeterminate="" checked=""></ui5-checkbox>
		<ui5-checkbox text="Warning indeterminate" value-state="Warning" indeterminate="" checked=""></ui5-checkbox>
		<ui5-checkbox text="Information indeterminate" value-state="Information" indeterminate="" checked=""></ui5-checkbox>
	`,
});

export const checkBoxWithTextWrapping: Story = (args) => ({
  props: args,
  template: `
		<ui5-checkbox text="ui5-checkbox with 'wrapping-type=Normal' set and some long text." wrapping-type="Normal" style="width:200px"></ui5-checkbox>
		<ui5-checkbox text="Another ui5-checkbox with very long text here" wrapping-type="Normal" style="width:200px"></ui5-checkbox>
	`,
});
