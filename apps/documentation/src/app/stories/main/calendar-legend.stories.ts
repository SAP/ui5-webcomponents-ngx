import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { CalendarLegendComponent } from '@ui5/webcomponents-ngx/main/calendar-legend';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { CalendarLegendComponent } from "@ui5/webcomponents-ngx/main/calendar-legend";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Calendar / CalendarLegend',
  component: CalendarLegendComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        CalendarLegendComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'CalendarLegendComponent', CalendarLegendComponent, description),
      },
    },
  },
} as Meta;


export const CalendarLegend: StoryObj<CalendarLegendComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };