import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ShellBarComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-shellbar</code> is meant to serve as an application header and includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on. <br><br>

<h3>Stable DOM Refs</h3>

You can use the following stable DOM refs for the <code>ui5-shellbar</code>: <ul> <li>logo</li> <li>copilot</li> <li>notifications</li> <li>overflow</li> <li>profile</li> <li>product-switch</li> </ul>

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-shellbar</code> exposes the following CSS Shadow Parts: <ul> <li>root - Used to style the outermost wrapper of the <code>ui5-shellbar</code></li> </ul>

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

<h3>ES6 Module Import</h3> <code>import { ShellBarComponent } from "@ui5/webcomponents-ngx/fiori/shell-bar";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / ShellBar',
  component: ShellBarComponent,
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

export const basicShellBar: Story<ShellBarComponent> = (
  args: ShellBarComponent & any
) => ({
  props: args,
  template: `
		<ui5-shellbar primary-title="Corporate Portal" secondary-title="secondary title">

			<ui5-avatar slot="profile" icon="customer"></ui5-avatar>
			<img slot="logo" src="/assets/images/sap-logo-svg.svg">
			<ui5-button icon="nav-back" slot="startButton"></ui5-button>

		</ui5-shellbar>
	`,
});

export const shellBarWithSearchAndNotifications: Story<ShellBarComponent> = (
  args: ShellBarComponent & any
) => ({
  props: args,
  template: `
		<ui5-shellbar primary-title="Corporate Portal" secondary-title="secondary title" show-notifications notifications-count="22">
			<ui5-avatar slot="profile">
				<img src="/assets/images/avatars/woman_avatar_5.png">
			</ui5-avatar>
			<img slot="logo" src="/assets/images/sap-logo-svg.svg">
			<ui5-input slot="searchField" placeholder="Enter service..."></ui5-input>
		</ui5-shellbar>
	`,
});

export const shellBarWithProductSwitchAndCoPilot: Story<ShellBarComponent> = (
  args: ShellBarComponent & any
) => ({
  props: args,
  template: `
		<ui5-shellbar primary-title="Corporate Portal" secondary-title="secondary title" show-product-switch show-notifications notifications-count="22">
			<img slot="logo" src="/assets/images/sap-logo-svg.svg">

			<ui5-avatar slot="profile">
				<img src="/assets/images/avatars/woman_avatar_5.png">
			</ui5-avatar>
		</ui5-shellbar>
	`,
});
