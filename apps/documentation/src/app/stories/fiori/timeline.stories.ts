import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TimelineComponent } from '@ui5/webcomponents-ngx/fiori/timeline';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TimelineComponent } from "@ui5/webcomponents-ngx/fiori/timeline";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Timeline',
  component: TimelineComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('TimelineComponent', TimelineComponent, description),
      },
    },
  },
} as Meta;

export const BasicTimeline: StoryObj<TimelineComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-timeline>
        <ui5-timeline-item id="test-item" title-text="called" subtitle-text="20.02.2017 11:30" icon="phone" name="John Smith" name-clickable></ui5-timeline-item>
        <ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)" icon="calendar">
          <div>MR SOF02 2.43</div>
        </ui5-timeline-item>
        <ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="calendar">
          <div>Online meeting</div>
        </ui5-timeline-item>
      </ui5-timeline>
    `,
  }),
};

export const HorizontalTimeline: StoryObj<TimelineComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-timeline layout="Horizontal">
        <ui5-timeline-item id="test-item" title-text="called" subtitle-text="20.02.2017 11:30" icon="phone" name="John Smith" name-clickable></ui5-timeline-item>
        <ui5-timeline-item title-text="Weekly Sync - CP Design" subtitle-text="27.07.2017 (11:00 - 12:30)" icon="calendar">
          <div>MR SOF02 2.43</div>
        </ui5-timeline-item>
        <ui5-timeline-item title-text="Video Converence Call - UI5" subtitle-text="31.01.2018 (12:00 - 13:00)" icon="calendar">
          <div>Online meeting</div>
        </ui5-timeline-item>
      </ui5-timeline>
    `,
  }),
};
