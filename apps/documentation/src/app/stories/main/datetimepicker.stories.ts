import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, } from '@ui5/webcomponents-ngx';
import { DateTimePickerComponent, } from '@ui5/webcomponents-ngx/main/date-time-picker';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { DateTimePickerComponent } from "@ui5/webcomponents-ngx/main/date-time-picker";</code>`;
export default {
  title: 'UI5 Web Components / Main / DateTimePicker',
  component: DateTimePickerComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('DateTimePickerComponent', DateTimePickerComponent, description),
      },
    },
  },
} as Meta;

export const DateTimePicker: StoryObj<DateTimePickerComponent> = {
  render: (args: DateTimePickerComponent & any) => ({
    props: args,
    template: `
		<ui5-datetime-picker style="width: 230px"></ui5-datetime-picker>
	`,
  }),
};

export const DateTimePickerInStates: StoryObj<DateTimePickerComponent> = {
  render: (args: DateTimePickerComponent & any) => ({
    props: args,
    template: `
		<ui5-datetime-picker value-state="Negative"></ui5-datetime-picker>
		<ui5-datetime-picker value-state="Critical"></ui5-datetime-picker>
		<ui5-datetime-picker value-state="Information"></ui5-datetime-picker>
		<ui5-datetime-picker value-state="Positive"></ui5-datetime-picker>
		<br><br>
		<ui5-datetime-picker readonly value="2020-04-13-04:16:16 AM"></ui5-datetime-picker>
		<ui5-datetime-picker disabled value="2020-04-13-04:16:16 AM"></ui5-datetime-picker>
	`,
  }),
};
