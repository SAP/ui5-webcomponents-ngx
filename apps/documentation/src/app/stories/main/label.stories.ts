import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, LabelComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-label</code> is a component used to represent a label, providing valuable information to the user. Usually it is placed next to a value holder, such as a text field. It informs the user about what data is displayed or expected in the value holder. <br><br> The <code>ui5-label</code> appearance can be influenced by properties, such as <code>required</code> and <code>wrappingType</code>. The appearance of the Label can be configured in a limited way by using the design property. For a broader choice of designs, you can use custom styles.

<h3>ES6 Module Import</h3>

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
        component: description,
      },
    },
  },
} as Meta;

export const basicLabel: Story<LabelComponent> = (
  args: LabelComponent & any
) => ({
  props: args,
  template: `
		<ui5-label>The quick brown fox jumps over the lazy dog.</ui5-label>
	`,
});

export const requiredLabel: Story<LabelComponent> = (
  args: LabelComponent & any
) => ({
  props: args,
  template: `
		<ui5-label required>Required Label</ui5-label>
	`,
});

export const requiredLabelWithColon: Story<LabelComponent> = (
  args: LabelComponent & any
) => ({
  props: args,
  template: `
		<ui5-label required showColon>Required Label</ui5-label>
	`,
});

export const truncatedLabel: Story<LabelComponent> = (
  args: LabelComponent & any
) => ({
  props: args,
  template: `
		<ui5-label style="width:200px">Long labels are truncated by default.</ui5-label>
	`,
});

export const wrappedLabel: Story<LabelComponent> = (
  args: LabelComponent & any
) => ({
  props: args,
  template: `
		<ui5-label style="width:200px" wrapping-type="Normal">Long labels can wrap if the 'wrapping-type="Normal"' property is set.</ui5-label>
	`,
});

export const labelFor: Story<LabelComponent> = (
  args: LabelComponent & any
) => ({
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
});
