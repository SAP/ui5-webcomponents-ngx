import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ViewSettingsDialogComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview 

The <code>ui5-view-settings-dialog</code> component helps the user to sort data within a list or a table. It consists of several lists like <code>Sort order</code> which is built-in and <code>Sort By</code> and <code>Filter By</code> lists, for which you must be provide items(<code>ui5-sort-item</code> & <code>ui5-filter-item</code> respectively) These options can be used to create sorters for a table.

The <code>ui5-view-settings-dialog</code> interrupts the current application processing as it is the only focused UI element and the main screen is dimmed/blocked. The <code>ui5-view-settings-dialog</code> is modal, which means that user action is required before returning to the parent window is possible.

### Structure

A <code>ui5-view-settings-dialog</code> consists of a header, content, and a footer for action buttons. The <code>ui5-view-settings-dialog</code> is usually displayed at the center of the screen.

### Responsive Behavior 

<code>ui5-view-settings-dialog</code> stretches on full screen on phones.

### ES6 Module Import

<code>import { ViewSettingsDialogComponent } from "@ui5/webcomponents-ngx/fiori/view-settings-dialog";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / ViewSettingsDialog',
  component: ViewSettingsDialogComponent,
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

export const usage: Story<ViewSettingsDialogComponent> = (
  args: ViewSettingsDialogComponent & any
) => ({
  props: args,
  template: `
		<ui5-button (click)="vsd.element.show()">Open ViewSettingsDialog</ui5-button>
		<ui5-view-settings-dialog #vsd="ui5ViewSettingsDialog">
				<ui5-sort-item slot="sortItems" text="Name" [selected]="true"></ui5-sort-item>
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
