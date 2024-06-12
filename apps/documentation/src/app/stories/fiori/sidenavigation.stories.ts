import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  SideNavigationComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>SideNavigation</code> is used as a standard menu in applications. It consists of three containers: header (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned). <ul> <li>The header is meant for displaying user related information - profile data, avatar, etc.</li> <li>The main navigation section is related to the user’s current work context</li> <li>The secondary section is mostly used to link additional information that may be of interest (legal information, developer communities, external help, contact information and so on). </li> </ul>

<h3>Usage</h3>

Use the available <code>ui5-side-navigation-item</code> and <code>ui5-side-navigation-sub-item</code> components to build your menu. The items can consist of text only or an icon with text. The use or non-use of icons must be consistent for all items on one level. You must not combine entries with and without icons on the same level. We strongly recommend that you do not use icons on the second level.

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

<h3>ES6 Module Import</h3>

<code>import { SideNavigationComponent } from "@ui5/webcomponents-ngx/fiori/side-navigation";</code> (for <code>ui5-side-navigation-sub-item</code>)`;
export default {
  title: 'UI5 Web Components / Fiori / SideNavigation',
  component: SideNavigationComponent,
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

export const SideNavigationInApplication = () => ({
  template: `
<ui5-shellbar primary-title="UI5 Web Components" secondary-title="The Best Run SAP" [show-co-pilot]="true">
    <ui5-button icon="menu" slot="startButton" (ui5Click)="sideNavigation.collapsed = !sideNavigation.collapsed"></ui5-button>
</ui5-shellbar>

<ui5-side-navigation class="ui5-side-nav" #sideNavigation="ui5SideNavigation">
    <ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
    <ui5-side-navigation-item text="People" [expanded]="true" icon="group">
        <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>
    <ui5-side-navigation-item text="Locations" icon="locate-me" [selected]="true"></ui5-side-navigation-item>
    <ui5-side-navigation-item text="Events" icon="calendar">
        <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
        <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>

    <ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link"></ui5-side-navigation-item>
    <ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>
</ui5-side-navigation>
  `
});
