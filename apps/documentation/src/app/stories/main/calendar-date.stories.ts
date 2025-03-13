import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { CalendarDateComponent } from '@ui5/webcomponents-ngx/main/calendar-date';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { CalendarDateComponent } from "@ui5/webcomponents-ngx/main/calendar-date";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Calendar / CalendarDate',
  component: CalendarDateComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        CalendarDateComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'CalendarDateComponent', CalendarDateComponent, description),
      },
    },
  },
} as Meta;


export const CalendarDate: StoryObj<CalendarDateComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };