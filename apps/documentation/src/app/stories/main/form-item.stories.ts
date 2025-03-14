import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { FormItemComponent } from '@ui5/webcomponents-ngx/main/form-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { FormItemComponent } from "@ui5/webcomponents-ngx/main/form-item";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Form / FormItem',
  component: FormItemComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        FormItemComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'FormItemComponent', FormItemComponent, description),
      },
    },
  },
} as Meta;


export const FormItem: StoryObj<FormItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };