import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { ResponsivePopoverDirective } from '../directives/responsive-popover';

export default {
  component: ResponsivePopoverDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicResponsivePopover: Story = (args) => ({
  props: args,
  template: `
        <ui5-button id="openBtn" design="Emphasized">Open ResponsivePopover</ui5-button>

		<ui5-responsive-popover id="hello-popover" header-text="Newsletter subscription">
			<div style="width: auto;padding: 2rem;display: flex;flex-direction: column;justify-content: center;">
				<ui5-label for="emailInput" required="">Email: </ui5-label>
				<ui5-input id="emailInput" class="samples-margin-top" style="min-width: 150px;" placeholder="Enter Email"></ui5-input>
				<ui5-label>Note: If you open the page in mobile, dialog would be displayed.</ui5-label>
			</div>
			<div slot="footer" class="popover-footer">
				<ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
			</div>
		</ui5-responsive-popover>
      `,
});
