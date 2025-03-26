import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ExpandableTextComponent } from '@ui5/webcomponents-ngx/main/expandable-text';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { ExpandableTextComponent } from "@ui5/webcomponents-ngx/main/expandable-text";</code>`;
export default {
  title: 'UI5 Web Components / Main / ExpandableText',
  component: ExpandableTextComponent,
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
          'ExpandableTextComponent',
          ExpandableTextComponent,
          description,
        ),
      },
    },
  },
} as Meta;

export const ExpandableText: StoryObj<ExpandableTextComponent> = {
  render: (args: ExpandableTextComponent & any) => ({
    props: args,
    template: `
        <ui5-table>
        <ui5-table-header-row slot="headerRow">
            <ui5-table-header-cell>Product</ui5-table-header-cell>
            <ui5-table-header-cell>Description</ui5-table-header-cell>
            <ui5-table-header-cell>Dimensions</ui5-table-header-cell>
            <ui5-table-header-cell>Price</ui5-table-header-cell>
        </ui5-table-header-row>
        <ui5-table-row>
            <ui5-table-cell><b>Notebook Basic 15</b></ui5-table-cell>
            <ui5-table-cell>
                <ui5-expandable-text
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusamus assumenda debitis excepturi distinctio adipisci magnam qui a id, praesentium ullam voluptatem ad, modi quo perspiciatis soluta quasi facere molestiae"></ui5-expandable-text>
            </ui5-table-cell>
            <ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell><b>Notebook Basic 17</b></ui5-table-cell>
            <ui5-table-cell>
                <ui5-expandable-text
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusamus assumenda debitis excepturi distinctio adipisci magnam qui a id, praesentium ullam voluptatem ad, modi quo perspiciatis soluta quasi facere molestiae"></ui5-expandable-text>
            </ui5-table-cell>
            <ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>
        </ui5-table-row>
    </ui5-table>
	`,
  }),
};
export const OverflowExpandableText: StoryObj<ExpandableTextComponent> = {
  render: (args: ExpandableTextComponent & any) => ({
    props: args,
    template: `
    <ui5-table>
        <ui5-table-header-row slot="headerRow">
            <ui5-table-header-cell>Product</ui5-table-header-cell>
            <ui5-table-header-cell>Description</ui5-table-header-cell>
            <ui5-table-header-cell>Dimensions</ui5-table-header-cell>
            <ui5-table-header-cell>Price</ui5-table-header-cell>
        </ui5-table-header-row>
        <ui5-table-row>
            <ui5-table-cell><b>Notebook Basic 15</b></ui5-table-cell>
            <ui5-table-cell>
                <ui5-expandable-text
                    overflow-mode="Popover"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusamus assumenda debitis excepturi distinctio adipisci magnam qui a id, praesentium ullam voluptatem ad, modi quo perspiciatis soluta quasi facere molestiae"></ui5-expandable-text>
            </ui5-table-cell>
            <ui5-table-cell><ui5-label>30 x 18 x 3 cm</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label><b>956</b> EUR</ui5-label></ui5-table-cell>
        </ui5-table-row>
        <ui5-table-row>
            <ui5-table-cell><b>Notebook Basic 17</b></ui5-table-cell>
            <ui5-table-cell>
                <ui5-expandable-text
                    overflow-mode="Popover"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis accusamus assumenda debitis excepturi distinctio adipisci magnam qui a id, praesentium ullam voluptatem ad, modi quo perspiciatis soluta quasi facere molestiae"></ui5-expandable-text>
            </ui5-table-cell>
            <ui5-table-cell><ui5-label>29 x 17 x 3.1 cm</ui5-label></ui5-table-cell>
            <ui5-table-cell><ui5-label><b>1249</b> EUR</ui5-label></ui5-table-cell>
        </ui5-table-row>
    </ui5-table>
  `,
  }),
};
