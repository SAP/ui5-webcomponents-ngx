import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  StepInputComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-step-input</code> consists of an input field and buttons with icons to increase/decrease the value with the predefined step. <br><br> The user can change the value of the component by pressing the increase/decrease buttons, by typing a number directly, by using the keyboard up/down and page up/down, or by using the mouse scroll wheel. Decimal values are supported.

<h3>Usage</h3>

The default step is 1 but the app developer can set a different one.

App developers can set a maximum and minimum value for the <code>StepInput</code>. The increase/decrease button and the up/down keyboard navigation become disabled when the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min. <br><br> <h4>When to use:</h4> <ul> <li>To adjust amounts, quantities, or other values quickly.</li> <li>To adjust values for a specific step.</li> </ul>

<h4>When not to use:</h4> <ul> <li>To enter a static number (for example, postal code, phone number, or ID). In this case, use the regular <code>ui5-input</code> instead.</li> <li>To display a value that rarely needs to be adjusted and does not pertain to a particular step. In this case, use the regular <code>ui5-input</code> instead.</li> <li>To enter dates and times. In this case, use date/time related components instead.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { StepInputComponent } from "@ui5/webcomponents-ngx/main/step-input";</code>`;
export default {
  title: 'UI5 Web Components / Main / StepInput',
  component: StepInputComponent,
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

export const BasicStepInput: StoryObj<StepInputComponent> = {
  render: (args: StepInputComponent & any) => ({
    props: args,
    template: `
		<div>
			<ui5-step-input [value]="5"></ui5-step-input>
			<ui5-step-input readonly [value]="5"></ui5-step-input>
			<ui5-step-input disabled [value]="5"></ui5-step-input>
		</div>
	`,
  }),
};

export const StepInputWithAlignment: StoryObj<StepInputComponent> = {
  render: (args: StepInputComponent & any) => ({
    props: args,
    template: `
		<div>
			<ui5-step-input [value]="5"></ui5-step-input>
			<ui5-step-input [value]="5" style="text-align: center"></ui5-step-input>
			<ui5-step-input [value]="5"></ui5-step-input>
		</div>
	`,
  }),
};

export const StepInputWithMinMaxStepAndValuePrecision: StoryObj<StepInputComponent> =
  {
    render: (args: StepInputComponent & any) => ({
      props: args,
      template: `
		<div>
			<ui5-step-input [value]="5" [min]="0" [max]="10" [step]="1"></ui5-step-input>
			<ui5-step-input [value]="0" [min]="-100" [max]="100" [step]="10"></ui5-step-input>
			<ui5-step-input [value]="10" [min]="0" [max]="20" [step]="0.5" [valuePrecision]="1"></ui5-step-input>
		</div>
	`,
    }),
  };

export const StepInputWithValueState: StoryObj<StepInputComponent> = {
  render: (args: StepInputComponent & any) => ({
    props: args,
    template: `
		<div>
			<ui5-step-input value-state="Positive"></ui5-step-input>
			<ui5-step-input value-state="Critical"></ui5-step-input>
			<ui5-step-input value-state="Negative"></ui5-step-input>
			<ui5-step-input value-state="Information"></ui5-step-input>
		</div>
	`,
  }),
};

export const StepInputWithLabel: StoryObj<StepInputComponent> = {
  render: (args: StepInputComponent & any) => ({
    props: args,
    template: `
		<ui5-label for="myStepInput" required showColon>Number</ui5-label>
		<ui5-step-input id="myStepInput" placeholder="Enter your Number" required></ui5-step-input>
	`,
  }),
};
