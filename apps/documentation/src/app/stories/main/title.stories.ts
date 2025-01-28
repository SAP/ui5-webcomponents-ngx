import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, TitleComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-title</code> component is used to display titles inside a page. It is a simple, large-sized text with explicit header/title semantics.

<h3>ES6 Module Import</h3>

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
        component: description,
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
