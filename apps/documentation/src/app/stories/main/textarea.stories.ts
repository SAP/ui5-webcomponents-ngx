import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / TextArea',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const basicTextArea: Story = (args) => ({
  props: args,
  template: `
		<ui5-textarea class="textarea-width" placeholder="Type as much text as you wish"></ui5-textarea>
	`,
});

export const textAreaWithMaximumLength: Story = (args) => ({
  props: args,
  template: `
		<ui5-textarea class="textarea-width" placeholder="Type no more than 10 symbols" maxlength="10" show-exceeded-text=""></ui5-textarea>
	`,
});

export const textAreaWithLabel: Story = (args) => ({
  props: args,
  template: `
		<ui5-label for="textAreaWithLabelID">Description</ui5-label>
		<ui5-textarea id="textAreaWithLabelID" class="textarea-width" placeholder="Enter description"></ui5-textarea>
	`,
});
