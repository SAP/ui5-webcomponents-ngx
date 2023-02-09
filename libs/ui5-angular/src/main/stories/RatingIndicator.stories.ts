import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { RatingIndicatorDirective } from '../directives/rating-indicator';

export default {
  component: RatingIndicatorDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicRatingIndicator: Story = (args) => ({
  props: args,
  template: `
        <ui5-rating-indicator></ui5-rating-indicator>
		<ui5-rating-indicator value="3"></ui5-rating-indicator>
		<ui5-rating-indicator value="3.7"></ui5-rating-indicator>
      `,
});

export const ratingIndicatorWithDifferentMaxValue: Story = (args) => ({
  props: args,
  template: `
        <ui5-rating-indicator max="10" value="5"></ui5-rating-indicator>
		<ui5-rating-indicator max="3" value="3"></ui5-rating-indicator>
      `,
});

export const disabledRatingIndicator: Story = (args) => ({
  props: args,
  template: `
        <ui5-rating-indicator value="4" disabled=""></ui5-rating-indicator>
		<ui5-rating-indicator max="10" value="5" disabled=""></ui5-rating-indicator>
		<ui5-rating-indicator max="3" value="3" disabled=""></ui5-rating-indicator>
      `,
});

export const readonlyRatingIndicator: Story = (args) => ({
  props: args,
  template: `
        <ui5-rating-indicator value="4" readonly=""></ui5-rating-indicator>
		<ui5-rating-indicator max="7" value="5" readonly=""></ui5-rating-indicator>
      `,
});
