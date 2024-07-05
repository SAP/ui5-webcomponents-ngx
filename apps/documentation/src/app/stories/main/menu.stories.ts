import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, MenuComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

<code>ui5-menu</code> component represents a hierarchical menu structure.

<h3>Usage</h3>

<code>ui5-menu</code> contains <code>ui5-menu-item</code> components. An arbitrary hierarchy structure can be represented by recursively nesting menu items.

<h3>Keyboard Handling</h3>

The <code>ui5-menu</code> provides advanced keyboard handling. The user can use the following keyboard shortcuts in order to navigate trough the tree: <ul> <li><code>Arrow Up</code> / <code>Arrow Down</code> - Navigates up and down the menu items that are currently visible.</li> <li><code>Arrow Right</code>, <code>Space</code> or <code>Enter</code> - Opens a sub-menu if there are menu items nested in the currently clicked menu item.</li> <li><code>Arrow Left</code> or <code>Escape</code> - Closes the currently opened sub-menu.</li> </ul> Note: if the text ditrection is set to Right-to-left (RTL), <code>Arrow Right</code> and <code>Arrow Left</code> functionality is swapped. <br>

<h3>ES6 Module Import</h3>

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
        component: description,
      },
    },
  },
} as Meta;

export const basicMenu: Story = () => ({
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
  `
});

export const menuWithSubmenu: Story = () => ({
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
  `
});

export const MenuWithAdditionalTextOnMenuItems: Story = () => ({
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
  `
});
