import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TimelineGroupItemComponent } from '@ui5/webcomponents-ngx/fiori/timeline-group-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { TimelineGroupItemComponent } from "@ui5/webcomponents-ngx/fiori/timeline-group-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Timeline / TimelineGroupItem',
  component: TimelineGroupItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TimelineGroupItemComponent', TimelineGroupItemComponent, description),
      },
    },
  },
} as Meta;


export const TimelineGroupItem: StoryObj<TimelineGroupItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };