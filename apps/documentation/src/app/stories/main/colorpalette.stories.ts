import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ColorPaletteComponent } from '@ui5/webcomponents-ngx/main/color-palette';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

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
        component: extractDescription('ColorPaletteComponent', ColorPaletteComponent, description)
      },
    },
  },
} as Meta;

export const ColorPalette: StoryObj<ColorPaletteComponent> = {
  render: (args: ColorPaletteComponent & any) => ({
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
  }),
};
