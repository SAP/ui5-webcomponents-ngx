import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, PanelComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-panel</code> component is a container which has a header and a content area and is used for grouping and displaying information. It can be collapsed to save space on the screen.

<h3>Guidelines:</h3> <ul> <li>Nesting two or more panels is not recommended.</li> <li>Do not stack too many panels on one page.</li> </ul>

<h3>Structure</h3> The panel's header area consists of a title bar with a header text or custom header. <br> The header is clickable and can be used to toggle between the expanded and collapsed state. It includes an icon which rotates depending on the state. <br> The custom header can be set through the <code>header</code> slot and it may contain arbitraray content, such as: title, buttons or any other HTML elements. <br> The content area can contain an arbitrary set of controls. <br><b>Note:</b> The custom header is not clickable out of the box, but in this case the icon is interactive and allows to show/hide the content area.

<h3>Responsive Behavior</h3> <ul> <li>If the width of the panel is set to 100% (default), the panel and its children are resized responsively, depending on its parent container.</li> <li>If the panel has a fixed height, it will take up the space even if the panel is collapsed.</li> <li>When the panel is expandable (the <code>fixed</code> property is set to <code>false</code>), an arrow icon (pointing to the right) appears in front of the header.</li> <li>When the animation is activated, expand/collapse uses a smooth animation to open or close the content area.</li> <li>When the panel expands/collapses, the arrow icon rotates 90 degrees clockwise/counter-clockwise.</li> </ul>

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-panel</code> exposes the following CSS Shadow Parts: <ul> <li>header - Used to style the wrapper of the header</li> <li>content - Used to style the wrapper of the content</li> </ul>

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

<h3>ES6 Module Import</h3>

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
        component: description,
      },
    },
  },
} as Meta;

export const basicPanel: Story<PanelComponent> = (
  args: PanelComponent & any
) => ({
  props: args,
  template: `
		<ui5-panel width="100%" accessible-role="Complementary" header-text="Both expandable and expanded">
			<h1>I am a native heading!</h1>
			<ui5-label wrapping-type="Normal">Short text.</ui5-label>
			<br>
			<ui5-label wrapping-type="Normal">Another text.</ui5-label>
			<p>
				Aute ullamco officia fugiat culpa do tempor tempor aute excepteur magna. Quis velit adipisicing excepteur do eu duis elit. Sunt ea pariatur nulla est laborum proident sunt labore commodo Lorem laboris nisi Lorem.
			</p>
		</ui5-panel>
	`,
});

export const panelWithList: Story<PanelComponent> = (
  args: PanelComponent & any
) => ({
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
});

export const fixedPanelCantBeCollapsedExpanded: Story<PanelComponent> = (
  args: PanelComponent & any
) => ({
  props: args,
  template: `
		<ui5-panel [fixed]="true" accessible-role="Complementary" header-text="Country Of Birth">
			<ui5-list mode="SingleSelectBegin">
				<ui5-li key="country1">Argentina</ui5-li>
				<ui5-li key="country2">Bulgaria</ui5-li>
				<ui5-li key="country3">China</ui5-li>
				<ui5-li key="country4">Germany</ui5-li>
			</ui5-list>
		</ui5-panel>
	`,
});

export const panelWithCustomHeader: Story<PanelComponent> = (
  args: PanelComponent & any
) => ({
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
});
