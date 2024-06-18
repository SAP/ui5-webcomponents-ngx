import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  DynamicPageComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

A layout component, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.

 The component consist of several components:

 - DynamicPageTitle - a component, holding the title of the page, the navigation actions and the content. The displayed content changes based on the current mode of the DynamicPageHeader.
 - DynamicPageHeader - a generic container, which can contain a single layout component and any other HTML elements. The header works in two modes - expanded and snapped and its behavior can be adjusted with the help of different properties.
 - Content area - a generic container, which can have a single UI5 layout.
 - Footer - positioned at the bottom with a small offset and used for additional actions, the footer floats above the content.

<h3>ES6 Module Import</h3>

<code>import { DynamicPage } from "@ui5/webcomponents-ngx/fiori/dynamic-page";</code>;
<code>import { DynamicPageTitle } from "@ui5/webcomponents-ngx/fiori/dynamic-page-title";</code>;
<code>import { DynamicPageHeader } from "@ui5/webcomponents-ngx/fiori/dynamic-page-header";</code>;
`

export default {
  title: 'UI5 Web Components / Fiori / DynamicPage',
  component: DynamicPageComponent,
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

export const dynamicSideContentWithDefaultProperties: Story<
  DynamicPageComponent
> = (args: DynamicPageComponent & any) => ({
  props: args,
  template: `
		<div class="wrapper">
		<ui5-dynamic-page id="page" show-footer>
		<ui5-dynamic-page-title slot="titleArea">
			<ui5-breadcrumbs slot="breadcrumbs">
				<ui5-breadcrumbs-item href="#">Man</ui5-breadcrumbs-item>
				<ui5-breadcrumbs-item href="#">Shoes</ui5-breadcrumbs-item>
				<ui5-breadcrumbs-item href="#">Running Shoes</ui5-breadcrumbs-item>
			</ui5-breadcrumbs>

			<ui5-title wrapping-type="None" slot="heading">Special Running Shoe</ui5-title>

			<div slot="snappedHeading" class="snapped-title-heading">
				<ui5-avatar shape="square" icon="laptop" color-scheme="Accent5" size="S"></ui5-avatar>
				<ui5-title wrapping-type="None">Special Running Shoe</ui5-title>
			</div>

			<ui5-text slot="subheading">PO-48865</ui5-text>
			<ui5-text slot="snappedSubheading">PO-48865</ui5-text>

			<ui5-tag color-scheme="7">Special 157.4M EUR</ui5-tag>

			<ui5-toolbar id="actionsToolbar" slot="actionsBar">
				<ui5-toolbar-button text="Create"></ui5-toolbar-button>
				<ui5-toolbar-button id="edit-button" design="Transparent" text="Edit"></ui5-toolbar-button>
				<ui5-toolbar-button design="Transparent" text="Paste"></ui5-toolbar-button>
			</ui5-toolbar>

			<ui5-toolbar slot="navigationBar">
				<ui5-toolbar-button design="Transparent" icon="share"></ui5-toolbar-button>
				<ui5-toolbar-button design="Transparent" icon="action-settings"></ui5-toolbar-button>
			</ui5-toolbar>
		</ui5-dynamic-page-title>
		
		<ui5-dynamic-page-header slot="headerArea">
			<div class="product-info">
				<ui5-avatar id="avatar" shape="square" icon="laptop" color-scheme="Accent5" size="L"></ui5-avatar>
				<div class="product-info-cell">
					<ui5-label>Availability</ui5-label>
					<ui5-text class="availability">In Stock</ui5-text>
				</div>
				<div class="product-info-cell">
					<ui5-label>Price</ui5-label>
					<ui5-text class="price">379.99 USD</ui5-text>
				</div>
				<div class="product-info-cell">
					<ui5-label>Product Description</ui5-label>
					<ui5-text class="product-description">Super-lightweight cushioning propels you forward from landing to toe-off and has a fast, snappy feel.</ui5-text>
				</div>
			</div>
		</ui5-dynamic-page-header>

		<ui5-list header-text="Products (13)" mode="SingleSelect">
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>
			<ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>
			<ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>
			<ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>
			<ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>
			<ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>
			<ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>
			<ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>
			<ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>
			<ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>
			<ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>
			<ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>
			<ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>
			<ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>
			<ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>
			<ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>
			<ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>
			<ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>
			<ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>
			<ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>
			<ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>
			<ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="47.00 EUR">10 inch Portable DVD</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="249.00 EUR">7 inch WidescreenPortable DVD Player w MP3</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="947.00 EUR">Astro Laptop 1516</ui5-li>
			<ui5-li description="HT-1251" icon="slim-arrow-right" icon-end additional-text="647.00 EUR">Astro Phone 6</ui5-li>
			<ui5-li description="HT-1252" icon="slim-arrow-right" icon-end additional-text="27.99 EUR">Audio/Video Cable Kit - 4m</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="447.90 EUR">Beam Breaker B-1</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="647.50 EUR">Beam Breaker B-2</ui5-li>
			<ui5-li description="HT-6001" icon="slim-arrow-right" icon-end additional-text="847.80 EUR">Beam Breaker B-3</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="1,250.00 EUR">Beam Breaker B-4</ui5-li>
			<ui5-li description="HT-8001" icon="slim-arrow-right" icon-end additional-text="1,288.00 EUR">Camcorder View</ui5-li>
			<ui5-li description="HT-2001" icon="slim-arrow-right" icon-end additional-text="996.00 EUR">Benda Laptop 1408</ui5-li>
			<ui5-li description="HT-0003" icon="slim-arrow-right" icon-end additional-text="147.00 EUR">Cepat Tablet 10.5</ui5-li>
			<ui5-li description="HT-1001" icon="slim-arrow-right" icon-end additional-text="87.90 EUR">Gladiator MX</ui5-li>
		</ui5-list>

		<ui5-bar slot="footerArea" design="FloatingFooter">
			<ui5-button id="save-edit" slot="endContent">Save</ui5-button>
			<ui5-button id="cancel-edit" slot="endContent">Close</ui5-button>
		</ui5-bar>
	</ui5-dynamic-page>

	<style>
		.wrapper {
			height: 800px;
		}
		.content-padding > * {
			padding: 0.5rem;
		}
		
		.product-info {
			display: flex;
			flex-wrap: wrap;
		}
		
		.product-info [ui5-avatar],
		.product-info .product-info-cell {
			margin-right: 2rem;
			margin-bottom: 1rem; 
		}
		
		.product-info-cell {
			display: flex;
			gap: 5px;
			flex-direction: column;
		}
		
		.product-description {
			display: inline;
			max-width: 300px;
		}
		
		.snapped-title-heading {
			display: flex;
			align-items: center;
		}
		.snapped-title-heading [ui5-avatar] {
			margin-right: 1rem;
		}
		.snapped-title-heading [ui5-title] {
			font-family: var(--sapObjectHeader_Title_FontFamily);
			color: var(--sapObjectHeader_Title_TextColor);
			padding: 0.3125rem 0 0 0;
			font-size: var(--sapObjectHeader_Title_SnappedFontSize);
			text-overflow: ellipsis;
			min-width: 0;
		}
	</style>
	</div>
	`,
});
