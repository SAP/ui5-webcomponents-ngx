import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { StepInputDirective } from '../directives/step-input';

export default {
  component: StepInputDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicStepInput: Story = (args) => ({
  props: args,
  template: `
        <div class="shorter">
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="5"></ui5-step-input>
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" readonly="" value="5"></ui5-step-input>
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" disabled="" value="5"></ui5-step-input>
		</div>
      `,
});

export const stepInputWithAlignment: Story = (args) => ({
  props: args,
  template: `
        <div class="shorter">
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="5"></ui5-step-input>
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="5" style="text-align: center"></ui5-step-input>
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="5" style="text-align: right"></ui5-step-input>
		</div>
      `,
});

export const stepInputWithMinMaxStepAndValuePrecision: Story = (args) => ({
  props: args,
  template: `
        <div class="shorter">
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="5" min="0" max="10" step="1"></ui5-step-input>
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="0" min="-100" max="100" step="10"></ui5-step-input>
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value="10" min="0" max="20" step="0.5" value-precision="1"></ui5-step-input>
		</div>
      `,
});

export const stepInputWithValueState: Story = (args) => ({
  props: args,
  template: `
        <div class="shorter">
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value-state="Success"></ui5-step-input>
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value-state="Warning"></ui5-step-input>
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value-state="Error"></ui5-step-input>
			<ui5-step-input class="samples-margin samples-responsive-margin-bottom" value-state="Information"></ui5-step-input>
		</div>
      `,
});

export const stepInputWithLabel: Story = (args) => ({
  props: args,
  template: `
        <div class="flex-column samples-margin">
			<div class="shorter">
				<ui5-label class="samples-big-margin-right" for="myStepInput" required="" show-colon="">Number</ui5-label>
				<ui5-step-input id="myStepInput" placeholder="Enter your Number" required=""></ui5-step-input>
			</div>
		</div>
      `,
});
