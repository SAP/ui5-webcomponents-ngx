import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TableComponent } from '@ui5/webcomponents-ngx/main/table';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { TableComponent } from "@ui5/webcomponents-ngx/main/table";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Table',
  component: TableComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule, TableComponent],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription(
          'TableComponent',
          TableComponent,
          description,
        ),
      },
    },
  },
} as Meta;

export const Table: StoryObj<TableComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-table id="table" overflow-mode="Popin">
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

export const OverflowTable: StoryObj<TableComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column;">
        <div>
          <h2>Scroll Mode</h2>
          <ui5-table id="table" overflow-mode="Scroll">
            <ui5-table-header-row slot="headerRow">
              <ui5-table-header-cell id="produtCol" width="300px"><span>Product</span></ui5-table-header-cell>
              <ui5-table-header-cell id="supplierCol" width="200px">Supplier</ui5-table-header-cell>
              <ui5-table-header-cell id="dimensionsCol" min-width="300px">Dimensions</ui5-table-header-cell>
              <ui5-table-header-cell id="weightCol" width="100px">Weight</ui5-table-header-cell>
              <ui5-table-header-cell id="priceCol" min-width="220px">Price</ui5-table-header-cell>
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
        </div>
        <br>
        <br>
        <div>
          <ui5-bar>
            <ui5-segmented-button id="sizeBtn" accessible-name="Switch Table Size">
              <ui5-segmented-button-item>25%</ui5-segmented-button-item>
              <ui5-segmented-button-item>50%</ui5-segmented-button-item>
              <ui5-segmented-button-item>75%</ui5-segmented-button-item>
              <ui5-segmented-button-item selected>100%</ui5-segmented-button-item>
            </ui5-segmented-button>
            <ui5-segmented-button id="showHideDetailsBtn" slot="endContent" accessible-name="Show/Hide Details">
              <ui5-segmented-button-item tooltip="Show Details" icon="detail-more"></ui5-segmented-button-item>
              <ui5-segmented-button-item tooltip="Hide Details" icon="detail-less" selected></ui5-segmented-button-item>
            </ui5-segmented-button>
          </ui5-bar>
          <ui5-table id="table" overflow-mode="Popin">
            <ui5-table-header-row slot="headerRow">
              <ui5-table-header-cell id="produtCol" min-width="300px"><span>Product</span></ui5-table-header-cell>
              <ui5-table-header-cell id="supplierCol" min-width="200px">Supplier</ui5-table-header-cell>
              <ui5-table-header-cell id="dimensionsCol" importance="-1" min-width="200px" popin-hidden>Dimensions</ui5-table-header-cell>
              <ui5-table-header-cell id="weightCol" importance="-1" min-width="100px" popin-hidden>Weight</ui5-table-header-cell>
              <ui5-table-header-cell id="priceCol" min-width="150px">Price</ui5-table-header-cell>
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
        </div>
        </div>
    `,
  }),
}; // TODO

export const StickyHeaderRowTable: StoryObj<TableComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column;">
        <div>
          <ui5-table id="table1" style="height: 150px;">
          <ui5-table-header-row slot="headerRow" sticky>
            <ui5-table-header-cell id="produtCol"><span>Product</span></ui5-table-header-cell>
            <ui5-table-header-cell id="supplierCol">Supplier</ui5-table-header-cell>
            <ui5-table-header-cell id="dimensionsCol">Dimensions</ui5-table-header-cell>
            <ui5-table-header-cell id="weightCol">Weight</ui5-table-header-cell>
            <ui5-table-header-cell id="priceCol" style="text-align: end;">Price</ui5-table-header-cell>
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
          <ui5-table-row>
            <ui5-table-cell><ui5-label><b>Notebook Basic 19</b><br>HT-1003</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>
          </ui5-table-row>
          <ui5-table-row>
            <ui5-table-cell><ui5-label><b>Notebook Basic 20</b><br>HT-1004</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>
          </ui5-table-row>
          <ui5-table-row>
            <ui5-table-cell><ui5-label><b>Notebook Basic 21</b><br>HT-1005</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>
          </ui5-table-row>
          </ui5-table>
        </div>
      <br>
      <br>
      <div style="height: 150px; overflow: auto;">
        <ui5-bar id="toolbar" design="Header" accessible-name-ref="title" style="position: sticky; top: 0; z-index: 2; height: 50px;">
          <ui5-title tabindsex="0" level="H3" id="title" slot="startContent">My Sticky Toolbar With Scrollable Container</ui5-title>
        </ui5-bar>
        <ui5-table id="table2" style="height: 100px;">
          <ui5-table-header-row slot="headerRow" sticky>
            <ui5-table-header-cell id="produtCol"><span>Product</span></ui5-table-header-cell>
            <ui5-table-header-cell id="supplierCol">Supplier</ui5-table-header-cell>
            <ui5-table-header-cell id="dimensionsCol">Dimensions</ui5-table-header-cell>
            <ui5-table-header-cell id="weightCol">Weight</ui5-table-header-cell>
            <ui5-table-header-cell id="priceCol" style="text-align: end;">Price</ui5-table-header-cell>
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
          <ui5-table-row>
            <ui5-table-cell><ui5-label><b>Notebook Basic 19</b><br>HT-1003</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>
          </ui5-table-row>
          <ui5-table-row>
            <ui5-table-cell><ui5-label><b>Notebook Basic 20</b><br>HT-1004</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>
          </ui5-table-row>
          <ui5-table-row>
            <ui5-table-cell><ui5-label><b>Notebook Basic 21</b><br>HT-1005</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>
          </ui5-table-row>
        </ui5-table>
      </div>
      </div>
    `,
  }),
};

export const NoDataTable: StoryObj<TableComponent> = {
  render: (args) => ({
    props: args,
    template: `
    <ui5-table id="table" overflow-mode="Popin">
      <ui5-illustrated-message slot="nodata" name="NoData"></ui5-illustrated-message>
      <ui5-table-header-row slot="headerRow">
        <ui5-table-header-cell id="produtCol" width="300px"><span>Product</span></ui5-table-header-cell>
        <ui5-table-header-cell id="supplierCol" width="200px">Supplier</ui5-table-header-cell>
        <ui5-table-header-cell id="dimensionsCol" width="300px">Dimensions</ui5-table-header-cell>
        <ui5-table-header-cell id="weightCol" width="100px">Weight</ui5-table-header-cell>
        <ui5-table-header-cell id="priceCol" width="220px">Price</ui5-table-header-cell>
      </ui5-table-header-row>
    </ui5-table>
    `,
  }),
};

export const InteractiveTable: StoryObj<TableComponent> = {
  render: (args) => ({
    props: args,
    template: `
    <ui5-toast id="message"></ui5-toast>
    <ui5-table id="table">
      <ui5-table-header-row slot="headerRow">
        <ui5-table-header-cell id="produtCol" width="300px"><span>Product</span></ui5-table-header-cell>
        <ui5-table-header-cell id="supplierCol" width="200px">Supplier</ui5-table-header-cell>
        <ui5-table-header-cell id="dimensionsCol" width="300px">Dimensions</ui5-table-header-cell>
        <ui5-table-header-cell id="weightCol" width="100px">Weight</ui5-table-header-cell>
        <ui5-table-header-cell id="priceCol" width="220px">Price</ui5-table-header-cell>
      </ui5-table-header-row>

      <ui5-table-row row-key="a" interactive>
        <ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>
      </ui5-table-row>
      <ui5-table-row row-key="b">
        <ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>
      </ui5-table-row>
      <ui5-table-row row-key="c" interactive>
        <ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>
        <ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>
      </ui5-table-row>
    </ui5-table>
    `,
  }),
}; // TODO

export const DragAndDropTable: StoryObj<TableComponent> = {
  render: (args) => ({
    props: args,
    template: `
    <ui5-table id="table">
			<ui5-table-header-row slot="headerRow">
				<ui5-table-header-cell id="produtCol" width="300px"><span>Product</span></ui5-table-header-cell>
				<ui5-table-header-cell id="supplierCol" width="200px">Supplier</ui5-table-header-cell>
				<ui5-table-header-cell id="dimensionsCol" width="300px">Dimensions</ui5-table-header-cell>
				<ui5-table-header-cell id="weightCol" width="100px">Weight</ui5-table-header-cell>
				<ui5-table-header-cell id="priceCol" width="220px">Price</ui5-table-header-cell>
			</ui5-table-header-row>
			<ui5-table-row movable>
				<ui5-table-cell><ui5-label><b>Notebook Basic 15</b><br>HT-1000</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>Very Best Screens</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.2</b> KG</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row movable>
				<ui5-table-cell><ui5-label><b>Notebook Basic 17</b><br>HT-1001</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>Smartcards</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>4.5</b> KG</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>
			</ui5-table-row>
			<ui5-table-row movable>
				<ui5-table-cell><ui5-label><b>Notebook Basic 18</b><br>HT-1002</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>Technocom</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label>32 x 21 x 4 cm</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label style="color: #2b7c2b"><b>3.7</b> KG</ui5-label></ui5-table-cell>
				<ui5-table-cell><ui5-label><b>29</b> EUR</ui5-label></ui5-table-cell>
			</ui5-table-row>
		</ui5-table>
    `,
  }),
}; // TODO
