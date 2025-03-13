import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ButtonComponent } from '@ui5/webcomponents-ngx/main/button';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { ButtonComponent } from "@ui5/webcomponents-ngx/main/button";</code>`;
export default {
  title: 'UI5 Web Components / Main / Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('ButtonComponent', ButtonComponent, description),
      },
    },
  },
} as Meta;

export const BasicButton: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: args,
    template: `
				<ui5-button design="Default">Default</ui5-button>
				<ui5-button disabled>Disabled</ui5-button>
				<ui5-button design="Transparent">Cancel</ui5-button>
				<ui5-button design="Positive">Approve</ui5-button>
				<ui5-button design="Negative">Decline</ui5-button>
				<ui5-button design="Attention">Warning</ui5-button>
				<ui5-button design="Emphasized">Subscribe</ui5-button>
			`,
  }),
};

export const ButtonWithIcon: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: args,
    template: `
			<ui5-button icon="employee">Add</ui5-button>
			<ui5-button end-icon="download">Download</ui5-button>
			<ui5-button design="Positive" icon="add">Add</ui5-button>
			<ui5-button design="Negative" icon="delete">Remove</ui5-button>
			<ui5-button design="Attention" icon="message-warning">Warning</ui5-button>
			<ui5-button design="Transparent" icon="accept">Accept</ui5-button>
		`,
  }),
};

export const IconOnlyButton: StoryObj<ButtonComponent> = {
  render: (args) => ({
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
				<ui5-button icon="away" accessible-name-ref="lblAway"></ui5-button>
				<ui5-button icon="action-settings" accessible-name-ref="lblSettings"></ui5-button>
				<ui5-button icon="add" accessible-name-ref="lblAdd"></ui5-button>
				<ui5-button icon="alert" accessible-name-ref="lblAlert"></ui5-button>
				<ui5-button icon="accept" design="Positive" accessible-name-ref="lblAccept"></ui5-button>
				<ui5-button icon="bookmark" design="Positive" accessible-name-ref="lblBookmark"></ui5-button>
				<ui5-button icon="cancel" design="Negative" accessible-name-ref="lblCancel"></ui5-button>
				<ui5-button icon="call" design="Negative" accessible-name-ref="lblCall"></ui5-button>
				<ui5-button icon="camera" design="Transparent" accessible-name-ref="lblCamera"></ui5-button>
				<ui5-button icon="cart" design="Transparent" accessible-name-ref="lblCart"></ui5-button>
			`,
  }),
};

export const ButtonWithDesign: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: args,
    template: `
		<ui5-button design="Emphasized">Submit</ui5-button>
		<ui5-button design="Positive">Agree</ui5-button>
		<ui5-button design="Negative">Decline</ui5-button>
		<ui5-button design="Default">Default</ui5-button>
		<ui5-button design="Attention">Warning</ui5-button>
		<ui5-button design="Transparent">Transparent</ui5-button>
		`,
  }),
};
