import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, PanelComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { PanelComponent } from "@ui5/webcomponents-ngx/main/panel";</code>`;
export default {
  title: 'UI5 Web Components / Main / Panel',
  component: PanelComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('PanelComponent', PanelComponent, description),
      },
    },
  },
} as Meta;

export const BasicPanel: StoryObj<PanelComponent> = {
  render: (args: PanelComponent & any) => ({
    props: args,
    template: `
		<ui5-panel width="100%" accessible-role="Complementary" header-text="Both expandable and expanded">
			<h1>I am a native heading!</h1>
			<ui5-label>Short text.</ui5-label>
			<br>
			<ui5-label>Another text.</ui5-label>
			<p>
				Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna. Quis velit adipisicing excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore commodo Lorem laboris nisi Lorem.
			</p>
		</ui5-panel>
	`,
  }),
};

export const PanelWithList: StoryObj<PanelComponent> = {
  render: (args: PanelComponent & any) => ({
    props: args,
    template: `
		<ui5-panel accessible-role="Complementary" header-text="Select your country">
			<ui5-list mode="MultiSelect">
				<ui5-li key="country1">Argentina</ui5-li>
				<ui5-li key="country2">Bulgaria</ui5-li>
				<ui5-li key="country3">China</ui5-li>
				<ui5-li key="country4">Germany</ui5-li>
				<ui5-li key="country5">Hungary</ui5-li>
				<ui5-li key="country6">England</ui5-li>
				<ui5-li key="country7">USA</ui5-li>
				<ui5-li key="country8">Canada</ui5-li>
			</ui5-list>
		</ui5-panel>
	`,
  }),
};

export const FixedPanelCantBeCollapsedExpanded: StoryObj<PanelComponent> = {
  render: (args: PanelComponent & any) => ({
    props: args,
    template: `
		<ui5-panel fixed accessible-role="Complementary" header-text="Country Of Birth">
			<ui5-list mode="SingleSelectBegin">
				<ui5-li key="country1">Argentina</ui5-li>
				<ui5-li key="country2">Bulgaria</ui5-li>
				<ui5-li key="country3">China</ui5-li>
				<ui5-li key="country4">Germany</ui5-li>
			</ui5-list>
		</ui5-panel>
	`,
  }),
};

export const PanelWithCustomHeader: StoryObj<PanelComponent> = {
  render: (args: PanelComponent & any) => ({
    props: args,
    template: `
		<ui5-panel accessible-role="Complementary">

			<!-- Panel header -->
			<div slot="header" class="header">
				<ui5-title level="H4">Countries</ui5-title>
				<div>
					<ui5-button design="Emphasized">Add</ui5-button>
					<ui5-button>Edit</ui5-button>
				</div>
			</div>

			<ui5-list id="myList1" mode="MultiSelect">
				<ui5-li key="country1">Argentina</ui5-li>
				<ui5-li key="country2">Bulgaria</ui5-li>
				<ui5-li key="country3">China</ui5-li>
			</ui5-list>
		</ui5-panel>

		<style>
			.header {
				display: flex;
				justify-content: space-between;
				width: 100%;
				align-items: center;
			}
		</style>
	`,
  }),
};
