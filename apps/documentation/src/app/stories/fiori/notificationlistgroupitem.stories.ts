import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { NotificationListGroupItemComponent } from '@ui5/webcomponents-ngx/fiori/notification-list-group-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';
import { render } from '@ui5/webcomponents-base/dist/thirdparty/preact/preact.module';

const description = `

### Module Import

<code>import { NotificationListGroupItemComponent } from "@ui5/webcomponents-ngx/fiori/notification-list-group-item";</code> (optional)`;
export default {
  title: 'UI5 Web Components / Fiori / NotificationList / NotificationListGroupItem',
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
        component: extractDescription('NotificationListGroupItemComponent', NotificationListGroupItemComponent, description),
      },
    },
  },
} as Meta;

export const BasicSample: StoryObj<NotificationListGroupItemComponent> = {
  render: () => ({
    template: `
  <ui5-list (itemClose)="$event.detail.item.hidden=true" header-text="Notifications grouped">
    <ui5-li-notification-group
      title-text="Orders"
      priority="High"
    >
      <ui5-li-notification
        show-close
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
        show-close
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
      collapsed
    >
      <ui5-li-notification
        show-close
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
        show-close
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
      collapsed
      title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
    >
      <ui5-li-notification
        show-close
        title-text="New meeting at Building (#35001)"
        priority="Low"
       read
      >
        And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor,
        nec elementum lectus turpis at nunc.
        <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
  
        <span slot="footnotes">Office Notifications</span>
        <span slot="footnotes">3 Days</span>
      </ui5-li-notification>
  
      <ui5-li-notification
        show-close
        title-text="New meeting at Building (#35001)"
        priority="Low"
       read
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
    `,
  }),
};

export const InShellBar: StoryObj<NotificationListGroupItemComponent> = {
  render: () => ({
    template: `
  <ui5-shellbar
    primary-title="Corporate Portal"
    logo="/assets/images/sap-logo-svg.svg"
    show-notifications
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
          show-close
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
          show-close
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
        collapsed
      >
        <ui5-li-notification
          show-close
          title-text="New Delivery (#2900) With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
          priority="Medium"
        >
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
          <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
  
          <span slot="footnotes">Office Notifications</span>
          <span slot="footnotes">3 Days</span>
  
        </ui5-li-notification>
  
        <ui5-li-notification
          show-close
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
        collapsed
        title-text="Meetings With a very long title - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc."
      >
        <ui5-li-notification
          show-close
          title-text="New meeting at Building (#35001)"
          priority="High"
         read
        >
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
          <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
  
          <span slot="footnotes">Office Notifications</span>
          <span slot="footnotes">3 Days</span>
        </ui5-li-notification>
  
        <ui5-li-notification
          show-close
          title-text="New meeting at Building (#35001)"
          priority="High"
         read
        >
          And with a very long description and long labels of the action buttons - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat, turpis vel scelerisque pharetra, tellus odio vehicula dolor, nec elementum lectus turpis at nunc.
          <ui5-avatar icon="employee" size="XS" slot="avatar"></ui5-avatar>
  
          <span slot="footnotes">Office Notifications</span>
          <span slot="footnotes">3 Days</span>
        </ui5-li-notification>
  
      </ui5-li-notification-group>
    </ui5-list>
  </ui5-popover>
  
    `,
  }),
};
