import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { RadioButtonComponent } from '@ui5/webcomponents-ngx/main/radio-button';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

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
        component: extractDescription('RadioButtonComponent', RadioButtonComponent, description),
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
