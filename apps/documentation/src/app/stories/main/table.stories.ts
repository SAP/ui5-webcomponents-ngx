import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  TableComponent,
  TableHeaderCellComponent,
  TableHeaderRowComponent,
  TableRowComponent,
  TableCellComponent,
  TableGrowingComponent,
  TableSelectionComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview

The **ui5-table** component provides a set of sophisticated features for displaying and dealing with vast amounts of data in a responsive manner.
To render the u**ui5-table**, you need to define the columns and rows.
You can use the provided ui5-table-header-row and ui5-table-row components for this purpose.

### Features

The **ui5-table** can be enhanced in its functionalities by applying different features. Features can be slotted into the features slot, to enable them in the component. Features need to be imported separately, as they are not enabled by default.

The following features are currently available:

TableSelection - adds selection capabilities to the table
TableGrowing - provides growing capabilities to load more data


### Keyboard Handling

This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module: import "@ui5/webcomponents-base/dist/features/F6Navigation.js"

Furthermore, you can interact with **ui5-table** via the following keys:

If the focus is on a row, the following keyboard shortcuts are available:
- Down - Navigates down
- Up - Navigates up
- Right - Selects the first cell of the row
- Space - Toggles the selection of the row
- Ctrl/Cmd + A - In multi selection mode, toggles the selection of all rows
- Home - Navigates to the first row, if the focus is on the first row, navigates to the header row
- End - Navigates to the last row, if the focus is on the last row, navigates to the growing button
- Page Up - Navigates one page up, if the focus is on the first row, navigates to the header row
- Page Down - Navigates one page down, if the focus is on the last row, navigates to the growing button
- F2 - Focuses the first tabbable element in the row
- F7 - If focus position is remembered, moves focus to the corresponding focus position row, otherwise to the first tabbable element within the row
- hift + Tab  - Move focus to the element in the tab chain outside the table

If the focus is on a cell, the following keyboard shortcuts are available:
- Down - Navigates down
- Up - Navigates up
- Right - Navigates right
- Left - Navigates left, if the focus is on the first cell of the row, the focus is moved to the row.
- Home - Navigates to the first cell of the current row, if the focus is on the first cell, navigates to the corresponding row
- End - Navigates to the last cell of the current row, if the focus is on the last cell, navigates to the corresponding row
- Page Up - Navigates one page up while keeping the focus in same column
- Page Down - Navigates one page down while keeping the focus in same column
- F2 - Toggles the focus between the first tabbable cell content and the cell
- Enter - Focuses the first tabbable cell content
- F7 - If the focus is on an interactive element inside a row, moves focus to the corresponding row and remembers the focus position of the element within the row
- hift + Tab  - Move focus to the element in the tab chain outside the table

If the focus is on an interactive cell content, the following keyboard shortcuts are available:
- Down - Move the focus to the interactive element in the same column of the previous row, unless the focused element prevents the default
- Up - Move the focus to the interactive element in the same column of the next row, unless the focused element prevents the default
- Shift + Tab - Move the focus to the element in the tab chain

### ES6 Module Import

<code>import { TableComponent } from "@ui5/webcomponents-ngx/main/table";
`;

export default {
  title: 'UI5 Web Components / Main / Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        TableComponent,
        TableHeaderCellComponent,
        TableHeaderRowComponent,
        TableRowComponent,
        TableCellComponent,
        TableGrowingComponent,
        TableSelectionComponent,
      ],
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

export const Table: StoryObj<TableComponent> = {
  render: (
    args: TableComponent &
      TableHeaderRowComponent &
      TableHeaderCellComponent &
      TableRowComponent &
      TableCellComponent &
      TableGrowingComponent &
      TableSelectionComponent &
      any,
  ) => ({
    props: args,
    template: `
  <ui5-table>
		<ui5-table-header-row slot="headerRow">
			<ui5-table-header-cell id="produtCol" width="300px"><span>Product</span></ui5-table-header-cell>
			<ui5-table-header-cell id="supplierCol" width="200px">Supplier</ui5-table-header-cell>
			<ui5-table-header-cell id="dimensionsCol" width="300px">Dimensions</ui5-table-header-cell>
			<ui5-table-header-cell id="weightCol" width="100px">Weight</ui5-table-header-cell>
			<ui5-table-header-cell id="priceCol" width="220px">Price</ui5-table-header-cell>
		</ui5-table-header-row>

		<ui5-table-row>
			<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>
		</ui5-table-row>
		<ui5-table-row>
			<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>
		</ui5-table-row>
		<ui5-table-row>
			<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>
			<ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>
		</ui5-table-row>
</ui5-table>
	`,
  }),
};

export const TableInSingleSelectMode: StoryObj<TableComponent> = {
  render: (
    args: TableComponent &
      TableHeaderRowComponent &
      TableHeaderCellComponent &
      TableRowComponent &
      TableCellComponent &
      TableGrowingComponent &
      TableSelectionComponent &
      any,
  ) => ({
    props: args,
    template: `
  	<ui5-table accessible-name-ref="title" no-data-text="No data found">
  			<ui5-table-selection id="selection" slot="features" mode="Single"></ui5-table-selection>

			<ui5-table-header-row slot="headerRow">
				<ui5-table-header-cell id="produtCol" width="300px"><span>Product</span></ui5-table-header-cell>
				<ui5-table-header-cell id="supplierCol">Supplier</ui5-table-header-cell>
				<ui5-table-header-cell id="dimensionsCol" importance="-1" min-width="300px">Dimensions</ui5-table-header-cell>
				<ui5-table-header-cell id="weightCol" popin-text="Weight">Weight</ui5-table-header-cell>
				<ui5-table-header-cell id="priceCol" min-width="220px" style="text-align: end;">Price</ui5-table-header-cell>
			</ui5-table-header-row>

			<ui5-table-row row-key="0">
				<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>
				<ui5-table-cell style="text-align: end;"><ui5-label style="text-align: end;"><b>956</b> EUR</ui5-label></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row row-key="1">
				<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-input value="29 x 17 x 3.1 cm" accessible-name-ref="dimensionsCol"></ui5-input></ui5-table-cell>
				<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>
				<ui5-table-cell style="text-align: end;"><ui5-label style="text-align: end;"><b>1249</b> EUR</ui5-label></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row row-key="2">
				<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>
				<ui5-table-cell style="text-align: end;"><ui5-label style="text-align: end;"><b>29</b> EUR</ui5-label></ui5-table-cell>
			</ui5-table-row>
	</ui5-table>
	`,
  }),
};

export const TableInMultipleSelectMode: StoryObj<TableComponent> = {
  render: (
    args: TableComponent &
      TableHeaderRowComponent &
      TableHeaderCellComponent &
      TableRowComponent &
      TableCellComponent &
      TableGrowingComponent &
      TableSelectionComponent &
      any,
  ) => ({
    props: args,
    template: `
		<ui5-table accessible-name-ref="title" no-data-text="No data found">
				<ui5-table-selection id="selection" slot="features" mode="Multiple"></ui5-table-selection>
  
			  <ui5-table-header-row slot="headerRow">
				  <ui5-table-header-cell id="produtCol" width="300px"><span>Product</span></ui5-table-header-cell>
				  <ui5-table-header-cell id="supplierCol">Supplier</ui5-table-header-cell>
				  <ui5-table-header-cell id="dimensionsCol" importance="-1" min-width="300px">Dimensions</ui5-table-header-cell>
				  <ui5-table-header-cell id="weightCol" popin-text="Weight">Weight</ui5-table-header-cell>
				  <ui5-table-header-cell id="priceCol" min-width="220px" style="text-align: end;">Price</ui5-table-header-cell>
			  </ui5-table-header-row>
  
			  <ui5-table-row row-key="0">
				  <ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>
				  <ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>
				  <ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>
				  <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>
				  <ui5-table-cell style="text-align: end;"><ui5-label style="text-align: end;"><b>956</b> EUR</ui5-label></ui5-table-cell>
			  </ui5-table-row>
			  <ui5-table-row row-key="1">
				  <ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>
				  <ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>
				  <ui5-table-cell><ui5-input value="29 x 17 x 3.1 cm" accessible-name-ref="dimensionsCol"></ui5-input></ui5-table-cell>
				  <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>
				  <ui5-table-cell style="text-align: end;"><ui5-label style="text-align: end;"><b>1249</b> EUR</ui5-label></ui5-table-cell>
			  </ui5-table-row>
			  <ui5-table-row row-key="2">
				  <ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>
				  <ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>
				  <ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>
				  <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>
				  <ui5-table-cell style="text-align: end;"><ui5-label style="text-align: end;"><b>29</b> EUR</ui5-label></ui5-table-cell>
			  </ui5-table-row>
	  </ui5-table>
	  `,
  }),
};

export const TableWithNoData: StoryObj<TableComponent> = {
  render: (
    args: TableComponent &
      TableHeaderRowComponent &
      TableHeaderCellComponent &
      TableRowComponent &
      TableCellComponent &
      TableGrowingComponent &
      TableSelectionComponent &
      any,
  ) => ({
    props: args,
    template: `
  	<ui5-table overflow-mode="Popin">

		<ui5-table-header-row slot="headerRow">
			<ui5-table-header-cell width="300px"><span>Product</span></ui5-table-header-cell>
			<ui5-table-header-cell width="200px">Supplier</ui5-table-header-cell>
			<ui5-table-header-cell width="300px">Dimensions</ui5-table-header-cell>
		</ui5-table-header-row>

  		<ui5-illustrated-message slot="nodata" name="NoData"></ui5-illustrated-message>
	</ui5-table>
		`,
  }),
};
