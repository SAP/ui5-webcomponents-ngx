import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ProductSwitchComponent } from '@ui5/webcomponents-ngx/fiori/product-switch';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3> 

<code>import { ProductSwitchComponent } from "@ui5/webcomponents-ngx/fiori/product-switch";</code>`;
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
        component: extractDescription('ProductSwitchComponent', ProductSwitchComponent, description),
      },
    },
  },
} as Meta;

export const BasicProductSwitch: StoryObj<ProductSwitchComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-product-switch style="display:flex;">
        <ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
        <ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
      </ui5-product-switch>
    `,
  }),
};

export const ProductSwitchInShellbar: StoryObj<ProductSwitchComponent> = {
  render: (args) => ({
    props: args,
    template: `
    <ui5-shellbar
            primary-title="Corporate Portal"
            secondary-title="home"
            logo="/assets/images/sap-logo-svg.svg"
            show-product-switch
            (productSwitchClick)="popover.open=true;popover.opener = $event.detail.targetRef"
    >
    </ui5-shellbar>

    <ui5-popover #popover="ui5Popover" placement-type="Bottom">
        <ui5-product-switch  (click)="popover.open=false">
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
    `,
  }),
};
