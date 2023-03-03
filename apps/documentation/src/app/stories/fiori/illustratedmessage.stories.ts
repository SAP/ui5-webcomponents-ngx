import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Fiori / IllustratedMessage',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const illustratedMessage: Story = (args) => ({
  props: args,
  template: `
		<ui5-illustrated-message name="UnableToUpload">
			<ui5-button design="Emphasized">Action 1</ui5-button>
			<ui5-button>Action 2</ui5-button>
		</ui5-illustrated-message>
	`,
});

export const illustratedMessageWithCustomTitleAndLinkInSubtitle: Story = (
  args
) => ({
  props: args,
  template: `
		<ui5-illustrated-message name="UnableToUpload">
			<ui5-title slot="title" level="H1">Something went wrong</ui5-title>
			<div slot="subtitle">Please try again or contact us at <ui5-link>example@example.com</ui5-link></div>
			<ui5-button icon="refresh">Try again</ui5-button>
		</ui5-illustrated-message>
	`,
});
