import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ShellBarBrandingComponent } from '@ui5/webcomponents-ngx/fiori/shell-bar-branding';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { ShellBarBranding } from "@ui5/webcomponents-ngx/fiori/shell-bar-branding";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / ShellBar / ShellbarBranding',
  component: ShellBarBrandingComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ShellBarBrandingComponent', ShellBarBrandingComponent, description),
      },
    },
  },
} as Meta;


export const ShellbarBranding: StoryObj<ShellBarBrandingComponent> = {
    render: (args) => ({
      props: args,
      template: `
      `,
    }),
  };