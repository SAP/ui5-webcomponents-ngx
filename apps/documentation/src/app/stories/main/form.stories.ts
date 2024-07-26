import { Meta, moduleMetadata } from '@storybook/angular';
import { FormComponent, Ui5WebcomponentsModule, } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The Form is a layout component that arranges labels and form fields (like input fields) pairs
into a specific number of columns.

<h3>ES6 Module Import</h3>

<code>import { FormComponent } from "@ui5/webcomponents-ngx/main/form";</code>`;
export default {
  title: 'UI5 Web Components / Main / Form',
  component: FormComponent,
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

export const basicForm = (
  args: FormComponent & any
) => ({
  props: args,
  template: `
        <ui5-form  header-text="Address">
          <ui5-form-item>
            <ui5-label slot="labelContent">Name:</ui5-label>
            <ui5-text>Red Point Stores</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
            <ui5-label slot="labelContent">ZIP Code/City:</ui5-label>
            <ui5-text>411 Maintown</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
            <ui5-label slot="labelContent">Street:</ui5-label>
            <ui5-text>Main St 1618</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
            <ui5-label slot="labelContent">Country:</ui5-label>
            <ui5-text>Germany</ui5-text>
          </ui5-form-item>
        </ui5-form>
	`,
});


export const formLayout = (
  args: FormComponent & any
) => ({
  props: args,
  template: `
    <ui5-form header-text="Form Layout: S1 M2 L3 XL5" layout="S1 M2 L3 XL5" label-span="S12 M12 L12 XL12">
      <ui5-form-group header-text="Address">
          <ui5-form-item>
              <ui5-label slot="labelContent">Name:</ui5-label>
              <ui5-text>Red Point Stores</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">ZIP Code/City:</ui5-label>
              <ui5-text>411 Maintown</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">Street:</ui5-label>
              <ui5-text>Main St 1618</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">Country:</ui5-label>
              <ui5-text>Germany</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">WebSite:</ui5-label>
              <ui5-link href="sap.com">sap.com</ui5-link>
          </ui5-form-item>
      </ui5-form-group>

      <ui5-form-group header-text="Contact">
          <ui5-form-item>
              <ui5-label slot="labelContent">Twitter:</ui5-label>
              <ui5-text>sap</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">Email:</ui5-label>
              <ui5-link>john.smithsap.com</ui5-link>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">Tel:</ui5-label>
              <ui5-link>+49 6227 747474</ui5-link>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">SMS:</ui5-label>
              <ui5-link>+49 6227 747474</ui5-link>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">Mobile:</ui5-label>
              <ui5-link href="sap.com">+49 6227 747474</ui5-link>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">Pager:</ui5-label>
              <ui5-link href="sap.com">+49 6227 747474</ui5-link>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">Fax:</ui5-label>
              <ui5-link href="sap.com">+49 6227 747474</ui5-link>
          </ui5-form-item>

      </ui5-form-group>

      <ui5-form-group header-text="Other info">
          <ui5-form-item>
              <ui5-label slot="labelContent">Name:</ui5-label>
              <ui5-text>Red Point Stores</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">ZIP Code/City:</ui5-label>
              <ui5-text>411 Maintown</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">Street:</ui5-label>
              <ui5-text>Main St 1618</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">Country:</ui5-label>
              <ui5-text>Germany</ui5-text>
          </ui5-form-item>

          <ui5-form-item>
              <ui5-label slot="labelContent">WebSite:</ui5-label>
              <ui5-link href="sap.com">sap.com</ui5-link>
          </ui5-form-item>
      </ui5-form-group>
    </ui5-form>
	`,
});

export const formGroups = (
  args: FormComponent & any
) => ({
  props: args,
  template: `
    <ui5-form header-text="Supplier" layout="S1 M3 L4 XL4" label-span="S12 M12 L12 XL4">

    <ui5-form-group header-text="Address">
        <ui5-form-item>
            <ui5-label slot="labelContent">Name:</ui5-label>
            <ui5-text>Red Point Stores</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">ZIP Code/City:</ui5-label>
            <ui5-text>411 Maintown</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Street:</ui5-label>
            <ui5-text>Main St 1618</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Country:</ui5-label>
            <ui5-text>Germany</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">WebSite:</ui5-label>
            <ui5-link href="sap.com">sap.com</ui5-link>
        </ui5-form-item>
    </ui5-form-group>

    <ui5-form-group header-text="Contact">
        <ui5-form-item>
            <ui5-label slot="labelContent">Twitter:</ui5-label>
            <ui5-text>sap</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Email:</ui5-label>
            <ui5-link>john.smith.sap.com</ui5-link>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Tel:</ui5-label>
            <ui5-link>+49 6227 747474</ui5-link>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">SMS:</ui5-label>
            <ui5-link>+49 6227 747474</ui5-link>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Mobile:</ui5-label>
            <ui5-link href="sap.com">+49 6227 747474</ui5-link>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Pager:</ui5-label>
            <ui5-link href="sap.com">+49 6227 747474</ui5-link>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Fax:</ui5-label>
            <ui5-link href="sap.com">+49 6227 747474</ui5-link>
        </ui5-form-item>

    </ui5-form-group>

    <ui5-form-group header-text="Other info">
        <ui5-form-item>
            <ui5-label slot="labelContent">Name:</ui5-label>
            <ui5-text>Red Point Stores</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">ZIP Code/City:</ui5-label>
            <ui5-text>411 Maintown</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Street:</ui5-label>
            <ui5-text>Main St 1618</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Country:</ui5-label>
            <ui5-text>Germany</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">WebSite:</ui5-label>
            <ui5-link href="sap.com">sap.com</ui5-link>
        </ui5-form-item>
    </ui5-form-group>
</ui5-form>
	`,
});


export const labelSpan = (
  args: FormComponent & any
) => ({
  props: args,
  template: `
      <ui5-form  header-text="Label Span: S12 M4 L4 XL4" label-span="S12 M4 L4 XL4">
        <ui5-form-item>
            <ui5-label slot="labelContent">Name:</ui5-label>
            <ui5-text class="text">Red Point Stores</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">ZIP Code/City:</ui5-label>
            <ui5-text class="text">411 Maintown</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Street:</ui5-label>
            <ui5-text class="text">Main St 1618</ui5-text>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label slot="labelContent">Country:</ui5-label>
            <ui5-text class="text">Germany</ui5-text>
        </ui5-form-item>
    </ui5-form>

    <br><br>

    <ui5-form header-text="Label Span: S12 M6 L6 XL6" label-span="S12 M6 L6 XL6">
      <ui5-form-item>
          <ui5-label slot="labelContent">Name:</ui5-label>
          <ui5-text class="text">Red Point Stores</ui5-text>
      </ui5-form-item>

      <ui5-form-item>
          <ui5-label slot="labelContent">ZIP Code/City:</ui5-label>
          <ui5-text class="text">411 Maintown</ui5-text>
      </ui5-form-item>

      <ui5-form-item>
          <ui5-label slot="labelContent">Street:</ui5-label>
          <ui5-text class="text">Main St 1618</ui5-text>
      </ui5-form-item>

      <ui5-form-item>
          <ui5-label slot="labelContent">Country:</ui5-label>
          <ui5-text class="text">Germany</ui5-text>
      </ui5-form-item>
    </ui5-form>

    <br><br>

    <ui5-form header-text="Label Span: S12 M12 L12 XL12" label-span="S12 M12 L12 XL12">
      <ui5-form-item>
          <ui5-label slot="labelContent">Name:</ui5-label>
          <ui5-text class="text">Red Point Stores</ui5-text>
      </ui5-form-item>

      <ui5-form-item>
          <ui5-label slot="labelContent">ZIP Code/City:</ui5-label>
          <ui5-text class="text">411 Maintown</ui5-text>
      </ui5-form-item>

      <ui5-form-item>
          <ui5-label slot="labelContent">Street:</ui5-label>
          <ui5-text class="text">Main St 1618</ui5-text>
      </ui5-form-item>

      <ui5-form-item>
          <ui5-label slot="labelContent">Country:</ui5-label>
          <ui5-text class="text">Germany</ui5-text>
      </ui5-form-item>
    </ui5-form>

    <style>
      ui5-form-item::part(layout) {
        background: #72c9e1;
      }
      ui5-form-item::part(content) {
        background: #eef9fc;
      }
    </style>
	`,
});

export const customHeader = (
  args: FormComponent & any
) => ({
  props: args,
  template: `
        <ui5-form layout="S1 M2 L2 XL2" item-spacing="Large" style="width: 600px;">

        <ui5-bar design="Subheader" slot="header">
            <ui5-title level="H4" slot="startContent">Address</ui5-title>
            <ui5-button slot="endContent">Action 1</ui5-button>
            <ui5-button slot="endContent">Action 2</ui5-button>
        </ui5-bar>

        <ui5-form-item>
            <ui5-label for="nameInp" slot="labelContent">Name:</ui5-label>
            <ui5-input value="Red Point Stores" id="nameInp"></ui5-input>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label id="countryLbl" for="countrySel" slot="labelContent">Country:</ui5-label>
            <ui5-select id="countrySel" accessible-name-ref="countryLbl">
                <ui5-option>Australia</ui5-option>
                <ui5-option selected>Germany</ui5-option>
                <ui5-option>England</ui5-option>
            </ui5-select>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label id="cityLbl" for="cityInp" slot="labelContent">ZIP Code/City:</ui5-label>
            <ui5-input id="cityInp" value="411" accessible-name-ref="cityLbl"></ui5-input>
            <ui5-input value="Maintown" accessible-name-ref="cityLbl"></ui5-input>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label for="wsInp" slot="labelContent">WebSite:</ui5-label>
            <ui5-input value="sap.com" id="wsInp"></ui5-input>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label id="streetLbl" for="streetInp" slot="labelContent">Street:</ui5-label>
            <ui5-input id="streetInp" value="Main St" accessible-name-ref="streetLbl"></ui5-input>
            <ui5-input id="streetNumberInp" value="1618" accessible-name-ref="streetLbl"></ui5-input>
        </ui5-form-item>

        <ui5-form-item>
            <ui5-label for="delInp" slot="labelContent">Delivery address:</ui5-label>
            <ui5-input value="Newtown" id="delInp"></ui5-input>
        </ui5-form-item>
      </ui5-form>

      <style>
        ui5-bar {
          box-shadow: none;
        }
      </style>
  `,
});
