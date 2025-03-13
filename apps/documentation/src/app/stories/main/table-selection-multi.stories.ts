import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableSelectionMultiComponent } from '@ui5/webcomponents-ngx/main/table-selection-multi';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableSelectionMultiComponent } from "@ui5/webcomponents-ngx/main/table-selection-multi";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableSelectionMulti',
  component: TableSelectionMultiComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableSelectionMultiComponent', TableSelectionMultiComponent, description),
      },
    },
  },
} as Meta;


export const TableSelectionMulti: StoryObj<TableSelectionMultiComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };