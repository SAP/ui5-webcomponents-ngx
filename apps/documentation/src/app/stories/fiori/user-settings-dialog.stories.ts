import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { UserSettingsDialogComponent } from '@ui5/webcomponents-ngx/fiori/user-settings-dialog';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { UserSettingsDialogComponent } from "@ui5/webcomponents-ngx/fiori/user-settings-dialog";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / UserSettingsDialog',
  component: UserSettingsDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'UserSettingsDialogComponent', UserSettingsDialogComponent, description),
      },
    },
  },
} as Meta;


export const UserSettingsDialog: StoryObj<UserSettingsDialogComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };