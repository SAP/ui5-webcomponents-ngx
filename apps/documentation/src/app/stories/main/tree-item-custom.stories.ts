import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TreeItemCustomComponent } from '@ui5/webcomponents-ngx/main/tree-item-custom';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { TreeItemCustomComponent } from "@ui5/webcomponents-ngx/main/tree-item-custom";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Tree / TreeItemCustom',
  component: TreeItemCustomComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        TreeItemCustomComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TreeItemCustomComponent', TreeItemCustomComponent, description),
      },
    },
  },
} as Meta;


export const TreeItemCustom: StoryObj<TreeItemCustomComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };