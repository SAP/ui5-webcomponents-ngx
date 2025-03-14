import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { LinkComponent } from '@ui5/webcomponents-ngx/main/link';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { LinkComponent } from "@ui5/webcomponents-ngx/main/link";</code>`;
export default {
  title: 'UI5 Web Components / Main / Link',
  component: LinkComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('LinkComponent', LinkComponent, description),
      },
    },
  },
} as Meta;

export const differentLinkDesigns: StoryObj<LinkComponent> = {
  render: (args: LinkComponent & any) => ({
    props: args,
    template: `
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank">Standard Link</ui5-link>
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" design="Subtle">Subtle link</ui5-link>
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" disabled>Disabled</ui5-link>
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" design="Emphasized">Emphasized</ui5-link>
	`,
  }),
};
