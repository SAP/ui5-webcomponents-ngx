import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { CardHeaderComponent } from '@ui5/webcomponents-ngx/main/card-header';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { CardHeaderComponent } from "@ui5/webcomponents-ngx/main/card-header";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Card / CardHeader',
  component: CardHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        CardHeaderComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'CardHeaderComponent', CardHeaderComponent, description),
      },
    },
  },
} as Meta;


export const CalendarLegend: StoryObj<CardHeaderComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };