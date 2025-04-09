import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SearchComponent } from '@ui5/webcomponents-ngx/fiori/search';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SearchComponent } from "@ui5/webcomponents-ngx/fiori/search";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Search',
  component: SearchComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SearchComponent', SearchComponent, description),
      },
    },
  },
} as Meta;


export const Search: StoryObj<SearchComponent> = {
    render: (args) => ({
      props: args,
      template: `
      `,
    }),
  };