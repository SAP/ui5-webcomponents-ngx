import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { MultiComboBoxItemComponent } from '@ui5/webcomponents-ngx/main/multi-combo-box-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { MultiComboBoxItemComponent } from "@ui5/webcomponents-ngx/main/multi-combo-box-item";</code>
`;

export default {
  title: 'UI5 Web Components / Main / MultiComboBox / MultiComboBoxItem',
  component: MultiComboBoxItemComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        MultiComboBoxItemComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'MultiComboBoxItemComponent', MultiComboBoxItemComponent, description),
      },
    },
  },
} as Meta;


export const MultiComboBoxItem: StoryObj<MultiComboBoxItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };