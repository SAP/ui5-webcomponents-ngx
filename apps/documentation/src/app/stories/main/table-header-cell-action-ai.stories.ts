import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableHeaderCellActionAIComponent } from '@ui5/webcomponents-ngx/main/table-header-cell-action-ai';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableHeaderCellActionAIComponent } from "@ui5/webcomponents-ngx/main/table-header-cell-action-ai";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableHeaderCellActionAI',
  component: TableHeaderCellActionAIComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableHeaderCellActionAIComponent', TableHeaderCellActionAIComponent, description),
      },
    },
  },
} as Meta;


export const TableHeaderCellActionAI: StoryObj<TableHeaderCellActionAIComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };