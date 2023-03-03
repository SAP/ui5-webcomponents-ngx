import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { RangeSliderDirective } from '../directives/range-slider';

export default {
  component: RangeSliderDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicRangeSlider: Story = (args) => ({
  props: args,
  template: `
        <ui5-range-slider end-value="20"></ui5-range-slider>
      `,
});

export const rangeSliderWithCustomMinMaxStartValueAndEndValueProperties: Story =
  (args) => ({
    props: args,
    template: `
        <ui5-range-slider min="100" max="200" start-value="120" end-value="150"></ui5-range-slider>
      `,
  });

export const rangeSliderWithTooltips: Story = (args) => ({
  props: args,
  template: `
        <ui5-range-slider start-value="3" end-value="13" show-tooltip=""></ui5-range-slider>
      `,
});

export const rangeSliderWithTickmarksAndCustomStep: Story = (args) => ({
  props: args,
  template: `
        <ui5-range-slider step="2" start-value="12" end-value="24" show-tickmarks=""></ui5-range-slider>
      `,
});

export const rangeSliderWithTooltipsTickmarksAndLabels: Story = (args) => ({
  props: args,
  template: `
        <ui5-range-slider min="0" max="112" step="2" start-value="4" end-value="12" show-tooltip="" label-interval="2" show-tickmarks=""></ui5-range-slider>
      `,
});
