import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { PopoverDirective } from '../directives/popover';

export default {
  component: PopoverDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicPopover: Story = (args) => ({
  props: args,
  template: `
        <ui5-button id="openPopoverButton" design="Emphasized">Open Popover</ui5-button>

		<ui5-popover id="hello-popover" header-text="Newsletter subscription">
			<div class="popover-content">
				<div class="flex-column">
					<ui5-label for="emailInput" required="">Email: </ui5-label>
					<ui5-input id="emailInput" class="samples-margin-top" style="min-width: 150px;" placeholder="Enter Email"></ui5-input>
				</div>
			</div>
			<div slot="footer" class="popover-footer">
				<div style="flex: 1;"></div>
				<ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
			</div>
		</ui5-popover>
      `,
});
