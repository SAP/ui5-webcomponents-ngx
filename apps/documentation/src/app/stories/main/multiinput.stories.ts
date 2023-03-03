import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / MultiInput',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicMultiInput: Story = (args) => ({
  props: args,
  template: `
		<ui5-multi-input class="samples-margin samples-responsive-margin-bottom" value="basic input"></ui5-multi-input>
		<ui5-multi-input class="samples-margin samples-responsive-margin-bottom" show-value-help-icon="" value="value help icon"></ui5-multi-input>
	`,
});

export const multiInputWithTokens: Story = (args) => ({
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
});
