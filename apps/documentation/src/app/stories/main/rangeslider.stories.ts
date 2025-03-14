import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { RangeSliderComponent } from '@ui5/webcomponents-ngx/main/range-slider';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { RangeSliderComponent } from "@ui5/webcomponents-ngx/main/range-slider";</code>`;
export default {
  title: 'UI5 Web Components / Main / RangeSlider',
  component: RangeSliderComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('RangeSliderComponent', RangeSliderComponent, description),
      },
    },
  },
} as Meta;

export const BasicRangeSlider: StoryObj<RangeSliderComponent> = {
  render: (args: RangeSliderComponent & any) => ({
    props: args,
    template: `
		<ui5-range-slider [startValue]="10" [endValue]="50"></ui5-range-slider>
	`,
  }),
};

export const RangeSliderWithCustomMinMaxStartValueAndEndValueProperties: StoryObj<RangeSliderComponent> =
  {
    render: (args: RangeSliderComponent & any) => ({
      props: args,
      template: `
		<ui5-range-slider [min]="100" [max]="200" [startValue]="120" [endValue]="150"></ui5-range-slider>
	`,
    }),
  };

export const RangeSliderWithTooltips: StoryObj<RangeSliderComponent> = {
  render: (args: RangeSliderComponent & any) => ({
    props: args,
    template: `
		<ui5-range-slider [startValue]="3" [endValue]="13" show-tooltip></ui5-range-slider>
	`,
  }),
};

export const RangeSliderWithTickmarksAndCustomStep: StoryObj<RangeSliderComponent> =
  {
    render: (args: RangeSliderComponent & any) => ({
      props: args,
      template: `
		<ui5-range-slider step="2" [startValue]="12" [endValue]="24" show-tickmarks></ui5-range-slider>
	`,
    }),
  };

export const RangeSliderWithTooltipsTickmarksAndLabels: StoryObj<RangeSliderComponent> =
  {
    render: (args: RangeSliderComponent & any) => ({
      props: args,
      template: `
		<ui5-range-slider [min]="0" [max]="112" [step]="2" [startValue]="4" [endValue]="12" show-tooltip [labelInterval]="2" show-tickmarks></ui5-range-slider>
	`,
    }),
  };
