import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { MultiInputDirective } from '../directives/multi-input';

export default {
  component: MultiInputDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicMultiInput: Story = (args) => ({
  props: args,
  template: `
        <ui5-multi-input class="samples-margin samples-responsive-margin-bottom" value="basic input"></ui5-multi-input>
		<ui5-multi-input class="samples-margin samples-responsive-margin-bottom" show-value-help-icon="" value="value help icon"></ui5-multi-input>
      `,
});

export const multiInputWithTokens: Story = (args) => ({
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

export const multiInputAndTokenCreationOnChange: Story = (args) => ({
  props: args,
  template: `
        <ui5-multi-input show-suggestions="" id="token-unique" style="width: 50%">
			<div slot="valueStateMessage">Token is already in the list</div>

			<ui5-suggestion-item text="Argentina"></ui5-suggestion-item>
			<ui5-suggestion-item text="Bulgaria"></ui5-suggestion-item>
			<ui5-suggestion-item text="England"></ui5-suggestion-item>
			<ui5-suggestion-item text="Finland"></ui5-suggestion-item>
			<ui5-suggestion-item text="Germany"></ui5-suggestion-item>
			<ui5-suggestion-item text="Hungary"></ui5-suggestion-item>
			<ui5-suggestion-item text="Italy"></ui5-suggestion-item>
			<ui5-suggestion-item text="Luxembourg"></ui5-suggestion-item>
			<ui5-suggestion-item text="Mexico"></ui5-suggestion-item>
			<ui5-suggestion-item text="Philippines"></ui5-suggestion-item>
			<ui5-suggestion-item text="Sweden"></ui5-suggestion-item>
			<ui5-suggestion-item text="USA"></ui5-suggestion-item>
		</ui5-multi-input>
      `,
});
