import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { MenuItemComponent } from '@ui5/webcomponents-ngx/main/menu-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { MenuItemComponent } from "@ui5/webcomponents-ngx/main/menu-item";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Menu / MenuItem',
  component: MenuItemComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        MenuItemComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'MenuItemComponent', MenuItemComponent, description),
      },
    },
  },
} as Meta;


export const MenuItem: StoryObj<MenuItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };