import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SplitButtonComponent } from '@ui5/webcomponents-ngx/main/split-button';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { SplitButtonComponent } from "@ui5/webcomponents-ngx/main/split-button";</code>`;
export default {
  title: 'UI5 Web Components / Main / SplitButton',
  component: SplitButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('SplitButtonComponent', SplitButtonComponent, description),
      },
    },
  },
} as Meta;

export const DefaultSplitButton: StoryObj<SplitButtonComponent> = {
  render: (args: SplitButtonComponent & any) => ({
    props: args,
    template: `
		<ui5-split-button>Default</ui5-split-button>
		<ui5-split-button disabled>Default</ui5-split-button>
	`,
  }),
};

export const SplitButtonWithDesign: StoryObj<SplitButtonComponent> = {
  render: (args: SplitButtonComponent & any) => ({
    props: args,
    template: `
		<ui5-split-button design="Default">Default</ui5-split-button>
		<ui5-split-button design="Emphasized">Emphasized</ui5-split-button>
		<ui5-split-button design="Positive">Positive</ui5-split-button>
		<ui5-split-button design="Negative">Negative</ui5-split-button>
		<ui5-split-button design="Attention">Attention</ui5-split-button>
		<ui5-split-button design="Transparent">Transparent</ui5-split-button>
	`,
  }),
};

export const SplitButtonWithIcons: StoryObj<SplitButtonComponent> = {
  render: (args: SplitButtonComponent & any) => ({
    props: args,
    template: `
		<ui5-split-button icon="add">Icon</ui5-split-button>
		<ui5-split-button icon="add" active-icon="accept">Icon + Active Icon</ui5-split-button>
	`,
  }),
};
