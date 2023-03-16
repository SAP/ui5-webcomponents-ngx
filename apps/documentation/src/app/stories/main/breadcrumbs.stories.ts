import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  BreadcrumbsComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3> Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path. It helps the user to be aware of their location within the application and allows faster navigation. <br><br> The last three steps can be accessed as links directly, while the remaining links prior to them are available in a drop-down menu. <br><br> You can choose the type of separator to be used from a number of predefined options.

<h3>Keyboard Handling</h3> The <code>ui5-breadcrumbs</code> provides advanced keyboard handling. <br> <ul> <li>[F4, ALT+UP, ALT+DOWN, SPACE, ENTER] - If the dropdown arrow is focused - opens/closes the drop-down.</li> <li>[SPACE, ENTER] - Activates the focused item and triggers the <code>item-click</code> event.</li> <li>[ESC] - Closes the drop-down.</li> <li>[LEFT] - If the drop-down is closed - navigates one item to the left.</li> <li>[RIGHT] - If the drop-down is closed - navigates one item to the right.</li> <li>[UP] - If the drop-down is open - moves focus to the next item.</li> <li>[DOWN] - If the drop-down is open - moves focus to the previous item.</li> <li>[HOME] - Navigates to the first item.</li> <li>[END] - Navigates to the last item.</li> </ul> <br>`;
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
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const ApplyChanges: Story<BreadcrumbsComponent> = (
  args: BreadcrumbsComponent & any
) => ({
  props: args,
  template: `
          <ui5-breadcrumbs>
            ${args.content}
          </ui5-breadcrumbs>
        `,
});

export const standardBreadcrumbs: Story<BreadcrumbsComponent> = (
  args: BreadcrumbsComponent & any
) => ({
  props: args,
  template: `
		<ui5-breadcrumbs>
			<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>
			<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
			<ui5-breadcrumbs-item>Current Page</ui5-breadcrumbs-item>
		</ui5-breadcrumbs>
	`,
});

export const breadcrumbsWithNoCurrentPage: Story<BreadcrumbsComponent> = (
  args: BreadcrumbsComponent & any
) => ({
  props: args,
  template: `
		<ui5-breadcrumbs design="NoCurrentPage">
			<ui5-breadcrumbs-item href="https://www.sap.com" target="_blank">Root Page </ui5-breadcrumbs-item>
			<ui5-breadcrumbs-item href="https://www.sap.com">Parent Page</ui5-breadcrumbs-item>
		</ui5-breadcrumbs>
	`,
});

export const breadcrumbsWithSpecificSeparator: Story<BreadcrumbsComponent> = (
  args: BreadcrumbsComponent & any
) => ({
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
