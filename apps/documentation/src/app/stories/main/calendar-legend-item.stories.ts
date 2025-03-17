import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { CalendarLegendItemComponent } from '@ui5/webcomponents-ngx/main/calendar-legend-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { CalendarLegendItemComponent } from "@ui5/webcomponents-ngx/main/calendar-legend-item";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Calendar / CalendarLegendItem',
  component: CalendarLegendItemComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        CalendarLegendItemComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'CalendarLegendItemComponent', CalendarLegendItemComponent, description),
      },
    },
  },
} as Meta;


export const CalendarLegendItem: StoryObj<CalendarLegendItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };