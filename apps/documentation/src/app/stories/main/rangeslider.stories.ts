import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  RangeSliderComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview

Represents a numerical interval and two handles (grips) to select a sub-range within it. The purpose of the component to enable visual selection of sub-ranges within a given interval.

### Structure

The most important properties of the Range Slider are: <ul> <li>min - The minimum value of the slider range.</li> <li>max - The maximum value of the slider range.</li> <li>value - The current value of the slider.</li> <li>step - Determines the increments in which the slider will move.</li> <li>showTooltip - Determines if a tooltip should be displayed above the handle.</li> <li>showTickmarks - Displays a visual divider between the step values.</li> <li>labelInterval - Labels some or all of the tickmarks with their values.</li> </ul> <h4>Notes:</h4> <ul> <li>The right and left handle can be moved individually and their positions could therefore switch.</li> <li>The entire range can be moved along the interval.</li> </ul> ### Usage The most common use case is to select and move sub-ranges on a continuous numerical scale.

### Responsive Behavior

You can move the currently selected range by clicking on it and dragging it along the interval.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-range-slider</code> exposes the following CSS Shadow Parts: <ul> <li>progress-container - Used to style the progress container(the horizontal bar which visually represents the range between the minimum and maximum value) of the <code>ui5-range-slider</code>.</li> <li>progress-bar - Used to style the progress bar, which shows the progress of the <code>ui5-range-slider</code>.</li> <li>handle - Used to style the handles of the <code>ui5-range-slider</code>.</li> </ul>

### Keyboard Handling

<ul> <li><code>Left or Down Arrow</code> - Moves a component's handle or the entire selection one step to the left;</li> <li><code>Right or Up Arrow</code> - Moves a component's handle or the entire selection one step to the right;</li> <li><code>Left or Down Arrow + Ctrl/Cmd</code> - Moves a component's handle to the left or the entire range with step equal to 1/10th of the entire range;</li> <li><code>Right or Up Arrow + Ctrl/Cmd</code> - Moves a component's handle to the right or the entire range with step equal to 1/10th of the entire range;</li> <li><code>Plus</code> - Same as <code>Right or Up Arrow</code>;</li> <li><code>Minus</code> - Same as <code>Left or Down Arrow</code>;</li> <li><code>Home</code> - Moves the entire selection or the selected handle to the beginning of the component's range;</li> <li><code>End</code> - Moves the entire selection or the selected handle to the end of the component's range;</li> <li><code>Page Up</code> - Same as <code>Right or Up Arrow + Ctrl/Cmd</code>;</li> <li><code>Page Down</code> - Same as <code>Left or Down Arrow + Ctrl/Cmd</code>;</li> <li><code>Escape</code> - Resets the <code>startValue</code> and <code>endValue</code> properties to the values prior the component focusing;</li> </ul>

### ES6 Module Import

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
        component: description,
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
