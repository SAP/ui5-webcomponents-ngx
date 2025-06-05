import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { DynamicDateRangeComponent } from '@ui5/webcomponents-ngx/main/dynamic-date-range';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { DynamicDateRangeComponent } from "@ui5/webcomponents-ngx/main/dynamic-date-range";</code>`;
export default {
  title: 'UI5 Web Components / Main / Dynamic Date Range',
  component: DynamicDateRangeComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('DynamicDateRangeComponent', DynamicDateRangeComponent, description),
      },
    },
  },
} as Meta;

export const basicDynamicDateRange: StoryObj<DynamicDateRangeComponent> = {
  render: (args) => ({
    props: args,
    template: `
        <ui5-dynamic-date-range options="TODAY, TOMORROW, YESTERDAY, DATERANGE, DATE"></ui5-dynamic-date-range>
    `,
  }),
};
