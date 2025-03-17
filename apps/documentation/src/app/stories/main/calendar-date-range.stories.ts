import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { CalendarDateRangeComponent } from '@ui5/webcomponents-ngx/main/calendar-date-range';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { CalendarDateRangeComponent } from "@ui5/webcomponents-ngx/main/calendar-date-range";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Calendar / CalendarDateRange',
  component: CalendarDateRangeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        CalendarDateRangeComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'CalendarDateRangeComponent', CalendarDateRangeComponent, description),
      },
    },
  },
} as Meta;


export const CalendarDateRange: StoryObj<CalendarDateRangeComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };