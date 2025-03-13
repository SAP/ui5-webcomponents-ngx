import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ListItemCustomComponent } from '@ui5/webcomponents-ngx/main/list-item-custom';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ListItemCustomComponent } from "@ui5/webcomponents-ngx/main/list-item-custom";</code>
`;

export default {
  title: 'UI5 Web Components / Main / List / ListItemCustom',
  component: ListItemCustomComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ListItemCustomComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ListItemCustomComponent', ListItemCustomComponent, description),
      },
    },
  },
} as Meta;


export const ListItemCustom: StoryObj<ListItemCustomComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };