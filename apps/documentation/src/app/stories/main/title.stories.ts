import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / Title',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const titleInAllAvailableLevels: Story = (args) => ({
  props: args,
  template: `
		<ui5-title level="H1">Title level 1</ui5-title>
		<ui5-title level="H2">Title level 2</ui5-title>
		<ui5-title level="H3">Title level 3</ui5-title>
		<ui5-title level="H4">Title level 4</ui5-title>
		<ui5-title level="H5">Title level 5</ui5-title>
		<ui5-title level="H6">Title level 6</ui5-title>
	`,
});
