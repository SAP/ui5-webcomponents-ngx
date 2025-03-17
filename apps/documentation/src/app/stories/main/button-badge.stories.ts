import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ButtonBadgeComponent } from '@ui5/webcomponents-ngx/main/button-badge';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ButtonBadgeComponent } from "@ui5/webcomponents-ngx/main/button-badge";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Button / ButtonBadge',
  component: ButtonBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ButtonBadgeComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ButtonBadgeComponent', ButtonBadgeComponent, description),
      },
    },
  },
} as Meta;


export const ButtonBadge: StoryObj<ButtonBadgeComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };