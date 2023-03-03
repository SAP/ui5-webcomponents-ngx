import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / DatePicker',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicDatePicker: Story = (args) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-date-picker id="myDatepicker1"></ui5-date-picker>
		</div>
	`,
});

export const datePickerWithPlaceholderTooltipEventsValueStateAndValueStateMessage: Story =
  (args) => ({
    props: args,
    template: `
		<div class="datepicker-width">
			<ui5-date-picker id="myDatepicker2" placeholder="Delivery Date...">
				<div slot="valueStateMessage">The value is not valid. Please provide valid value</div>
			</ui5-date-picker>
		</div>
	`,
  });

export const datePickerWithMinimumAndMaximumDate112020452020FormatPatternDdMmYyyy: Story =
  (args) => ({
    props: args,
    template: `
		<div class="datepicker-width">
			<ui5-date-picker id="myDatepicker12" min-date="1/1/2020" max-date="4/5/2020" format-pattern="dd/MM/yyyy"></ui5-date-picker>
		</div>
	`,
  });

export const datePickerWithShortcutsTypeTodayOrYesterdayAndPressEnter: Story = (
  args
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-date-picker></ui5-date-picker>
		</div>
	`,
});

export const datePickerWithFormatPatternShort: Story = (args) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker format-pattern="short"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithFormatPatternLong: Story = (args) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker format-pattern="long"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithFormatPatternQqqYyyyMmmDdValueQ42018Feb14: Story = (
  args
) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-date-picker format-pattern="QQQ yyyy, MMM dd" value="Q4 2018, Feb 14"></ui5-date-picker>
		</div>
	`,
});

export const datePickerWithFormatPatternEeeMDYyyy: Story = (args) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker format-pattern="EEE, M/d/yyyy"></ui5-date-picker>
			</div>
		`,
});

export const disabledDatePicker: Story = (args) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker disabled="" value="8 September 2021"></ui5-date-picker>
			</div>
		`,
});

export const readonlyDatePicker: Story = (args) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker readonly="" value="8 September 2021"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithJapaneseCalendarType: Story = (args) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker primary-calendar-type="Japanese"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithIslamicCalendarType: Story = (args) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker primary-calendar-type="Islamic"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithBuddhistCalendarType: Story = (args) => ({
  props: args,
  template: `
			<div class="datepicker-width">
				<ui5-date-picker primary-calendar-type="Buddhist"></ui5-date-picker>
			</div>
		`,
});

export const datePickerWithPersianCalendarType: Story = (args) => ({
  props: args,
  template: `
        <div class="datepicker-width">
            <ui5-date-picker primary-calendar-type="Persian"></ui5-date-picker>
        </div>
    `,
});

export const datePickerWithPrimaryAndSecondaryCalendarType: Story = (args) => ({
  props: args,
  template: `
		<div class="datepicker-width">
			<ui5-date-picker primary-calendar-type="Islamic" secondary-calendar-type="Gregorian"></ui5-date-picker>
		</div>
	`,
});
