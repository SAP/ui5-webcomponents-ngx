import { Meta, moduleMetadata } from '@storybook/angular';
import { NotificationListItemComponent, Ui5WebcomponentsModule, } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview

The <code>ui5-li-notification</code> is a type of list item, meant to display notifications. <br>

The component has a rich set of various properties that allows the user to set <code>avatar</code>, <code>titleText</code>, descriptive <code>content</code> and <code>footnotes</code> to fully describe a notification. <br>

The user can: <ul> <li>display a <code>Close</code> button</li> <li>can control whether the <code>titleText</code> and <code>description</code> should wrap or truncate and display a <code>ShowMore</code> button to switch between less and more information</li> <li>add custom actions by using the <code>menu</code> slot</li> </ul>

### Usage

The component can be used in a standard <code>ui5-list</code>.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-li-notification</code> exposes the following CSS Shadow Parts: <ul> <li>title-text - Used to style the titleText of the notification list item</li> </ul>

### ES6 Module Import

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

export const notificationListItemCustomActions = (args: NotificationListItemComponent & any) => ({
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
});
