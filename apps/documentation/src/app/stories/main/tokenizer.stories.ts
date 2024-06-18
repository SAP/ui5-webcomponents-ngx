import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  TokenizerComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview

Tokenizer is an invisible container for tokens with built-in overflow mechanism
and supports keyboard navigation and token selection.

The Tokenizer consists of two parts:
 - Tokens - displays the available tokens.
 - N-more indicator - contains the number of the remaining tokens that cannot be displayed due to the limited space.

### ES6 Module Import
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
        component: description,
      },
    },
  },
} as Meta;

export const basicTokenizer: Story<TokenizerComponent> = (
  args: TokenizerComponent & any
) => ({
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
});

