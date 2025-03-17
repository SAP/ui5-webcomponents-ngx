import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SideNavigationItemComponent } from '@ui5/webcomponents-ngx/fiori/side-navigation-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SideNavigationItemComponent } from "@ui5/webcomponents-ngx/fiori/side-navigation-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / SideNavigation / SideNavigationItem',
  component: SideNavigationItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SideNavigationItemComponent', SideNavigationItemComponent, description),
      },
    },
  },
} as Meta;


export const SideNavigationItem: StoryObj<SideNavigationItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };