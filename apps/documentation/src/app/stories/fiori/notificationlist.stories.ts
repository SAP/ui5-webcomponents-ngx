import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { NotificationListComponent } from '@ui5/webcomponents-ngx/fiori/notification-list';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { NotificationListComponent } from "@ui5/webcomponents-ngx/fiori/notification-list";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / NotificationList',
  component: NotificationListComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'NotificationListComponent', NotificationListComponent, description),
      },
    },
  },
} as Meta;


export const NotificationList: StoryObj<NotificationListComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };