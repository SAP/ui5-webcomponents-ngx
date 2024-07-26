import { Meta, moduleMetadata } from '@storybook/angular';
import { CardComponent, Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-card</code> is a component that represents information in the form of a tile with separate header and content areas. The content area of a <code>ui5-card</code> can be arbitrary HTML content. The header can be used through slot <code>header</code>. For which there is a <code>ui5-card-header</code> component to achieve the card look and fill.

Note: We recommend the usage of <code>ui5-card-header</code> for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.

<h3>ES6 Module Import</h3>

<code>import { CardComponent } from "@ui5/webcomponents-ngx/main/card";</code> (for <code>ui5-card-header</code>)`;
export default {
  title: 'UI5 Web Components / Main / Card',
  component: CardComponent,
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

export const cardWithList = (
  args: CardComponent & any
) => ({
  props: args,
  template: `
		<ui5-card class="medium">
			<ui5-card-header slot="header" title-text="Team Space" subtitle-text="Direct Reports" status="3 of 10">
				<ui5-icon name="group" slot="avatar"></ui5-icon>
				<ui5-button design="Transparent" slot="action">View All</ui5-button>
			</ui5-card-header>

			<div class="card-content">
				<ui5-list separators="None" class="card-content-child" style="width: 100%; margin-bottom: 0.75rem;">
					<ui5-li icon="navigation-right-arrow" icon-end>
						Jennifer
						<img slot="image" src="../../../assets/images/avatars/woman_avatar_3.png" />
					</ui5-li>

					<ui5-li icon="navigation-right-arrow" icon-end>
						Lora
						<img slot="image" src="../../../assets/images/avatars/woman_avatar_4.png" />
					</ui5-li>

					<ui5-li icon="navigation-right-arrow" icon-end>
						Carlotta
						<img slot="image" src="../../../assets/images/avatars/woman_avatar_5.png" />
					</ui5-li>
				</ui5-list>

			</div>
		</ui5-card>
		<ui5-card class="medium">
			<ui5-card-header slot="header" title-text="This header is interactive" interactive subtitle-text="Click, press Enter or Space" status="3 of 6">
				<ui5-icon name="group" slot="avatar"></ui5-icon>
			</ui5-card-header>

			<div class="card-content">
				<ui5-list separators="None" class="card-content-child" style="width: 100%; margin-bottom: 0.75rem;">
					<ui5-li icon="navigation-right-arrow" icon-end>
						Clark
						<img slot="image" src="../../../assets/images/avatars/man_avatar_1.png" />
					</ui5-li>

					<ui5-li icon="navigation-right-arrow" icon-end>
						Ellen
						<img slot="image" src="../../../assets/images/avatars/woman_avatar_1.png" />
					</ui5-li>

					<ui5-li icon="navigation-right-arrow" icon-end>
						Adam
						<img slot="image" src="../../../assets/images/avatars/man_avatar_2.png" />
					</ui5-li>
				</ui5-list>
			</div>
		</ui5-card>
	`,
});

export const cardWithTable = (
  args: CardComponent & any
) => ({
  props: args,
  template: `
		<ui5-card>
			<ui5-card-header slot="header" title-text="New Purchase Orders" subtitle-text="Today" status="3 of 15">
			</ui5-card-header>

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

		</ui5-card>
	`,
});

export const cardWithTimeline = (
  args: CardComponent & any
) => ({
  props: args,
  template: `
		<ui5-card class="medium">
			<ui5-card-header slot="header" title-text="Upcoming Activities" subtitle-text="For Today">
			</ui5-card-header>
			<ui5-timeline>
				<ui5-timeline-item id="test-item" title-text="called" timestamp="1487583000000" icon="phone" name="John Smith" name-clickable></ui5-timeline-item>
				<ui5-timeline-item title-text="Weekly Sync - CP Design" timestamp="1517349600000" icon="calendar">
					MR SOF02 2.43
				</ui5-timeline-item>
				<ui5-timeline-item title-text="Video Converence Call - UI5" timestamp="1485813600000" icon="calendar">
					Online meeting
				</ui5-timeline-item>
			</ui5-timeline>
		</ui5-card>
	`,
});

export const moreCards = (args) =>({
  props: args,
  template: `
		<ui5-card class="small">
			<ui5-card-header slot="header" title-text="David Williams" subtitle-text="Sales Manager">
				<img src="../../../assets/images/avatars/man_avatar_1.png" slot="avatar">
			</ui5-card-header>

			<ui5-list separators="Inner">
				<ui5-li icon="competitor" icon-end>Personal Development</ui5-li>
				<ui5-li icon="wallet" icon-end>Finance</ui5-li>
				<ui5-li icon="collaborate" icon-end>Communications Skills</ui5-li>
			</ui5-list>
		</ui5-card>

		<ui5-card class="small">
			<ui5-card-header slot="header" title-text="Project Cloud Transformation" subtitle-text="Revenue per Product | EUR" status="3 of 3"></ui5-card-header>
			<ui5-list separators="None">
				<ui5-li description="ID234522566-D44" additional-text="27.25K EUR" additional-text-state="Positive">Avantel</ui5-li>
				<ui5-li description="ID7125852785-A51" additional-text="22.89K EUR" additional-text-state="Critical">Telecomunicaciones Star</ui5-li>
				<ui5-li description="ID123555587-I05" additional-text="7.85K EUR" additional-text-state="Negative">Talpa</ui5-li>
			</ui5-list>
		</ui5-card>

		<ui5-card class="small">
			<ui5-card-header slot="header" title-text="Dona Maria Moore" subtitle-text="Senior Sales Executive">
				<img src="../../../assets/images/avatars/man_avatar_1.png" slot="avatar">
			</ui5-card-header>

			<div class="content content-padding">
				<ui5-title level="H5" style="padding-bottom: 1rem;">Contact details</ui5-title>

				<div class="content-group">
					<ui5-label>Company Name</ui5-label>
					<ui5-title level="H6">Company A</ui5-title>
				</div>

				<div class="content-group">
					<ui5-label>Address</ui5-label>
					<ui5-title level="H6">481 West Street, Anytown 45066, USA</ui5-title>
				</div>

				<div class="content-group">
					<ui5-label>Website</ui5-label>
					<ui5-link target="_blank">www.company_a.example.com</ui5-link>
				</div>
			</div>
		</ui5-card>

		<style>
			.content,
			.content-group {
				display: flex;
				flex-direction: column;
				padding-block-end: 1rem;
			}
			.content-padding {
				padding: 0.5rem 1rem 0 1rem;
				box-sizing: border-box;
			}
			.grid-container {
				display: grid;
				grid-template-columns: repeat(auto-fill, 22rem);
				grid-auto-rows: 1fr;
				gap: 1rem;
			}
		</style>
	`,
});
