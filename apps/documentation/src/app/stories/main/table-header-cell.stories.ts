import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableHeaderCellComponent } from '@ui5/webcomponents-ngx/main/table-header-cell';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableHeaderCellComponent } from "@ui5/webcomponents-ngx/main/table-header-cell";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableHeaderCell',
  component: TableHeaderCellComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableHeaderCellComponent', TableHeaderCellComponent, description),
      },
    },
  },
} as Meta;


export const TableHeaderCell: StoryObj<TableHeaderCellComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };