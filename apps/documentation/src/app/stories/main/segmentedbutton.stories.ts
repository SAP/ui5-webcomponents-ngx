import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / SegmentedButton',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicSegmentedButton: Story = (args) => ({
  props: args,
  template: `
        <ui5-segmented-button accessible-name="Geographic location">
            <ui5-segmented-button-item>Map</ui5-segmented-button-item>
            <ui5-segmented-button-item pressed="">Satellite</ui5-segmented-button-item>
            <ui5-segmented-button-item>Terrain</ui5-segmented-button-item>
        </ui5-segmented-button>
	`,
});

export const segmentedButtonWithIcons: Story = (args) => ({
  props: args,
  template: `
		<ui5-segmented-button>
			<ui5-segmented-button-item icon="employee" pressed=""></ui5-segmented-button-item>
			<ui5-segmented-button-item icon="menu"></ui5-segmented-button-item>
			<ui5-segmented-button-item icon="factory"></ui5-segmented-button-item>
		</ui5-segmented-button>
	`,
});

export const segmentedButtonWith5SegmentedButtonItems: Story = (args) => ({
  props: args,
  template: `
		<ui5-segmented-button>
			<ui5-segmented-button-item>Item</ui5-segmented-button-item>
			<ui5-segmented-button-item pressed="">Pressed SegmentedButtonItem With Bigger Text</ui5-segmented-button-item>
			<ui5-segmented-button-item>Item</ui5-segmented-button-item>
			<ui5-segmented-button-item>SegmentedButtonItem</ui5-segmented-button-item>
			<ui5-segmented-button-item>Press me</ui5-segmented-button-item>
		</ui5-segmented-button>
	`,
});
