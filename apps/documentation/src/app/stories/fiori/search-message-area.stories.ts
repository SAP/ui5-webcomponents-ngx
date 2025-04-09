import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SearchMessageAreaComponent } from '@ui5/webcomponents-ngx/fiori/search-message-area';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SearchMessageAreaComponent } from "@ui5/webcomponents-ngx/fiori/search-message-area";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Search / SearchMessageArea',
  component: SearchMessageAreaComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SearchMessageAreaComponent', SearchMessageAreaComponent, description),
      },
    },
  },
} as Meta;


export const SearchMessageArea: StoryObj<SearchMessageAreaComponent> = {
    render: (args) => ({
      props: args,
      template: `
      `,
    }),
  };