import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { InputDirective } from '../directives/input';

export default {
  component: InputDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicInput: Story = (args) => ({
  props: args,
  template: `
        <ui5-input class="samples-margin samples-responsive-margin-bottom" show-clear-icon="" value="Input"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" readonly="" value="readonly Input"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" disabled="" value="Disabled Input"></ui5-input>
      `,
});

export const inputWithSuggestionsNoteTheUsageDependsOnTheFrameworkYouAreUsing: Story =
  (args) => ({
    props: args,
    template: `
        <ui5-input id="suggestions-input" placeholder="Start typing country name" show-suggestions="" show-clear-icon=""></ui5-input>
      `,
  });

export const inputWithValueState: Story = (args) => ({
  props: args,
  template: `
        <ui5-input class="samples-margin samples-responsive-margin-bottom" value="Success" value-state="Success"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Warning" value-state="Warning"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Error" value-state="Error"></ui5-input>
		<ui5-input class="samples-margin samples-responsive-margin-bottom" value="Information" value-state="Information"></ui5-input>
      `,
});

export const inputWithSuggestionsAndValueStateMessage: Story = (args) => ({
  props: args,
  template: `
        <ui5-input class="samples-margin samples-responsive-margin-bottom" id="value-state-suggestions" placeholder="Start typing country name" show-suggestions="" value-state="Warning">
		</ui5-input>

		<ui5-input class="samples-margin samples-responsive-margin-bottom" placeholder="Choose content density" show-suggestions="" value-state="Error">
			<div slot="valueStateMessage">This is an error message. Extra long text used as an error message.</div>
			<ui5-li>Cozy</ui5-li>
			<ui5-li>Compact</ui5-li>
			<ui5-li>Condensed</ui5-li>
		</ui5-input>
      `,
});

export const inputAsSearchField: Story = (args) => ({
  props: args,
  template: `
        <div class="flex-column samples-margin">
			<ui5-input id="searchInput" placeholder="Enter search criteria ..." style="width: 100%">
				<ui5-icon id="searchIcon" slot="icon" name="search"></ui5-icon>
			</ui5-input>
		</div>
      `,
});

export const inputWithLabel: Story = (args) => ({
  props: args,
  template: `
        <div class="flex-column samples-margin">
			<ui5-label class="samples-big-margin-right" for="myInput" required="" show-colon="">Name</ui5-label>
			<ui5-input id="myInput" placeholder="Enter your Name" required=""></ui5-input>
		</div>
		<div class="flex-column">
			<ui5-label class="samples-big-margin-right" for="myPassword" required="" show-colon="">Secret Code</ui5-label>
			<ui5-input id="myPassword" type="Password" value-state="Error" placeholder="Enter your Secret Code" required=""></ui5-input>
		</div>
      `,
});

export const inputWithValueHelpDialog: Story = (args) => ({
  props: args,
  template: `
        <ui5-input id="valueHelpInput" placeholder="Enter product" show-suggestions="">
			<ui5-icon id="valueHelpIcon" slot="icon" name="value-help"></ui5-icon>
		</ui5-input>
	
		<ui5-dialog id="dialog" accessible-name="Products Value Help">
			<div slot="header" id="dialogHeader">
				<div id="titleBar">
					<h2 id="headerTitle">Products</h2>
					<ui5-button design="Transparent" id="clearButton">Clear</ui5-button>
				</div>
				<ui5-input id="dialogSearchInput" placeholder="Search">
					<ui5-icon id="dialogSearchIcon" slot="icon" name="search"></ui5-icon>
				</ui5-input>
			</div>
	
			<ui5-list id="itemsList" no-data-text="No data"></ui5-list>
	
			<div slot="footer" id="footer">
				<ui5-button design="Transparent" id="cancelButton">Cancel</ui5-button>
			</div>
		</ui5-dialog>
      `,
});
