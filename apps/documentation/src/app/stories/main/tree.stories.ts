import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TreeComponent } from '@ui5/webcomponents-ngx/main/tree';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { TreeComponent } from "@ui5/webcomponents-ngx/main/tree";</code>`;
export default {
  title: 'UI5 Web Components / Main / Tree',
  component: TreeComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('TreeComponent', TreeComponent, description),
      },
    },
  },
} as Meta;

export const BasicTree: StoryObj<TreeComponent> = {
  render: (args: TreeComponent & any) => ({
    props: args,
    template: `
		<ui5-tree>
			<ui5-tree-item expanded text="Tree 1" icon="paste" selected>
				<ui5-tree-item expanded text="Tree 1.1" selected>
					<ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>
					<ui5-tree-item text="Tree 1.1.2"></ui5-tree-item>
				</ui5-tree-item>
			</ui5-tree-item>
			<ui5-tree-item text="Tree 2" icon="copy">
				<ui5-tree-item text="Tree 2.1">
					<ui5-tree-item text="Tree 2.1.1"></ui5-tree-item>
					<ui5-tree-item text="Tree 2.1.2">
						<ui5-tree-item text="Tree 2.1.2.1"></ui5-tree-item>
						<ui5-tree-item text="Tree 2.1.2.2"></ui5-tree-item>
						<ui5-tree-item text="Tree 2.1.2.3"></ui5-tree-item>
						<ui5-tree-item text="Tree 2.1.2.5"></ui5-tree-item>
					</ui5-tree-item>
				</ui5-tree-item>
				<ui5-tree-item text="Tree 2.2"></ui5-tree-item>
			</ui5-tree-item>

			<ui5-tree-item expanded text="Tree 3 (no icon)">
			</ui5-tree-item>
		</ui5-tree>
	`,
  }),
};

export const TreeWithMultipleSelection: StoryObj<TreeComponent> = {
  render: (args: TreeComponent & any) => ({
    props: args,
    template: `
		<ui5-tree selection-mode="Multiple">
			<ui5-tree-item expanded text="Tree 1" icon="paste" selected>
				<ui5-tree-item expanded text="Tree 1.1" selected>
					<ui5-tree-item text="Tree 1.1.1"></ui5-tree-item>
					<ui5-tree-item text="Tree 1.1.2"></ui5-tree-item>
				</ui5-tree-item>
			</ui5-tree-item>
			<ui5-tree-item text="Tree 2" icon="copy">
				<ui5-tree-item text="Tree 2.1">
					<ui5-tree-item text="Tree 2.1.1"></ui5-tree-item>
					<ui5-tree-item text="Tree 2.1.2">
						<ui5-tree-item text="Tree 2.1.2.1"></ui5-tree-item>
						<ui5-tree-item text="Tree 2.1.2.2"></ui5-tree-item>
						<ui5-tree-item text="Tree 2.1.2.3"></ui5-tree-item>
						<ui5-tree-item text="Tree 2.1.2.5"></ui5-tree-item>
					</ui5-tree-item>
				</ui5-tree-item>
				<ui5-tree-item text="Tree 2.2"></ui5-tree-item>
			</ui5-tree-item>

			<ui5-tree-item expanded text="Tree 3 (no icon)">
			</ui5-tree-item>
		</ui5-tree>
	`,
  }),
};

export const TreeWithCustomItems: StoryObj<TreeComponent> = {
  render: (args: TreeComponent & any) => ({
    props: args,
    template: `
		<ui5-tree mode="MultiSelect">
			<div slot="header">
				<ui5-title level="H4">Tree with custom items</ui5-title>
			</div>
			<ui5-tree-item-custom expanded show-toggle-button hide-selection-element type="Active" level="1">
				<ui5-button slot="content">Level 1</ui5-button>
		
				<ui5-tree-item-custom type="Active" show-toggle-button level="2" expanded>
					<ui5-select slot="content">
						<ui5-option>Level 2</ui5-option>
						<ui5-option>Option 2.1</ui5-option>
						<ui5-option>Option 2.3</ui5-option>
					</ui5-select>
		
					<ui5-tree-item-custom hide-selection-element type="Active" level="3">
						<ui5-button slot="content">Level 3</ui5-button>
					</ui5-tree-item-custom>
				</ui5-tree-item-custom>
			</ui5-tree-item-custom>
		</ui5-tree>
	`,
  }),
};
