import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Fiori / ShellBar',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

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
