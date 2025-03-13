import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { MultiComboBoxItemGroupComponent } from '@ui5/webcomponents-ngx/main/multi-combo-box-item-group';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { MultiComboBoxItemGroupComponent } from "@ui5/webcomponents-ngx/main/multi-combo-box-item-group";</code>
`;

export default {
  title: 'UI5 Web Components / Main / MultiComboBox / MultiComboBoxItemGroup',
  component: MultiComboBoxItemGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        MultiComboBoxItemGroupComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'MultiComboBoxItemGroupComponent', MultiComboBoxItemGroupComponent, description),
      },
    },
  },
} as Meta;


export const MultiComboBoxItemGroup: StoryObj<MultiComboBoxItemGroupComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };