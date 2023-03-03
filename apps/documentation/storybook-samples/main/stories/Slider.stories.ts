import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { SliderDirective } from '../directives/slider';

export default {
  component: SliderDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicSlider: Story = (args) => ({
  props: args,
  template: `
        <ui5-slider></ui5-slider>
      `,
});

export const sliderWithTooltip: Story = (args) => ({
  props: args,
  template: `
        <ui5-slider min="0" max="20" show-tooltip=""></ui5-slider>
      `,
});

export const disabledSliderWithTickmarksAndLabels: Story = (args) => ({
  props: args,
  template: `
        <ui5-slider min="20" max="100" label-interval="5" disabled="" show-tickmarks=""></ui5-slider>
      `,
});

export const sliderTooltipTickmarksAndLabels: Story = (args) => ({
  props: args,
  template: `
        <ui5-slider min="-20" max="20" step="2" value="12" show-tooltip="" label-interval="2" show-tickmarks=""></ui5-slider>
      `,
});
