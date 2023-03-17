import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, TreeComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> The <code>ui5-tree</code> component provides a tree structure for displaying data in a hierarchy.

<h3>Usage</h3>

<h4>When to use:</h4> <ul> <li>To display hierarchically structured items.</li> <li>To select one or more items out of a set of hierarchically structured items.</li> </ul>

<h4>When not to use:</h4> <ul> <li>To display items not hierarchically strcutured. In this case, use the List component.</li> <li>To select one item from a very small number of non-hierarchical items. Select or ComboBox might be more appropriate.</li> <li>The hierarchy turns out to have only two levels. In this case, use List with group items.</li> </ul>

<h3>Keyboard Handling</h3>

The <code>ui5-tree</code> provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree: <ul> <li>[UP/DOWN] - Navigates up and down the tree items that are currently visible.</li> <li>[RIGHT] - Drills down the tree by expanding the tree nodes.</li> <li>[LEFT] - Goes up the tree and collapses the tree nodes.</li> </ul> <br>

The user can use the following keyboard shortcuts to perform selection, when the <code>mode</code> property is in use: <ul> <li>[SPACE] - Selects the currently focused item upon keyup.</li> <li>[ENTER] - Selects the currently focused item upon keydown.</li> </ul>

<h3>ES6 Module Import</h3> <code>import { TreeComponent } from "@ui5/webcomponents-ngx/main/tree";</code>`;
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
        component: description,
      },
    },
  },
} as Meta;

export const basicTree: Story<TreeComponent> = (args: TreeComponent & any) => ({
  props: args,
  template: `
		<ui5-tree id="myTree" class="full-width">
			<ui5-tree-item expanded="" text="Tree 1" icon="paste" selected="">
				<ui5-tree-item expanded="" text="Tree 1.1" selected="">
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

			<ui5-tree-item expanded="" text="Tree 3 (no icon)">
			</ui5-tree-item>
		</ui5-tree>
	`,
});

export const treeWithMultipleSelection: Story<TreeComponent> = (
  args: TreeComponent & any
) => ({
  props: args,
  template: `
		<ui5-tree id="myTree" class="full-width" mode="MultiSelect">
			<ui5-tree-item expanded="" text="Tree 1" icon="paste" selected="">
				<ui5-tree-item expanded="" text="Tree 1.1" selected="">
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

			<ui5-tree-item expanded="" text="Tree 3 (no icon)">
			</ui5-tree-item>
		</ui5-tree>
	`,
});

export const treeWithDynamicContent: Story<TreeComponent> = (
  args: TreeComponent & any
) => ({
  props: args,
  template: `
		<ui5-busy-indicator id="busy" class="full-width">
			<ui5-tree id="treeDynamic" mode="None" class="full-width">
				<ui5-tree-item text="Has pre-loaded children">
					<ui5-tree-item text="Child 1"></ui5-tree-item>
					<ui5-tree-item text="Child 2"></ui5-tree-item>
				</ui5-tree-item>

				<ui5-tree-item text="Has no children at all"></ui5-tree-item>

				<ui5-tree-item id="dynamicNode" text="Has children, but not yet loaded" has-children=""></ui5-tree-item>
			</ui5-tree>
		</ui5-busy-indicator>
	`,
});

export const treeWithCustomItems: Story<TreeComponent> = (
  args: TreeComponent & any
) => ({
  props: args,
  template: `
		<ui5-tree mode="MultiSelect">
			<div slot="header" class="hdr">
				<ui5-title>Tree with custom items</ui5-title>
			</div>
			<ui5-tree-item-custom expanded="true" show-toggle-button="" hide-selection-element="" type="Active" level="1">
				<ui5-button slot="content">Level 1</ui5-button>
		
				<ui5-tree-item-custom type="Active" show-toggle-button="" level="2" expanded="true">
					<ui5-select slot="content">
						<ui5-option>Level 2</ui5-option>
						<ui5-option>Option 2.1</ui5-option>
						<ui5-option>Option 2.3</ui5-option>
					</ui5-select>
		
					<ui5-tree-item-custom hide-selection-element="" type="Active" level="3">
						<ui5-button slot="content">Level 3</ui5-button>
					</ui5-tree-item-custom>
				</ui5-tree-item-custom>
			</ui5-tree-item-custom>
		</ui5-tree>
	`,
});
