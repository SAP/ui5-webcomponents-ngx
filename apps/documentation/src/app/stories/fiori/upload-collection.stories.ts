import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { UploadCollectionComponent } from '@ui5/webcomponents-ngx/fiori/upload-collection';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { UploadCollectionComponent } from "@ui5/webcomponents-ngx/fiori/upload-collection";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / UploadCollection',
  component: UploadCollectionComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'UploadCollectionComponent', UploadCollectionComponent, description),
      },
    },
  },
} as Meta;


export const UploadCollection: StoryObj<UploadCollectionComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };