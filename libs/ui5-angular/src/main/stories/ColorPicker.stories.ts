import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { ColorPickerDirective } from '../directives/color-picker';

export default {
  component: ColorPickerDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const pickColor: Story = (args) => ({
  props: args,
  template: `
        <ui5-color-picker></ui5-color-picker>
      `,
});
