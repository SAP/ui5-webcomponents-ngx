import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TokenComponent } from '@ui5/webcomponents-ngx/main/token';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { TokenComponent } from "@ui5/webcomponents-ngx/main/token";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Token',
  component: TokenComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        TokenComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TokenComponent', TokenComponent, description),
      },
    },
  },
} as Meta;


export const TokenStory: StoryObj<TokenComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
<ui5-token text="green"></ui5-token>
<ui5-token text="healthy" selected></ui5-token>
<ui5-token text="vegan"></ui5-token>
<ui5-token text="low fat" selected></ui5-token>
	  `,
	}),
  };