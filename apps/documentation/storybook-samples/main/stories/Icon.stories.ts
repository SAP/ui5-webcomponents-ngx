import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { IconDirective } from '../directives/icon';

export default {
  component: IconDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicIcons: Story = (args) => ({
  props: args,
  template: `
        <ui5-icon class="samples-margin" name="activate"></ui5-icon>
		<ui5-icon class="samples-margin" name="activities"></ui5-icon>
		<ui5-icon class="samples-margin" name="add-equipment"></ui5-icon>
		<ui5-icon class="samples-margin" name="add-document"></ui5-icon>
		<ui5-icon class="samples-margin" name="add-employee"></ui5-icon>
      `,
});

export const sapFioriToolsIcons: Story = (args) => ({
  props: args,
  template: `
        <ui5-icon class="samples-margin" name="tnt/antenna"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/api"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/modem"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/data-store"></ui5-icon>
		<ui5-icon class="samples-margin" name="tnt/flow"></ui5-icon>
      `,
});

export const customizedIcons: Story = (args) => ({
  props: args,
  template: `
        <ui5-icon class="samples-margin" name="employee" style="width:3rem;height:3rem;font-size:1.5rem;color:crimson;background-color:#fafafa"></ui5-icon>
		<ui5-icon class="samples-margin" name="menu" style="width:3rem;height:3rem;font-size:1.5rem;color:crimson;background-color:#fafafa"></ui5-icon>
      `,
});
