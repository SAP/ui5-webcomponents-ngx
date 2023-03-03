import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { ToastDirective } from '../directives/toast';

export default {
  component: ToastDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicToast: Story = (args) => ({
  props: args,
  template: `
        <!--Basic Toast-->
		<ui5-button id="wcBtnShowToastBasic" class="samples-margin">Basic Toast</ui5-button>
		<ui5-toast id="wcToastBasic">Basic Toast</ui5-toast>
      `,
});

export const toastDuration: Story = (args) => ({
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

export const toastPlacements: Story = (args) => ({
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
