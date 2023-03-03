import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / Button',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicButton: Story = (args) => ({
  props: args,
  template: `
		<ui5-button class="samples-margin" design="Default">Default</ui5-button>
		<ui5-button class="samples-margin" disabled="">Disabled</ui5-button>
		<ui5-button class="samples-margin" design="Transparent">Cancel</ui5-button>
		<ui5-button class="samples-margin" design="Positive">Approve</ui5-button>
		<ui5-button class="samples-margin" design="Negative">Decline</ui5-button>
		<ui5-button class="samples-margin" design="Attention">Warning</ui5-button>
		<ui5-button class="samples-margin" design="Emphasized">Subscribe</ui5-button>
	`,
});

export const buttonWithIcon: Story = (args) => ({
  props: args,
  template: `
		<ui5-button class="samples-margin" icon="employee">Add</ui5-button>
		<ui5-button class="samples-margin" icon="download" icon-end="">Download</ui5-button>
		<ui5-button class="samples-margin" design="Positive" icon="add">Add</ui5-button>
		<ui5-button class="samples-margin" design="Negative" icon="delete">Remove</ui5-button>
		<ui5-button class="samples-margin" design="Attention" icon="message-warning">Warning</ui5-button>
		<ui5-button class="samples-margin" design="Transparent" icon="accept">Accept</ui5-button>
	`,
});

export const iconOnlyButton: Story = (args) => ({
  props: args,
  template: `
			<ui5-label style="display:none;" id="lblAdd" aria-hidden="true">Add</ui5-label>
			<ui5-label style="display:none;" id="lblAlert" aria-hidden="true">Alert</ui5-label>
			<ui5-label style="display:none;" id="lblAway" aria-hidden="true">Away</ui5-label>
			<ui5-label style="display:none;" id="lblAccept" aria-hidden="true">Accept</ui5-label>
			<ui5-label style="display:none;" id="lblBookmark" aria-hidden="true">Bookmark</ui5-label>
			<ui5-label style="display:none;" id="lblCamera" aria-hidden="true">Camera</ui5-label>
			<ui5-label style="display:none;" id="lblCall" aria-hidden="true">Call</ui5-label>
			<ui5-label style="display:none;" id="lblCart" aria-hidden="true">Cart</ui5-label>
			<ui5-label style="display:none;" id="lblCancel" aria-hidden="true">Cancel</ui5-label>
			<ui5-label style="display:none;" id="lblSettings" aria-hidden="true">Settings</ui5-label>

			<ui5-button class="samples-margin" icon="away" accessible-name-ref="lblAway"></ui5-button>
			<ui5-button class="samples-margin" icon="action-settings" accessible-name-ref="lblSettings"></ui5-button>
			<ui5-button class="samples-margin" icon="add" accessible-name-ref="lblAdd"></ui5-button>
			<ui5-button class="samples-margin" icon="alert" accessible-name-ref="lblAlert"></ui5-button>
			<ui5-button class="samples-margin" icon="accept" design="Positive" accessible-name-ref="lblAccept"></ui5-button>
			<ui5-button class="samples-margin" icon="bookmark" design="Positive" accessible-name-ref="lblBookmark"></ui5-button>
			<ui5-button class="samples-margin" icon="cancel" design="Negative" accessible-name-ref="lblCancel"></ui5-button>
			<ui5-button class="samples-margin" icon="call" design="Negative" accessible-name-ref="lblCall"></ui5-button>
			<ui5-button class="samples-margin" icon="camera" design="Transparent" accessible-name-ref="lblCamera"></ui5-button>
			<ui5-button class="samples-margin" icon="cart" design="Transparent" accessible-name-ref="lblCart"></ui5-button>
	`,
});

export const buttonWithDesign: Story = (args) => ({
  props: args,
  template: `
		<ui5-button class="samples-margin" design="Emphasized">Submit</ui5-button>
		<ui5-button class="samples-margin" design="Positive">Agree</ui5-button>
		<ui5-button class="samples-margin" design="Negative">Decline</ui5-button>
		<ui5-button class="samples-margin" design="Default">Default</ui5-button>
		<ui5-button class="samples-margin" design="Attention">Warning</ui5-button>
		<ui5-button class="samples-margin" design="Transparent">Transparent</ui5-button>
	`,
});
