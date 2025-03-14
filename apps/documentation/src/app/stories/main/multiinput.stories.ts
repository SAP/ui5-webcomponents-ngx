import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { MultiInputComponent } from '@ui5/webcomponents-ngx/main/multi-input';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { MultiInputComponent } from "@ui5/webcomponents-ngx/main/multi-input";</code>`;
export default {
  title: 'UI5 Web Components / Main / MultiInput',
  component: MultiInputComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('MultiInputComponent', MultiInputComponent, description),
      },
    },
  },
} as Meta;

export const BasicMultiInput: StoryObj<MultiInputComponent> = {
  render: (args: MultiInputComponent & any) => ({
    props: args,
    template: `
		<ui5-multi-input value="basic input"></ui5-multi-input>
		<ui5-multi-input show-value-help-icon value="value help icon"></ui5-multi-input>
	`,
  }),
};

export const MultiInputWithTokens: StoryObj<MultiInputComponent> = {
  render: (args: MultiInputComponent & any) => ({
    props: args,
    template: `
		<ui5-multi-input style="width: 30%">
			<ui5-token slot="tokens" text="Bulgaria"></ui5-token>
		</ui5-multi-input>

		<ui5-multi-input style="width: 30%">
			<ui5-token slot="tokens" text="Argentina"></ui5-token>
			<ui5-token slot="tokens" text="Bulgaria"></ui5-token>
			<ui5-token slot="tokens" text="England"></ui5-token>
			<ui5-token slot="tokens" text="Finland"></ui5-token>
			<ui5-token slot="tokens" text="Germany"></ui5-token>
			<ui5-token slot="tokens" text="Hungary"></ui5-token>
			<ui5-token slot="tokens" text="Italy"></ui5-token>
			<ui5-token slot="tokens" text="Luxembourg"></ui5-token>
			<ui5-token slot="tokens" text="Mexico"></ui5-token>
			<ui5-token slot="tokens" text="Philippines"></ui5-token>
			<ui5-token slot="tokens" text="Sweden"></ui5-token>
			<ui5-token slot="tokens" text="USA"></ui5-token>
		</ui5-multi-input>
	`,
  }),
};
