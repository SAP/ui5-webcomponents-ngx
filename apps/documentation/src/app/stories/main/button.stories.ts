import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ButtonComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3>

The <code>ui5-button</code> component represents a simple push button. It enables users to trigger actions by clicking or tapping the <code>ui5-button</code>, or by pressing certain keyboard keys, such as Enter.

<h3>Usage</h3>

For the <code>ui5-button</code> UI, you can define text, icon, or both. You can also specify whether the text or the icon is displayed first. <br><br> You can choose from a set of predefined types that offer different styling to correspond to the triggered action. <br><br> You can set the <code>ui5-button</code> as enabled or disabled. An enabled <code>ui5-button</code> can be pressed by clicking or tapping it. The button changes its style to provide visual feedback to the user that it is pressed or hovered over with the mouse cursor. A disabled <code>ui5-button</code> appears inactive and cannot be pressed.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-button</code> exposes the following CSS Shadow Parts: <ul> <li>button - Used to style the native button element</li> </ul>

<h3>ES6 Module Import</h3>

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
        component: description,
      },
    },
  },
} as Meta;

export const basicButton: Story<ButtonComponent> = (
  args: ButtonComponent & any
) => ({
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

export const buttonWithIcon: Story<ButtonComponent> = (
  args: ButtonComponent & any
) => ({
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

export const iconOnlyButton: Story<ButtonComponent> = (
  args: ButtonComponent & any
) => ({
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

export const buttonWithDesign: Story<ButtonComponent> = (
  args: ButtonComponent & any
) => ({
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
