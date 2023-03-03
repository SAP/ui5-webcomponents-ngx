import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / Breadcrumbs',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const standardBreadcrumbs: Story = (args) => ({
  props: args,
  template: `
		<ui5-breadcrumbs>
			<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>
			<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
			<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
		</ui5-breadcrumbs>
	`,
});

export const breadcrumbsWithNoCurrentPage: Story = (args) => ({
  props: args,
  template: `
		<ui5-breadcrumbs design="NoCurrentPage">
			<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>
			<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
		</ui5-breadcrumbs>
	`,
});

export const breadcrumbsWithSpecificSeparator: Story = (args) => ({
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
});
