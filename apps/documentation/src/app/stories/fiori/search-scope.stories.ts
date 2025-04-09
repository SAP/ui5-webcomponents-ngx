import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SearchScopeComponent } from '@ui5/webcomponents-ngx/fiori/search-scope';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SearchScopeComponent } from "@ui5/webcomponents-ngx/fiori/search-scope";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Search / SearchScope',
  component: SearchScopeComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SearchScopeComponent', SearchScopeComponent, description),
      },
    },
  },
} as Meta;


export const SearchScope: StoryObj<SearchScopeComponent> = {
    render: (args) => ({
      props: args,
      template: `
      `,
    }),
  };