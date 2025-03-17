import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { DynamicPageHeaderComponent } from '@ui5/webcomponents-ngx/fiori/dynamic-page-header';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { DynamicPageHeaderComponent } from "@ui5/webcomponents-ngx/fiori/dynamic-page-header";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / DynamicPage / DynamicPageHeader',
  component: DynamicPageHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'DynamicPageHeaderComponent', DynamicPageHeaderComponent, description),
      },
    },
  },
} as Meta;


export const DynamicPageHeader: StoryObj<DynamicPageHeaderComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };