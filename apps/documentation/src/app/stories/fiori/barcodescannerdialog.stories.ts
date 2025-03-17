import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { BarcodeScannerDialogComponent } from '@ui5/webcomponents-ngx/fiori/barcode-scanner-dialog';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';
import { CommonModule } from '@angular/common';

const description = `

###Module Import

<code>import { BarcodeScannerDialogComponent } from '@ui5/webcomponents-ngx/fiori/barcode-scanner-dialog'</code>`;

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
        component: extractDescription('BarcodeScannerDialog', BarcodeScannerDialogComponent, description),
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
