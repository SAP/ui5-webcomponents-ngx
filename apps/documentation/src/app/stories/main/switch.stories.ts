import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / Switch',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicSwitch: Story = (args) => ({
  props: args,
  template: `
		<ui5-switch text-on="On" text-off="Off"></ui5-switch>
		<ui5-switch text-on="On" text-off="Off" checked=""></ui5-switch>
		<ui5-switch></ui5-switch>
		<ui5-switch checked=""></ui5-switch>
		<ui5-switch text-on="Yes" text-off="No" disabled=""></ui5-switch>
		<ui5-switch text-on="Yes" text-off="No" checked="" disabled=""></ui5-switch>
	`,
});

export const graphicalSwitch: Story = (args) => ({
  props: args,
  template: `
		<ui5-switch accessible-name="graphical" design="Graphical"></ui5-switch>
		<ui5-switch accessible-name="graphical" design="Graphical" checked=""></ui5-switch>
		<ui5-switch accessible-name="graphical" design="Graphical" disabled=""></ui5-switch>
		<ui5-switch accessible-name="graphical" design="Graphical" checked="" disabled=""></ui5-switch>
	`,
});
