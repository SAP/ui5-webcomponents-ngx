import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  BarcodeScannerDialogComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';
import { CommonModule } from '@angular/common';

const description = `
### Overview

The <code>BarcodeScannerDialog</code> component provides barcode scanning functionality for all devices that support the <code>MediaDevices.getUserMedia()</code> native API. Opening the dialog launches the device camera and scans for known barcode formats. <br> <br> A <code>scanSuccess</code> event fires whenever a barcode is identified and a <code>scanError</code> event fires when the scan failed (for example, due to missing permisions). <br> <br> Internally, the component uses the zxing-js/library third party OSS.

For a list of supported barcode formats, see the <ui5-link target="_blank" href="https://github.com/zxing-js/library">zxing-js/library</ui5-link> documentation.
`;

const meta: Meta<BarcodeScannerDialogComponent> = {
  title: 'UI5 Web Components / Fiori / BarcodeScannerDialog',
  component: BarcodeScannerDialogComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, Ui5WebcomponentsModule],
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
};

export default meta;

type Story = StoryObj<BarcodeScannerDialogComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <ui5-barcode-scanner-dialog
        #dlgScan="ui5BarcodeScannerDialog"
        (ui5ScanError)="scanError.element.innerHTML = $event.message; dlgScan.close()"
        (ui5ScanSuccess)="scanResult.element.innerHTML = $event.text; dlgScan.close()"
      ></ui5-barcode-scanner-dialog>

      <ui5-button #btnScan icon="camera" tooltip="Start Camera" (ui5Click)="dlgScan.show()">Scan</ui5-button>
      <div>
        <ui5-label #scanResult="ui5Label"></ui5-label>
        <ui5-label #scanError="ui5Label"></ui5-label>
      </div>
    `,
  }),
};
