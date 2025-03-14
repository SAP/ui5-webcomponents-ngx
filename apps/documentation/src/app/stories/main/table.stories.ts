import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableComponent } from '@ui5/webcomponents-ngx/main/table';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { TableComponent } from "@ui5/webcomponents-ngx/main/table";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        TableComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TableComponent', TableComponent, description),
      },
    },
  },
} as Meta;


export const Table: StoryObj<TableComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };