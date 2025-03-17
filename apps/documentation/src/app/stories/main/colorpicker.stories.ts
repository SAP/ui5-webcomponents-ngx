import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ColorPickerComponent } from '@ui5/webcomponents-ngx/main/color-picker';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

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
        component: extractDescription('ColorPickerComponent', ColorPickerComponent, description)
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
