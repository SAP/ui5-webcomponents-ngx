import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  NotificationListGroupItemComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview The <code>ui5-li-notification-group</code> is a special type of list item, that unlike others can group items within self, usually <code>ui5-li-notification</code> items. <br>

The component consists of: <ul> <li><code>Toggle</code> button to expand and collapse the group</li> <li><code>Priority</code> icon to display the priority of the group</li> <li><code>TitleText</code> to entitle the group</li> <li>Custom actions - with the use of <code>ui5-menu</code></li> <li>Items of the group</li> </ul>

<h3>Usage</h3> The component can be used in a standard <code>ui5-list</code>.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-li-notification-group</code> exposes the following CSS Shadow Parts: <ul> <li>title-text - Used to style the titleText of the notification list group item</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { NotificationListGroupItemComponent } from "@ui5/webcomponents-ngx/fiori/notification-list-group-item";</code> (optional)`;
export default {
  title: 'UI5 Web Components / Fiori / NotificationListGroupItem',
  component: NotificationListGroupItemComponent,
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

export const basicSample = () => ({
  template: `
<ui5-list (itemClose)="$event.detail.item.hidden=true" header-text="Notifications grouped">
  <ui5-li-notification-group
    title-text="Orders"
    priority="High"
  >
    <ui5-li-notification
      [showClose]="true"
      title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
      priority="High"
    >
      And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
      nec elementum lectus turpis at nunc.
      <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

      <span slot="footnotes">Office Notifications</span>
      <span slot="footnotes">3 Days</span>

      <ui5-menu slot="menu">
					<ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>
					<ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>
			</ui5-menu>

    </ui5-li-notification>

    <ui5-li-notification
      [showClose]="true"
      title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
      priority="High"
    >
      And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
      nec elementum lectus turpis at nunc.
      <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

      <span slot="footnotes">Office Notifications</span>
      <span slot="footnotes">3 Days</span>

       <ui5-menu slot="menu">
          <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>
          <ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>
      </ui5-menu>

    </ui5-li-notification>

      <ui5-menu slot="menu">
        <ui5-menu-item icon="accept" text="Accept All"></ui5-menu-item>
        <ui5-menu-item icon="message-error" text="Reject All"></ui5-menu-item>
      </ui5-menu>

  </ui5-li-notification-group>

  <ui5-li-notification-group
    title-text="Deliveries"
    priority="Medium"
    [collapsed]="true"
  >
    <ui5-li-notification
      [showClose]="true"
      title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
      priority="Medium"
    >
      And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
      nec elementum lectus turpis at nunc.
      <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

      <span slot="footnotes">Office Notifications</span>
      <span slot="footnotes">3 Days</span>

      <ui5-menu slot="menu">
        <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>
      </ui5-menu>
    </ui5-li-notification>

    <ui5-li-notification
      [showClose]="true"
      title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
      priority="Medium"
    >
      And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
      nec elementum lectus turpis at nunc.
      <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

      <span slot="footnotes">Office Notifications</span>
      <span slot="footnotes">3 Days</span>

    </ui5-li-notification>
  </ui5-li-notification-group>

  <ui5-li-notification-group
    priority="Low"
    [collapsed]="true"
    title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
  >
    <ui5-li-notification
      [showClose]="true"
      title-text="New meeting at Building (#35001)"
      priority="Low"
      [read]="true"
    >
      And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
      nec elementum lectus turpis at nunc.
      <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

      <span slot="footnotes">Office Notifications</span>
      <span slot="footnotes">3 Days</span>
    </ui5-li-notification>

    <ui5-li-notification
      [showClose]="true"
      title-text="New meeting at Building (#35001)"
      priority="Low"
      [read]="true"
    >
      And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
      nec elementum lectus turpis at nunc.
      <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

      <span slot="footnotes">Office Notifications</span>
      <span slot="footnotes">3 Days</span>
    </ui5-li-notification>

  </ui5-li-notification-group>
</ui5-list>
  `
});


export const inShellbar = () => ({
  template: `
    <ui5-shellbar
  id="shellbar"
  primary-title="Corporate Portal"
  logo="/assets/images/sap-logo-svg.svg"
  [showNotifications]="true"
  notifications-count="6"
  (notificationsClick)="popover.open=true;popover.opener = $event.detail.targetRef"
>
</ui5-shellbar>

<ui5-popover #popover="ui5Popover" style="max-width: 400px" placement-type="Bottom" horizontal-align="Right">
  <ui5-list>
    <ui5-li-notification-group
      title-text="Orders"
      priority="High"
    >
      <ui5-li-notification
        [showClose]="true"
        title-text="New order (#2525) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
        priority="High"
      >
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>


        <ui5-menu slot="menu">
          <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>
          <ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>
        </ui5-menu>
      </ui5-li-notification>

      <ui5-li-notification
        [showClose]="true"
        title-text="New order (#2526) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
        priority="High"
      >
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>

        <ui5-menu slot="menu">
          <ui5-menu-item icon="accept" text="Accept"></ui5-menu-item>
          <ui5-menu-item icon="message-error" text="Reject"></ui5-menu-item>
        </ui5-menu>
      </ui5-li-notification>

      <ui5-menu slot="menu">
        <ui5-menu-item icon="accept" text="Accept All"></ui5-menu-item>
        <ui5-menu-item icon="message-error" text="Reject All"></ui5-menu-item>
      </ui5-menu>

    </ui5-li-notification-group>

    <ui5-li-notification-group
      title-text="Deliveries"
      priority="Medium"
      [collapsed]="true"
    >
      <ui5-li-notification
        [showClose]="true"
        title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
        priority="Medium"
      >
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>

      </ui5-li-notification>

      <ui5-li-notification
        [showClose]="true"
        title-text="New Delivery (#29001) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
        priority="Medium"
      >
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>

      </ui5-li-notification>

      <ui5-menu slot="menu">
        <ui5-menu-item icon="accept" text="Accept All"></ui5-menu-item>
        <ui5-menu-item icon="message-error" text="Reject All"></ui5-menu-item>
      </ui5-menu>


    </ui5-li-notification-group>

    <ui5-li-notification-group
      priority="High"
      [collapsed]="true"
      title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
    >
      <ui5-li-notification
        [showClose]="true"
        title-text="New meeting at Building (#35001)"
        priority="High"
        [read]="true"
      >
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
      </ui5-li-notification>

      <ui5-li-notification
        [showClose]="true"
        title-text="New meeting at Building (#35001)"
        priority="High"
        [read]="true"
      >
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>

        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
      </ui5-li-notification>

    </ui5-li-notification-group>
  </ui5-list>
</ui5-popover>

  `
})
