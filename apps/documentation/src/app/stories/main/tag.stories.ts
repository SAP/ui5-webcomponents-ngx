import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TagComponent } from '@ui5/webcomponents-ngx/main/tag';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

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
        component: extractDescription('TagComponent', TagComponent, description),
      },
    },
  },
} as Meta;

export const BasicTag: StoryObj<TagComponent> = {
  render: (args: TagComponent & any) => ({
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
  }),
};

export const TagWithIcon: StoryObj<TagComponent> = {
  render: (args: TagComponent & any) => ({
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
  }),
};
