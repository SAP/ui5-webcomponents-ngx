import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import {ShellBarComponent } from '@ui5/webcomponents-ngx/fiori/shell-bar';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';
import { render } from '@ui5/webcomponents-base/dist/thirdparty/preact/preact.module';

const description = `

<h3>Module Import</h3>

<code>import { ShellBarComponent } from "@ui5/webcomponents-ngx/fiori/shell-bar";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / ShellBar',
  component: ShellBarComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('ShellBarComponent', ShellBarComponent, description),
      },
    },
  },
} as Meta;

export const BasicShellBar: StoryObj<ShellBarComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-shellbar primary-title="Corporate Portal" secondary-title="secondary title">
  
        <ui5-avatar slot="profile" icon="customer"></ui5-avatar>
        <img slot="logo" src="/assets/images/sap-logo-svg.svg">
        <ui5-button icon="nav-back" slot="startButton"></ui5-button>
  
      </ui5-shellbar>
    `,
  }),
};

export const ShellBarWithSearchAndNotifications: StoryObj<ShellBarComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-shellbar primary-title="Corporate Portal" secondary-title="secondary title" show-notifications notifications-count="22">
        <ui5-avatar slot="profile">
          <img src="/assets/images/avatars/woman_avatar_5.png">
        </ui5-avatar>
        <img slot="logo" src="/assets/images/sap-logo-svg.svg">
        <ui5-input slot="searchField" placeholder="Enter service..."></ui5-input>
      </ui5-shellbar>
    `,
  }),
};

export const shellBarWithProductSwitchAndCoPilot: StoryObj<ShellBarComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
      <ui5-shellbar primary-title="Corporate Portal" secondary-title="secondary title" show-product-switch show-notifications notifications-count="22">
        <img slot="logo" src="/assets/images/sap-logo-svg.svg">
  
        <ui5-avatar slot="profile">
          <img src="/assets/images/avatars/woman_avatar_5.png">
        </ui5-avatar>
      </ui5-shellbar>
    `,
    }),
  };
