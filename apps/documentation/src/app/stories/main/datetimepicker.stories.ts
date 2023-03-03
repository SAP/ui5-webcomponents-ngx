import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / DateTimePicker',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const dateTimePicker: Story = (args) => ({
  props: args,
  template: `
		<ui5-datetime-picker style="width: 230px"></ui5-datetime-picker>
	`,
});

export const dateTimePickerInStates: Story = (args) => ({
  props: args,
  template: `
		<ui5-datetime-picker value-state="Error"></ui5-datetime-picker>
		<ui5-datetime-picker value-state="Warning"></ui5-datetime-picker>
		<ui5-datetime-picker value-state="Information"></ui5-datetime-picker>
		<ui5-datetime-picker value-state="Success"></ui5-datetime-picker>
		<br><br>
		<ui5-datetime-picker readonly="" value="2020-04-13-04:16:16 AM"></ui5-datetime-picker>
		<ui5-datetime-picker disabled="" value="2020-04-13-04:16:16 AM"></ui5-datetime-picker>
	`,
});
