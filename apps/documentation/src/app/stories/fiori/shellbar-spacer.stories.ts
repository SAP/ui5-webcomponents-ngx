import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ShellBarSpacerComponent } from '@ui5/webcomponents-ngx/fiori/shell-bar-spacer';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { ShellBarSpacerComponent } from "@ui5/webcomponents-ngx/fiori/shell-bar-spacer";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / ShellBar / ShellbarSpacer',
  component: ShellBarSpacerComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ShellBarSpacerComponent', ShellBarSpacerComponent, description),
      },
    },
  },
} as Meta;


export const ShellbarItem: StoryObj<ShellBarSpacerComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };