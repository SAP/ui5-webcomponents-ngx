import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableVirtualizerComponent } from '@ui5/webcomponents-ngx/main/table-virtualizer';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableVirtualizerComponent } from "@ui5/webcomponents-ngx/main/table-virtualizer";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableVirtualizer',
  component: TableVirtualizerComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableVirtualizerComponent', TableVirtualizerComponent, description),
      },
    },
  },
} as Meta;


export const TableVirtualizer: StoryObj<TableVirtualizerComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };