import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { WizardStepComponent } from '@ui5/webcomponents-ngx/fiori/wizard-step';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { WizardStepComponent } from "@ui5/webcomponents-ngx/fiori/wizard-step";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Wizard / WizardStep',
  component: WizardStepComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'WizardStepComponent', WizardStepComponent, description),
      },
    },
  },
} as Meta;


export const WizardStep: StoryObj<WizardStepComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };