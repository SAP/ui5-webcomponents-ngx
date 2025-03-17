import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { OptionCustomComponent } from '@ui5/webcomponents-ngx/main/option-custom';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { OptionCustomComponent } from "@ui5/webcomponents-ngx/main/option-custom";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Select / OptionCustom',
  component: OptionCustomComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        OptionCustomComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'OptionCustomComponent', OptionCustomComponent, description),
      },
    },
  },
} as Meta;


export const OptionCustomComp : StoryObj<OptionCustomComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };