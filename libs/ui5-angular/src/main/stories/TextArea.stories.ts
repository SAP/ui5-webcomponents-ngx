import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { TextAreaDirective } from '../directives/text-area';

export default {
  component: TextAreaDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
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
