import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  SliderComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> The Slider component represents a numerical range and a handle (grip). The purpose of the component is to enable visual selection of a value in a continuous numerical range by moving an adjustable handle.

<h3>Structure</h3> The most important properties of the Slider are: <ul> <li>min - The minimum value of the slider range.</li> <li>max - The maximum value of the slider range.</li> <li>value - The current value of the slider range.</li> <li>step - Determines the increments in which the slider will move.</li> <li>showTooltip - Determines if a tooltip should be displayed above the handle.</li> <li>showTickmarks - Displays a visual divider between the step values.</li> <li>labelInterval - Labels some or all of the tickmarks with their values.</li> </ul>

<h3>Usage</h3> The most common use case is to select values on a continuous numerical scale (e.g. temperature, volume, etc. ).

<h3>Responsive Behavior</h3> The <code>ui5-slider</code> component adjusts to the size of its parent container by recalculating and resizing the width of the control. You can move the slider handle in several different ways: <ul> <li>Drag and drop the handle to the desired value.</li> <li>Click/tap on the range bar to move the handle to that location.</li> </ul>

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-slider</code> exposes the following CSS Shadow Parts: <ul> <li>progress-container - Used to style the progress container(the horizontal bar which visually represents the range between the minimum and maximum value) of the <code>ui5-slider</code>.</li> <li>progress-bar - Used to style the progress bar, which shows the progress of the <code>ui5-slider</code>.</li> <li>handle - Used to style the handle of the <code>ui5-slider</code>.</li> </ul>

<h3>Keyboard Handling</h3>

<ul> <li><code>Left or Down Arrow</code> - Moves the handle one step to the left, effectively decreasing the component's value by <code>step</code> amount;</li> <li><code>Right or Up Arrow</code> - Moves the handle one step to the right, effectively increasing the component's value by <code>step</code> amount;</li> <li><code>Left or Down Arrow + Ctrl/Cmd</code> - Moves the handle to the left with step equal to 1/10th of the entire range, effectively decreasing the component's value by 1/10th of the range;</li> <li><code>Right or Up Arrow + Ctrl/Cmd</code> - Moves the handle to the right with step equal to 1/10th of the entire range, effectively increasing the component's value by 1/10th of the range;</li> <li><code>Plus</code> - Same as <code>Right or Up Arrow</code>;</li> <li><code>Minus</code> - Same as <code>Left or Down Arrow</code>;</li> <li><code>Home</code> - Moves the handle to the beginning of the range;</li> <li><code>End</code> - Moves the handle to the end of the range;</li> <li><code>Page Up</code> - Same as <code>Right or Up + Ctrl/Cmd</code>;</li> <li><code>Page Down</code> - Same as <code>Left or Down + Ctrl/Cmd</code>;</li> <li><code>Escape</code> - Resets the value property after interaction, to the position prior the component's focusing;</li> </ul>

<h3>ES6 Module Import</h3>

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
        component: description,
      },
    },
  },
} as Meta;

export const basicSlider: Story<SliderComponent> = (
  args: SliderComponent & any
) => ({
  props: args,
  template: `
		<ui5-slider></ui5-slider>
	`,
});

export const sliderWithTooltip: Story<SliderComponent> = (
  args: SliderComponent & any
) => ({
  props: args,
  template: `
		<ui5-slider min="0" max="20" show-tooltip=""></ui5-slider>
	`,
});

export const disabledSliderWithTickmarksAndLabels: Story<SliderComponent> = (
  args: SliderComponent & any
) => ({
  props: args,
  template: `
		<ui5-slider min="20" max="100" label-interval="5" disabled="" show-tickmarks=""></ui5-slider>
	`,
});

export const sliderTooltipTickmarksAndLabels: Story<SliderComponent> = (
  args: SliderComponent & any
) => ({
  props: args,
  template: `
		<ui5-slider min="-20" max="20" step="2" value="12" show-tooltip="" label-interval="2" show-tickmarks=""></ui5-slider>
	`,
});
