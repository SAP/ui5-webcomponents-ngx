import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { LabelComponent } from '@ui5/webcomponents-ngx/main/label';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { LabelComponent } from "@ui5/webcomponents-ngx/main/label";</code>`;
export default {
  title: 'UI5 Web Components / Main / Label',
  component: LabelComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('LabelComponent', LabelComponent, description),
      },
    },
  },
} as Meta;

export const BasicLabel: StoryObj<LabelComponent> = {
  render: (args: LabelComponent & any) => ({
    props: args,
    template: `
		<ui5-label>The quick brown fox jumps over the lazy dog.</ui5-label>
	`,
  }),
};

export const RequiredLabel: StoryObj<LabelComponent> = {
  render: (args: LabelComponent & any) => ({
    props: args,
    template: `
		<ui5-label required>Required Label</ui5-label>
	`,
  }),
};

export const RequiredLabelWithColon: StoryObj<LabelComponent> = {
  render: (args: LabelComponent & any) => ({
    props: args,
    template: `
		<ui5-label required showColon>Required Label</ui5-label>
	`,
  }),
};

export const TruncatedLabel: StoryObj<LabelComponent> = {
  render: (args: LabelComponent & any) => ({
    props: args,
    template: `
		<ui5-label wrapping-type="None" style="width:300px">When wrapping-type='None' is set long labels are truncated.</ui5-label>
	`,
  }),
};

export const WrappedLabel: StoryObj<LabelComponent> = {
  render: (args: LabelComponent & any) => ({
    props: args,
    template: `
		<ui5-label style="width:300px">Long labels wrap iby default when the text odes not fit the space.</ui5-label>
	`,
  }),
};

export const LabelFor: StoryObj<LabelComponent> = {
  render: (args: LabelComponent & any) => ({
    props: args,
    template: `
		<ui5-label id="myLabel" for="myInput" required showColon>First name</ui5-label>
		<ui5-input id="myInput" required placeholder="Enter your name"></ui5-input>
		<br>
		<ui5-label id="myLabel2" for="myDP" required showColon>Date of birth</ui5-label>
		<ui5-date-picker id="myDP" required></ui5-date-picker>
		<br>
		<ui5-label id="myLabel3" for="mySelect" required showColon>Job</ui5-label>
		<ui5-select id="mySelect" required>
			<ui5-option>Manager</ui5-option>
			<ui5-option>Sales</ui5-option>
			<ui5-option selected>Developer</ui5-option>
		</ui5-select>
		<br>
		<ui5-label id="myLabel4" for="myTextArea" required showColon>Description label test</ui5-label>
		<ui5-textarea id="myTextArea" required placeholder="Type as much text as you wish"></ui5-textarea>
		<br>
		<div style="display: flex; align-items: center;">
			<ui5-label for="myCB" required showColon>Accept terms of use</ui5-label>
			<ui5-checkbox id="myCB" required></ui5-checkbox>
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
  }),
};
