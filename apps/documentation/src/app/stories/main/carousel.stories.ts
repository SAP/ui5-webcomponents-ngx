import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  CarouselComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3> The Carousel allows the user to browse through a set of items. The component is mostly used for showing a gallery of images, but can hold any other HTML element. <br> There are several ways to perform navigation: <ul> <li>on desktop - the user can navigate using the navigation arrows or with keyboard shorcuts.</li> <li>on mobile - the user can use swipe gestures.</li> </ul>

<h3>Usage</h3>

<h4>When to use:</h4>

<ul> <li>The items you want to display are very different from each other.</li> <li>You want to display the items one after the other.</li> </ul>

<h4>When not to use:</h4>

<ul> <li>The items you want to display need to be visible at the same time.</li> <li>The items you want to display are uniform and very similar.</li> </ul>

<h3>Keyboard Handling</h3>

<h4>Basic Navigation</h4> When the <code>ui5-carousel</code> is focused the user can navigate between the items with the following keyboard shortcuts: <br>

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-carousel</code> exposes the following CSS Shadow Parts: <ul> <li>content - Used to style the content of the component</li> </ul>

* <h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

<ul> <li>[UP/DOWN] - Navigates to previous and next item</li> <li>[LEFT/RIGHT] - Navigates to previous and next item</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { CarouselComponent } from "@ui5/webcomponents-ngx/main/carousel";</code>`;
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
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const ApplyChanges: Story<CarouselComponent> = (
  args: CarouselComponent & any
) => ({
  props: args,
  template: `
          <ui5-carousel>
            ${args.content}
          </ui5-carousel>
        `,
});

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
		<ui5-carousel items-per-page-s="1" items-per-page-m="2" items-per-page-l="2">
			<ui5-card class="medium">
				<ui5-card-header slot="header" title-text="Activities" subtitle-text="For Today"></ui5-card-header>

				<ui5-timeline>
					<ui5-timeline-item id="test-item" title-text="called" timestamp="1487583000000" icon="phone" name="John Smith" name-clickable=""></ui5-timeline-item>
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
					<ui5-li icon="competitor" icon-end="">Personal Development</ui5-li>
					<ui5-li icon="wallet" icon-end="">Finance</ui5-li>
					<ui5-li icon="collaborate" icon-end="">Communications Skills</ui5-li>
				</ui5-list>
			</ui5-card>

			<ui5-card class="medium">
				<ui5-card-header slot="header" title-text="Team Dolphins" subtitle-text="Direct Reports" status="1 of 2">
					<ui5-icon name="group" slot="avatar"></ui5-icon>
				</ui5-card-header>

				<div class="card-content">
					<ui5-list separators="None" class="card-content-child" style="width: 100%">
						<ui5-li image="../../../assets/images/avatars/man_avatar_1.png" description="User Researcher">Alain Chevalier</ui5-li>
						<ui5-li image="../../../assets/images/avatars/woman_avatar_1.png" description="Artist">Monique Legrand</ui5-li>
						<ui5-li image="../../../assets/images/avatars/woman_avatar_2.png" description="UX Specialist">Michael Adams</ui5-li>
					</ui5-list>
				</div>
			</ui5-card>

			<ui5-card class="medium">
				<ui5-card-header slot="header" title-text="Team Bears" subtitle-text="Direct Reports" interactive="" status="2 of 2">
						<ui5-icon name="group" slot="avatar"></ui5-icon>
				</ui5-card-header>

				<div class="card-content">
					<ui5-list separators="None" class="card-content-child" style="width: 100%">
						<ui5-li image="../../../assets/images/avatars/man_avatar_2.png" description="Software Architect">Richard Wilson</ui5-li>
						<ui5-li image="../../../assets/images/avatars/woman_avatar_3.png" description="Visual Designer">Elena Petrova</ui5-li>
						<ui5-li image="../../../assets/images/avatars/man_avatar_3.png" description="Quality Specialist">John Miller</ui5-li>
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
		<ui5-carousel arrows-placement="Navigation" cyclic="">
			<img src="../../../assets/images/sample1.jpg" alt="Landscape 1">
			<img src="../../../assets/images/sample2.jpg" alt="Landscape 2">
			<img src="../../../assets/images/sample3.jpg" alt="Bulb">
		</ui5-carousel>
	`,
});
