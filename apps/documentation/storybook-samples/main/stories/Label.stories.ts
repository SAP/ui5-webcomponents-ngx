import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { LabelDirective } from '../directives/label';

export default {
  component: LabelDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicLabel: Story = (args) => ({
  props: args,
  template: `
        <ui5-label>The quick brown fox jumps over the lazy dog.</ui5-label>
      `,
});

export const requiredLabel: Story = (args) => ({
  props: args,
  template: `
        <ui5-label required="">Required Label</ui5-label>
      `,
});

export const requiredLabelWithColon: Story = (args) => ({
  props: args,
  template: `
        <ui5-label required="" show-colon="">Required Label</ui5-label>
      `,
});

export const truncatedLabel: Story = (args) => ({
  props: args,
  template: `
        <ui5-label style="width:200px">Long labels are truncated by default.</ui5-label>
      `,
});

export const wrappedLabel: Story = (args) => ({
  props: args,
  template: `
        <ui5-label style="width:200px" wrapping-type="Normal">Long labels can wrap if the 'wrapping-type="Normal"' property is set.</ui5-label>
      `,
});

export const labelFor: Story = (args) => ({
  props: args,
  template: `
        <ui5-label id="myLabel" for="myInput" required="" show-colon="">First name</ui5-label>
		<ui5-input id="myInput" required="" placeholder="Enter your name"></ui5-input>
		<br>
		<ui5-label id="myLabel2" for="myDP" required="" show-colon="">Date of birth</ui5-label>
		<ui5-date-picker id="myDP" required=""></ui5-date-picker>
		<br>
		<ui5-label id="myLabel3" for="mySelect" required="" show-colon="">Job</ui5-label>
		<ui5-select id="mySelect" required="">
			<ui5-option>Manager</ui5-option>
			<ui5-option>Sales</ui5-option>
			<ui5-option selected="">Developer</ui5-option>
		</ui5-select>
		<br>
		<ui5-label id="myLabel4" for="myTextArea" required="" show-colon="">Description label test</ui5-label>
		<ui5-textarea id="myTextArea" required="" placeholder="Type as much text as you wish"></ui5-textarea>
		<br>
		<div style="display: flex; align-items: center;">
			<ui5-label for="myCB" required="" show-colon="">Accept terms of use</ui5-label>
			<ui5-checkbox id="myCB" required=""></ui5-checkbox>
		</div>
		<pre class="prettyprint lang-html"><xmp>
<ui5-label id="myLabel" for="myInput" required show-colon>First name</ui5-label>
<ui5-input id="myInput" required placeholder="Enter your name"></ui5-input>
<ui5-label id="myLabel2" for="myDP" required show-colon>Date of birth</ui5-label>
<ui5-date-picker id="myDP" required></ui5-date-picker>
<ui5-label id="myLabel3" for="mySelect" required show-colon>Job</ui5-label>
<ui5-select id="mySelect" required>
	<ui5-option>Manager</ui5-option>
	<ui5-option>Sales</ui5-option>
	<ui5-option selected>Developer</ui5-option>
</ui5-select>
<ui5-label id="myLabel4" for="myTextArea" required show-colon>Description label test</ui5-label>
<ui5-textarea id="myTextArea" required placeholder="Type as much text as you wish"></ui5-textarea>
<ui5-label for="myCB" required show-colon>Accept terms of use</ui5-label>
	<ui5-checkbox id="myCB" required></ui5-checkbox>
		</xmp></pre>
      `,
});
