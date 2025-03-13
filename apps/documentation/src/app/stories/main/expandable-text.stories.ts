import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ExpandableTextComponent } from '@ui5/webcomponents-ngx/main/expandable-text';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { ExpandableTextComponent } from "@ui5/webcomponents-ngx/main/expandable-text";</code>`;
export default {
  title: 'UI5 Web Components / Main / ExpandableText',
  component: ExpandableTextComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('ExpandableTextComponent', ExpandableTextComponent, description)
      },
    },
  },
} as Meta;

export const ExpandableText: StoryObj<ExpandableTextComponent> = {
  render: (args: ExpandableTextComponent & any) => ({
    props: args,
    template: `
	`,
  }),
};
