import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ListItemStandardComponent } from '@ui5/webcomponents-ngx/main/list-item-standard';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ListItemStandardComponent } from "@ui5/webcomponents-ngx/main/list-item-standard";</code>
`;

export default {
  title: 'UI5 Web Components / Main / List / ListItemStandard',
  component: ListItemStandardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ListItemStandardComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ListItemStandardComponent', ListItemStandardComponent, description),
      },
    },
  },
} as Meta;


export const ListItemStandard: StoryObj<ListItemStandardComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };