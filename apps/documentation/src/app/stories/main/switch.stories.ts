import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SwitchComponent } from '@ui5/webcomponents-ngx/main/switch';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SwitchComponent } from "@ui5/webcomponents-ngx/main/switch";</code>`;
export default {
  title: 'UI5 Web Components / Main / Switch',
  component: SwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('SwitchComponent', SwitchComponent, description),
      },
    },
  },
} as Meta;

export const basicSwitch: StoryObj<SwitchComponent> = {
  render: (args: SwitchComponent & any) => ({
    props: args,
    template: `
		<ui5-switch text-on="On" text-off="Off"></ui5-switch>
		<ui5-switch text-on="On" text-off="Off" checked></ui5-switch>
		<ui5-switch></ui5-switch>
		<ui5-switch checked></ui5-switch>
		<ui5-switch text-on="Yes" text-off="No" disabled></ui5-switch>
		<ui5-switch text-on="Yes" text-off="No" checked disabled></ui5-switch>
	`,
  }),
};

export const GraphicalSwitch: StoryObj<SwitchComponent> = {
  render: (args: SwitchComponent & any) => ({
    props: args,
    template: `
		<ui5-switch accessible-name="graphical" design="Graphical"></ui5-switch>
		<ui5-switch accessible-name="graphical" design="Graphical" checked></ui5-switch>
		<ui5-switch accessible-name="graphical" design="Graphical" disabled></ui5-switch>
		<ui5-switch accessible-name="graphical" design="Graphical" disabled checked></ui5-switch>
	`,
  }),
};
