import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { NotificationListGroupItemDirective } from '../directives/notification-list-group-item';

export default {
  component: NotificationListGroupItemDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const notificationListGroupItem: Story = (args) => ({
  props: args,
  template: `
        <ui5-list id="myList" header-text="Notifications grouped">
			<ui5-li-notification-group show-close="" show-counter="" title-text="Orders" priority="High">
				<ui5-li-notification show-close="" title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
					And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
	
					<span slot="footnotes">Office Notifications</span>
					<span slot="footnotes">3 Days</span>
	
					<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
					<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
				</ui5-li-notification>
	
				<ui5-li-notification show-close="" title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
					And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
	
					<span slot="footnotes">Office Notifications</span>
					<span slot="footnotes">3 Days</span>
	
					<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
					<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
				</ui5-li-notification>
	
				<ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
				<ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>
			</ui5-li-notification-group>
	
			<ui5-li-notification-group show-close="" show-counter="" title-text="Deliveries" priority="Medium" collapsed="">
				<ui5-li-notification show-close="" title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
					And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
	
					<span slot="footnotes">Office Notifications</span>
					<span slot="footnotes">3 Days</span>
	
					<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
				</ui5-li-notification>
	
				<ui5-li-notification show-close="" title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
					And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
	
					<span slot="footnotes">Office Notifications</span>
					<span slot="footnotes">3 Days</span>
	
					<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
				</ui5-li-notification>

				<ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
				<ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>
			</ui5-li-notification-group>
	
			<ui5-li-notification-group show-close="" show-counter="" priority="Low" collapsed="" title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
				<ui5-li-notification show-close="" title-text="New meeting at Building (#35001)" priority="Low" read="">
					And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
	
					<span slot="footnotes">Office Notifications</span>
					<span slot="footnotes">3 Days</span>
				</ui5-li-notification>
	
				<ui5-li-notification show-close="" title-text="New meeting at Building (#35001)" priority="Low" read="">
					And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
	
					<span slot="footnotes">Office Notifications</span>
					<span slot="footnotes">3 Days</span>
				</ui5-li-notification>

			</ui5-li-notification-group>
		</ui5-list>
      `,
});

export const notificationListGroupItemInShellBar: Story = (args) => ({
  props: args,
  template: `
        <ui5-shellbar id="shellbar" primary-title="Corporate Portal" logo="../../../assets/images/sap-logo-svg.svg" show-notifications="" notifications-count="6">
		</ui5-shellbar>

		<ui5-popover id="notificationsPopover" style="max-width: 400px" placement-type="Bottom" horizontal-align="Right">
			<ui5-list id="notificationListTop" header-text="Notifications grouped">
				<ui5-li-notification-group show-close="" show-counter="" title-text="Orders" priority="High">
					<ui5-li-notification show-close="" title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
						And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
						<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
		
						<span slot="footnotes">Office Notifications</span>
						<span slot="footnotes">3 Days</span>
		
						<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
						<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
					</ui5-li-notification>
		
					<ui5-li-notification show-close="" title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="High">
						And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
						<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
		
						<span slot="footnotes">Office Notifications</span>
						<span slot="footnotes">3 Days</span>
		
						<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
						<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
					</ui5-li-notification>
		
					<ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
					<ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>
				</ui5-li-notification-group>
		
				<ui5-li-notification-group show-close="" show-counter="" title-text="Deliveries" priority="Medium" collapsed="">
					<ui5-li-notification show-close="" title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
						And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
						<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
		
						<span slot="footnotes">Office Notifications</span>
						<span slot="footnotes">3 Days</span>
		
						<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
					</ui5-li-notification>
		
					<ui5-li-notification show-close="" title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc." priority="Medium">
						And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
						<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
		
						<span slot="footnotes">Office Notifications</span>
						<span slot="footnotes">3 Days</span>
		
						<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
					</ui5-li-notification>
	
					<ui5-notification-action icon="accept" text="Accept All" slot="actions"></ui5-notification-action>
					<ui5-notification-action icon="message-error" text="Reject All" slot="actions"></ui5-notification-action>
				</ui5-li-notification-group>
		
				<ui5-li-notification-group show-close="" show-counter="" priority="High" collapsed="" title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
					<ui5-li-notification show-close="" title-text="New meeting at Building (#35001)" priority="High" read="">
						And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
						<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
		
						<span slot="footnotes">Office Notifications</span>
						<span slot="footnotes">3 Days</span>
					</ui5-li-notification>
		
					<ui5-li-notification show-close="" title-text="New meeting at Building (#35001)" priority="High" read="">
						And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
						<ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
		
						<span slot="footnotes">Office Notifications</span>
						<span slot="footnotes">3 Days</span>
					</ui5-li-notification>
	
				</ui5-li-notification-group>
			</ui5-list>
		</ui5-popover>
      `,
});
