import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { UserMenuItemComponent } from '@ui5/webcomponents-ngx/fiori/user-menu-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { UserMenuItemComponent } from "@ui5/webcomponents-ngx/fiori/user-menu-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / UserMenu / UserMenuItem',
  component: UserMenuItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'UserMenuItemComponent', UserMenuItemComponent, description),
      },
    },
  },
} as Meta;


export const UserMenuItem: StoryObj<UserMenuItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };