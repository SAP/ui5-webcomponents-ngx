import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableRowComponent } from '@ui5/webcomponents-ngx/main/table-row';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableRowComponent } from "@ui5/webcomponents-ngx/main/table-row";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableRow',
  component: TableRowComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableRowComponent', TableRowComponent, description),
      },
    },
  },
} as Meta;


export const TableRow: StoryObj<TableRowComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };