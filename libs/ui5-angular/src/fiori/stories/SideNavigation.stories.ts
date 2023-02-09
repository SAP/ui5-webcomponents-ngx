import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { SideNavigationDirective } from '../directives/side-navigation';

export default {
  component: SideNavigationDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const ui5SideNavHeight93Ui5ShellbarPartRootPaddingLeft5Rem: Story = (
  args
) => ({
  props: args,
  template: `
        <ui5-shellbar primary-title="UI5 Web Components" secondary-title="The Best Run SAP" show-co-pilot="">
			<ui5-button icon="menu" slot="startButton" id="startButton"></ui5-button>
		</ui5-shellbar>

		<ui5-side-navigation class="ui5-side-nav">
			<ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
			<ui5-side-navigation-item text="People" expanded="" icon="group">
				<ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
				<ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
			</ui5-side-navigation-item>
			<ui5-side-navigation-item text="Locations" icon="locate-me" selected=""></ui5-side-navigation-item>
			<ui5-side-navigation-item text="Events" icon="calendar">
				<ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
				<ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
			</ui5-side-navigation-item>

			<ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link"></ui5-side-navigation-item>
			<ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>
		</ui5-side-navigation>
      `,
});
