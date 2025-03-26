import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { RatingIndicatorComponent } from '@ui5/webcomponents-ngx/main/rating-indicator';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

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
        component: extractDescription(
          'RatingIndicatorComponent',
          RatingIndicatorComponent,
          description,
        ),
      },
    },
  },
} as Meta;

export const BasicRatingIndicator: StoryObj<RatingIndicatorComponent> = {
  render: (args: RatingIndicatorComponent & any) => ({
    props: args,
    template: `
		<ui5-rating-indicator></ui5-rating-indicator>
		<ui5-rating-indicator value="3"></ui5-rating-indicator>
		<ui5-rating-indicator value="3.7"></ui5-rating-indicator>
	`,
  }),
};

export const RatingIndicatorWithDifferentMaxValue: StoryObj<RatingIndicatorComponent> =
  {
    render: (args: RatingIndicatorComponent & any) => ({
      props: args,
      template: `
		<ui5-rating-indicator max="10" value="5"></ui5-rating-indicator>
		<ui5-rating-indicator max="3" value="3"></ui5-rating-indicator>
	`,
    }),
  };

export const DisabledRatingIndicator: StoryObj<RatingIndicatorComponent> = {
  render: (args: RatingIndicatorComponent & any) => ({
    props: args,
    template: `
		<ui5-rating-indicator value="4" disabled></ui5-rating-indicator>
		<ui5-rating-indicator max="10" value="5" disabled></ui5-rating-indicator>
		<ui5-rating-indicator max="3" value="3" disabled></ui5-rating-indicator>
	`,
  }),
};

export const ReadonlyRatingIndicator: StoryObj<RatingIndicatorComponent> = {
  render: (args: RatingIndicatorComponent & any) => ({
    props: args,
    template: `
		<ui5-rating-indicator value="4" readonly></ui5-rating-indicator>
		<ui5-rating-indicator max="7" value="5" readonly></ui5-rating-indicator>
	`,
  }),
};

export const DifferentSizesOfRatingIndicators: StoryObj<RatingIndicatorComponent> =
  {
    render: (args: RatingIndicatorComponent & any) => ({
      props: args,
      template: `
    <ui5-rating-indicator Size="S" value="1"></ui5-rating-indicator><br>
    <ui5-rating-indicator size="M" value="2.5"></ui5-rating-indicator><br>
    <ui5-rating-indicator size="L" value="5"></ui5-rating-indicator>
	`,
    }),
  };
