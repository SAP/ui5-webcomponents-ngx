import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { StepInputComponent } from '@ui5/webcomponents-ngx/main/step-input';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

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
        component: extractDescription('StepInputComponent', StepInputComponent, description),
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
