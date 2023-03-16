import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  RadioButtonComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3>

The <code>ui5-radio-button</code> component enables users to select a single option from a set of options. When a <code>ui5-radio-button</code> is selected by the user, the <code>change</code> event is fired. When a <code>ui5-radio-button</code> that is within a group is selected, the one that was previously selected gets automatically deselected. You can group radio buttons by using the <code>name</code> property. <br> <b>Note:</b> If <code>ui5-radio-button</code> is not part of a group, it can be selected once, but can not be deselected back.

<h3>Keyboard Handling</h3>

Once the <code>ui5-radio-button</code> is on focus, it might be selected by pressing the Space and Enter keys. <br> The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group, while TAB and SHIFT + TAB can be used to enter or leave the radio button group. <br> <b>Note:</b> On entering radio button group, the focus goes to the currently selected radio button.

<h3>ES6 Module Import</h3>

<code>import { RadioButtonComponent } from "@ui5/webcomponents-ngx/main/radio-button";</code>`;
export default {
  title: 'UI5 Web Components / Main / RadioButton',
  component: RadioButtonComponent,
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

export const ApplyChanges: Story<RadioButtonComponent> = (
  args: RadioButtonComponent & any
) => ({
  props: args,
  template: `
          <ui5-radio-button>
            
          </ui5-radio-button>
        `,
});

export const basicRadioButtonTypes: Story<RadioButtonComponent> = (
  args: RadioButtonComponent & any
) => ({
  props: args,
  template: `
		<ui5-radio-button text="Option A" checked="" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option B" value-state="None" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option C" value-state="Warning" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option D" value-state="Error" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option C" value-state="Success" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option D" value-state="Information" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option E" disabled="" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option F" readonly="" name="GroupA"></ui5-radio-button>
	`,
});

export const radioButtonInGroupNavigateViaUpRightAndDownLeftArrowKeys: Story<
  RadioButtonComponent
> = (args: RadioButtonComponent & any) => ({
  props: args,
  template: `
		<div aria-labelledby="radioGroupTitle1" role="radiogroup" id="radioGroup" class="radio-button-group">
			<ui5-title id="radioGroupTitle1">Group of states</ui5-title>
			<ui5-label id="lblRadioGroup">Selected radio: None</ui5-label>
			<ui5-radio-button text="None" value-state="None" checked="" name="GroupB"></ui5-radio-button>
			<ui5-radio-button text="Warning" value-state="Warning" name="GroupB"></ui5-radio-button>
			<ui5-radio-button text="Error" value-state="Error" name="GroupB"></ui5-radio-button>
			<ui5-radio-button text="Success" value-state="Success" name="GroupB"></ui5-radio-button>
			<ui5-radio-button text="Information" value-state="Information" name="GroupB"></ui5-radio-button>
		</div>
		<div aria-labelledby="radioGroupTitle2" role="radiogroup" id="radioGroup2" class="radio-button-group">
			<ui5-title id="radioGroupTitle2">Group of options</ui5-title>
			<ui5-label id="lblRadioGroup2">Selected radio: Option A</ui5-label>
			<ui5-radio-button text="Option A" checked="" name="GroupC"></ui5-radio-button>
			<ui5-radio-button text="Option B" value-state="None" name="GroupC"></ui5-radio-button>
			<ui5-radio-button text="Option C" value-state="None" name="GroupC"></ui5-radio-button>
		</div>
	`,
});

export const radioButtonWithTextWrapping: Story<RadioButtonComponent> = (
  args: RadioButtonComponent & any
) => ({
  props: args,
  template: `
		<ui5-radio-button text="ui5-radio-button with 'wrapping-type=Normal' set and some long text" wrapping-type="Normal" style="width:200px"></ui5-radio-button>
		<ui5-radio-button text="Another ui5-radio-button with very long text here" wrapping-type="Normal" style="width:200px"></ui5-radio-button>
	`,
});
