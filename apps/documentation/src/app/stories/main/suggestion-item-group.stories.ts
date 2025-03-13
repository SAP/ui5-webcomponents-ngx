import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SuggestionItemGroupComponent } from '@ui5/webcomponents-ngx/main/suggestion-item-group';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { SuggestionItemGroupComponent } from "@ui5/webcomponents-ngx/main/suggestion-item-group";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Input / SuggestionItemGroup',
  component: SuggestionItemGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        SuggestionItemGroupComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SuggestionItemGroupComponent', SuggestionItemGroupComponent, description),
      },
    },
  },
} as Meta;


export const SuggestionItemGroup: StoryObj<SuggestionItemGroupComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };