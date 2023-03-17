import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, IconComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3>

The <code>ui5-icon</code> component represents an SVG icon. There are two main scenarios how the <code>ui5-icon</code> component is used: as a purely decorative element, <br> or as an interactive element that can be focused and clicked.

<h3>Usage</h3>

1. <b>Get familiar with the icons collections.</b> <br> Before displaying an icon, you need to explore the icons collections to find and import the desired icon. <br> Currently there are 3 icons collection, available as 3 npm packages: <br>

<ul> <li> <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons" class="api-table-content-cell-link">@ui5/webcomponents-icons</ui5-link> represents the "SAP-icons" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons" class="api-table-content-cell-link">icons</ui5-link>. </li> <li> <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt" class="api-table-content-cell-link">@ui5/webcomponents-icons-tnt</ui5-link> represents the "tnt" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT" class="api-table-content-cell-link">icons</ui5-link>. </li> <li> <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite" class="api-table-content-cell-link">@ui5/webcomponents-icons-icons-business-suite</ui5-link> represents the "business-suite" collection and includes the following <ui5-link target="_blank" href="https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols" class="api-table-content-cell-link">icons</ui5-link>. </li> </ul>

2. <b>After exploring the icons collections, add one or more of the packages as dependencies to your project.</b> <br> <code>npm i @ui5/webcomponents-icons</code><br> <code>npm i @ui5/webcomponents-icons-tnt</code><br> <code>npm i @ui5/webcomponents-icons-business-suite</code> <br><br>

3. <b>Then, import the desired icon</b>. <br> <code>import "@ui5/{package_name}/dist/{icon_name}.js";</code> <br><br>

<b>For Example</b>: <br>

For the standard "SAP-icons" icon collection, import an icon from the <code>@ui5/webcomponents-icons</code> package: <br> <code>import { IconComponent } from "@ui5/webcomponents-ngx/main/icon";</code> <br><br>

For the "tnt" (SAP Fiori Tools) icon collection, import an icon from the <code>@ui5/webcomponents-icons-tnt</code> package: <br> <code>import "@ui5/webcomponents-icons-tnt/dist/antenna.js";</code> <br><br>

For the "business-suite" (SAP Business Suite) icon collection, import an icon from the <code>@ui5/webcomponents-icons-business-suite</code> package: <br> <code>import "@ui5/webcomponents-icons-business-suite/dist/ab-testing.js";</code> <br><br>

4. <b>Display the icon using the <code>ui5-icon</code> web component.</b><br> Set the icon collection ("SAP-icons", "tnt" or "business-suite" - "SAP-icons" is the default icon collection and can be skipped)<br> and the icon name to the <code>name</code> property. <br><br>

<code>&lt;ui5-icon name="employee">&lt;/ui5-icon></code><br> <code>&lt;ui5-icon name="tnt/antenna">&lt;/ui5-icon></code><br> <code>&lt;ui5-icon name="business-suite/ab-testing">&lt;/ui5-icon></code>

<h3>Keyboard Handling</h3>

<ul> <li>[SPACE, ENTER, RETURN] - Fires the <code>click</code> event if the <code>interactive</code> property is set to true.</li> <li>[SHIFT] - If [SPACE] or [ENTER],[RETURN] is pressed, pressing [SHIFT] releases the ui5-icon without triggering the click event.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Icon.js";</code>`;
export default {
  title: 'UI5 Web Components / Main / Icon',
  component: IconComponent,
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

export const basicIcons: Story<IconComponent> = (
  args: IconComponent & any
) => ({
  props: args,
  template: `
		<ui5-icon class="samples-margin" name="activate"></ui5-icon>
		<ui5-icon class="samples-margin" name="activities"></ui5-icon>
		<ui5-icon class="samples-margin" name="add-equipment"></ui5-icon>
		<ui5-icon class="samples-margin" name="add-document"></ui5-icon>
		<ui5-icon class="samples-margin" name="add-employee"></ui5-icon>
	`,
});

export const sapFioriToolsIcons: Story<IconComponent> = (
  args: IconComponent & any
) => ({
  props: args,
  template: `
		<ui5-icon class="samples-margin" name="tnt/antenna"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/api"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/modem"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/data-store"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/flow"></ui5-icon>
	`,
});

export const customizedIcons: Story<IconComponent> = (
  args: IconComponent & any
) => ({
  props: args,
  template: `
		<ui5-icon class="samples-margin" name="employee" style="width:3rem;height:3rem;font-size:1.5rem;color:crimson;background-color:#fafafa"></ui5-icon>
		<ui5-icon class="samples-margin" name="menu" style="width:3rem;height:3rem;font-size:1.5rem;color:crimson;background-color:#fafafa"></ui5-icon>
	`,
});
