import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SideNavigationComponent } from '@ui5/webcomponents-ngx/fiori/side-navigation';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SideNavigationComponent } from "@ui5/webcomponents-ngx/fiori/side-navigation";</code>`;
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
        component: extractDescription('SideNavigationComponent', SideNavigationComponent, description),
      },
    },
  },
} as Meta;

export const BasicSideNavigation: StoryObj<SideNavigationComponent> = {
  render: () => ({
    template: `
  
    <ui5-side-navigation>
        <ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
  
        <ui5-side-navigation-group text="Group 1" expanded>
            <ui5-side-navigation-item text="External Link" icon="chain-link" href="https://sap.com" target="_blank"></ui5-side-navigation-item>
            <ui5-side-navigation-item text="People" expanded icon="group">
              <ui5-side-navigation-sub-item text="From My Team"></ui5-side-navigation-sub-item>
              <ui5-side-navigation-sub-item text="From Other Teams"></ui5-side-navigation-sub-item>
            </ui5-side-navigation-item>
        </ui5-side-navigation-group>
  
        <ui5-side-navigation-group text="Group 2" expanded>
            <ui5-side-navigation-item text="Locations" icon="locate-me" selected></ui5-side-navigation-item>
            <ui5-side-navigation-item text="Locations" disabled icon="locate-me"></ui5-side-navigation-item>
            <ui5-side-navigation-item text="Events" icon="calendar">
              <ui5-side-navigation-sub-item text="Local"></ui5-side-navigation-sub-item>
              <ui5-side-navigation-sub-item text="External Link" href="https://sap.com" target="_blank"></ui5-side-navigation-sub-item>
              <ui5-side-navigation-sub-item text="Others"></ui5-side-navigation-sub-item>
            </ui5-side-navigation-item>
        </ui5-side-navigation-group>
  
        <ui5-side-navigation-item slot="fixedItems" text="Useful Links" icon="chain-link">
            <ui5-side-navigation-sub-item text="External Link" href="https://sap.com" target="_blank"></ui5-side-navigation-sub-item>
        </ui5-side-navigation-item>
        <ui5-side-navigation-item slot="fixedItems" text="History" icon="history"></ui5-side-navigation-item>
    </ui5-side-navigation>
    `,
  }),
};
