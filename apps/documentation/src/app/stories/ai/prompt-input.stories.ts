import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { PromptInputComponent } from '@ui5/webcomponents-ngx/ai/prompt-input';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { PromptInputComponent } from "@ui5/webcomponents-ngx/ai/prompt-input";</code>`;
export default {
  title: 'UI5 Web Components / AI / PromptInput',
  component: PromptInputComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'PromptInputComponent', PromptInputComponent, description),
      },
    },
  },
} as Meta;


export const PromptInput: StoryObj<PromptInputComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };