import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { MediaGalleryItemComponent } from '@ui5/webcomponents-ngx/fiori/media-gallery-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { MediaGalleryItemComponent } from "@ui5/webcomponents-ngx/fiori/media-gallery-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / MediaGallery / MediaGalleryItem',
  component: MediaGalleryItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'MediaGalleryItemComponent', MediaGalleryItemComponent, description),
      },
    },
  },
} as Meta;


export const MediaGalleryItem: StoryObj<MediaGalleryItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };