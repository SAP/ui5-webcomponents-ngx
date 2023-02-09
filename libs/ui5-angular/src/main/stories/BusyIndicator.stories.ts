import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { BusyIndicatorDirective } from '../directives/busy-indicator';

export default {
  component: BusyIndicatorDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const busyIndicatorWithDifferentSize: Story = (args) => ({
  props: args,
  template: `
        <ui5-busy-indicator active="" size="Small"></ui5-busy-indicator>
			<ui5-busy-indicator active="" size="Medium"></ui5-busy-indicator>
			<ui5-busy-indicator active="" size="Large"></ui5-busy-indicator>
      `,
});

export const busyIndicatorWrappingOtherElements: Story = (args) => ({
  props: args,
  template: `
        <ui5-button id="fetch-btn" style="width: 120px;">Fetch List Data</ui5-button>

		<ui5-busy-indicator id="busy-container" size="Medium">
			<ui5-list id="fetch-list" no-data-text="No Data" header-text="Available Items"></ui5-list>
		</ui5-busy-indicator>
      `,
});
