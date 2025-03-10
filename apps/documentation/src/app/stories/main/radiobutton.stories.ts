import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  RadioButtonComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

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
      extractArgTypes,
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const BasicRadioButtonTypes: StoryObj<RadioButtonComponent> = {
  render: (args: RadioButtonComponent & any) => ({
    props: args,
    template: `
		<ui5-radio-button text="Option A" checked name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option B" value-state="None" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option C" value-state="Critical" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option D" value-state="Negative" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option C" value-state="Positive" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option D" value-state="Information" name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option E" disabled name="GroupA"></ui5-radio-button>
		<ui5-radio-button text="Option F" readonly name="GroupA"></ui5-radio-button>
	`,
  }),
};

export const RadioButtonInGroupNavigateViaUpRightAndDownLeftArrowKeys: StoryObj<RadioButtonComponent> =
  {
    render: (args: RadioButtonComponent & any) => ({
      props: args,
      template: `
		<div aria-labelledby="radioGroupTitle1" role="radiogroup" id="radioGroup">
			<ui5-title level="H5">Group of states</ui5-title>
			<ui5-radio-button text="None" value-state="None" name="GroupB"></ui5-radio-button>
			<ui5-radio-button text="Critical" value-state="Critical" name="GroupB"></ui5-radio-button>
			<ui5-radio-button checked text="Negative" value-state="Negative" name="GroupB"></ui5-radio-button>
			<ui5-radio-button text="Positive" value-state="Positive" name="GroupB"></ui5-radio-button>
			<ui5-radio-button text="Information" value-state="Information" name="GroupB"></ui5-radio-button>
		</div>
		<div aria-labelledby="radioGroupTitle2" role="radiogroup" id="radioGroup2">
			<ui5-title level="H5">Group of options</ui5-title>
			<ui5-radio-button text="Option A" name="GroupC"></ui5-radio-button>
			<ui5-radio-button checked text="Option B" value-state="None" name="GroupC"></ui5-radio-button>
			<ui5-radio-button text="Option C" value-state="None" name="GroupC"></ui5-radio-button>
		</div>
	`,
    }),
  };

export const RadioButtonWithTextWrapping: StoryObj<RadioButtonComponent> = {
  render: (args: RadioButtonComponent & any) => ({
    props: args,
    template: `
		<ui5-radio-button text="ui5-radio-button text wraps by default when it's too long" style="width:300px"></ui5-radio-button>
		<ui5-radio-button text="set wrapping-type='None' to make it truncate" wrapping-type="None" style="width:300px"></ui5-radio-button>
	`,
  }),
};
