import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { IllustratedMessageDirective } from '../directives/illustrated-message';

export default {
  component: IllustratedMessageDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const illustratedMessage: Story = (args) => ({
  props: args,
  template: `
        <ui5-illustrated-message name="UnableToUpload">
			<ui5-button design="Emphasized">Action 1</ui5-button>
			<ui5-button>Action 2</ui5-button>
		</ui5-illustrated-message>
      `,
});

export const illustratedMessageInDialog: Story = (args) => ({
  props: args,
  template: `
        <ui5-button id="openDialogButton">Open Dialog</ui5-button>

		<ui5-dialog id="hello-dialog" header-text="Error">
			<ui5-illustrated-message name="UnableToLoad"></ui5-illustrated-message>
			<ui5-bar design="Footer" slot="footer">
				<ui5-button id="closeDialogButton" design="Emphasized" slot="endContent">Close</ui5-button>
			</ui5-bar>
		</ui5-dialog>
      `,
});

export const illustratedMessageWithCustomTitleAndLinkInSubtitle: Story = (
  args
) => ({
  props: args,
  template: `
        <ui5-illustrated-message name="UnableToUpload">
			<ui5-title slot="title" level="H1">Something went wrong</ui5-title>
			<div slot="subtitle">Please try again or contact us at <ui5-link>example@example.com</ui5-link></div>
			<ui5-button icon="refresh">Try again</ui5-button>
		</ui5-illustrated-message>
      `,
});
