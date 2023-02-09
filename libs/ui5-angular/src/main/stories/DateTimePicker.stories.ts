import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { DateTimePickerDirective } from '../directives/date-time-picker';

export default {
  component: DateTimePickerDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const dateTimePicker: Story = (args) => ({
  props: args,
  template: `
        <ui5-datetime-picker style="width: 230px"></ui5-datetime-picker>
      `,
});

export const dateTimePickerWithFormatPattern: Story = (args) => ({
  props: args,
  template: `
        <div style="display: flex; flex-direction: column;">
			<ui5-label>d/MM/yyyy, hh:mm aa</ui5-label>
			<ui5-datetime-picker style="width: 230px" format-pattern="dd/MM/yyyy, hh:mm aa" value="13/04/2020, 09:16 AM"></ui5-datetime-picker>
			<br>

			<ui5-label>yyyy-MM-dd-hh:mm:ss aa</ui5-label>
			<ui5-datetime-picker style="width: 230px" format-pattern="yyyy-MM-dd-hh:mm:ss aa" value="2020-04-13-04:16:16 AM"></ui5-datetime-picker>

			<br>

			<ui5-label>d/MM/yyyy, hh:mm:ss aa</ui5-label>
			<div style="display: flex; flex-direction: row;">
				<ui5-datetime-picker id="dt1" style="width: 230px" format-pattern="dd/MM/yyyy, hh:mm:ss aa" value="13/04/2020, 03:16:16 AM"></ui5-datetime-picker>
				<ui5-input id="input1" style="width: 320px"></ui5-input>
			</div>
		</div>
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
