import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, ToastComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-toast</code> is a small, non-disruptive popup for success or information messages that disappears automatically after a few seconds.

<h3>Usage</h3>

<h4>When to use:</h4> <ul> <li>You want to display a short success or information message.</li> <li>You do not want to interrupt users while they are performing an action.</li> <li>You want to confirm a successful action.</li> </ul> <h4>When not to use:</h4> <ul> <li>You want to display error or warning message.</li> <li>You want to interrupt users while they are performing an action.</li> <li>You want to make sure that users read the message before they leave the page.</li> <li>You want users to be able to copy some part of the message text.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { ToastComponent } from "@ui5/webcomponents-ngx/main/toast";</code>`;
export default {
  title: 'UI5 Web Components / Main / Toast',
  component: ToastComponent,
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

export const basicToast: Story<ToastComponent> = (
  args: ToastComponent & any
) => ({
  props: args,
  template: `

		<!--Basic Toast-->
		<ui5-button id="wcBtnShowToastBasic" class="samples-margin">Basic Toast</ui5-button>
		<ui5-toast id="wcToastBasic">Basic Toast</ui5-toast>

	`,
});

export const toastDuration: Story<ToastComponent> = (
  args: ToastComponent & any
) => ({
  props: args,
  template: `

		<!--Short Toast-->
		<ui5-button id="wcBtnShowToastShort" class="samples-margin">Short Toast</ui5-button>
		<ui5-toast id="wcToastShort" duration="1500" placement="BottomStart">Short Toast</ui5-toast>

		<!--Long Toast-->
		<ui5-button id="wcBtnShowToastLong" class="samples-margin">Long Toast</ui5-button>
		<ui5-toast id="wcToastLong" duration="4500" placement="BottomEnd">Long Toast</ui5-toast>

	`,
});

export const toastPlacements: Story<ToastComponent> = (
  args: ToastComponent & any
) => ({
  props: args,
  template: `

		<!--TopStart-->
		<ui5-button id="wcBtnShowToastTS" class="samples-margin">TopStart</ui5-button>
		<ui5-toast id="wcToastTS" placement="TopStart">TopStart</ui5-toast>

		<!--TopCenter-->
		<ui5-button id="wcBtnShowToastTC" class="samples-margin">TopCenter</ui5-button>
		<ui5-toast id="wcToastTC" placement="TopCenter">TopCenter</ui5-toast>

		<!--TopEnd-->
		<ui5-button id="wcBtnShowToastTE" class="samples-margin">TopEnd</ui5-button>
		<ui5-toast id="wcToastTE" placement="TopEnd">TopEnd</ui5-toast>

		<!--MiddleStart-->
		<ui5-button id="wcBtnShowToastMS" class="samples-margin">MiddleStart</ui5-button>
		<ui5-toast id="wcToastMS" placement="MiddleStart">MiddleStart</ui5-toast>

		<!--MiddleCenter-->
		<ui5-button id="wcBtnShowToastMC" class="samples-margin">MiddleCenter</ui5-button>
		<ui5-toast id="wcToastMC" placement="MiddleCenter">MiddleCenter</ui5-toast>

		<!--MiddleEnd-->
		<ui5-button id="wcBtnShowToastME" class="samples-margin">MiddleEnd</ui5-button>
		<ui5-toast id="wcToastME" placement="MiddleEnd">MiddleEnd</ui5-toast>

		<!--BottomStart-->
		<ui5-button id="wcBtnShowToastBS" class="samples-margin">BottomStart</ui5-button>
		<ui5-toast id="wcToastBS" placement="BottomStart">BottomStart</ui5-toast>

		<!--BottomCenter-->
		<ui5-button id="wcBtnShowToastBC" class="samples-margin">BottomCenter</ui5-button>
		<ui5-toast id="wcToastBC">BottomCenter</ui5-toast>

		<!--BottomEnd-->
		<ui5-button id="wcBtnShowToastBE" class="samples-margin">BottomEnd</ui5-button>
		<ui5-toast id="wcToastBE" placement="BottomEnd">BottomEnd</ui5-toast>

	`,
});
