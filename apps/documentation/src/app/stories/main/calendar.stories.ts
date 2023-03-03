import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / Calendar',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicCalendar: Story = (args) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar></ui5-calendar>
		</div>
	`,
});

export const calendarWithMinimumAndMaximumDateFormatPattern: Story = (
  args
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar min-date="7/7/2020" max-date="20/10/2020" format-pattern="dd/MM/yyyy"></ui5-calendar>
		</div>
	`,
});

export const calendarWithHiddenWeekNumbers: Story = (args) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar hide-week-numbers=""></ui5-calendar>
		</div>
	`,
});

export const calendarWithSelectionModeMultiple: Story = (args) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar selection-mode="Multiple"></ui5-calendar>
		</div>
	`,
});

export const calendarWithSelectionModeRange: Story = (args) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar selection-mode="Range"></ui5-calendar>
		</div>
	`,
});

export const japaneseCalendar: Story = (args) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Japanese"></ui5-calendar>
		</div>
	`,
});

export const islamicCalendar: Story = (args) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Islamic"></ui5-calendar>
		</div>
	`,
});

export const buddhistCalendar: Story = (args) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Buddhist"></ui5-calendar>
		</div>
	`,
});

export const persianCalendar: Story = (args) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-calendar primary-calendar-type="Persian"></ui5-calendar>
		</div>
	`,
});
