import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { NavigationLayoutComponent } from '@ui5/webcomponents-ngx/fiori/navigation-layout';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { NavigationLayoutComponent } from "@ui5/webcomponents-ngx/fiori/navigation-layout";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / NavigationLayout',
  component: NavigationLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'NavigationLayoutComponent', NavigationLayoutComponent, description),
      },
    },
  },
} as Meta;


export const NavigationLayout: StoryObj<NavigationLayoutComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };