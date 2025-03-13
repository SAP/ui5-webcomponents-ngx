import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { OptionComponent } from '@ui5/webcomponents-ngx/main/option';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { OptionComponent } from "@ui5/webcomponents-ngx/main/option";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Select / Option',
  component: OptionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        OptionComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'OptionComponent', OptionComponent, description),
      },
    },
  },
} as Meta;


export const OptionComp : StoryObj<OptionComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };