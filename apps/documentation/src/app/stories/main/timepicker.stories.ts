import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / TimePicker',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicTimePicker: Story = (args) => ({
  props: args,
  template: `
			<ui5-time-picker id="timepicker1"></ui5-time-picker>
	`,
});

export const timePickerInTwelveHoursFormat: Story = (args) => ({
  props: args,
  template: `
			<ui5-time-picker id="timepicker1" format-pattern="hh:mm:ss a"></ui5-time-picker>
	`,
});

export const timePickerWithOnlyMinutesAndSeconds: Story = (args) => ({
  props: args,
  template: `
			<ui5-time-picker id="timepicker1" format-pattern="mm:ss"></ui5-time-picker>
	`,
});

export const timePickerWithValueStateAndValueStateMessage: Story = (args) => ({
  props: args,
  template: `
		<ui5-time-picker id="timepicker3" format-pattern="mm:ss" value-state="Error">
			<div slot="valueStateMessage">Please provide valid value</div>
		</ui5-time-picker>
	`,
});
