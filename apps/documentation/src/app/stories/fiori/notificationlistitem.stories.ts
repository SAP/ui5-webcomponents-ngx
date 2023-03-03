import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Fiori / NotificationListItem',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const notificationListItemCustomActions: Story = (args) => ({
  props: args,
  template: `
		<ui5-list id="myList3" class="full-width" header-text="Notifications">
			<ui5-li-notification show-close="" priority="Low" title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="../../../assets/images/avatars/woman_avatar_1.png">
				</ui5-avatar>
				<span slot="footnotes">Monique Legrand</span>
				<span slot="footnotes">2 Days</span>

				<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
				<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
			</ui5-li-notification>

			<ui5-li-notification show-close="" priority="Low" title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="../../../assets/images/avatars/man_avatar_1.png">
				</ui5-avatar>
				<span slot="footnotes">Alain Chevalier</span>
				<span slot="footnotes">2 Days</span>

				<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
			</ui5-li-notification>

			<ui5-li-notification show-close="" priority="Low" title-text="New order (#2525) With a short title">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="../../../assets/images/avatars/man_avatar_2.png">
				</ui5-avatar>
				<span slot="footnotes">John Doe</span>
				<span slot="footnotes">2 Days</span>

				<ui5-notification-action icon="accept" text="Accept All Requested Information" slot="actions"></ui5-notification-action>
			<ui5-notification-action icon="decline" text="Reject All Requested Information" slot="actions"></ui5-notification-action>
			</ui5-li-notification>
		</ui5-list>
	`,
});
