import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { MenuComponent } from '@ui5/webcomponents-ngx/main/menu';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { MenuComponent } from "@ui5/webcomponents-ngx/main/menu";</code>`;
export default {
  title: 'UI5 Web Components / Main / Menu',
  component: MenuComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('MenuComponent', MenuComponent, description),
      },
    },
  },
} as Meta;

export const BasicMenu: StoryObj = {
  render: () => ({
    template: `
  <ui5-button id="btn" (click)="menuBasic.open=true">Open Menu</ui5-button>
  
  <ui5-menu opener="btn" #menuBasic="ui5Menu">
      <ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
      <ui5-menu-item text="New Folder" icon="add-folder" disabled></ui5-menu-item>
      <ui5-menu-item text="Open" icon="open-folder"></ui5-menu-item>

      <ui5-menu-separator></ui5-menu-separator>
      <ui5-menu-item text="Close" icon="decline"></ui5-menu-item>
      <ui5-menu-item text="Preferences" icon="action-settings"></ui5-menu-item>

      <ui5-menu-separator></ui5-menu-separator>
      <ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>
  </ui5-menu>
  `,
  }),
};

export const MenuWithSubmenu: StoryObj = {
  render: () => ({
    template: `
  <ui5-button id="btn2" (click)="menuSubs.open=true">Open Menu</ui5-button>

  <ui5-menu opener="btn2" #menuSubs="ui5Menu">
      <ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>
      <ui5-menu-item text="New Folder" icon="add-folder" disabled></ui5-menu-item>

      <ui5-menu-separator></ui5-menu-separator>
      <ui5-menu-item text="Open" icon="open-folder">
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

      <ui5-menu-separator></ui5-menu-separator>
      <ui5-menu-item text="Preferences" icon="action-settings"></ui5-menu-item>
      <ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>
  </ui5-menu>
  `,
  }),
};

export const MenuWithAdditionalTextOnMenuItems: StoryObj = {
  render: () => ({
    template: `
  <ui5-button id="btn2" (click)="menuAdditionalText.open=true">Open Menu</ui5-button>

  <ui5-menu opener="btn2" #menuAdditionalText="ui5Menu">
      <ui5-menu-item text="New File" icon="add-document" additional-text="Ctrl+N"></ui5-menu-item>
      <ui5-menu-item text="New Folder" icon="add-folder" additional-text="Ctrl+F" disabled></ui5-menu-item>

      <ui5-menu-separator></ui5-menu-separator>
      <ui5-menu-item text="Open" icon="open-folder"></ui5-menu-item>
      <ui5-menu-item text="Close"></ui5-menu-item>

      <ui5-menu-separator></ui5-menu-separator>
      <ui5-menu-item text="Preferences" icon="action-settings"></ui5-menu-item>
      <ui5-menu-item text="Exit" icon="journey-arrive" additional-text="Ctrl+X"></ui5-menu-item>
  </ui5-menu>
  `,
  }),
};
