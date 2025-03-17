import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TextComponent } from '@ui5/webcomponents-ngx/main/text';
import { extractArgTypes,extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { TextComponent } from "@ui5/webcomponents-ngx/main/text";</code>`;
export default {
  title: 'UI5 Web Components / Main / Text',
  component: TextComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('TextComponent', TextComponent, description),
      },
    },
  },
} as Meta;

export const BasicText: StoryObj<TextComponent> = {
  render: (args: TextComponent & any) => ({
    props: args,
    template: `
		<ui5-text>Basic Text</ui5-text>
		<br>
		<br>
		<ui5-text>Wrapping Text :: This would be wrapped as it is too long This would be wrapped as it is too long This would be wrapped as it is too long This would be wrapped as it is too long This would be wrapped as it is too long This would be wrapped as it is too long</ui5-text>

		<br>
		<br>
		<ui5-text max-lines="1">Truncating Text :: This would be wrapped as it is too long This would be wrapped as it is too long This would be wrapped as it is too long This would be wrapped as it is too long This would be wrapped as it is too long This would be wrapped as it is too long</ui5-text>
	`,
  }),
};
