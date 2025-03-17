import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { NotificationListItemComponent } from '@ui5/webcomponents-ngx/fiori/notification-list-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { NotificationListItemComponent } from "@ui5/webcomponents-ngx/fiori/notification-list-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / NotificationList / NotificationListItem',
  component: NotificationListItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('NotificationListItemComponent', NotificationListItemComponent, description),
      },
    },
  },
} as Meta;

export const NotificationListItemCustomActions: StoryObj<NotificationListItemComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
			  <ui5-list id="myList3" class="full-width" header-text="Notifications">
				  <ui5-li-notification show-close priority="Low" title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
					  And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					  <ui5-avatar size="XS" slot="avatar">
						  <img src="/assets/images/avatars/woman_avatar_1.png">
					  </ui5-avatar>
					  <span slot="footnotes">Monique Legrand</span>
					  <span slot="footnotes">2 Days</span>
	  
					  <ui5-menu slot="menu">
						  <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>
						  <ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>
					  </ui5-menu>
				  </ui5-li-notification>
	  
				  <ui5-li-notification show-close priority="Low" title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
					  And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					  <ui5-avatar size="XS" slot="avatar">
						  <img src="/assets/images/avatars/man_avatar_1.png">
					  </ui5-avatar>
					  <span slot="footnotes">Alain Chevalier</span>
					  <span slot="footnotes">2 Days</span>
	  
					  <ui5-menu slot="menu">
						  <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>
					  </ui5-menu>
				  </ui5-li-notification>
	  
				  <ui5-li-notification show-close priority="Low" title-text="New order (#2525) With a short title">
					  And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
					  <ui5-avatar size="XS" slot="avatar">
						  <img src="/assets/images/avatars/man_avatar_2.png">
					  </ui5-avatar>
					  <span slot="footnotes">John Doe</span>
					  <span slot="footnotes">2 Days</span>
	  
					  <ui5-menu slot="menu">
						  <ui5-menu-item icon="accept" text="Accept All Requested Information"></ui5-menu-item>
						  <ui5-menu-item icon="message-error" text="Reject All Requested Information"></ui5-menu-item>
					  </ui5-menu>
				  </ui5-li-notification>
			  </ui5-list>
		  `,
    }),
  };
