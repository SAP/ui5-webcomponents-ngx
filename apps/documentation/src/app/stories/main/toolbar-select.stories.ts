import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ToolbarSelectComponent } from '@ui5/webcomponents-ngx/main/toolbar-select';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ToolbarSelectComponent } from "@ui5/webcomponents-ngx/main/toolbar-select";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Toolbar / ToolbarSelect',
  component: ToolbarSelectComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ToolbarSelectComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ToolbarSelectComponent', ToolbarSelectComponent, description),
      },
    },
  },
} as Meta;


export const ToolbarSelect: StoryObj<ToolbarSelectComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };