import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { TreeDirective } from '../directives/tree';

export default {
  component: TreeDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicTree: Story = (args) => ({
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

export const treeWithMultipleSelection: Story = (args) => ({
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

export const treeWithDynamicContent: Story = (args) => ({
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

export const treeWithCustomItems: Story = (args) => ({
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
