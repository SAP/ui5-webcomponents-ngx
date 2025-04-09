import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { UserSettingsItemComponent } from '@ui5/webcomponents-ngx/fiori/user-settings-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { UserSettingsItemComponent } from "@ui5/webcomponents-ngx/fiori/user-settings-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / UserSettingsDialog / UserSettingsItem',
  component: UserSettingsItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'UserSettingsItemComponent', UserSettingsItemComponent, description),
      },
    },
  },
} as Meta;


export const UserSettingsItem: StoryObj<UserSettingsItemComponent> = {
    render: (args) => ({
      props: args,
      template: `
      `,
    }),
  };