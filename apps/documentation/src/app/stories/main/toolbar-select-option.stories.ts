import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ToolbarSelectOptionComponent } from '@ui5/webcomponents-ngx/main/toolbar-select-option';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ToolbarSelectOptionComponent } from "@ui5/webcomponents-ngx/main/toolbar-select-option";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Toolbar / ToolbarSelectOption',
  component: ToolbarSelectOptionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        ToolbarSelectOptionComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ToolbarSelectOptionComponent', ToolbarSelectOptionComponent, description),
      },
    },
  },
} as Meta;


export const ToolbarSelectOption: StoryObj<ToolbarSelectOptionComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };