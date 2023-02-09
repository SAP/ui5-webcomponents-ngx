import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { MenuDirective } from '../directives/menu';

export default {
  component: MenuDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicMenu: Story = (args) => ({
  props: args,
  template: `
        <ui5-button id="btnOpenBasic" class="samples-margin">Open Menu</ui5-button> <br>
		<ui5-menu id="menuBasic">
			<ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
			<ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
			<ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
			<ui5-menu-item text="Close"></ui5-menu-item>
			<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
			<ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>
		</ui5-menu>
      `,
});

export const menuWithSubMenuItems: Story = (args) => ({
  props: args,
  template: `
        <ui5-button id="btnOpenSubs">Open Menu</ui5-button> <br>
		<ui5-menu id="menuSubs">
			<ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
			<ui5-menu-item text="New Folder" icon="add-folder" disabled=""></ui5-menu-item>
			<ui5-menu-item text="Open" icon="open-folder" starts-section="">
				<ui5-menu-item text="Open Locally" icon="open-folder">
					<ui5-menu-item text="Open from C"></ui5-menu-item>
					<ui5-menu-item text="Open from D"></ui5-menu-item>
					<ui5-menu-item text="Open from E"></ui5-menu-item>
				</ui5-menu-item>
				<ui5-menu-item text="Open from Cloud"></ui5-menu-item>
			</ui5-menu-item>
			<ui5-menu-item text="Save" icon="save">
				<ui5-menu-item text="Save Locally" icon="save">
					<ui5-menu-item text="Save on C" icon="save"></ui5-menu-item>
					<ui5-menu-item text="Save on D" icon="save"></ui5-menu-item>
					<ui5-menu-item text="Save on E" icon="save"></ui5-menu-item>
				</ui5-menu-item>
				<ui5-menu-item text="Save on Cloud" icon="upload-to-cloud"></ui5-menu-item>
			</ui5-menu-item>
			<ui5-menu-item text="Close"></ui5-menu-item>
			<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
			<ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>
		</ui5-menu>
      `,
});

export const menuWithAdditionalTextOnMenuItems: Story = (args) => ({
  props: args,
  template: `
        <ui5-button id="btnOpenAdditionalText" class="samples-margin">Open Menu</ui5-button> <br>
		<ui5-menu id="menuAdditionalText">
			<ui5-menu-item text="New File" icon="add-document" additional-text="Ctrl+N"></ui5-menu-item>
			<ui5-menu-item text="New Folder" icon="add-folder" additional-text="Ctrl+F" disabled=""></ui5-menu-item>
			<ui5-menu-item text="Open" icon="open-folder" starts-section=""></ui5-menu-item>
			<ui5-menu-item text="Close"></ui5-menu-item>
			<ui5-menu-item text="Preferences" icon="action-settings" starts-section=""></ui5-menu-item>
			<ui5-menu-item text="Exit" icon="journey-arrive" additional-text="Ctrl+X"></ui5-menu-item>
		</ui5-menu>
      `,
});
