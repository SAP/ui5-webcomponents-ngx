import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ComboBoxItemComponent } from '@ui5/webcomponents-ngx/main/combo-box-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ComboBoxItemComponent } from "@ui5/webcomponents-ngx/main/combo-box-item";</code>
`;

export default {
  title: 'UI5 Web Components / Main / ComboBox / ComboBoxItem',
  component: ComboBoxItemComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ComboBoxItemComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ComboBoxItemComponent', ComboBoxItemComponent, description),
      },
    },
  },
} as Meta;


export const ComboBoxItem: StoryObj<ComboBoxItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };