import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { FileUploaderComponent } from '@ui5/webcomponents-ngx/main/file-uploader';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

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
        component: extractDescription('FileUploaderComponent', FileUploaderComponent, description),
      },
    },
  },
} as Meta;

export const UploadSingleFile: StoryObj<FileUploaderComponent> = {
  render: (args: FileUploaderComponent & any) => ({
    props: args,
    template: `
		<ui5-file-uploader>
			<ui5-button>Upload Single File</ui5-button>
		</ui5-file-uploader>
	`,
  }),
};

export const FileUploaderWithNoInput: StoryObj<FileUploaderComponent> = {
  render: (args: FileUploaderComponent & any) => ({
    props: args,
    template: `
		<ui5-file-uploader hide-input>
			<ui5-button>Upload File</ui5-button>
		</ui5-file-uploader>
	`,
  }),
};

export const CustomFileUploaders: StoryObj<FileUploaderComponent> = {
  render: (args: FileUploaderComponent & any) => ({
    props: args,
    template: `
		<ui5-file-uploader hide-input>
			<ui5-avatar icon="upload"></ui5-avatar>
		</ui5-file-uploader>

		<ui5-file-uploader hide-input>
			<ui5-tag>Upload File</ui5-tag>
		</ui5-file-uploader>
	`,
  }),
};

export const ButtonWithIconFileUploader: StoryObj<FileUploaderComponent> = {
  render: (args: FileUploaderComponent & any) => ({
    props: args,
    template: `
		<ui5-file-uploader>
			<ui5-button icon="upload">Upload</ui5-button>
		</ui5-file-uploader>
		<ui5-file-uploader>
			<ui5-button end-icon="upload">Upload</ui5-button>
		</ui5-file-uploader>
		<ui5-file-uploader>
			<ui5-button icon="upload"></ui5-button>
		</ui5-file-uploader>
	`,
  }),
};
