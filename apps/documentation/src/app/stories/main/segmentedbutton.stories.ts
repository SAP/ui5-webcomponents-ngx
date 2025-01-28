import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  SegmentedButtonComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-segmented-button</code> shows a group of items. When the user clicks or taps one of the items, it stays in a pressed state. It automatically resizes the items to fit proportionally within the component. When no width is set, the component uses the available width. <br><br> <b>Note:</b> There can be just one selected <code>item</code> at a time.

<h3>ES6 Module Import</h3>

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
        component: description,
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
