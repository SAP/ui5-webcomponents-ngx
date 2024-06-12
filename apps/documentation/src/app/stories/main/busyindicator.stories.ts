import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  BusyIndicatorComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-busy-indicator</code> signals that some operation is going on and that the user must wait. It does not block the current UI screen so other operations could be triggered in parallel. It displays 3 dots and each dot expands and shrinks at a different rate, resulting in a cascading flow of animation.

<h3>Usage</h3> For the <code>ui5-busy-indicator</code> you can define the size, the text and whether it is shown or hidden. In order to hide it, use the "active" property. <br><br> In order to show busy state over an HTML element, simply nest the HTML element in a <code>ui5-busy-indicator</code> instance. <br> <b>Note:</b> Since <code>ui5-busy-indicator</code> has <code>display: inline-block;</code> by default and no width of its own, whenever you need to wrap a block-level element, you should set <code>display: block</code> to the busy indicator as well.

<h4>When to use:</h4> <ul> <li>The user needs to be able to cancel the operation.</li> <li>Only part of the application or a particular component is affected.</li> </ul>

<h4>When not to use:</h4> <ul> <li>The operation takes less than one second.</li> <li>You need to block the screen and prevent the user from starting another activity.</li> <li>Do not show multiple busy indicators at once.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { BusyIndicatorComponent } from "@ui5/webcomponents-ngx/main/busy-indicator";</code>`;
export default {
  title: 'UI5 Web Components / Main / BusyIndicator',
  component: BusyIndicatorComponent,
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

export const busyIndicatorWithDifferentSize: Story<BusyIndicatorComponent> = (
  args: BusyIndicatorComponent & any
) => ({
  props: args,
  template: `
			<ui5-busy-indicator [active]="true" size="S"></ui5-busy-indicator>
			<ui5-busy-indicator [active]="true" size="M"></ui5-busy-indicator>
			<ui5-busy-indicator [active]="true" size="L"></ui5-busy-indicator>
		`,
});

export const busyIndicatorWrappingOtherElements: Story<
  BusyIndicatorComponent
> = (args: BusyIndicatorComponent & any) => ({
  props: args,
  template: `
		<ui5-button id="fetch-btn" style="width: 120px;">Fetch List Data</ui5-button>

		<ui5-busy-indicator id="busy-container" size="M">
			<ui5-list id="fetch-list" no-data-text="No Data" header-text="Available Items"></ui5-list>
		</ui5-busy-indicator>

	`,
});
