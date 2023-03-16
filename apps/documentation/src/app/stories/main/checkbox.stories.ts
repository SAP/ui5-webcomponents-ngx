import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  CheckBoxComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3>

Allows the user to set a binary value, such as true/false or yes/no for an item. <br><br> The <code>ui5-checkbox</code> component consists of a box and a label that describes its purpose. If it's checked, an indicator is displayed inside the box. To check/uncheck the <code>ui5-checkbox</code>, the user has to click or tap the square box or its label. <br><br> The <code>ui5-checkbox</code> component only has 2 states - checked and unchecked. Clicking or tapping toggles the <code>ui5-checkbox</code> between checked and unchecked state.

<h3>Usage</h3>

You can define the checkbox text with via the <code>text</code> property. If the text exceeds the available width, it is truncated by default. In case you prefer text to wrap, set the <code>wrappingType</code> property to "Normal". The touchable area for toggling the <code>ui5-checkbox</code> ends where the text ends. <br><br> You can disable the <code>ui5-checkbox</code> by setting the <code>disabled</code> property to <code>true</code>, or use the <code>ui5-checkbox</code> in read-only mode by setting the <code>readonly</code> property to <code>true</code>.

<br><br> <h3>Keyboard Handling</h3>

The user can use the following keyboard shortcuts to toggle the checked state of the <code>ui5-checkbox</code>. <ul> <li>[SPACE, ENTER] - Toggles between different states: checked, not checked.</li> </ul> <br><br>

<h3>ES6 Module Import</h3>

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
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const ApplyChanges: Story<CheckBoxComponent> = (
  args: CheckBoxComponent & any
) => ({
  props: args,
  template: `
          <ui5-checkbox>
            
          </ui5-checkbox>
        `,
});

export const basicCheckBox: Story<CheckBoxComponent> = (
  args: CheckBoxComponent & any
) => ({
  props: args,
  template: `
		<ui5-checkbox text="Chocolate" checked=""></ui5-checkbox>
		<ui5-checkbox text="Strawberry" checked=""></ui5-checkbox>
		<ui5-checkbox text="Waffles" checked="" value-state="Error"></ui5-checkbox>
		<ui5-checkbox text="Cake" checked="" value-state="Warning"></ui5-checkbox>
	`,
});

export const checkBoxStates: Story<CheckBoxComponent> = (
  args: CheckBoxComponent & any
) => ({
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

export const checkBoxWithTextWrapping: Story<CheckBoxComponent> = (
  args: CheckBoxComponent & any
) => ({
  props: args,
  template: `
		<ui5-checkbox text="ui5-checkbox with 'wrapping-type=Normal' set and some long text." wrapping-type="Normal" style="width:200px"></ui5-checkbox>
		<ui5-checkbox text="Another ui5-checkbox with very long text here" wrapping-type="Normal" style="width:200px"></ui5-checkbox>
	`,
});
