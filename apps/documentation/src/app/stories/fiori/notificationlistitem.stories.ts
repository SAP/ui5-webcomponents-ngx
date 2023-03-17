import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  NotificationListItemComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> The <code>ui5-li-notification</code> is a type of list item, meant to display notifications. <br>

The component has a rich set of various properties that allows the user to set <code>avatar</code>, <code>titleText</code>, descriptive <code>content</code> and <code>footnotes</code> to fully describe a notification. <br>

The user can: <ul> <li>display a <code>Close</code> button</li> <li>can control whether the <code>titleText</code> and <code>description</code> should wrap or truncate and display a <code>ShowMore</code> button to switch between less and more information</li> <li>add custom actions by using the <code>ui5-notification-action</code> component</li> </ul>

<h3>Usage</h3> The component can be used in a standard <code>ui5-list</code>.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-li-notification</code> exposes the following CSS Shadow Parts: <ul> <li>title-text - Used to style the titleText of the notification list item</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { NotificationListItemComponent } from "@ui5/webcomponents-ngx/fiori/notification-list-item";</code> (optional)`;
export default {
  title: 'UI5 Web Components / Fiori / NotificationListItem',
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
        component: description,
      },
    },
  },
} as Meta;

export const notificationListItemCustomActions: Story<
  NotificationListItemComponent
> = (args: NotificationListItemComponent & any) => ({
  props: args,
  template: `
		<ui5-list id="myList3" class="full-width" header-text="Notifications">
			<ui5-li-notification show-close="" priority="Low" title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="/assets/images/avatars/woman_avatar_1.png">
				</ui5-avatar>
				<span slot="footnotes">Monique Legrand</span>
				<span slot="footnotes">2 Days</span>

				<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
				<ui5-notification-action icon="message-error" text="Reject" slot="actions"></ui5-notification-action>
			</ui5-li-notification>

			<ui5-li-notification show-close="" priority="Low" title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="/assets/images/avatars/man_avatar_1.png">
				</ui5-avatar>
				<span slot="footnotes">Alain Chevalier</span>
				<span slot="footnotes">2 Days</span>

				<ui5-notification-action icon="accept" text="Accept" slot="actions"></ui5-notification-action>
			</ui5-li-notification>

			<ui5-li-notification show-close="" priority="Low" title-text="New order (#2525) With a short title">
				And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
				<ui5-avatar size="XS" slot="avatar">
					<img src="/assets/images/avatars/man_avatar_2.png">
				</ui5-avatar>
				<span slot="footnotes">John Doe</span>
				<span slot="footnotes">2 Days</span>

				<ui5-notification-action icon="accept" text="Accept All Requested Information" slot="actions"></ui5-notification-action>
			<ui5-notification-action icon="decline" text="Reject All Requested Information" slot="actions"></ui5-notification-action>
			</ui5-li-notification>
		</ui5-list>
	`,
});
