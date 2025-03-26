import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TextAreaComponent } from '@ui5/webcomponents-ngx/main/text-area';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

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
        component: extractDescription(
          'TextAreaComponent',
          TextAreaComponent,
          description,
        ),
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

export const TextAreaStates: StoryObj<TextAreaComponent> = {
  render: (args: TextAreaComponent & any) => ({
    props: args,
    template: `
    <ui5-textarea disabled></ui5-textarea>
    <ui5-textarea readonly></ui5-textarea>
    <ui5-textarea value-state="Positive" placeholder="Positive"></ui5-textarea>
    <ui5-textarea value-state="Information" placeholder="Information"></ui5-textarea>
    <ui5-textarea value-state="Critical" placeholder="Critical"></ui5-textarea>
    <ui5-textarea value-state="Negative" placeholder="Negative"></ui5-textarea>
    <ui5-textarea value-state="Negative" placeholder="Custom value-state message">
        <div slot="valueStateMessage">Please provide valid value</div>
    </ui5-textarea>
  `,
  }),
};
