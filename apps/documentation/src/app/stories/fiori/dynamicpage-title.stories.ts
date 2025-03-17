import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { DynamicPageTitleComponent } from '@ui5/webcomponents-ngx/fiori/dynamic-page-title';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { DynamicPageTitleComponent } from "@ui5/webcomponents-ngx/fiori/dynamic-page-title";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / DynamicPage / DynamicPageTitle',
  component: DynamicPageTitleComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'DynamicPageTitleComponent', DynamicPageTitleComponent, description),
      },
    },
  },
} as Meta;


export const DynamicPageTitle: StoryObj<DynamicPageTitleComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };