import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ProductSwitchComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

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
      extractArgTypes,
      description: {
        component: description,
      },
    },
  },
} as Meta;

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

export const inShellbar: Story<ProductSwitchComponent> = () => ({
  template: `<ui5-shellbar
        #shellbar="ui5ShellBar"
        (ui5ProductSwitchClick)="popover.opened ? popover.close() : popover.showAt($event.targetRef)"
        id="shellbar"
        primary-title="Corporate Portal"
        secondary-title="home"
        logo="../../../assets/images/sap-logo-svg.svg"
        [show-product-switch]="true"
        [show-co-pilot]="true">
</ui5-shellbar>
<ui5-popover #popover="ui5Popover" placement-type="Bottom">
    <ui5-product-switch>
        <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud"
                                 icon="business-objects-experience"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Guided Buying" icon="credit-card"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Strategic Procurement" icon="cart-3"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Travel & Expense" subtitle-text="Concur"
                                 icon="flight"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Vendor Management" subtitle-text="Fieldglass"
                                 icon="shipping-status"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Human Capital Management" icon="customer"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Sales Cloud" subtitle-text="Sales Cloud"
                                 icon="sales-notification"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Commerce Cloud" subtitle-text="Commerce Cloud"
                                 icon="retail-store"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Marketing Cloud" subtitle-text="Marketing Cloud"
                                 icon="marketing-campaign"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Service Cloud" icon="family-care"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Customer Data Cloud" icon="customer-briefing"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="S/4HANA" icon="batch-payments"></ui5-product-switch-item>
    </ui5-product-switch>
</ui5-popover>
`
});
