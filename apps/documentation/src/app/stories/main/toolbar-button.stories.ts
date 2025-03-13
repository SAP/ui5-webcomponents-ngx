import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ToolbarButtonComponent } from '@ui5/webcomponents-ngx/main/toolbar-button';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ToolbarButtonComponent } from "@ui5/webcomponents-ngx/main/toolbar-button";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Toolbar / ToolbarButton',
  component: ToolbarButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ToolbarButtonComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ToolbarButtonComponent', ToolbarButtonComponent, description),
      },
    },
  },
} as Meta;


export const ToolbarButton: StoryObj<ToolbarButtonComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };