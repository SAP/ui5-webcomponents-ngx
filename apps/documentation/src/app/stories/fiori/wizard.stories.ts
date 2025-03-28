import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { WizardComponent } from '@ui5/webcomponents-ngx/fiori/wizard';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { WizardComponent } from "@ui5/webcomponents-ngx/fiori/wizard";</code>`;
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
        component: extractDescription('WizardComponent', WizardComponent, description),
      },
    },
  },
} as Meta;

export const Wizard: StoryObj<WizardComponent> = {
  render: (args) => ({
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
  }),
};
