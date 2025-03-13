import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TimePickerComponent } from '@ui5/webcomponents-ngx/main/time-picker';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { TimePickerComponent } from "@ui5/webcomponents-ngx/main/time-picker";</code>`;
export default {
  title: 'UI5 Web Components / Main / TimePicker',
  component: TimePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('TimePickerComponent', TimePickerComponent, description),
      },
    },
  },
} as Meta;

export const BasicTimePicker: StoryObj<TimePickerComponent> = {
  render: (args: TimePickerComponent & any) => ({
    props: args,
    template: `
			<ui5-time-picker id="timepicker1"></ui5-time-picker>
	`,
  }),
};

export const TimePickerInTwelveHoursFormat: StoryObj<TimePickerComponent> = {
  render: (args: TimePickerComponent & any) => ({
    props: args,
    template: `
			<ui5-time-picker id="timepicker1" format-pattern="hh:mm:ss a"></ui5-time-picker>
	`,
  }),
};

export const TimePickerWithOnlyMinutesAndSeconds: StoryObj<TimePickerComponent> =
  {
    render: (args: TimePickerComponent & any) => ({
      props: args,
      template: `
			<ui5-time-picker id="timepicker1" format-pattern="mm:ss"></ui5-time-picker>
	`,
    }),
  };

export const TimePickerWithValueStateAndValueStateMessage: StoryObj<TimePickerComponent> =
  {
    render: (args: TimePickerComponent & any) => ({
      props: args,
      template: `
		<ui5-time-picker id="timepicker3" format-pattern="mm:ss" value-state="Negative">
			<div slot="valueStateMessage">Please provide valid value</div>
		</ui5-time-picker>
	`,
    }),
  };
