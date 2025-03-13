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
        component: extractDescription('TitleComponent', TitleComponent, description),
      },
    },
  },
} as Meta;

export const TitleInAllAvailableLevels: StoryObj<TitleComponent> = {
  render: (args: TitleComponent & any) => ({
    props: args,
    template: `
		<ui5-title level="H1">Title level 1</ui5-title>
		<ui5-title level="H2">Title level 2</ui5-title>
		<ui5-title level="H3">Title level 3</ui5-title>
		<ui5-title level="H4">Title level 4</ui5-title>
		<ui5-title level="H5">Title level 5</ui5-title>
		<ui5-title level="H6">Title level 6</ui5-title>
	`,
  }),
};
