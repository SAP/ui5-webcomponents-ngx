import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TextComponent } from '@ui5/webcomponents-ngx/main/text';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

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
        component: extractDescription(
          'TextComponent',
          TextComponent,
          description,
        ),
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

export const MaxLinesText: StoryObj<TextComponent> = {
  render: (args: TextComponent & any) => ({
    props: args,
    template: `
      <ui5-text max-lines="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
      </ui5-text>
      <br><br>
      <ui5-text max-lines="2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
      </ui5-text>
      <br><br>
      <ui5-text max-lines="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet
      </ui5-text>
    `,
  }),
};

export const EmptyIndicatorModeText: StoryObj<TextComponent> = {
  render: (args: TextComponent & any) => ({
    props: args,
    template: `
      <ui5-text empty-indicator-mode="On"></ui5-text>
    `,
  }),
};

export const CustomStylesText: StoryObj<TextComponent> = {
  render: (args: TextComponent & any) => ({
    props: args,
    template: `
      <ui5-text style="color: var(--sapPositiveColor); font-size: 1.25rem;">Styled Text</ui5-text>
      <ui5-text style="color: var(--sapNegativeColor); font-size: 1rem; font-style: italic;">Styled Text</ui5-text>
    `,
  }),
};
