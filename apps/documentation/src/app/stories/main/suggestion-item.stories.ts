import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SuggestionItemComponent } from '@ui5/webcomponents-ngx/main/suggestion-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { SuggestionItemComponent } from "@ui5/webcomponents-ngx/main/suggestion-item";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Input / SuggestionItem',
  component: SuggestionItemComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        SuggestionItemComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SuggestionItemComponent', SuggestionItemComponent, description),
      },
    },
  },
} as Meta;


export const SuggestionItem: StoryObj<SuggestionItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };