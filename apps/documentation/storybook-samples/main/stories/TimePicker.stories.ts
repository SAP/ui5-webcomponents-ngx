import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { TimePickerDirective } from '../directives/time-picker';

export default {
  component: TimePickerDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
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
