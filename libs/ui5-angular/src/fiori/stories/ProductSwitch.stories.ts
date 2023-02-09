import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { ProductSwitchDirective } from '../directives/product-switch';

export default {
  component: ProductSwitchDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicSample: Story = (args) => ({
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

export const productSwitchWithinShellBar: Story = (args) => ({
  props: args,
  template: `
        <ui5-shellbar id="shellbar" primary-title="Corporate Portal" secondary-title="home" logo="../../../assets/images/sap-logo-svg.svg" show-product-switch="" show-co-pilot="">
		</ui5-shellbar>
		<ui5-popover id="productswitch-popover" placement-type="Bottom">
			<ui5-product-switch>
				<ui5-product-switch-item title-text="Home" subtitle-text="Central Home" icon="home"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Analytics Cloud" subtitle-text="Analytics Cloud" icon="business-objects-experience"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Catalog" subtitle-text="Ariba" icon="contacts"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Guided Buying" icon="credit-card"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Strategic Procurement" icon="cart-3"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Travel &amp; Expense" subtitle-text="Concur" icon="flight"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Vendor Management" subtitle-text="Fieldglass" icon="shipping-status"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Human Capital Management" icon="customer"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Sales Cloud" subtitle-text="Sales Cloud" icon="sales-notification"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Commerce Cloud" subtitle-text="Commerce Cloud" icon="retail-store"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Marketing Cloud" subtitle-text="Marketing Cloud" icon="marketing-campaign"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Service Cloud" icon="family-care"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="Customer Data Cloud" icon="customer-briefing"></ui5-product-switch-item>
				<ui5-product-switch-item title-text="S/4HANA" icon="batch-payments"></ui5-product-switch-item>
			</ui5-product-switch>
		</ui5-popover>
      `,
});
