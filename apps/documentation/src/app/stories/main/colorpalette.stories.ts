import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ColorPaletteComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> The <code>ui5-color-palette</code> provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

<h3>Usage</h3>

The <code>ui5-color-palette</code> is meant for users that need to select a color from a predefined set. To define the colors, use the <code>ui5-color-palette-item</code> component inside the default slot of the <code>ui5-color-palette</code>.

<h3>ES6 Module Import</h3>

<code>import { ColorPaletteComponent } from "@ui5/webcomponents-ngx/main/color-palette";</code>`;
export default {
  title: 'UI5 Web Components / Main / ColorPalette',
  component: ColorPaletteComponent,
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

export const colorPalette: Story<ColorPaletteComponent> = (
  args: ColorPaletteComponent & any
) => ({
  props: args,
  template: `
		<ui5-color-palette>
			<ui5-color-palette-item value="darkblue"></ui5-color-palette-item>
			<ui5-color-palette-item value="pink"></ui5-color-palette-item>
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
		</ui5-color-palette>
	`,
});
