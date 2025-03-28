import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { BreadcrumbsComponent } from '@ui5/webcomponents-ngx/main/breadcrumbs';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { BreadcrumbsComponent } from "@ui5/webcomponents-ngx/main/breadcrumbs";</code>`;
export default {
  title: 'UI5 Web Components / Main / Breadcrumbs',
  component: BreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('BreadcrumbsComponent', BreadcrumbsComponent, description)
      },
    },
  },
} as Meta;

export const StandardBreadcrumbs: StoryObj<BreadcrumbsComponent> = {
  render: (args) => ({
    props: args,
    template: `
				<ui5-breadcrumbs>
					<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
				</ui5-breadcrumbs>
			`,
  }),
};

export const BreadcrumbsWithNoCurrentPage: StoryObj<BreadcrumbsComponent> = {
  render: (args) => ({
    props: args,
    template: `
				<ui5-breadcrumbs design="NoCurrentPage">
					<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
				</ui5-breadcrumbs>
			`,
  }),
};

export const BreadcrumbsWithSpecificSeparator: StoryObj<BreadcrumbsComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
			<div>
				<ui5-breadcrumbs separator-style="Slash">
					<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
				</ui5-breadcrumbs>
			</div>
			<div>
				<ui5-breadcrumbs separator-style="BackSlash">
					<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
				</ui5-breadcrumbs>
			</div>
			<div>
				<ui5-breadcrumbs separator-style="DoubleBackSlash">
					<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
				</ui5-breadcrumbs>
			</div>
			<div>
				<ui5-breadcrumbs separator-style="DoubleGreaterThan">
					<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
				</ui5-breadcrumbs>
			</div>
			<div>
				<ui5-breadcrumbs separator-style="DoubleSlash">
					<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
				</ui5-breadcrumbs>
			</div>
			<div>
				<ui5-breadcrumbs separator-style="GreaterThan">
					<ui5-breadcrumbs-item href="https://www.sap.com">Root Page </ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
					<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
				</ui5-breadcrumbs>
			</div>
		`,
    }),
  };
