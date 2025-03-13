import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ToastComponent } from '@ui5/webcomponents-ngx/main/toast';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

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
        component: extractDescription('ToastComponent', ToastComponent, description),
      },
    },
  },
} as Meta;

export const BasicToast: StoryObj<ToastComponent> = {
  render: (args: ToastComponent & any) => ({
    props: args,
    template: `
		<ui5-button (click)="toast.open=true">Basic Toast</ui5-button>
		<ui5-toast #toast="ui5Toast" placement="MiddleCenter">Basic Toast</ui5-toast>
	`,
  }),
};

export const ToastDuration: StoryObj<ToastComponent> = {
  render: (args: ToastComponent & any) => ({
    props: args,
    template: `
		<!--Short Toast-->
		<ui5-button (click)="toast1.open=true">Short Toast</ui5-button>
		<ui5-toast #toast1="ui5Toast" duration="1500" placement="MiddleCenter">Short Toast</ui5-toast>

		<!--Long Toast-->
		<ui5-button (click)="toast2.open=true">Long Toast</ui5-button>
		<ui5-toast #toast2="ui5Toast" duration="4500" placement="MiddleEnd">Long Toast</ui5-toast>
	`,
  }),
};

export const ToastPlacements: StoryObj<ToastComponent> = {
  render: (args: ToastComponent & any) => ({
    props: args,
    template: `
		<!--MiddleCenter-->
		<ui5-button (click)="toast5.open=true">MiddleCenter</ui5-button>
		<ui5-toast #toast5="ui5Toast" placement="MiddleCenter">MiddleCenter</ui5-toast>

		<!--MiddleEnd-->
		<ui5-button (click)="toast6.open=true">MiddleEnd</ui5-button>
		<ui5-toast #toast6="ui5Toast" placement="MiddleEnd">MiddleEnd</ui5-toast>
	`,
  }),
};
