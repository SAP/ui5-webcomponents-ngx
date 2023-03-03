import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / ProgressIndicator',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicProgressIndicator: Story = (args) => ({
  props: args,
  template: `
        <ui5-progress-indicator value="0"></ui5-progress-indicator>
        <ui5-progress-indicator value="25"></ui5-progress-indicator>
        <ui5-progress-indicator value="75" disabled=""></ui5-progress-indicator>
        <ui5-progress-indicator value="100"></ui5-progress-indicator>
	`,
});

export const progressIndicatorWithCustomDisplayValue: Story = (args) => ({
  props: args,
  template: `
        <ui5-progress-indicator value="25" display-value="Custom Display Value"></ui5-progress-indicator>
	`,
});

export const progressIndicatorWithValueState: Story = (args) => ({
  props: args,
  template: `
        <ui5-progress-indicator value-state="None" value="25"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Error" value="50"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Warning" value="75"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Success" value="90"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Information" value="100"></ui5-progress-indicator>
	`,
});

export const progressIndicatorWithCustomSizes: Story = (args) => ({
  props: args,
  template: `
        <ui5-progress-indicator value="25" style="height: 50px; width: 200px;"></ui5-progress-indicator>
        <ui5-progress-indicator value="75" style="height: 50px; width: 200px;"></ui5-progress-indicator>
	`,
});
