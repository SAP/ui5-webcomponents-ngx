import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableSelectionSingleComponent } from '@ui5/webcomponents-ngx/main/table-selection-single';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableSelectionSingleComponent } from "@ui5/webcomponents-ngx/main/table-selection-single";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableSelectionSingle',
  component: TableSelectionSingleComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableSelectionSingleComponent', TableSelectionSingleComponent, description),
      },
    },
  },
} as Meta;


export const TableSelectionSingle: StoryObj<TableSelectionSingleComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };