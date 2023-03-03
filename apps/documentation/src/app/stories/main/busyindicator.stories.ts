import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / BusyIndicator',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
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
