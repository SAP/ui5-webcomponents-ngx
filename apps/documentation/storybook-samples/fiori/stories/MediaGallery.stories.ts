import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { MediaGalleryDirective } from '../directives/media-gallery';

export default {
  component: MediaGalleryDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
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

export const mediaGalleryWithThumbnailsOverflow: Story = (args) => ({
  props: args,
  template: `
        <div class="container">
			<ui5-media-gallery id="mediaGallery" interactive-display-area="">
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
			<div class="details">
				<ui5-title level="H1">Item Details</ui5-title>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quam lectus, tristique semper mi et, faucibus viverra metus. Quisque nec venenatis massa. Ut eu dolor a justo ornare feugiat. Morbi congue diam id enim porttitor, sit amet placerat nunc pulvinar. Vivamus eu feugiat justo. Ut eu lectus mauris. Aliquam erat volutpat. Vestibulum et enim sit amet ipsum tincidunt aliquet nec in dui. Sed dui est, hendrerit non sollicitudin quis, venenatis vel libero. Suspendisse sit amet lorem posuere, egestas neque eget, sodales ipsum.
				Donec sollicitudin leo ut risus tincidunt tincidunt. Ut vel nisl nisl. Cras leo odio, viverra a ante nec, cursus volutpat lectus. Cras ac metus nisi. Aliquam fermentum nec felis sit amet tristique. Nunc luctus a lacus non semper. Curabitur euismod tellus id massa mattis, in consectetur mi luctus. Mauris dignissim efficitur lobortis. Etiam sit amet nunc commodo, lacinia nisi sagittis, finibus nulla. Proin quis elementum eros. Ut facilisis lacinia viverra.
			</div>
		</div>
		<ui5-dialog id="mediaGalleryDialog" header-text="Item" stretch="">
			<ui5-bar design="Header" slot="header">
				<ui5-label>Item</ui5-label>
			</ui5-bar>
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
			<div slot="footer" class="dialog-footer">
				<div style="flex: 1;"></div>
				<ui5-button id="closeDialogButton">Close</ui5-button>
			</div>
		</ui5-dialog>
		<style>
			@media (min-width: 1024px) {
				.container {
					display:grid;
					gap: 1rem;
					grid-template-columns: 1fr 1fr;
				}
			}
		</style>
      `,
});
