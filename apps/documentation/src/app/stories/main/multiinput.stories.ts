import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  MultiInputComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3>Overview</h3> A <code>ui5-multi-input</code> field allows the user to enter multiple values, which are displayed as <code>ui5-token</code>.

User can choose interaction for creating tokens. Fiori Guidelines say that user should create tokens when: <ul> <li>Type a value in the input and press enter or focus out the input field (<code>change</code> event is fired)</li> <li>Select a value from the suggestion list (<code>suggestion-item-select</code> event is fired)</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { MultiInputComponent } from "@ui5/webcomponents-ngx/main/multi-input";</code>`;
export default {
  title: 'UI5 Web Components / Main / MultiInput',
  component: MultiInputComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const ApplyChanges: Story<MultiInputComponent> = (
  args: MultiInputComponent & any
) => ({
  props: args,
  template: `
          <ui5-multi-input>
            ${args.content}
<slot slot="icon">${args.icon}</slot>
<slot slot="valueStateMessage">${args.valueStateMessage}</slot>
<slot slot="tokens">${args.tokens}</slot>
          </ui5-multi-input>
        `,
});

export const basicMultiInput: Story<MultiInputComponent> = (
  args: MultiInputComponent & any
) => ({
  props: args,
  template: `
		<ui5-multi-input class="samples-margin samples-responsive-margin-bottom" value="basic input"></ui5-multi-input>
		<ui5-multi-input class="samples-margin samples-responsive-margin-bottom" show-value-help-icon="" value="value help icon"></ui5-multi-input>
	`,
});

export const multiInputWithTokens: Story<MultiInputComponent> = (
  args: MultiInputComponent & any
) => ({
  props: args,
  template: `
		<ui5-multi-input style="width: 30%">
			<ui5-token slot="tokens" text="Bulgaria"></ui5-token>
		</ui5-multi-input>

		<ui5-multi-input style="width: 30%">
			<ui5-token slot="tokens" text="Argentina"></ui5-token>
			<ui5-token slot="tokens" text="Bulgaria"></ui5-token>
			<ui5-token slot="tokens" text="England"></ui5-token>
			<ui5-token slot="tokens" text="Finland"></ui5-token>
			<ui5-token slot="tokens" text="Germany"></ui5-token>
			<ui5-token slot="tokens" text="Hungary"></ui5-token>
			<ui5-token slot="tokens" text="Italy"></ui5-token>
			<ui5-token slot="tokens" text="Luxembourg"></ui5-token>
			<ui5-token slot="tokens" text="Mexico"></ui5-token>
			<ui5-token slot="tokens" text="Philippines"></ui5-token>
			<ui5-token slot="tokens" text="Sweden"></ui5-token>
			<ui5-token slot="tokens" text="USA"></ui5-token>
		</ui5-multi-input>
	`,
});
