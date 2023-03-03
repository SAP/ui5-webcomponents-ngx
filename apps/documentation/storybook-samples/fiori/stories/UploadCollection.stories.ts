import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { UploadCollectionDirective } from '../directives/upload-collection';

export default {
  component: UploadCollectionDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const uploadCollection: Story = (args) => ({
  props: args,
  template: `
        <ui5-upload-collection id="uploadCollection" mode="Delete" accessible-name="Uploaded (2)">
			<div slot="header" class="header">
				<ui5-title>Uploaded (2)</ui5-title>
				<ui5-label>Add new files and press to start uploading pending files:</ui5-label>
				<ui5-button id="startUploading">Start</ui5-button>
				<div class="spacer"></div>
				<ui5-file-uploader id="fileUploader" hide-input="" multiple="">
					<ui5-button icon="add" design="Transparent"></ui5-button>
				</ui5-file-uploader>
			</div>
			<ui5-upload-collection-item file-name="LaptopHT-1000.jpg" file-name-clickable="" upload-state="Complete">
				<img src="../../../assets/images/HT-1000.jpg" slot="thumbnail">
				Uploaded By: David Keane · Uploaded On: 2014-07-26 · File Size: 35 KB
			</ui5-upload-collection-item>
			<ui5-upload-collection-item file-name="Notes.txt" upload-state="Complete">
				<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
				Uploaded By: John Smith · Uploaded On: 2014-09-02 · File Size: 226.6 KB ·
			</ui5-upload-collection-item>
		</ui5-upload-collection>
      `,
});

export const uploadCollectionWithFileRenamingEnabled: Story = (args) => ({
  props: args,
  template: `
        <ui5-upload-collection id="uploadCollectionWithRenaming">
			<div slot="header" class="header">
				<ui5-title>Attachments(2)</ui5-title>
			</div>
			<ui5-upload-collection-item file-name="LaptopHT-1000.jpg" file-name-clickable="" type="Detail" upload-state="Complete">
				<img src="../../../assets/images/HT-1000.jpg" slot="thumbnail">
				Uploaded By: David Keane · Uploaded On: 2014-07-26 · File Size: 35 KB
			</ui5-upload-collection-item>
			<ui5-upload-collection-item file-name="Notes.txt" type="Detail" upload-state="Complete">
				<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
				Uploaded By: John Smith · Uploaded On: 2014-09-02 · File Size: 226.6 KB ·
			</ui5-upload-collection-item>
		</ui5-upload-collection>
      `,
});

export const uploadCollectionWithDifferentUploadingStatesOfItems: Story = (
  args
) => ({
  props: args,
  template: `
        <ui5-upload-collection id="uploadCollectionStates">
			<div class="header" slot="header">
				<ui5-title>Upload States</ui5-title>
			</div>
			<ui5-upload-collection-item file-name="LaptopHT-1000.jpg" upload-state="Complete">
				<img src="../../../assets/images/HT-1000.jpg" slot="thumbnail">
				uploadState="Complete"
			</ui5-upload-collection-item>
			<ui5-upload-collection-item file-name="Laptop.jpg" upload-state="Uploading" progress="37">
				<img src="../../../assets/images/HT-1000.jpg" slot="thumbnail">
				uploadState="Uploading"
			</ui5-upload-collection-item>
			<ui5-upload-collection-item file-name="latest.reports.pdf" upload-state="Error" progress="59">
				<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
				uploadState="Error"
			</ui5-upload-collection-item>
			<ui5-upload-collection-item file-name="Notes.txt">
				<ui5-icon name="document-text" slot="thumbnail"></ui5-icon>
				uploadState="Ready" (default)
			</ui5-upload-collection-item>
		</ui5-upload-collection>
      `,
});

export const uploadCollectionWithDragAndDropAndNoInitialData: Story = (
  args
) => ({
  props: args,
  template: `
        <ui5-upload-collection id="uploadCollectionDnD" style="height: 30rem;">
			<div class="header" slot="header">
				<ui5-title>Attachments</ui5-title>
			</div>
		</ui5-upload-collection>
      `,
});
