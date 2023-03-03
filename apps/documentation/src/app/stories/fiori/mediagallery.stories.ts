import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Fiori / MediaGallery',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const usage: Story = (args) => ({
  props: args,
  template: `
		<ui5-media-gallery show-all-thumbnails="">
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1022.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1030.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2002.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2026.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryWithVerticalLayout: Story = (args) => ({
  props: args,
  template: `
		<ui5-media-gallery show-all-thumbnails="" layout="Vertical">
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1022.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1030.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2002.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2026.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryWithThumbnailsOnTheRight: Story = (args) => ({
  props: args,
  template: `
		<ui5-media-gallery show-all-thumbnails="" layout="Horizontal" menu-horizontal-align="Right">
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1022.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1030.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2002.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-2026.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryItemWithSeparateImageForItsThumbnail: Story = (
  args
) => ({
  props: args,
  template: `
		<ui5-media-gallery>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1000.jpg">
				<img src="../../../assets/images/HT-1000-small.jpg" slot="thumbnail">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryItemWithVideoContent: Story = (args) => ({
  props: args,
  template: `
		<ui5-media-gallery>
			<ui5-media-gallery-item layout="Wide">
				<iframe src="https://www.youtube.com/embed/GxGZG2fv6Aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
				<img src="../../../assets/images/sap-logo-square.svg" slot="thumbnail" alt="SAP Video">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryWithDisabledContent: Story = (args) => ({
  props: args,
  template: `
		<ui5-media-gallery>
			<ui5-media-gallery-item disabled="">
				<img src="../../../assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});

export const mediaGalleryWithInitiallySelectedItem: Story = (args) => ({
  props: args,
  template: `
		<ui5-media-gallery>
			<ui5-media-gallery-item>
				<img src="../../../assets/images/HT-1000.jpg">
			</ui5-media-gallery-item>
			<ui5-media-gallery-item selected="">
				<img src="../../../assets/images/HT-1010.jpg">
			</ui5-media-gallery-item>
		</ui5-media-gallery>
	`,
});
