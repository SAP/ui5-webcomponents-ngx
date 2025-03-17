import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { FlexibleColumnLayoutComponent } from '@ui5/webcomponents-ngx/fiori/flexible-column-layout';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { FlexibleColumnLayoutComponent } from "@ui5/webcomponents-ngx/fiori/flexible-column-layout";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / FlexibleColumnLayout',
  component: FlexibleColumnLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule, FlexibleColumnLayoutComponent],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('FlexibleColumnLayoutComponent', FlexibleColumnLayoutComponent, description),
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
