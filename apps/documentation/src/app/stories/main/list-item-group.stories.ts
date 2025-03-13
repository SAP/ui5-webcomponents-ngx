import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ListItemGroupComponent } from '@ui5/webcomponents-ngx/main/list-item-group';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ListItemGroupComponent } from "@ui5/webcomponents-ngx/main/list-item-group";</code>
`;

export default {
  title: 'UI5 Web Components / Main / List / ListItemGroup',
  component: ListItemGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ListItemGroupComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ListItemGroupComponent', ListItemGroupComponent, description),
      },
    },
  },
} as Meta;


export const ListItemGroup: StoryObj<ListItemGroupComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };