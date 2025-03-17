import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TimelineItemComponent } from '@ui5/webcomponents-ngx/fiori/timeline-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TimelineItemComponent } from "@ui5/webcomponents-ngx/fiori/timeline-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Timeline / TimelineItem',
  component: TimelineItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TimelineItemComponent', TimelineItemComponent, description),
      },
    },
  },
} as Meta;


export const TimelineItem: StoryObj<TimelineItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };