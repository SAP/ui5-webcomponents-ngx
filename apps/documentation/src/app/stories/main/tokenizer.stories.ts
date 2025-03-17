import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TokenizerComponent } from '@ui5/webcomponents-ngx/main/tokenizer';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import
<code>import { TokenizerComponent } from "@ui5/webcomponents-ngx/main/tokenizer";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Tokenizer',
  component: TokenizerComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('TokenizerComponent', TokenizerComponent, description),
      },
    },
  },
} as Meta;

export const basicTokenizer: StoryObj<TokenizerComponent> = {
  render: (args: TokenizerComponent & any) => ({
    props: args,
    template: `
    <div style="width: 200px">
      <ui5-tokenizer style="width: 100%">
        <ui5-token text="Andora"></ui5-token>
        <ui5-token text="Bulgaria"></ui5-token>
        <ui5-token text="Canada"></ui5-token>
        <ui5-token text="Denmark"></ui5-token>
        <ui5-token text="Estonia"></ui5-token>
      </ui5-tokenizer>
    </div>
	`,
  }),
};
