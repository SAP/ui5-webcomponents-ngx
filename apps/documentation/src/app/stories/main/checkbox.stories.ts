import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { CheckBoxComponent } from '@ui5/webcomponents-ngx/main/check-box';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { CheckBoxComponent } from "@ui5/webcomponents-ngx/main/check-box";</code>`;
export default {
  title: 'UI5 Web Components / Main / CheckBox',
  component: CheckBoxComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('CheckBoxComponent', CheckBoxComponent, description)
      },
    },
  },
} as Meta;

export const BasicCheckBox: StoryObj<CheckBoxComponent> = {
  render: (args: CheckBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-checkbox text="Chocolate" checked></ui5-checkbox>
		<ui5-checkbox text="Strawberry" checked></ui5-checkbox>
		<ui5-checkbox text="Waffles" checked value-state="Negative"></ui5-checkbox>
		<ui5-checkbox text="Cake" checked value-state="Critical"></ui5-checkbox>
	`,
  }),
};

export const CheckBoxStates: StoryObj<CheckBoxComponent> = {
  render: (args: CheckBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-checkbox text="Positive" value-state="Positive"></ui5-checkbox>
		<ui5-checkbox text="Negative" value-state="Negative"></ui5-checkbox>
		<ui5-checkbox text="Critical" value-state="Critical"></ui5-checkbox>
		<ui5-checkbox text="Information" value-state="Information"></ui5-checkbox>
		<ui5-checkbox text="Disabled" disabled checked></ui5-checkbox>
		<ui5-checkbox text="Readonly" readonly checked></ui5-checkbox>
		<ui5-checkbox text="Success disabled" disabled value-state="Positive" checked></ui5-checkbox>
		<ui5-checkbox text="Error disabled" disabled value-state="Negative" checked></ui5-checkbox>
		<ui5-checkbox text="Warning disabled " disabled value-state="Critical" checked></ui5-checkbox>
		<ui5-checkbox text="Information disabled " disabled value-state="Information" checked></ui5-checkbox>
		<ui5-checkbox text="Success readonly" readonly value-state="Positive" checked></ui5-checkbox>
		<ui5-checkbox text="Error readonly" readonly value-state="Negative" checked></ui5-checkbox>
		<ui5-checkbox text="Warning readonly" readonly value-state="Critical" checked></ui5-checkbox>
		<ui5-checkbox text="Information readonly" readonly value-state="Information" checked></ui5-checkbox>
		<ui5-checkbox text="Success indeterminate" value-state="Positive" indeterminate checked></ui5-checkbox>
		<ui5-checkbox text="Error indeterminate" value-state="Negative" indeterminate checked></ui5-checkbox>
		<ui5-checkbox text="Warning indeterminate" value-state="Critical" indeterminate checked></ui5-checkbox>
		<ui5-checkbox text="Information indeterminate" value-state="Information" indeterminate checked></ui5-checkbox>
	`,
  }),
};

export const CheckBoxWithTextWrapping: StoryObj<CheckBoxComponent> = {
  render: (args: CheckBoxComponent & any) => ({
    props: args,
    template: `
  <ui5-checkbox text="set wrapping-type='None' to make it truncate instead" wrapping-type="None" style="width:300px"></ui5-checkbox>
		<ui5-checkbox text="ui5-checkbox text wraps by default when some long text is set." style="width:300px"></ui5-checkbox>
	`,
  }),
};
