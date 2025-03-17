import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SideNavigationGroupComponent } from '@ui5/webcomponents-ngx/fiori/side-navigation-group';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SideNavigationGroupComponent } from "@ui5/webcomponents-ngx/fiori/side-navigation-group";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / SideNavigation / SideNavigationGroup',
  component: SideNavigationGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SideNavigationGroupComponent', SideNavigationGroupComponent, description),
      },
    },
  },
} as Meta;


export const SideNavigationGroup: StoryObj<SideNavigationGroupComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };