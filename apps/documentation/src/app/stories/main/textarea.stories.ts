import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  TextAreaComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-textarea</code> component is used to enter multiple lines of text. <br><br> When empty, it can hold a placeholder similar to a <code>ui5-input</code>. You can define the rows of the <code>ui5-textarea</code> and also determine specific behavior when handling long texts.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-textarea</code> exposes the following CSS Shadow Parts: <ul> <li>textarea - Used to style the native textarea</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { TextAreaComponent } from "@ui5/webcomponents-ngx/main/text-area";</code>`;
export default {
  title: 'UI5 Web Components / Main / TextArea',
  component: TextAreaComponent,
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

export const BasicTextArea: StoryObj<TextAreaComponent> = {
  render: (args: TextAreaComponent & any) => ({
    props: args,
    template: `
		<ui5-textarea class="textarea-width" placeholder="Type as much text as you wish"></ui5-textarea>
	`,
  }),
};

export const TextAreaWithMaximumLength: StoryObj<TextAreaComponent> = {
  render: (args: TextAreaComponent & any) => ({
    props: args,
    template: `
		<ui5-textarea class="textarea-width" placeholder="Type no more than 10 symbols" [maxlength]="10" show-exceeded-text></ui5-textarea>
	`,
  }),
};

export const TextAreaWithLabel: StoryObj<TextAreaComponent> = {
  render: (args: TextAreaComponent & any) => ({
    props: args,
    template: `
		<ui5-label for="textAreaWithLabelID">Description</ui5-label>
		<ui5-textarea id="textAreaWithLabelID" class="textarea-width" placeholder="Enter description"></ui5-textarea>
	`,
  }),
};
