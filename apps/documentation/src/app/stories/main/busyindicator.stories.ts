import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { BusyIndicatorComponent } from '@ui5/webcomponents-ngx/main/busy-indicator';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { BusyIndicatorComponent } from "@ui5/webcomponents-ngx/main/busy-indicator";</code>`;
export default {
  title: 'UI5 Web Components / Main / BusyIndicator',
  component: BusyIndicatorComponent,
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
          'BusyIndicatorComponent',
          BusyIndicatorComponent,
          description,
        ),
      },
    },
  },
} as Meta;

export const BusyIndicatorWithDifferentSize: StoryObj<BusyIndicatorComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
        <ui5-busy-indicator active size="S"></ui5-busy-indicator>
        <ui5-busy-indicator active size="M"></ui5-busy-indicator>
        <ui5-busy-indicator active size="L"></ui5-busy-indicator>
      `,
    }),
  };

export const BusyIndicatorWrappingOtherElements: StoryObj<BusyIndicatorComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
      <ui5-button id="fetch-btn" style="width: 120px;">Fetch List Data</ui5-button>
      <ui5-busy-indicator id="busy-container" size="M">
        <ui5-list id="fetch-list" no-data-text="No Data" header-text="Available Items"></ui5-list>
      </ui5-busy-indicator>

    `,
    }),
  };

export const BusyIndicatorTextPlacement: StoryObj<BusyIndicatorComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-busy-indicator text="Loading data from backend server.." active>
          <div style="height: 200px; width: 200px;"></div>
      </ui5-busy-indicator>
      <ui5-busy-indicator text="Loading data from backend server..." text-placement="Top" active>
          <div style="height: 200px; width: 200px;"></div>
      </ui5-busy-indicator>
    `,
  }),
};
