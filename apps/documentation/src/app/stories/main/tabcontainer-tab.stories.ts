import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TabComponent } from '@ui5/webcomponents-ngx/main/tab';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { TabComponent } from "@ui5/webcomponents-ngx/main/tab";</code>
`;

export default {
  title: 'UI5 Web Components / Main / TabContainer / Tab',
  component: TabComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        TabComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'TabComponent', TabComponent, description),
      },
    },
  },
} as Meta;


export const TabTab: StoryObj<TabComponent> = {
    render: (args) => ({
      props: args,
      template: `
      `,
    }),
  };