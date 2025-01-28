import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ColorPickerComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview The <code>ui5-color-picker</code> allows users to choose any color and provides different input options for selecting colors.

<h3>Usage</h3>

<h4>When to use:</h4 Use the color picker if: <ul> <li> users need to select any color freely.</li> </ul>

<h4>When not to use:</h4> <ul> <li> Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { ColorPickerComponent } from "@ui5/webcomponents-ngx/main/color-picker";</code>`;
export default {
  title: 'UI5 Web Components / Main / ColorPicker',
  component: ColorPickerComponent,
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

export const PickColor: StoryObj<ColorPickerComponent> = {
  render: (args: ColorPickerComponent & any) => ({
    props: args,
    template: `
		<ui5-color-picker></ui5-color-picker>
	`,
  }),
};
