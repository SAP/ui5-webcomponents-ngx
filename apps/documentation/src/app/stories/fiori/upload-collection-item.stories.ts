import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { UploadCollectionItemComponent } from '@ui5/webcomponents-ngx/fiori/upload-collection-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { UploadCollectionItemComponent } from "@ui5/webcomponents-ngx/fiori/upload-collection-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / UploadCollection / UploadCollectionItem',
  component: UploadCollectionItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'UploadCollectionItemComponent', UploadCollectionItemComponent, description),
      },
    },
  },
} as Meta;


export const UploadCollectionItem: StoryObj<UploadCollectionItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };