import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SegmentedButtonItemComponent } from '@ui5/webcomponents-ngx/main/segmented-button-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { SegmentedButtonItemComponent } from "@ui5/webcomponents-ngx/main/segmented-button-item";</code>
`;

export default {
  title: 'UI5 Web Components / Main / SegmentedButton / SegmentedButtonItem',
  component: SegmentedButtonItemComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        SegmentedButtonItemComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SegmentedButtonItemComponent', SegmentedButtonItemComponent, description),
      },
    },
  },
} as Meta;


export const SegmentedButtonItem : StoryObj<SegmentedButtonItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };