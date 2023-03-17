import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ColorPalettePopoverComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> Represents a predefined range of colors for easier selection.

Overview The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly. You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

<h3>Usage</h3>

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the <code>ui5-color-palette-popover</code> <h3>ES6 Module Import</h3>

<code>import @ui5/webcomponents/dist/ColorPalettePopover.js";</code>`;
export default {
  title: 'UI5 Web Components / Main / ColorPalettePopover',
  component: ColorPalettePopoverComponent,
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

export const colorPalettePopoverWithRecentColorsDefaultColorAndMoreColorsFeatures: Story<
  ColorPalettePopoverComponent
> = (args: ColorPalettePopoverComponent & any) => ({
  props: args,
  template: `
		<ui5-button id="colorPaletteBtn">Open ColorPalettePopover</ui5-button>
		<ui5-color-palette-popover id="colorPalettePopover" show-recent-colors="" show-more-colors="" show-default-color="" default-color="green">
			<ui5-color-palette-item value="pink"></ui5-color-palette-item>
			<ui5-color-palette-item value="darkblue"></ui5-color-palette-item>
			<ui5-color-palette-item value="#444444"></ui5-color-palette-item>
			<ui5-color-palette-item value="rgb(0,200,0)"></ui5-color-palette-item>
			<ui5-color-palette-item value="green"></ui5-color-palette-item>
			<ui5-color-palette-item value="darkred"></ui5-color-palette-item>
			<ui5-color-palette-item value="yellow"></ui5-color-palette-item>
			<ui5-color-palette-item value="blue"></ui5-color-palette-item>
			<ui5-color-palette-item value="cyan"></ui5-color-palette-item>
			<ui5-color-palette-item value="orange"></ui5-color-palette-item>
			<ui5-color-palette-item value="#5480e7"></ui5-color-palette-item>
			<ui5-color-palette-item value="#ff6699"></ui5-color-palette-item>
		</ui5-color-palette-popover>
	`,
});

export const colorPalettePopoverWithoutAnyAdditionalFeatures: Story<
  ColorPalettePopoverComponent
> = (args: ColorPalettePopoverComponent & any) => ({
  props: args,
  template: `
		<ui5-button id="colorPaletteBtn1">Open ColorPalettePopover</ui5-button>
		<ui5-color-palette-popover id="colorPalettePopover1">
			<ui5-color-palette-item value="pink"></ui5-color-palette-item>
			<ui5-color-palette-item value="darkblue"></ui5-color-palette-item>
			<ui5-color-palette-item value="#444444"></ui5-color-palette-item>
			<ui5-color-palette-item value="rgb(0,200,0)"></ui5-color-palette-item>
			<ui5-color-palette-item value="green"></ui5-color-palette-item>
			<ui5-color-palette-item value="darkred"></ui5-color-palette-item>
			<ui5-color-palette-item value="yellow"></ui5-color-palette-item>
			<ui5-color-palette-item value="blue"></ui5-color-palette-item>
			<ui5-color-palette-item value="cyan"></ui5-color-palette-item>
			<ui5-color-palette-item value="orange"></ui5-color-palette-item>
			<ui5-color-palette-item value="#5480e7"></ui5-color-palette-item>
			<ui5-color-palette-item value="#ff6699"></ui5-color-palette-item>
		</ui5-color-palette-popover>
	`,
});
