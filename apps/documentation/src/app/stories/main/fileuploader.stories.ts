import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  FileUploaderComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3>

The <code>ui5-file-uploader</code> opens a file explorer dialog and enables users to upload files. The component consists of input field, but you can provide an HTML element by your choice to trigger the file upload, by using the default slot. Furthermore, you can set the property "hideInput" to "true" to hide the input field. <br> To get all selected files, you can simply use the read-only "files" property. To restrict the types of files the user can select, you can use the "accept" property. <br> And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties.

For the <code>ui5-file-uploader</code> <h3>ES6 Module Import</h3>

<code>import { FileUploaderComponent } from "@ui5/webcomponents-ngx/main/file-uploader";</code>`;
export default {
  title: 'UI5 Web Components / Main / FileUploader',
  component: FileUploaderComponent,
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

export const uploadSingleFile: Story<FileUploaderComponent> = (
  args: FileUploaderComponent & any
) => ({
  props: args,
  template: `
		<ui5-file-uploader>
			<ui5-button>Upload Single File</ui5-button>
		</ui5-file-uploader>
	`,
});

export const fileUploaderWithNoInput: Story<FileUploaderComponent> = (
  args: FileUploaderComponent & any
) => ({
  props: args,
  template: `
		<ui5-file-uploader hide-input="">
			<ui5-button>Upload File</ui5-button>
		</ui5-file-uploader>
	`,
});

export const customFileUploaders: Story<FileUploaderComponent> = (
  args: FileUploaderComponent & any
) => ({
  props: args,
  template: `
		<ui5-file-uploader hide-input="">
			<ui5-avatar icon="upload"></ui5-avatar>
		</ui5-file-uploader>

		<ui5-file-uploader hide-input="">
			<ui5-badge>Upload File</ui5-badge>
		</ui5-file-uploader>
	`,
});

export const buttonWithIconFileUploader: Story<FileUploaderComponent> = (
  args: FileUploaderComponent & any
) => ({
  props: args,
  template: `
		<ui5-file-uploader>
			<ui5-button icon="upload">Upload</ui5-button>
		</ui5-file-uploader>
		<ui5-file-uploader>
			<ui5-button icon="upload" icon-end="">Upload</ui5-button>
		</ui5-file-uploader>
		<ui5-file-uploader>
			<ui5-button icon="upload" icon-only=""></ui5-button>
		</ui5-file-uploader>
	`,
});
