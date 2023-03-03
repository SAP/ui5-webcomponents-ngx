import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { ShellBarDirective } from '../directives/shell-bar';

export default {
  component: ShellBarDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const shellBar: Story = (args) => ({
  props: args,
  template: `
        <ui5-shellbar id="shellbar" primary-title="Corporate Portal" secondary-title="secondary title" notifications-count="99+" show-notifications="" show-product-switch="" show-co-pilot="">
		<ui5-avatar slot="profile">
			<img src="../../../assets/images/avatars/woman_avatar_5.png">
		</ui5-avatar>

		<img slot="logo" src="../../../assets/images/sap-logo-svg.svg">

		<ui5-button icon="nav-back" slot="startButton"></ui5-button>

		<ui5-shellbar-item id="disc" icon="disconnected" text="Disconnect"></ui5-shellbar-item>
		<ui5-shellbar-item id="call" icon="incoming-call" text="Incoming Calls" count="4"></ui5-shellbar-item>

		<ui5-input slot="searchField"></ui5-input>

		<ui5-li slot="menuItems">Application 1</ui5-li>
		<ui5-li slot="menuItems">Application 2</ui5-li>
		<ui5-li slot="menuItems">Application 3</ui5-li>
		<ui5-li slot="menuItems">Application 4</ui5-li>
		<ui5-li slot="menuItems">Application 5</ui5-li>
	</ui5-shellbar>

	<ui5-popover id="action-popover" placement-type="Bottom">
		<div class="action-popover-header">
			<ui5-title style="padding: 0.25rem 1rem 0rem 1rem">An Kimura</ui5-title>
		</div>

		<div class="action-popover-content" style="margin-top: 1rem;">
			<ui5-list separators="None">
				<ui5-li icon="sys-find">App Finder</ui5-li>
				<ui5-li icon="settings">Settings</ui5-li>
				<ui5-li icon="edit">Edit Home Page</ui5-li>
				<ui5-li icon="sys-help">Help</ui5-li>
				<ui5-li icon="log">Sign out</ui5-li>
			</ui5-list>
		</div>
	</ui5-popover>
      `,
});

export const basicShellBar: Story = (args) => ({
  props: args,
  template: `
        <ui5-shellbar primary-title="Corporate Portal" secondary-title="secondary title">

			<ui5-avatar slot="profile" icon="customer"></ui5-avatar>
			<img slot="logo" src="../../../assets/images/sap-logo-svg.svg">
			<ui5-button icon="nav-back" slot="startButton"></ui5-button>

		</ui5-shellbar>
      `,
});

export const shellBarWithSearchAndNotifications: Story = (args) => ({
  props: args,
  template: `
        <ui5-shellbar primary-title="Corporate Portal" secondary-title="secondary title" show-notifications="" notifications-count="22">
			<ui5-avatar slot="profile">
				<img src="../../../assets/images/avatars/woman_avatar_5.png">
			</ui5-avatar>
			<img slot="logo" src="../../../assets/images/sap-logo-svg.svg">
			<ui5-input slot="searchField" placeholder="Enter service..."></ui5-input>
		</ui5-shellbar>
      `,
});

export const shellBarWithProductSwitchAndCoPilot: Story = (args) => ({
  props: args,
  template: `
        <ui5-shellbar primary-title="Corporate Portal" secondary-title="secondary title" show-co-pilot="" show-product-switch="" show-notifications="" notifications-count="22">
			<img slot="logo" src="../../../assets/images/sap-logo-svg.svg">
			
			<ui5-avatar slot="profile">
				<img src="../../../assets/images/avatars/woman_avatar_5.png">
			</ui5-avatar>
		</ui5-shellbar>
      `,
});
