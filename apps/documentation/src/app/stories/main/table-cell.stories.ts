import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableCellComponent } from '@ui5/webcomponents-ngx/main/table-cell';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableCellComponent } from "@ui5/webcomponents-ngx/main/table-cell";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableCell',
  component: TableCellComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableCellComponent', TableCellComponent, description),
      },
    },
  },
} as Meta;


export const TableCell: StoryObj<TableCellComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };