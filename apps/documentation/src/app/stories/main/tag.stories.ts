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
        component: extractDescription(
          'TagComponent',
          TagComponent,
          description,
        ),
      },
    },
  },
} as Meta;

export const BasicTag: StoryObj<TagComponent> = {
  render: (args: TagComponent & any) => ({
    props: args,
    template: `
		<div style="display: flex; align-items: start; gap: 1rem">
			<ui5-tag design="Neutral" wrapping-type="None">
				Neutral
			</ui5-tag>
			<ui5-tag design="Information" wrapping-type="None">
				Information
			</ui5-tag>
			<ui5-tag design="Positive" wrapping-type="None">
				Positive
			</ui5-tag>
			<ui5-tag design="Negative" wrapping-type="None">
				Negative
			</ui5-tag>
			<ui5-tag design="Critical" wrapping-type="None">
				Critical
			</ui5-tag>
			<ui5-tag design="Set1" wrapping-type="None">
				Set1
			</ui5-tag>
			<ui5-tag design="Set2" wrapping-type="None">
				Set2
			</ui5-tag>
		</div>
	`,
  }),
};

export const ColorSchemeTag: StoryObj<TagComponent> = {
  render: (args: TagComponent & any) => ({
    props: args,
    template: `
		<div style="display: flex; align-items: start; gap: 1rem">
			<ui5-tag design="Set1" color-scheme="1">
				Color Scheme 1
			</ui5-tag>
			<ui5-tag design="Set1" color-scheme="2">
				Color Scheme 2
			</ui5-tag>
			<ui5-tag design="Set1" color-scheme="3">
				Color Scheme 3
			</ui5-tag>
			<ui5-tag design="Set1" color-scheme="4">
				Color Scheme 4
			</ui5-tag>
			<ui5-tag design="Set1" color-scheme="5">
				Color Scheme 5
			</ui5-tag>
			<ui5-tag design="Set1" color-scheme="6">
				Color Scheme 6
			</ui5-tag>
			<ui5-tag design="Set1" color-scheme="7">
				Color Scheme 7
			</ui5-tag>
			<ui5-tag design="Set1" color-scheme="8">
				Color Scheme 8
			</ui5-tag>
			<ui5-tag design="Set1" color-scheme="9">
				Color Scheme 9
			</ui5-tag>
			<ui5-tag design="Set1" color-scheme="10">
				Color Scheme 10
			</ui5-tag>
		</div>
	`,
  }),
};

export const ColorSchemeTag2: StoryObj<TagComponent> = {
  render: (args: TagComponent & any) => ({
    props: args,
    template: `
		<div style="display: flex; align-items: start; gap: 1rem">
			<ui5-tag design="Set2" color-scheme="1">
				Color Scheme 1
			</ui5-tag>
			<ui5-tag design="Set2" color-scheme="2">
				Color Scheme 2
			</ui5-tag>
			<ui5-tag design="Set2" color-scheme="3">
				Color Scheme 3
			</ui5-tag>
			<ui5-tag design="Set2" color-scheme="4">
				Color Scheme 4
			</ui5-tag>
			<ui5-tag design="Set2" color-scheme="5">
				Color Scheme 5
			</ui5-tag>
			<ui5-tag design="Set2" color-scheme="6">
				Color Scheme 6
			</ui5-tag>
			<ui5-tag design="Set2" color-scheme="7">
				Color Scheme 7
			</ui5-tag>
			<ui5-tag design="Set2" color-scheme="8">
				Color Scheme 8
			</ui5-tag>
			<ui5-tag design="Set2" color-scheme="9">
				Color Scheme 9
			</ui5-tag>
			<ui5-tag design="Set2" color-scheme="10">
				Color Scheme 10
			</ui5-tag>
		</div>
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

export const InteractiveTag: StoryObj<TagComponent> = {
  render: (args: TagComponent & any) => ({
    props: args,
    template: `
		<ui5-tag design="Positive" interactive wrapping-type="None">
			Success
		</ui5-tag>
	`,
  }),
};

export const TextWrappingTag: StoryObj<TagComponent> = {
  render: (args: TagComponent & any) => ({
    props: args,
    template: `
		<div style="display: flex; flex-direction: column; align-items: start; gap: 1rem">
			<ui5-tag wrapping-type="None" style="width: 200px;">
				This would truncate as it is too long
			</ui5-tag>
			<ui5-tag style="width: 200px;">
				This would wrap as it is too long
			</ui5-tag>
		</div>
	`,
  }),
};

export const DifferentSizesTag: StoryObj<TagComponent> = {
  render: (args: TagComponent & any) => ({
    props: args,
    template: `
		<div style="display: flex; flex-direction: row; align-items: start; gap: 1rem">
			<ui5-tag hide-state-icon design="Neutral" size="L" wrapping-type="None">
				Planned
			</ui5-tag>
			<ui5-tag design="Negative" size="L" wrapping-type="None"></ui5-tag>
		</div>
	`,
  }),
};
