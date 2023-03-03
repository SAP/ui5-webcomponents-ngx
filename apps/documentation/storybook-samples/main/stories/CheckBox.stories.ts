import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { CheckBoxDirective } from '../directives/check-box';

export default {
  component: CheckBoxDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
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

export const checkBoxWithIndeterminate: Story = (args) => ({
  props: args,
  template: `
        <ui5-checkbox id="result-cb" text="Select / deselect all" indeterminate="" checked=""></ui5-checkbox>
		<hr>
		<div style="display: flex; flex-direction: column; align-items: flex-start;">
			<ui5-checkbox id="cb1" text="English" checked=""></ui5-checkbox>
			<ui5-checkbox id="cb2" text="German"></ui5-checkbox>
			<ui5-checkbox id="cb3" text="French"></ui5-checkbox>
		</div>
      `,
});
