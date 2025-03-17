import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { MediaGalleryComponent } from '@ui5/webcomponents-ngx/fiori/media-gallery';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3> 

<code>import { MediaGalleryComponent } from "@ui5/webcomponents-ngx/fiori/media-gallery";</code>`;
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
        component: extractDescription('MediaGalleryComponent', MediaGalleryComponent, description),
      },
    },
  },
} as Meta;

export const Usage: StoryObj<MediaGalleryComponent> = {
  render: (args) => ({
    props: args,
    template: `
			  <ui5-media-gallery show-all-thumbnails>
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
  }),
};

export const MediaGalleryWithVerticalLayout: StoryObj<MediaGalleryComponent> = {
  render: (args) => ({
    props: args,
    template: `
			  <ui5-media-gallery show-all-thumbnails layout="Vertical">
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
  }),
};

export const MediaGalleryWithThumbnailsOnTheRight: StoryObj<MediaGalleryComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
			  <ui5-media-gallery show-all-thumbnails layout="Horizontal" menu-horizontal-align="Right">
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
    }),
  };

export const MediaGalleryItemWithSeparateImageForItsThumbnail: StoryObj<MediaGalleryComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
			  <ui5-media-gallery>
				  <ui5-media-gallery-item>
					  <img src="/assets/images/HT-1000.jpg">
					  <img src="/assets/images/HT-1000-small.jpg" slot="thumbnail">
				  </ui5-media-gallery-item>
			  </ui5-media-gallery>
		  `,
    }),
  };

export const MediaGalleryItemWithVideoContent: StoryObj<MediaGalleryComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
			  <ui5-media-gallery>
				  <ui5-media-gallery-item layout="Wide">
					  <iframe src="https://www.youtube.com/embed/GxGZG2fv6Aw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
					  <img src="/assets/images/sap-logo-square.svg" slot="thumbnail" alt="SAP Video">
				  </ui5-media-gallery-item>
			  </ui5-media-gallery>
		  `,
    }),
  };

export const MediaGalleryWithDisabledContent: StoryObj<MediaGalleryComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
			  <ui5-media-gallery>
				  <ui5-media-gallery-item disabled>
					  <img src="/assets/images/HT-1000.jpg">
				  </ui5-media-gallery-item>
				  <ui5-media-gallery-item>
					  <img src="/assets/images/HT-1010.jpg">
				  </ui5-media-gallery-item>
			  </ui5-media-gallery>
		  `,
    }),
  };

export const MediaGalleryWithInitiallySelectedItem: StoryObj<MediaGalleryComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
			  <ui5-media-gallery>
				  <ui5-media-gallery-item>
					  <img src="/assets/images/HT-1000.jpg">
				  </ui5-media-gallery-item>
				  <ui5-media-gallery-item selected>
					  <img src="/assets/images/HT-1010.jpg">
				  </ui5-media-gallery-item>
			  </ui5-media-gallery>
		  `,
    }),
  };
