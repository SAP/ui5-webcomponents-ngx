import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SearchItemGroupComponent } from '@ui5/webcomponents-ngx/fiori/search-item-group';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SearchItemGroupComponent } from "@ui5/webcomponents-ngx/fiori/search-item-group";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Search / SearchItemGroup',
  component: SearchItemGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SearchItemGroupComponent', SearchItemGroupComponent, description),
      },
    },
  },
} as Meta;


export const SearchItemGroup: StoryObj<SearchItemGroupComponent> = {
    render: (args) => ({
      props: args,
      template: `
      `,
    }),
  };