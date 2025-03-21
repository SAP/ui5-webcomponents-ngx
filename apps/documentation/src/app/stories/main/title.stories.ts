import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TitleComponent } from '@ui5/webcomponents-ngx/main/title';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { TitleComponent } from "@ui5/webcomponents-ngx/main/title";</code>`;
export default {
  title: 'UI5 Web Components / Main / Title',
  component: TitleComponent,
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
          'TitleComponent',
          TitleComponent,
          description,
        ),
      },
    },
  },
} as Meta;

export const TitleInAllAvailableLevels: StoryObj<TitleComponent> = {
  render: (args: TitleComponent & any) => ({
    props: args,
    template: `
    <ui5-title level="H1" size="H1">Title</ui5-title>
    <ui5-title level="H2" size="H2">Title</ui5-title>
    <ui5-title level="H3" size="H3">Title</ui5-title>
    <ui5-title level="H4" size="H4">Title</ui5-title>
    <ui5-title level="H5" size="H5">Title</ui5-title>
    <ui5-title level="H6" size="H6">Title</ui5-title>
	`,
  }),
};

export const WrappingTitle: StoryObj<TitleComponent> = {
  render: (args: TitleComponent & any) => ({
    props: args,
    template: `
    <ui5-title level="H5" wrapping-type="None" style="width: 15ch;">Truncates Long Title Title Title Title</ui5-title>

    <br>

    <ui5-title level="H5" wrapping-type="Normal" style="width: 15ch;">Wrapping Long Title Title Title Title</ui5-title>
  `,
  }),
};
