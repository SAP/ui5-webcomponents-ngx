import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { FileUploaderDirective } from '../directives/file-uploader';

export default {
  component: FileUploaderDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const uploadMultipleImages: Story = (args) => ({
  props: args,
  template: `
        <ui5-file-uploader id="fileuploader1" accept="image/*" multiple="true">
			<ui5-button icon="upload">Upload Images</ui5-button>
		</ui5-file-uploader>
		<div id="result"></div>
      `,
});

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
