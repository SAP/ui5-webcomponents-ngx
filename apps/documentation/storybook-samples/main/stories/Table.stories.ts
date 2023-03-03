import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { TableDirective } from '../directives/table';

export default {
  component: TableDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicTable: Story = (args) => ({
  props: args,
  template: `
        <!-- Header -->
		<div class="header">
			<span>Products table - resize your browser to make some columns pop-in</span>
			<ui5-button id="toggleSticky">Toggle Sticky Column Header</ui5-button>
		</div>

		<ui5-table class="demo-table" id="tbl">
			<!-- Columns -->
			<ui5-table-column slot="columns">
				<span style="line-height: 1.4rem">Product</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="800">
				<span style="line-height: 1.4rem">Supplier</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
				<span style="line-height: 1.4rem">Dimensions</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
				<span style="line-height: 1.4rem">Weight</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" class="table-header-text-alignment">
				<span style="line-height: 1.4rem">Price</span>
			</ui5-table-column>

		</ui5-table>
      `,
});

export const tableInSingleSelectMode: Story = (args) => ({
  props: args,
  template: `
        <ui5-table class="demo-table" id="singleSelectTbl" mode="SingleSelect">
			<!-- Columns -->
			<ui5-table-column slot="columns">
				<span>Product</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="600" popin-text="Supplier" demand-popin="">
				<span>Supplier</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="800" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
				<span>Dimensions</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="800" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
				<span>Weight</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" class="table-header-text-alignment">
				<span>Price</span>
			</ui5-table-column>
		</ui5-table>
      `,
});

export const tableInMultiSelectMode: Story = (args) => ({
  props: args,
  template: `
        <ui5-table class="demo-table" id="multiSelectTbl" mode="MultiSelect">
			<!-- Columns -->
			<ui5-table-column slot="columns">
				<span>Product</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="600" popin-text="Supplier" demand-popin="">
				<span>Supplier</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="800" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
				<span>Dimensions</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="800" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
				<span>Weight</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" class="table-header-text-alignment">
				<span>Price</span>
			</ui5-table-column>
		</ui5-table>
      `,
});

export const tableDisplayInline: Story = (args) => ({
  props: args,
  template: `
        <!-- Header -->
		<div class="header">
			<span>Products table - resize your browser to make the columns display inline</span>
			<button id="toggleSticky" style="height: 32px">Toggle Sticky Column Header</button>
		</div>
		<ui5-table class="demo-table" id="tblDisplayInline">
			<!-- Columns -->
			<ui5-table-column slot="columns" popin-display="Inline">
				<span>Product</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="600" popin-text="Supplier" demand-popin="" popin-display="Inline">
				<span>Supplier</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="800" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment" popin-display="Inline">
				<span>Dimensions</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" min-width="800" popin-text="Weight" demand-popin="" class="table-header-text-alignment" popin-display="Inline">
				<span>Weight</span>
			</ui5-table-column>

			<ui5-table-column slot="columns" class="table-header-text-alignment" popin-display="Inline">
				<span>Price</span>
			</ui5-table-column>
		</ui5-table>
      `,
});

export const tableWithNoData: Story = (args) => ({
  props: args,
  template: `
        <ui5-table class="demo-table" no-data-text="No Data">
				<!-- Columns -->
				<ui5-table-column slot="columns">
					<span style="line-height: 1.4rem">Product</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="800" popin-text="Supplier">
					<span style="line-height: 1.4rem">Supplier</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="600" popin-text="Dimensions" demand-popin="">
					<span style="line-height: 1.4rem">Dimensions</span>
				</ui5-table-column>

				<ui5-table-column slot="columns" min-width="600" popin-text="Weight" demand-popin="">
					<span style="line-height: 1.4rem">Weight</span>
				</ui5-table-column>

				<ui5-table-column slot="columns">
					<span style="line-height: 1.4rem">Price</span>
				</ui5-table-column>
			</ui5-table>
      `,
});

export const growingTableWithMoreButton: Story = (args) => ({
  props: args,
  template: `
        <ui5-table id="myTbl" growing="Button" growing-button-subtext="[4 / 12]">
			<ui5-table-column id="column-1" slot="columns" width="350px">
				<ui5-label>Product</ui5-label>
			</ui5-table-column>

			<ui5-table-column id="column-2" slot="columns" min-width="800" popin-text="Supplier">
				<ui5-label>Supplier</ui5-label>
			</ui5-table-column>

			<ui5-table-column id="column-3" slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
				<div class="column-content">
					<ui5-label>Dimensions</ui5-label>
				</div>
			</ui5-table-column>

			<ui5-table-column id="column-4" slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
				<ui5-label>Weight</ui5-label>
			</ui5-table-column>

			<ui5-table-column id="column-5" slot="columns" class="table-header-text-alignment">
				<ui5-label>Price</ui5-label>
			</ui5-table-column>
		</ui5-table>
      `,
});

export const growingTableOnScroll: Story = (args) => ({
  props: args,
  template: `
        <ui5-table id="myTblOnScroll" growing="Scroll">
			<ui5-table-column id="column-1" slot="columns" width="350px">
				<ui5-label>Product</ui5-label>
			</ui5-table-column>

			<ui5-table-column id="column-2" slot="columns" min-width="800" popin-text="Supplier">
				<ui5-label>Supplier</ui5-label>
			</ui5-table-column>

			<ui5-table-column id="column-3" slot="columns" min-width="600" popin-text="Dimensions" demand-popin="" class="table-header-text-alignment">
				<div class="column-content">
					<ui5-label>Dimensions</ui5-label>
				</div>
			</ui5-table-column>

			<ui5-table-column id="column-4" slot="columns" min-width="600" popin-text="Weight" demand-popin="" class="table-header-text-alignment">
				<ui5-label>Weight</ui5-label>
			</ui5-table-column>

			<ui5-table-column id="column-5" slot="columns" class="table-header-text-alignment">
				<ui5-label>Price</ui5-label>
			</ui5-table-column>
		</ui5-table>
      `,
});

export const tableWithGroupingSingleSelectClickOnItemToSetNavigated: Story = (
  args
) => ({
  props: args,
  template: `
        <!-- Header -->
		<div class="header">
			<span>The <em>ui5-table-group-row</em> allows visual grouping of the table rows.</span>
		</div>

		<ui5-table class="demo-table-single" mode="SingleSelect">
			<ui5-table-column id="column-1" slot="columns">
				<ui5-label>City</ui5-label>
			</ui5-table-column>
			<ui5-table-column id="column-2" slot="columns" min-width="500" popin-text="Supplier" demand-popin="">
				<ui5-label>Supplier</ui5-label>
			</ui5-table-column>
			<ui5-table-column id="column-3" slot="columns" min-width="500">
				<ui5-label>Country</ui5-label>
			</ui5-table-column>

			<ui5-table-group-row>Country: Bulgaria</ui5-table-group-row>

			<ui5-table-row>
				<ui5-table-cell><span>Sofia</span></ui5-table-cell>
				<ui5-table-cell><span>Company 1</span></ui5-table-cell>
				<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row>
				<ui5-table-cell><span>Plovdiv</span></ui5-table-cell>
				<ui5-table-cell><span>Company 2</span></ui5-table-cell>
				<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
			</ui5-table-row>

			<ui5-table-group-row><span>Country: USA</span></ui5-table-group-row>

			<ui5-table-row>
				<ui5-table-cell><span>Denver</span></ui5-table-cell>
				<ui5-table-cell><span>Company 3</span></ui5-table-cell>
				<ui5-table-cell><span>USA</span></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row>
				<ui5-table-cell><span>Boston</span></ui5-table-cell>
				<ui5-table-cell><span>Company 4</span></ui5-table-cell>
				<ui5-table-cell><span>USA</span></ui5-table-cell>
			</ui5-table-row>
		</ui5-table>
      `,
});

export const tablesWithGroupingMultiSelect: Story = (args) => ({
  props: args,
  template: `
        <ui5-table class="demo-table-multi" mode="MultiSelect">
			<ui5-table-column id="column-1" slot="columns">
				<ui5-label>City</ui5-label>
			</ui5-table-column>
			<ui5-table-column id="column-2" slot="columns" min-width="500" popin-text="Supplier" demand-popin="">
				<ui5-label>Supplier</ui5-label>
			</ui5-table-column>
			<ui5-table-column id="column-3" slot="columns" min-width="500">
				<ui5-label>Country</ui5-label>
			</ui5-table-column>

			<ui5-table-group-row>Country: Bulgaria</ui5-table-group-row>

			<ui5-table-row>
				<ui5-table-cell><span>Sofia</span></ui5-table-cell>
				<ui5-table-cell><span>Company 1</span></ui5-table-cell>
				<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row>
				<ui5-table-cell><span>Plovdiv</span></ui5-table-cell>
				<ui5-table-cell><span>Company 2</span></ui5-table-cell>
				<ui5-table-cell><span>Bulgaria</span></ui5-table-cell>
			</ui5-table-row>

			<ui5-table-group-row><span>Country: USA</span></ui5-table-group-row>

			<ui5-table-row>
				<ui5-table-cell><span>Denver</span></ui5-table-cell>
				<ui5-table-cell><span>Company 3</span></ui5-table-cell>
				<ui5-table-cell><span>USA</span></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row>
				<ui5-table-cell><span>Boston</span></ui5-table-cell>
				<ui5-table-cell><span>Company 4</span></ui5-table-cell>
				<ui5-table-cell><span>USA</span></ui5-table-cell>
			</ui5-table-row>
		</ui5-table>
      `,
});
