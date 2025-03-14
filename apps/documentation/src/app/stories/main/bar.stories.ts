import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { BarComponent } from '@ui5/webcomponents-ngx/main/bar';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { BarComponent } from "@ui5/webcomponents-ngx/main/bar";</code>`;
export default {
  title: 'UI5 Web Components / Main / Bar',
  component: BarComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('BarComponent', BarComponent, description),
      },
    },
  },
} as Meta;

export const HeaderBar: StoryObj<BarComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-bar design="Header">
        <ui5-button icon="home" tooltip="Go home" design="Transparent" slot="startContent"></ui5-button>
        <ui5-label id="basic-label">Header Title</ui5-label>
        <ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>
      </ui5-bar>
    `,
  }),
};

export const subheaderBar: StoryObj<BarComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-bar design="Subheader">
        <ui5-button icon="home" tooltip="Go home" slot="startContent"></ui5-button>
        <ui5-label id="basic-label">Subheader Title</ui5-label>
        <ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>
      </ui5-bar>
    `,
  }),
};

export const FooterBar: StoryObj<BarComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-bar design="Footer">
        <ui5-button design="Positive" slot="endContent">Agree</ui5-button>
        <ui5-button design="Negative" slot="endContent">Decline</ui5-button>
        <ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
      </ui5-bar>
    `,
  }),
};

export const FloatingFooterBar: StoryObj<BarComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-bar design="FloatingFooter">
        <ui5-button design="Positive" slot="endContent">Agree</ui5-button>
        <ui5-button design="Negative" slot="endContent">Decline</ui5-button>
        <ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
      </ui5-bar>
    `,
  }),
};
