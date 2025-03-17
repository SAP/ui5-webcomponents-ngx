import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ViewSettingsDialogComponent } from '@ui5/webcomponents-ngx/fiori/view-settings-dialog';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

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
        component: extractDescription('ViewSettingsDialogComponent', ViewSettingsDialogComponent, description),
      },
    },
  },
} as Meta;

export const Usage: StoryObj<ViewSettingsDialogComponent> = {
  render: (args) => ({
    props: args,
    template: `
			  <ui5-button (click)="vsd.element.show()">Open ViewSettingsDialog</ui5-button>
			  <ui5-view-settings-dialog #vsd="ui5ViewSettingsDialog">
					  <ui5-sort-item slot="sortItems" text="Name"></ui5-sort-item>
					  <ui5-sort-item slot="sortItems" text="Position" selected></ui5-sort-item>
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
  }),
};
