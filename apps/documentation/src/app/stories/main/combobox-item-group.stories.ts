import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ComboBoxItemGroupComponent } from '@ui5/webcomponents-ngx/main/combo-box-item-group';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ComboBoxItemGroupComponent } from "@ui5/webcomponents-ngx/main/combo-box-item-group";</code>
`;

export default {
  title: 'UI5 Web Components / Main / ComboBox / ComboBoxItemGroup',
  component: ComboBoxItemGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ComboBoxItemGroupComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ComboBoxItemGroupComponent', ComboBoxItemGroupComponent, description),
      },
    },
  },
} as Meta;


export const ComboBoxItemGroup: StoryObj<ComboBoxItemGroupComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };