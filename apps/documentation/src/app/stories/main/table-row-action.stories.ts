import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableRowActionComponent } from '@ui5/webcomponents-ngx/main/table-row-action';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableRowActionComponent } from "@ui5/webcomponents-ngx/main/table-row-action";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableRowAction',
  component: TableRowActionComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableRowActionComponent', TableRowActionComponent, description),
      },
    },
  },
} as Meta;


export const TableRowAction: StoryObj<TableRowActionComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };