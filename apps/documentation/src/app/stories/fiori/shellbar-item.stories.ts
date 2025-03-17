import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ShellBarItemComponent } from '@ui5/webcomponents-ngx/fiori/shell-bar-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { ShellBarItemComponent } from "@ui5/webcomponents-ngx/fiori/shell-bar-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / ShellBar / ShellbarItem',
  component: ShellBarItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'ShellBarItemComponent', ShellBarItemComponent, description),
      },
    },
  },
} as Meta;


export const ShellbarItem: StoryObj<ShellBarItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };