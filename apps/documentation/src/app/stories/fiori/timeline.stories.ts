import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Fiori / Timeline',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicTimeline: Story = (args) => ({
  props: args,
  template: `
		<ui5-timeline>
			<ui5-timeline-item id="test-item" title-text="called" subtitle-text="20.02.2017 11:30" icon="phone" name="John Smith" name-clickable=""></ui5-timeline-item>
			<ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)" icon="calendar">
				<div>MR SOF02 2.43</div>
			</ui5-timeline-item>
			<ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="calendar">
				<div>Online meeting</div>
			</ui5-timeline-item>
		</ui5-timeline>
	`,
});

export const horizontalTimeline: Story = (args) => ({
  props: args,
  template: `
		<ui5-timeline layout="Horizontal">
			<ui5-timeline-item id="test-item" title-text="called" subtitle-text="20.02.2017 11:30" icon="phone" name="John Smith" name-clickable=""></ui5-timeline-item>
			<ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)" icon="calendar">
				<div>MR SOF02 2.43</div>
			</ui5-timeline-item>
			<ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="calendar">
				<div>Online meeting</div>
			</ui5-timeline-item>
		</ui5-timeline>
	`,
});
