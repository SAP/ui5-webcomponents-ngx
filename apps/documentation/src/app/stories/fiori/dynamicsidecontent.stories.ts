import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  DynamicSideContentComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3>

The DynamicSideContent (<code>ui5-dynamic-side-content</code>) is a layout component that allows additional content to be displayed in a way that flexibly adapts to different screen sizes. The side content appears in a container next to or directly below the main content (it doesn't overlay). When the side content is triggered, the main content becomes narrower (if appearing side-by-side). The side content contains a separate scrollbar when appearing next to the main content.

<h3>Usage</h3>

<i>When to use?</i>

Use this component if you want to display relevant information that is not critical for users to complete a task. Users should have access to all the key functions and critical information in the app even if they do not see the side content. This is important because on smaller screen sizes it may be difficult to display the side content in a way that is easily accessible for the user.

<i>When not to use?</i>

Don't use it if you want to display navigation or critical information that prevents users from completing a task when they have no access to the side content.

<h3>Responsive Behavior</h3>

Screen width > 1440px

<ul><li>Main vs. side content ratio is 75 vs. 25 percent (with a minimum of 320px each).</li> <li>If the application defines a trigger, the side content can be hidden.</li></ul>

Screen width <= 1440px and > 1024px

<ul><li>Main vs. side content ratio is 66.666 vs. 33.333 percent (with a minimum of 320px each). If the side content width falls below 320 px, it automatically slides under the main content, unless the app development team specifies that it should disappear.</li></ul>

Screen width <= 1024px and > 720px

<ul><li>The side content ratio is fixed to 340px, and the main content takes the rest of the width. Only if the <code>sideContentFallDown</code> is set to <code>OnMinimumWidth</code> and screen width is <= 960px and > 720px the side content falls below the main content.</li></ul>

Screen width <= 720px (for example on a mobile device)

<ul><li>In this case, the side content automatically disappears from the screen (unless specified to stay under the content by setting of <code>sideContentVisibility</code> property to <code>AlwaysShow</code>) and can be triggered from a pre-set trigger (specified within the app). When the side content is triggered, it replaces the main content. We recommend that you always place the trigger for the side content in the same location, such as in the app footer.</li></ul>

A special case allows switching the comparison mode between the main and side content. In this case, the screen is split into 50:50 percent for main vs. side content. The responsive behavior of the equal split is the same as in the standard view - the side content disappears on screen widths of less than 720 px and can only be viewed by triggering it.

<h3>ES6 Module Import</h3>

<code>import { DynamicSideContentComponent } from "@ui5/webcomponents-ngx/fiori/dynamic-side-content";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / DynamicSideContent',
  component: DynamicSideContentComponent,
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

export const dynamicSideContentWithDefaultProperties: Story<
  DynamicSideContentComponent
> = (args: DynamicSideContentComponent & any) => ({
  props: args,
  template: `
		<div class="wrapper100">
			<ui5-page>
				<ui5-dynamic-side-content class="content-padding">
					<div>
						<h1>Main Content</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
					</div>
					<div slot="sideContent">
						<h1>Side Content</h1>
						<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
					</div>
				</ui5-dynamic-side-content>
			</ui5-page>
		</div>
	`,
});

export const dynamicSideContentWithHideMainContentSet: Story<
  DynamicSideContentComponent
> = (args: DynamicSideContentComponent & any) => ({
  props: args,
  template: `
		<div class="wrapper100">
			<ui5-page>
				<ui5-dynamic-side-content hide-main-content="" class="content-padding">
					<div>
						<h1>Main Content</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
					</div>
					<div slot="sideContent">
						<h1>Side Content</h1>
						<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
					</div>
				</ui5-dynamic-side-content>
			</ui5-page>
		</div>
	`,
});

export const dynamicSideContentWithHideSideContentSet: Story<
  DynamicSideContentComponent
> = (args: DynamicSideContentComponent & any) => ({
  props: args,
  template: `
		<div class="wrapper100">
			<ui5-page>
				<ui5-dynamic-side-content hide-side-content="" class="content-padding">
					<div>
						<h1>Main Content</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
					</div>
					<div slot="sideContent">
						<h1>Side Content</h1>
						<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
					</div>
				</ui5-dynamic-side-content>
			</ui5-page>
		</div>
	`,
});

export const dynamicSideContentWithEqualSplitSet: Story<
  DynamicSideContentComponent
> = (args: DynamicSideContentComponent & any) => ({
  props: args,
  template: `
		<div class="wrapper100">
			<ui5-page>
				<ui5-dynamic-side-content equal-split="" class="content-padding">
					<div>
						<h1>Main Content</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
					</div>
					<div slot="sideContent">
						<h1>Side Content</h1>
						<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
					</div>
				</ui5-dynamic-side-content>
			</ui5-page>
		</div>
	`,
});

export const dynamicSideContentWithSideContentPositionStart: Story<
  DynamicSideContentComponent
> = (args: DynamicSideContentComponent & any) => ({
  props: args,
  template: `
		<div class="wrapper100">
			<ui5-page>
				<ui5-dynamic-side-content side-content-position="Start" class="content-padding">
					<div>
						<h1>Main Content</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
					</div>
					<div slot="sideContent">
						<h1>Side Content</h1>
						<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
					</div>
				</ui5-dynamic-side-content>
			</ui5-page>
		</div>
	`,
});

export const dynamicSideContentWithSideContentFallDownBelowXl: Story<
  DynamicSideContentComponent
> = (args: DynamicSideContentComponent & any) => ({
  props: args,
  template: `
		<div class="wrapper100">
			<ui5-page>
				<ui5-dynamic-side-content side-content-fall-down="BelowXL" class="content-padding">
					<div>
						<h1>Main Content</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
					</div>
					<div slot="sideContent">
						<h1>Side Content</h1>
						<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
					</div>
				</ui5-dynamic-side-content>
			</ui5-page>
		</div>
	`,
});

export const dynamicSideContentWithSideContentVisibilityShowAboveM: Story<
  DynamicSideContentComponent
> = (args: DynamicSideContentComponent & any) => ({
  props: args,
  template: `
		<div class="wrapper100">
			<ui5-page>
				<ui5-dynamic-side-content side-content-visibility="ShowAboveM" class="content-padding">
					<div>
						<h1>Main Content</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
					</div>
					<div slot="sideContent">
						<h1>Side Content</h1>
						<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
					</div>
				</ui5-dynamic-side-content>
			</ui5-page>
		</div>
	`,
});

export const dynamicSideContentToggleContentsOnMobileDeviceSSize: Story<
  DynamicSideContentComponent
> = (args: DynamicSideContentComponent & any) => ({
  props: args,
  template: `
		<div class="wrapperM">
			<ui5-page floating-footer="" show-footer="">
				<ui5-dynamic-side-content id="dynamicSideContent" class="content-padding">
					<div>
						<h1>Main Content</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
					</div>
					<div slot="sideContent">
						<h1>Side Content</h1>
						<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
					</div>
				</ui5-dynamic-side-content>
				<div slot="footer">
					<ui5-bar design="FloatingFooter">
						<ui5-button id="toggleButton" design="Positive" slot="endContent">Toggle</ui5-button>
					</ui5-bar>
				</div>
			</ui5-page>
		</div>
	`,
});
