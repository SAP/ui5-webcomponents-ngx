import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { FormGroupComponent } from '@ui5/webcomponents-ngx/main/form-group';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { FormGroupComponent } from "@ui5/webcomponents-ngx/main/form-group";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Form / FormGroup',
  component: FormGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        FormGroupComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'FormGroupComponent', FormGroupComponent, description),
      },
    },
  },
} as Meta;


export const FormGroup: StoryObj<FormGroupComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };