import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / Slider',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicSlider: Story = (args) => ({
  props: args,
  template: `
		<ui5-slider></ui5-slider>
	`,
});

export const sliderWithTooltip: Story = (args) => ({
  props: args,
  template: `
		<ui5-slider min="0" max="20" show-tooltip=""></ui5-slider>
	`,
});

export const disabledSliderWithTickmarksAndLabels: Story = (args) => ({
  props: args,
  template: `
		<ui5-slider min="20" max="100" label-interval="5" disabled="" show-tickmarks=""></ui5-slider>
	`,
});

export const sliderTooltipTickmarksAndLabels: Story = (args) => ({
  props: args,
  template: `
		<ui5-slider min="-20" max="20" step="2" value="12" show-tooltip="" label-interval="2" show-tickmarks=""></ui5-slider>
	`,
});
