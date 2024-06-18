import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  MediaGalleryComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-media-gallery</code> component allows the user to browse through multimedia items. Currently, the supported items are images and videos. The items should be defined using the <code>ui5-media-gallery-item</code> component.

The items are initially displayed as thumbnails. When the user selects a thumbnail, the corresponding item is displayed in larger size. <br> The component is responsive by default and adjusts the position of the menu with respect to viewport size, but the application is able to further customize the layout via the provided API.

<h3>Keyboard Handling</h3> The <code>ui5-media-gallery</code> provides advanced keyboard handling. <br> When the thumbnails menu is focused the following keyboard shortcuts allow the user to navigate through the thumbnail items: <br>

<ul> <li>[UP/DOWN] - Navigates up and down the items</li> <li>[HOME] - Navigates to first item</li> <li>[END] - Navigates to the last item</li> <li>[SPACE/ENTER] - Select an item</li> </ul> <br>

<h3>ES6 Module Import</h3> <code>import { MediaGalleryComponent } from "@ui5/webcomponents-ngx/fiori/media-gallery";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / MediaGallery',
  component: MediaGalleryComponent,
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

export const usage: Story<MediaGalleryComponent> = (
  args: MediaGalleryComponent & any
) => ({
  props: args,
  template: `
		<ui5-media-gallery [showAllThumbnails]="true">
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1022.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1030.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-2002.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-2026.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryWithVerticalLayout: Story<MediaGalleryComponent> = (
  args: MediaGalleryComponent & any
) => ({
  props: args,
  template: `
		<ui5-media-gallery [showAllThumbnails]="true" layout="Vertical">
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1022.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1030.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-2002.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-2026.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryWithThumbnailsOnTheRight: Story<
  MediaGalleryComponent
> = (args: MediaGalleryComponent & any) => ({
  props: args,
  template: `
		<ui5-media-gallery [showAllThumbnails]="true" layout="Horizontal" menu-horizontal-align="Right">
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1022.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1030.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-2002.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-2026.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryItemWithSeparateImageForItsThumbnail: Story<
  MediaGalleryComponent
> = (args: MediaGalleryComponent & any) => ({
  props: args,
  template: `
		<ui5-media-gallery>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1000.jpg">
				<img src="/assets/images/HT-1000-small.jpg" slot="thumbnail">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryItemWithVideoContent: Story<MediaGalleryComponent> = (
  args: MediaGalleryComponent & any
) => ({
  props: args,
  template: `
		<ui5-media-gallery>
			<ui5-media-gallery-item layout="Wide">
				<iframe src="https://www.youtube.com/embed/GxGZG2fv6Aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
				<img src="/assets/images/sap-logo-square.svg" slot="thumbnail" alt="SAP Video">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryWithDisabledContent: Story<MediaGalleryComponent> = (
  args: MediaGalleryComponent & any
) => ({
  props: args,
  template: `
		<ui5-media-gallery>
			<ui5-media-gallery-item [disabled]="true">
				<img src="/assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryWithInitiallySelectedItem: Story<
  MediaGalleryComponent
> = (args: MediaGalleryComponent & any) => ({
  props: args,
  template: `
		<ui5-media-gallery>
			<ui5-media-gallery-item>
				<img src="/assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item [selected]="true">
				<img src="/assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});
