import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  RangeSliderComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> Represents a numerical interval and two handles (grips) to select a sub-range within it. The purpose of the component to enable visual selection of sub-ranges within a given interval.

<h3>Structure</h3> The most important properties of the Range Slider are: <ul> <li>min - The minimum value of the slider range.</li> <li>max - The maximum value of the slider range.</li> <li>value - The current value of the slider.</li> <li>step - Determines the increments in which the slider will move.</li> <li>showTooltip - Determines if a tooltip should be displayed above the handle.</li> <li>showTickmarks - Displays a visual divider between the step values.</li> <li>labelInterval - Labels some or all of the tickmarks with their values.</li> </ul> <h4>Notes:</h4> <ul> <li>The right and left handle can be moved individually and their positions could therefore switch.</li> <li>The entire range can be moved along the interval.</li> </ul> <h3>Usage</h3> The most common use case is to select and move sub-ranges on a continuous numerical scale.

<h3>Responsive Behavior</h3> You can move the currently selected range by clicking on it and dragging it along the interval.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-range-slider</code> exposes the following CSS Shadow Parts: <ul> <li>progress-container - Used to style the progress container(the horizontal bar which visually represents the range between the minimum and maximum value) of the <code>ui5-range-slider</code>.</li> <li>progress-bar - Used to style the progress bar, which shows the progress of the <code>ui5-range-slider</code>.</li> <li>handle - Used to style the handles of the <code>ui5-range-slider</code>.</li> </ul>

<h3>Keyboard Handling</h3>

<ul> <li><code>Left or Down Arrow</code> - Moves a component's handle or the entire selection one step to the left;</li> <li><code>Right or Up Arrow</code> - Moves a component's handle or the entire selection one step to the right;</li> <li><code>Left or Down Arrow + Ctrl/Cmd</code> - Moves a component's handle to the left or the entire range with step equal to 1/10th of the entire range;</li> <li><code>Right or Up Arrow + Ctrl/Cmd</code> - Moves a component's handle to the right or the entire range with step equal to 1/10th of the entire range;</li> <li><code>Plus</code> - Same as <code>Right or Up Arrow</code>;</li> <li><code>Minus</code> - Same as <code>Left or Down Arrow</code>;</li> <li><code>Home</code> - Moves the entire selection or the selected handle to the beginning of the component's range;</li> <li><code>End</code> - Moves the entire selection or the selected handle to the end of the component's range;</li> <li><code>Page Up</code> - Same as <code>Right or Up Arrow + Ctrl/Cmd</code>;</li> <li><code>Page Down</code> - Same as <code>Left or Down Arrow + Ctrl/Cmd</code>;</li> <li><code>Escape</code> - Resets the <code>startValue</code> and <code>endValue</code> properties to the values prior the component focusing;</li> </ul>

<h3>ES6 Module Import</h3>

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

export const basicRangeSlider: Story<RangeSliderComponent> = (
  args: RangeSliderComponent & any
) => ({
  props: args,
  template: `
		<ui5-range-slider end-value="20"></ui5-range-slider>
	`,
});

export const rangeSliderWithCustomMinMaxStartValueAndEndValueProperties: Story<
  RangeSliderComponent
> = (args: RangeSliderComponent & any) => ({
  props: args,
  template: `
		<ui5-range-slider min="100" max="200" start-value="120" end-value="150"></ui5-range-slider>
	`,
});

export const rangeSliderWithTooltips: Story<RangeSliderComponent> = (
  args: RangeSliderComponent & any
) => ({
  props: args,
  template: `
		<ui5-range-slider start-value="3" end-value="13" show-tooltip=""></ui5-range-slider>
	`,
});

export const rangeSliderWithTickmarksAndCustomStep: Story<
  RangeSliderComponent
> = (args: RangeSliderComponent & any) => ({
  props: args,
  template: `
		<ui5-range-slider step="2" start-value="12" end-value="24" show-tickmarks=""></ui5-range-slider>
	`,
});

export const rangeSliderWithTooltipsTickmarksAndLabels: Story<
  RangeSliderComponent
> = (args: RangeSliderComponent & any) => ({
  props: args,
  template: `
		<ui5-range-slider min="0" max="112" step="2" start-value="4" end-value="12" show-tooltip="" label-interval="2" show-tickmarks=""></ui5-range-slider>
	`,
});
