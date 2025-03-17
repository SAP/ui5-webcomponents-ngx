import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableHeaderRowComponent } from '@ui5/webcomponents-ngx/main/table-header-row';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableHeaderRowComponent } from "@ui5/webcomponents-ngx/main/table-header-row";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableHeaderRow',
  component: TableHeaderRowComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableHeaderRowComponent', TableHeaderRowComponent, description),
      },
    },
  },
} as Meta;


export const TableHeaderRow: StoryObj<TableHeaderRowComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };