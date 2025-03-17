import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ToolbarSeparatorComponent } from '@ui5/webcomponents-ngx/main/toolbar-separator';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ToolbarSeparatorComponent } from "@ui5/webcomponents-ngx/main/toolbar-separator";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Toolbar / ToolbarSeparator',
  component: ToolbarSeparatorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ToolbarSeparatorComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ToolbarSeparatorComponent', ToolbarSeparatorComponent, description),
      },
    },
  },
} as Meta;


export const ToolbarSeparator: StoryObj<ToolbarSeparatorComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };