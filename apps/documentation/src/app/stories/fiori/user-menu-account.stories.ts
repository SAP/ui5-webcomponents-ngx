import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { UserMenuAccountComponent } from '@ui5/webcomponents-ngx/fiori/user-menu-account';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { UserMenuAccountComponent } from "@ui5/webcomponents-ngx/fiori/user-menu-account";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / UserMenu / UserMenuAccount',
  component: UserMenuAccountComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'UserMenuAccountComponent', UserMenuAccountComponent, description),
      },
    },
  },
} as Meta;


export const UserMenuAccount: StoryObj<UserMenuAccountComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };