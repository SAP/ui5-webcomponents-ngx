import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SuggestionItemCustomComponent } from '@ui5/webcomponents-ngx/main/suggestion-item-custom';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { SuggestionItemCustomComponent } from "@ui5/webcomponents-ngx/main/suggestion-item-custom";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Input / SuggestionItemCustom',
  component: SuggestionItemCustomComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        SuggestionItemCustomComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SuggestionItemCustomComponent', SuggestionItemCustomComponent, description),
      },
    },
  },
} as Meta;


export const SuggestionItemCustom: StoryObj<SuggestionItemCustomComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };