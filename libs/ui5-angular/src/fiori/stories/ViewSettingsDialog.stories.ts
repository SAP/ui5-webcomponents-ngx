import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { ViewSettingsDialogDirective } from '../directives/view-settings-dialog';

export default {
  component: ViewSettingsDialogDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const usage: Story = (args) => ({
  props: args,
  template: `
        <ui5-button id="btnOpenDialog1">Open ViewSettingsDialog</ui5-button>
		<ui5-view-settings-dialog id="vsd1">
				<ui5-sort-item slot="sortItems" text="Name" selected=""></ui5-sort-item>
				<ui5-sort-item slot="sortItems" text="Position"></ui5-sort-item>
				<ui5-sort-item slot="sortItems" text="Company"></ui5-sort-item>
				<ui5-sort-item slot="sortItems" text="Department"></ui5-sort-item>
		
				<ui5-filter-item slot="filterItems" text="Position">
					<ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
					<ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
					<ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
				</ui5-filter-item>
				<ui5-filter-item slot="filterItems" text="Department">
					<ui5-filter-item-option slot="values" text="Sales"></ui5-filter-item-option>
					<ui5-filter-item-option slot="values" text="Management"></ui5-filter-item-option>
					<ui5-filter-item-option slot="values" text="PR"></ui5-filter-item-option>
				</ui5-filter-item>
				<ui5-filter-item slot="filterItems" text="Location">
					<ui5-filter-item-option slot="values" text="Walldorf"></ui5-filter-item-option>
					<ui5-filter-item-option slot="values" text="New York"></ui5-filter-item-option>
					<ui5-filter-item-option slot="values" text="London"></ui5-filter-item-option>
				</ui5-filter-item>
				<ui5-filter-item slot="filterItems" text="Reports to">
					<ui5-filter-item-option slot="values" text="CTO"></ui5-filter-item-option>
					<ui5-filter-item-option slot="values" text="CPO"></ui5-filter-item-option>
					<ui5-filter-item-option slot="values" text="VP"></ui5-filter-item-option>
				</ui5-filter-item>
			</ui5-view-settings-dialog>
		<br>
		<br>
		<div id="vsdResults"></div>
      `,
});
