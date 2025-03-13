import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { MenuSeparatorComponent } from '@ui5/webcomponents-ngx/main/menu-separator';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { MenuSeparatorComponent } from "@ui5/webcomponents-ngx/main/menu-separator";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Menu / MenuSeparator',
  component: MenuSeparatorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        MenuSeparatorComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'MenuSeparatorComponent', MenuSeparatorComponent, description),
      },
    },
  },
} as Meta;


export const MenuSeparator: StoryObj<MenuSeparatorComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };