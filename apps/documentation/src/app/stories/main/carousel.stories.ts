import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  CarouselComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview

The Carousel allows the user to browse through a set of items. The component is mostly used for showing a gallery of images, but can hold any other HTML element. <br> There are several ways to perform navigation: <ul> <li>on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.</li> <li>on mobile - the user can use swipe gestures.</li> </ul>

### Usage

#### When to use:

<ul> <li>The items you want to display are very different from each other.</li> <li>You want to display the items one after the other.</li> </ul>

#### When not to use:

<ul> <li>The items you want to display need to be visible at the same time.</li> <li>The items you want to display are uniform and very similar.</li> </ul>

### Keyboard Handling

#### Basic Navigation When the <code>ui5-carousel</code> is focused the user can navigate between the items with the following keyboard shortcuts: <br>

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-carousel</code> exposes the following CSS Shadow Parts: <ul> <li>content - Used to style the content of the component</li> </ul>

* #### Fast Navigation This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

<ul> <li>[UP/DOWN] - Navigates to previous and next item</li> <li>[LEFT/RIGHT] - Navigates to previous and next item</li> </ul>

### ES6 Module Import

- import { CarouselComponent } from "@ui5/webcomponents-ngx/main/carousel";
`;

export default {
  title: 'UI5 Web Components / Main / Carousel',
  component: CarouselComponent,
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

export const carouselWithSingleItemPerPage: Story<CarouselComponent> = (
  args: CarouselComponent & any
) => ({
  props: args,
  template: `
		<ui5-carousel>
			<img src="../../../assets/images/sample1.jpg" alt="Landscape 1">
			<img src="../../../assets/images/sample2.jpg" alt="Landscape 2">
			<img src="../../../assets/images/sample3.jpg" alt="Bulb">
		</ui5-carousel>
	`,
});

export const carouselWithMultipleItemsPerPage: Story<CarouselComponent> = (
  args: CarouselComponent & any
) => ({
  props: args,
  template: `
		<ui5-carousel items-per-page="S1 M2 L2">
			<ui5-card class="medium">
				<ui5-card-header slot="header" title-text="Activities" subtitle-text="For Today"></ui5-card-header>

				<ui5-timeline>
					<ui5-timeline-item id="test-item" title-text="called" timestamp="1487583000000" icon="phone" name="John Smith" name-clickable></ui5-timeline-item>
					<ui5-timeline-item title-text="Weekly Sync - CP Design" timestamp="1517349600000" icon="calendar">
						MR SOF02 2.43
					</ui5-timeline-item>
					<ui5-timeline-item title-text="Video Converence Call - UI5" timestamp="1485813600000" icon="calendar">
						Online meeting
					</ui5-timeline-item>
				</ui5-timeline>
			</ui5-card>

			<ui5-card class="small">
				<ui5-card-header slot="header" title-text="David Willams" subtitle-text="Sales Manager">
					<img src="../../../assets/images/avatars/man_avatar_1.png" slot="avatar">
				</ui5-card-header>

				<ui5-list separators="Inner" class="content-padding">
					<ui5-li icon="competitor" icon-end>Personal Development</ui5-li>
					<ui5-li icon="wallet" icon-end>Finance</ui5-li>
					<ui5-li icon="collaborate" icon-end>Communications Skills</ui5-li>
				</ui5-list>
			</ui5-card>

			<ui5-card class="medium">
				<ui5-card-header slot="header" title-text="Team Dolphins" subtitle-text="Direct Reports" status="1 of 2">
					<ui5-icon name="group" slot="avatar"></ui5-icon>
				</ui5-card-header>

				<div class="card-content">
					<ui5-list separators="None" class="card-content-child" style="width: 100%">
						<ui5-li icon="navigation-right-arrow" icon-end>
							Susan
							<img slot="image" src="../../../assets/images/avatars/woman_avatar_2.png" />
						</ui5-li>

						<ui5-li icon="navigation-right-arrow" icon-end>
							David
							<img slot="image" src="../../../assets/images/avatars/man_avatar_3.png" />
						</ui5-li>

						<ui5-li icon="navigation-right-arrow" icon-end>
							Natalie
							<img slot="image" src="../../../assets/images/avatars/woman_avatar_3.png" />
						</ui5-li>
					</ui5-list>
				</div>
			</ui5-card>

			<ui5-card class="medium">
				<ui5-card-header slot="header" title-text="Team Bears" subtitle-text="Direct Reports" interactive status="2 of 2">
						<ui5-icon name="group" slot="avatar"></ui5-icon>
				</ui5-card-header>

				<div class="card-content">
					<ui5-list separators="None" class="card-content-child" style="width: 100%">
						<ui5-li icon="navigation-right-arrow" icon-end>
							Clark
							<img slot="image" src="../../../assets/images/avatars/man_avatar_1.png" />
						</ui5-li>

						<ui5-li icon="navigation-right-arrow" icon-end>
							Ellen
							<img slot="image" src="../../../assets/images/avatars/woman_avatar_1.png" />
						</ui5-li>

						<ui5-li icon="navigation-right-arrow" icon-end>
							Adam
							<img slot="image" src="../../../assets/images/avatars/man_avatar_2.png" />
						</ui5-li>
					</ui5-list>
				</div>
			</ui5-card>
		</ui5-carousel>
	`,
});

export const carouselWithArrowPlacementAndCyclic: Story<CarouselComponent> = (
  args: CarouselComponent & any
) => ({
  props: args,
  template: `
		<ui5-carousel arrows-placement="Navigation" cyclic>
			<img src="../../../assets/images/sample1.jpg" alt="Landscape 1">
			<img src="../../../assets/images/sample2.jpg" alt="Landscape 2">
			<img src="../../../assets/images/sample3.jpg" alt="Bulb">
		</ui5-carousel>
	`,
});
