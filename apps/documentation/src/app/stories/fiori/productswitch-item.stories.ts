import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ProductSwitchItemComponent } from '@ui5/webcomponents-ngx/fiori/product-switch-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { ProductSwitchItemComponent } from "@ui5/webcomponents-ngx/fiori/product-switch-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / ProductSwitch / ProductSwitchItem',
  component: ProductSwitchItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ProductSwitchItemComponent', ProductSwitchItemComponent, description),
      },
    },
  },
} as Meta;


export const ProductSwitchItem: StoryObj<ProductSwitchItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };