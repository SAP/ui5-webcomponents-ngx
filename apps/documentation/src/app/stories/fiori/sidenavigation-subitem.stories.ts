import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SideNavigationSubItemComponent } from '@ui5/webcomponents-ngx/fiori/side-navigation-sub-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SideNavigationSubItemComponent } from "@ui5/webcomponents-ngx/fiori/side-navigation-sub-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / SideNavigation / SideNavigationSubItem',
  component: SideNavigationSubItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SideNavigationSubItemComponent', SideNavigationSubItemComponent, description),
      },
    },
  },
} as Meta;


export const SideNavigationSubItem: StoryObj<SideNavigationSubItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };