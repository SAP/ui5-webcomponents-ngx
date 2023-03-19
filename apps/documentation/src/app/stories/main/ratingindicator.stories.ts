import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  RatingIndicatorComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> The Rating Indicator is used to display a specific number of icons that are used to rate an item. Additionally, it is also used to display the average and overall ratings.

<h3>Usage</h3> The recommended number of icons is between 5 and 7.

<h3>Responsive Behavior</h3> You can change the size of the Rating Indicator by changing its <code>font-size</code> CSS property. <br> Example: <code>&lt;ui5-rating-indicator style="font-size: 3rem;">&lt;/ui5-rating-indicator></code>

<h3>Keyboard Handling</h3> When the <code>ui5-rating-indicator</code> is focused, the user can change the rating with the following keyboard shortcuts: <br>

<ul> <li>[RIGHT/UP] - Increases the value of the rating by one step. If the highest value is reached, does nothing</li> <li>[LEFT/DOWN] - Decreases the value of the rating by one step. If the lowest value is reached, does nothing.</li> <li>[HOME] - Sets the lowest value.</li> <li>[END] - Sets the highest value.</li> <li>[SPACE/ENTER/RETURN] - Increases the value of the rating by one step. If the highest value is reached, sets the rating to the lowest value.</li> <li>Any number - Changes value to the corresponding number. If typed number is larger than the number of values, sets the highest value.</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { RatingIndicatorComponent } from "@ui5/webcomponents-ngx/main/rating-indicator";</code>`;
export default {
  title: 'UI5 Web Components / Main / RatingIndicator',
  component: RatingIndicatorComponent,
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

export const basicRatingIndicator: Story<RatingIndicatorComponent> = (
  args: RatingIndicatorComponent & any
) => ({
  props: args,
  template: `
		<ui5-rating-indicator></ui5-rating-indicator>
		<ui5-rating-indicator value="3"></ui5-rating-indicator>
		<ui5-rating-indicator value="3.7"></ui5-rating-indicator>
	`,
});

export const ratingIndicatorWithDifferentMaxValue: Story<
  RatingIndicatorComponent
> = (args: RatingIndicatorComponent & any) => ({
  props: args,
  template: `
		<ui5-rating-indicator max="10" value="5"></ui5-rating-indicator>
		<ui5-rating-indicator max="3" value="3"></ui5-rating-indicator>
	`,
});

export const disabledRatingIndicator: Story<RatingIndicatorComponent> = (
  args: RatingIndicatorComponent & any
) => ({
  props: args,
  template: `
		<ui5-rating-indicator value="4" disabled=""></ui5-rating-indicator>
		<ui5-rating-indicator max="10" value="5" disabled=""></ui5-rating-indicator>
		<ui5-rating-indicator max="3" value="3" disabled=""></ui5-rating-indicator>
	`,
});

export const readonlyRatingIndicator: Story<RatingIndicatorComponent> = (
  args: RatingIndicatorComponent & any
) => ({
  props: args,
  template: `
		<ui5-rating-indicator value="4" readonly=""></ui5-rating-indicator>
		<ui5-rating-indicator max="7" value="5" readonly=""></ui5-rating-indicator>
	`,
});
