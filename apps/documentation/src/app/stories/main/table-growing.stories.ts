import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableGrowingComponent } from '@ui5/webcomponents-ngx/main/table-growing';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TableGrowingComponent } from "@ui5/webcomponents-ngx/main/table-growing";</code>`;
export default {
  title: 'UI5 Web Components / Main / Table / TableGrowing',
  component: TableGrowingComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableGrowingComponent', TableGrowingComponent, description),
      },
    },
  },
} as Meta;


export const TableGrowing: StoryObj<TableGrowingComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };