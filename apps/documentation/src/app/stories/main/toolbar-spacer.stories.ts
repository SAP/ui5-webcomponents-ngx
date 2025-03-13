import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ToolbarSpacerComponent } from '@ui5/webcomponents-ngx/main/toolbar-spacer';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ToolbarSpacerComponent } from "@ui5/webcomponents-ngx/main/toolbar-spacer";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Toolbar / ToolbarSpacer',
  component: ToolbarSpacerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ToolbarSpacerComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ToolbarSpacerComponent', ToolbarSpacerComponent, description),
      },
    },
  },
} as Meta;


export const ToolbarSpacer: StoryObj<ToolbarSpacerComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };