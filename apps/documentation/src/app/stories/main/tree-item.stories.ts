import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TreeItemComponent } from '@ui5/webcomponents-ngx/main/tree-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { TreeItemComponent } from "@ui5/webcomponents-ngx/main/tree-item";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Tree / TreeItem',
  component: TreeItemComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        TreeItemComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TreeItemComponent', TreeItemComponent, description),
      },
    },
  },
} as Meta;


export const TreeItemStory: StoryObj<TreeItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };