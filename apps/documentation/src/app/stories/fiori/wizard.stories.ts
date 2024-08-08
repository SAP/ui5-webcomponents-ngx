import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  WizardComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-wizard</code> helps users to complete a complex task by dividing it into sections and guiding them through it. It has two main areas - a navigation area at the top showing the step sequence and a content area below it.

<h3>Structure</h3> <h4>Navigation area</h4> The top most area of the <code>ui5-wizard</code> is occupied by the navigation area. It shows the sequence of steps, where the recommended number of steps is between 3 and 8 steps. <ul> <li> Steps can have different visual representations - numbers or icons.</li> <li> Steps might have labels for better readability - titleText and subTitleText.</li> <li> Steps are defined by using the <code>ui5-wizard-step</code> as slotted element within the <code>ui5-wizard</code>.</li> </ul>

<b>Note:</b> If no selected step is defined, the first step will be auto selected. <br> <b>Note:</b> If multiple selected steps are defined, the last step will be selected.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-wizard</code> exposes the following CSS Shadow Parts: <ul> <li>navigator - Used to style the progress navigator of the <code>ui5-wizard</code>.</li> <li>step-content - Used to style a <code>ui5-wizard-step</code> container.</li> </ul>

<h3>Keyboard Handling</h3> The user can navigate using the following keyboard shortcuts: <br>

<h4>Wizard Progress Navigation</h4> <ul> <li>[LEFT], [DOWN] - Focus moves backward to the WizardProgressNavAnchors.</li> <li>[UP], [RIGHT] - Focus moves forward to the WizardProgressNavAnchor.</li> <li>[SPACE] or [ENTER], [RETURN] - Selects an active step</li> <li>[HOME] or [PAGE UP] - Focus goes to the first step</li> <li>[END] or [PAGE DOWN] - Focus goes to the last step</li> </ul>

<h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code>

<h4>Content</h4> The content occupies the main part of the page. It can hold any type of HTML elements. It's defined by using the <code>ui5-wizard-step</code> as slotted element within the <code>ui5-wizard</code>.

<h3>Scrolling</h3> The component handles user scrolling by selecting the closest step, based on the current scroll position and scrolls to particular place, when the user clicks on the step within the navigation area. <br><br>

<b>Important:</b> In order the component's scrolling behaviour to work, it has to be limited from the outside parent element in terms of height. The component or its parent has to be given percentage or absolute height. Otherwise, the component will be scrolled out with the entire page. <br><br> <b>For example:</b> <br><br> <code>&lt;ui5-dialog style="height: 80%"&gt;<br></code> <code>&#9;&lt;ui5-wizard&gt;&lt;/ui5-wizard&gt;<br></code> <code>&lt;/ui5-dialog&gt;</code>

<h4>Moving to next step</h4> The <code>ui5-wizard-step</code> provides the necessary API and it's up to the user of the component to use it to move to the next step. You have to set its <code>selected</code> property (and remove the <code>disabled</code> one if set) to <code>true</code>. The <code>ui5-wizard</code> will automatically scroll to the content of the newly selected step. <br><br>

The Fiori 3 guidelines recommends having a "nextStep" button in the content area. You can place a button, or any other type of element to trigger step change, inside the <code>ui5-wizard-step</code>, and show/hide it when certain fields are filled or user defined criteria is met.

<h3>Usage</h3> <h4>When to use:</h4> When the user has to accomplish a long or unfamiliar task.

<h4>When not to use:</h4> When the task has less than 3 steps.

<h3>Responsive Behavior</h3> On small widths the step's titleText, subtitleText and separators in the navigation area shrink and from particular point the steps are grouped together and overlap. Tapping on them will show a popover to select the step to navigate to. On mobile device, the grouped steps are presented within a dialog.

<h3>ES6 Module Import</h3> <code>import { WizardComponent } from "@ui5/webcomponents-ngx/fiori/wizard";</code> (includes <ui5-wizard-step/>)`;
export default {
  title: 'UI5 Web Components / Fiori / Wizard',
  component: WizardComponent,
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

export const wizard: Story<WizardComponent> = (
  args: WizardComponent & any
) => ({
  props: args,
  template: `
		<div style="height: 500px">
		<ui5-wizard id="wiz">
			<ui5-wizard-step icon="product" title-text="Product type" selected>
				<div style="display: flex; min-height: 200px; flex-direction: column;">
					<ui5-title>1. Product Type</ui5-title><br>

					<ui5-message-strip>
						The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
					</ui5-message-strip><br>

					<ui5-label>Sed fermentum, mi et tristique ullamcorper, sapien sapien faucibus sem, quis pretium nibh lorem malesuada diam. Nulla quis arcu aliquet, feugiat massa semper, volutpat diam. Nam vitae ante posuere, molestie neque sit amet, dapibus velit. Maecenas eleifend tempor lorem. Mauris vitae elementum mi, sed eleifend ligula. Nulla tempor vulputate dolor, nec dignissim quam convallis ut. Praesent vitae commodo felis, ut iaculis felis. Fusce quis eleifend sapien, eget facilisis nibh. Suspendisse est velit, scelerisque ut commodo eget, dignissim quis metus. Cras faucibus consequat gravida. Curabitur vitae quam felis. Phasellus ac leo eleifend, commodo tortor et, varius quam. Aliquam erat volutpat.
					</ui5-label>
				</div>
			</ui5-wizard-step>

			<ui5-wizard-step icon="hint" title-text="Product Information">
				<div style="display: flex;flex-direction: column">
					<ui5-title>2. Product Information</ui5-title><br>
					<ui5-label>
						Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
					</ui5-label>

					<div style="display: flex; flex-direction: column;">
						<div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
							<ui5-label>Name</ui5-label>
							<ui5-input placeholder="product name..."></ui5-input>
						</div>

						<div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
							<ui5-label>Weight</ui5-label>
							<ui5-input value="3.65"></ui5-input>
						</div>

						<div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
							<ui5-label>Manifacturer</ui5-label>
							<ui5-select>
								<ui5-option selected>Apple</ui5-option>
								<ui5-option>Samsung</ui5-option>
								<ui5-option>Huawei</ui5-option>
							</ui5-select>
						</div>

						<div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
							<ui5-label>5 years guarantee included</ui5-label>
							<ui5-switch id="sw"></ui5-switch>
						</div>
					</div>
				</div>

				<ui5-button id="toStep3" design="Emphasized" hidden>Step 3</ui5-button>
			</ui5-wizard-step>

			<ui5-wizard-step icon="action-settings" title-text="Options">
				<div style="display: flex; flex-direction: column;">
					<ui5-title>3. Options</ui5-title><br>

					<ui5-label>
						Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
					</ui5-label>
					<ui5-message-strip>
						The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
					</ui5-message-strip><br>

					<div style="display: flex; flex-direction: column;">
						<div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
							<ui5-label>Manifacture date</ui5-label>
							<ui5-date-picker></ui5-date-picker>
						</div>

						<div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
							<ui5-label>Availability</ui5-label>
							<ui5-segmented-button id="segButton1">
								<ui5-segmented-button-item icon="employee" selected>In stock</ui5-segmented-button-item>
								<ui5-segmented-button-item>In depot</ui5-segmented-button-item>
								<ui5-segmented-button-item>Damaged</ui5-segmented-button-item>
								<ui5-segmented-button-item>Out of stock</ui5-segmented-button-item>
							</ui5-segmented-button>
						</div>

						<div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
							<ui5-label>Size</ui5-label>
							<ui5-segmented-button id="sb">
								<ui5-segmented-button-item icon="employee" selected>Small</ui5-segmented-button-item>
								<ui5-segmented-button-item>Medium</ui5-segmented-button-item>
								<ui5-segmented-button-item>Large</ui5-segmented-button-item>
							</ui5-segmented-button>
						</div>
					</div>
				</div>
			</ui5-wizard-step>

			<ui5-wizard-step icon="lead" title-text="Pricing">
				<div style="display: flex; flex-direction: column;">
					<ui5-title>4. Pricing</ui5-title><br>
					<ui5-label>
						Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien
					</ui5-label>
					<ui5-message-strip>
						The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with.
					</ui5-message-strip><br>

					<div style="display: flex; flex-direction: column;">
						<div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
							<ui5-label>Price</ui5-label>
							<ui5-input placeholder="product price..."></ui5-input>
						</div>

						<div style="display: flex; flex-direction: row; justify-content: flex-end; align-items: center; margin-top: 1rem">
							<ui5-label>Quantity</ui5-label>
							<ui5-input placeholder="product quantity..."></ui5-input>
						</div>

						<div style="display: flex; flex-direction: row; margin-top: 1rem; justify-content: flex-end; align-items: center;">
							<ui5-label>Vat included</ui5-label>
							<ui5-switch checked></ui5-switch>
						</div>
					</div>
				</div>

				<ui5-button id="finalize" design="Emphasized">Finalize</ui5-button>
			</ui5-wizard-step>
		</ui5-wizard>
		</div>
	`,
});
