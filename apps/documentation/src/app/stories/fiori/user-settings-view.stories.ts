import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { UserSettingsViewComponent } from '@ui5/webcomponents-ngx/fiori/user-settings-view';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { UserSettingsViewComponent } from "@ui5/webcomponents-ngx/fiori/user-settings-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / UserSettingsDialog / UserSettingsView',
  component: UserSettingsViewComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'UserSettingsViewComponent', UserSettingsViewComponent, description),
      },
    },
  },
} as Meta;


export const UserSettinsView: StoryObj<UserSettingsViewComponent> = {
    render: (args) => ({
      props: args,
      template: `
      `,
    }),
  };