import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SliderComponent } from '@ui5/webcomponents-ngx/main/slider';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { SliderComponent } from "@ui5/webcomponents-ngx/main/slider";</code>`;
export default {
  title: 'UI5 Web Components / Main / Slider',
  component: SliderComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('SliderComponent', SliderComponent, description),
      },
    },
  },
} as Meta;

export const BasicSlider: StoryObj<SliderComponent> = {
  render: (args: SliderComponent & any) => ({
    props: args,
    template: `
		<ui5-slider [value]="30"></ui5-slider>
	`,
  }),
};

export const SliderWithTooltip: StoryObj<SliderComponent> = {
  render: (args: SliderComponent & any) => ({
    props: args,
    template: `
		<ui5-slider [min]="0" [max]="20" [value]="10" show-tooltip></ui5-slider>
	`,
  }),
};

export const DisabledSliderWithTickmarksAndLabels: StoryObj<SliderComponent> = {
  render: (args: SliderComponent & any) => ({
    props: args,
    template: `
		<ui5-slider [min]="20" [max]="100" [labelInterval]="5" disabled show-tickmarks></ui5-slider>
	`,
  }),
};

export const SliderTooltipTickmarksAndLabels: StoryObj<SliderComponent> = {
  render: (args: SliderComponent & any) => ({
    props: args,
    template: `
		<ui5-slider [min]="-20" [max]="20" step="2" [value]="12" show-tooltip [labelInterval]="2" show-tickmarks></ui5-slider>
	`,
  }),
};
