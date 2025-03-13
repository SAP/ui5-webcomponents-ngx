import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { IconComponent } from '@ui5/webcomponents-ngx/main/icon';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import "@ui5/webcomponents/dist/Icon.js";</code>`;
export default {
  title: 'UI5 Web Components / Main / Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('IconComponent', IconComponent, description),
      },
    },
  },
} as Meta;

export const BasicIcons: StoryObj<IconComponent> = {
  render: (args: IconComponent & any) => ({
    props: args,
    template: `
		<ui5-icon class="samples-margin" name="activate"></ui5-icon>
		<ui5-icon class="samples-margin" name="activities"></ui5-icon>
		<ui5-icon class="samples-margin" name="add-equipment"></ui5-icon>
		<ui5-icon class="samples-margin" name="add-document"></ui5-icon>
		<ui5-icon class="samples-margin" name="add-employee"></ui5-icon>
	`,
  }),
};

export const SapFioriToolsIcons: StoryObj<IconComponent> = {
  render: (args: IconComponent & any) => ({
    props: args,
    template: `
		<ui5-icon class="samples-margin" name="tnt/antenna"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/api"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/modem"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/data-store"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/flow"></ui5-icon>
	`,
  }),
};

export const CustomizedIcons: StoryObj<IconComponent> = {
  render: (args: IconComponent & any) => ({
    props: args,
    template: `
		<ui5-icon class="samples-margin" name="employee" style="width:3rem;height:3rem;font-size:1.5rem;color:crimson;background-color:#fafafa"></ui5-icon>
		<ui5-icon class="samples-margin" name="menu" style="width:3rem;height:3rem;font-size:1.5rem;color:crimson;background-color:#fafafa"></ui5-icon>
	`,
  }),
};
