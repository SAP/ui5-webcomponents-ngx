import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { UserMenuComponent } from '@ui5/webcomponents-ngx/fiori/user-menu';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { UserMenuComponent } from "@ui5/webcomponents-ngx/fiori/user-menu";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / UserMenu',
  component: UserMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'UserMenuComponent', UserMenuComponent, description),
      },
    },
  },
} as Meta;


export const UserMenu: StoryObj<UserMenuComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };