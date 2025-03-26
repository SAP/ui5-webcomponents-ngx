import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SegmentedButtonComponent } from '@ui5/webcomponents-ngx/main/segmented-button';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { SegmentedButtonComponent } from "@ui5/webcomponents-ngx/main/segmented-button";</code>`;
export default {
  title: 'UI5 Web Components / Main / SegmentedButton',
  component: SegmentedButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription(
          'SegmentedButtonComponent',
          SegmentedButtonComponent,
          description,
        ),
      },
    },
  },
} as Meta;

export const BasicSegmentedButton: StoryObj<SegmentedButtonComponent> = {
  render: (args: SegmentedButtonComponent & any) => ({
    props: args,
    template: `
        <ui5-segmented-button accessible-name="Geographic location">
            <ui5-segmented-button-item>Map</ui5-segmented-button-item>
            <ui5-segmented-button-item selected>Satellite</ui5-segmented-button-item>
            <ui5-segmented-button-item>Terrain</ui5-segmented-button-item>
        </ui5-segmented-button>
	`,
  }),
};

export const MultipleSelectionButton: StoryObj<SegmentedButtonComponent> = {
  render: (args: SegmentedButtonComponent & any) => ({
    props: args,
    template: `
        <ui5-segmented-button accessible-name="Map style" selection-mode="Multiple">
            <ui5-segmented-button-item>Map</ui5-segmented-button-item>
            <ui5-segmented-button-item selected>Satellite</ui5-segmented-button-item>
            <ui5-segmented-button-item>Terrain</ui5-segmented-button-item>
        </ui5-segmented-button>
  `,
  }),
};

export const SegmentedButtonWithIcons: StoryObj<SegmentedButtonComponent> = {
  render: (args: SegmentedButtonComponent & any) => ({
    props: args,
    template: `
		<ui5-segmented-button>
			<ui5-segmented-button-item icon="employee" selected></ui5-segmented-button-item>
			<ui5-segmented-button-item icon="menu"></ui5-segmented-button-item>
			<ui5-segmented-button-item icon="factory"></ui5-segmented-button-item>
		</ui5-segmented-button>
	`,
  }),
};

export const SegmentedButtonWith5SegmentedButtonItems: StoryObj<SegmentedButtonComponent> =
  {
    render: (args: SegmentedButtonComponent & any) => ({
      props: args,
      template: `
		<ui5-segmented-button>
			<ui5-segmented-button-item>Item</ui5-segmented-button-item>
			<ui5-segmented-button-item selected>Pressed SegmentedButtonItem With Bigger Text</ui5-segmented-button-item>
			<ui5-segmented-button-item>Item</ui5-segmented-button-item>
			<ui5-segmented-button-item>SegmentedButtonItem</ui5-segmented-button-item>
			<ui5-segmented-button-item>Press me</ui5-segmented-button-item>
		</ui5-segmented-button>
	`,
    }),
  };
