import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableRowActionNavigationComponent } from '@ui5/webcomponents-ngx/main/table-row-action-navigation';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableRowActionNavigationComponent } from "@ui5/webcomponents-ngx/main/table-row-action-navigation";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableRowActionNavigation',
  component: TableRowActionNavigationComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableRowActionNavigationComponent', TableRowActionNavigationComponent, description),
      },
    },
  },
} as Meta;


export const TableRowActionNavigation: StoryObj<TableRowActionNavigationComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };