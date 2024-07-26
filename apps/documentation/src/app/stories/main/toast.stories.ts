import { Meta, moduleMetadata } from '@storybook/angular';
import { ToastComponent, Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
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

export const basicToast = (
  args: ToastComponent & any
) => ({
  props: args,
  template: `
		<ui5-button (click)="toast.open=true">Basic Toast</ui5-button>
		<ui5-toast #toast="ui5Toast" placement="MiddleCenter">Basic Toast</ui5-toast>
	`,
});

export const toastDuration = (
  args: ToastComponent & any
) => ({
  props: args,
  template: `
		<!--Short Toast-->
		<ui5-button (click)="toast1.open=true">Short Toast</ui5-button>
		<ui5-toast #toast1="ui5Toast" duration="1500" placement="MiddleCenter">Short Toast</ui5-toast>

		<!--Long Toast-->
		<ui5-button (click)="toast2.open=true">Long Toast</ui5-button>
		<ui5-toast #toast2="ui5Toast" duration="4500" placement="MiddleEnd">Long Toast</ui5-toast>
	`,
});

export const toastPlacements = (
  args: ToastComponent & any
) => ({
  props: args,
  template: `
		<!--MiddleCenter-->
		<ui5-button (click)="toast5.open=true">MiddleCenter</ui5-button>
		<ui5-toast #toast5="ui5Toast" placement="MiddleCenter">MiddleCenter</ui5-toast>

		<!--MiddleEnd-->
		<ui5-button (click)="toast6.open=true">MiddleEnd</ui5-button>
		<ui5-toast #toast6="ui5Toast" placement="MiddleEnd">MiddleEnd</ui5-toast>
	`,
});
