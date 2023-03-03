import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / FileUploader',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const uploadSingleFile: Story = (args) => ({
  props: args,
  template: `
		<ui5-file-uploader>
			<ui5-button>Upload Single File</ui5-button>
		</ui5-file-uploader>
	`,
});

export const fileUploaderWithNoInput: Story = (args) => ({
  props: args,
  template: `
		<ui5-file-uploader hide-input="">
			<ui5-button>Upload File</ui5-button>
		</ui5-file-uploader>
	`,
});

export const customFileUploaders: Story = (args) => ({
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

export const buttonWithIconFileUploader: Story = (args) => ({
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
