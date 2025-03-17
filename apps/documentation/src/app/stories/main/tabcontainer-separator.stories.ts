import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TabSeparatorComponent } from '@ui5/webcomponents-ngx/main/tab-separator';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { TabSeparatorComponent } from "@ui5/webcomponents-ngx/main/tab-separator";</code>
`;

export default {
  title: 'UI5 Web Components / Main / TabContainer / TabContainerSeparator',
  component: TabSeparatorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        TabSeparatorComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TabSeparatorComponent', TabSeparatorComponent, description),
      },
    },
  },
} as Meta;


export const TabTabSeparator: StoryObj<TabSeparatorComponent> = {
    render: (args) => ({
      props: args,
      template: `
      `,
    }),
  };