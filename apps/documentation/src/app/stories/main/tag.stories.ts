import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, TagComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-tag</code> is a small non-interactive component which contains text information and color chosen from a list of predefined color schemes. It serves the purpose to attract the user attention to some piece of information (state, quantity, condition, etc.).

<h3>Usage Guidelines</h3> <ul> <li>If the text is longer than the width of the component, it doesn’t wrap, it shows ellipsis.</li> <li>When truncated, the full text is not visible, therefore, it’s recommended to make more space for longer texts to be fully displayed.</li> <li>Colors are not semantic and have no visual representation in High Contrast Black (sap_belize_hcb) theme.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { TagComponent } from "@ui5/webcomponents-ngx/main/tag";</code>`;
export default {
  title: 'UI5 Web Components / Main / Tag',
  component: TagComponent,
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

export const basicTag: Story<TagComponent> = (
  args: TagComponent & any
) => ({
  props: args,
  template: `
		<ui5-tag design="Set1" color-scheme="1">available 1</ui5-tag>
		<ui5-tag design="Set1" color-scheme="2">required 2</ui5-tag>
		<ui5-tag design="Set1" olor-scheme="3">3K</ui5-tag>
		<ui5-tag design="Set1"  color-scheme="4">bug 4</ui5-tag>
		<ui5-tag design="Set1"  color-scheme="5">in process 5</ui5-tag>
		<ui5-tag design="Set1"  color-scheme="6">in warehouse 6</ui5-tag>
		<ui5-tag design="Set1" color-scheme="7">7$</ui5-tag>
		<ui5-tag design="Set1" color-scheme="8">solution provided 8</ui5-tag>
		<ui5-tag design="Set1" color-scheme="9">pending release 9</ui5-tag>
		<ui5-tag design="Set1" color-scheme="10">customer action 10</ui5-tag>
		<ui5-tag design="Set1" style="width:200px;">This would truncate as it is too long</ui5-tag>

		<style>
			ui5-tag {
				margin-inline-end: 1rem;
			}
		</style>
	`,
});

export const tagWithIcon: Story<TagComponent> = (
  args: TagComponent & any
) => ({
  props: args,
  template: `
		<ui5-tag design="Set2" color-scheme="1">
				<ui5-icon name="accept" slot="icon"></ui5-icon>done
		</ui5-tag>
		<ui5-tag design="Set2" color-scheme="2">
				<ui5-icon name="sap-ui5" slot="icon"></ui5-icon>
		</ui5-tag>
		<ui5-tag design="Set2" color-scheme="3">
				<ui5-icon name="add-equipment" slot="icon"></ui5-icon>in process
		</ui5-tag>
		<ui5-tag design="Set2" color-scheme="4">
				<ui5-icon name="lab" slot="icon"></ui5-icon>
		</ui5-tag>
		<ui5-tag design="Set2" color-scheme="5">
				<ui5-icon name="email-read" slot="icon"></ui5-icon>
		</ui5-tag>
		<ui5-tag design="Set2" color-scheme="6">
				<ui5-icon name="pending" slot="icon"></ui5-icon>pending
		</ui5-tag>
		<ui5-tag design="Set2" color-scheme="7">
				<ui5-icon name="lightbulb" slot="icon"></ui5-icon>
		</ui5-tag>
		<ui5-tag design="Set2" color-scheme="8">
				<ui5-icon name="locked" slot="icon"></ui5-icon>
		</ui5-tag>

		<style>
			ui5-tag {
				margin-inline-end: 1rem;
			}
		</style>
	`,
});
