import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  FlexibleColumnLayoutComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>FlexibleColumnLayout</code> implements the list-detail-detail paradigm by displaying up to three pages in separate columns. There are several possible layouts that can be changed either with the component API, or by pressing the arrows, displayed between the columns.

<h3>Usage</h3>

Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.). The Component is flexible in a sense that the application can focus the user's attention on one particular column.

<h3>Responsive Behavior</h3>

The <code>FlexibleColumnLayout</code> automatically displays the maximum possible number of columns based on <code>layout</code> property and the window size. The component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px, and 3 columns for sizes bigger than 1023px.

<br><br> <h3>Keyboard Handling</h3>

<h4>Basic Navigation</h4> <ul> <li>[SPACE, ENTER, RETURN] - If focus is on the layout toggle button (arrow button), once activated, it triggers the associated action (such as expand/collapse the column).</li> <li>This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code></li> </ul>

<h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

<h3>ES6 Module Import</h3>

<code>import { FlexibleColumnLayoutComponent } from "@ui5/webcomponents-ngx/fiori/flexible-column-layout";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / FlexibleColumnLayout',
  component: FlexibleColumnLayoutComponent,
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

export const Usage: StoryObj<FlexibleColumnLayoutComponent> = {
  render: () => ({
    template: `
  
    <div style="width: 1200px;">
  
    <ui5-flexible-column-layout id="fcl" style="height: 600px;" layout="ThreeColumnsMidExpanded">
        <div slot="startColumn">
          <div>
            <ui5-title>Start Column</ui5-title>
          </div>
          <ui5-list>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
          </ui5-list>
      </div>
    
        <div slot="midColumn">
          <div>
            <ui5-title>Mid Column</ui5-title>
          </div>
          <ui5-list>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
          </ui5-list>
      </div>
    
        <div class="col" slot="endColumn">
          <div>
              <ui5-title>End Column</ui5-title>
          </div>
          <ui5-list>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
            <ui5-li>Hello worild!</ui5-li>
          </ui5-list>
        </div>
      </ui5-flexible-column-layout>
  
      </div>
    `,
  }),
};
