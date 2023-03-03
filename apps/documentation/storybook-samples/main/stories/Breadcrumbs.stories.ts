import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { BreadcrumbsDirective } from '../directives/breadcrumbs';

export default {
  component: BreadcrumbsDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
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
