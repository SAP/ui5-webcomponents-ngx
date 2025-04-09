import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SearchItemComponent } from '@ui5/webcomponents-ngx/fiori/search-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SearchItemComponent } from "@ui5/webcomponents-ngx/fiori/search-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Search / SearchItem',
  component: SearchItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SearchItemComponent', SearchItemComponent, description),
      },
    },
  },
} as Meta;


export const SearchItem: StoryObj<SearchItemComponent> = {
    render: (args) => ({
      props: args,
      template: `
      `,
    }),
  };