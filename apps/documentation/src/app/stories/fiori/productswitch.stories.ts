import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ProductSwitchComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3>

The <code>ui5-product-switch</code> is an SAP Fiori specific web component that is used in <code>ui5-shellbar</code> and allows the user to easily switch between products. <br><br>

<h3>Keyboard Handling</h3> The <code>ui5-product-switch</code> provides advanced keyboard handling. When focused, the user can use the following keyboard shortcuts in order to perform a navigation: <br> <ul> <li>[TAB] - Move focus to the next interactive element after the <code>ui5-product-switch</code></li> <li>[UP/DOWN] - Navigates up and down the items </li> <li>[LEFT/RIGHT] - Navigates left and right the items</li> </ul> <br> <br>

<h3>ES6 Module Import</h3> <code>import { ProductSwitchComponent } from "@ui5/webcomponents-ngx/fiori/product-switch";</code> (for <code>ui5-product-switch-item</code>)`;
export default {
  title: 'UI5 Web Components / Fiori / ProductSwitch',
  component: ProductSwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const ApplyChanges: Story<ProductSwitchComponent> = (
  args: ProductSwitchComponent & any
) => ({
  props: args,
  template: `
          <ui5-product-switch>
            ${args.content}
          </ui5-product-switch>
        `,
});

export const basicSample: Story<ProductSwitchComponent> = (
  args: ProductSwitchComponent & any
) => ({
  props: args,
  template: `
		<ui5-product-switch style="display:flex;">
			<ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
			<ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
			<ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
			<ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
		</ui5-product-switch>
	`,
});
