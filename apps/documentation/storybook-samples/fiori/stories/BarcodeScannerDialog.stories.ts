import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { BarcodeScannerDialogDirective } from '../directives/barcode-scanner-dialog';

export default {
  component: BarcodeScannerDialogDirective,
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
        <ui5-barcode-scanner-dialog id="dlgScan"></ui5-barcode-scanner-dialog>

		<ui5-button id="btnScan" icon="camera" tooltip="Start Camera">Scan</ui5-button>
		<div>
			<ui5-label id="scanResult"></ui5-label>
			<ui5-label id="scanError"></ui5-label>
		</div>
      `,
});
