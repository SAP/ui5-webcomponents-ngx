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
        component: extractDescription(
          'LinkComponent',
          LinkComponent,
          description,
        ),
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

export const TextTruncationAndWrapping: StoryObj<LinkComponent> = {
  render: (args: LinkComponent & any) => ({
    props: args,
    template: `
    <ui5-link href="https://www.sap.com" target="_blank" style="width: 8rem">
        This is a really long link. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </ui5-link>

    <ui5-link href="https://www.sap.com" target="_blank" wrapping-type="None" style="width: 8rem">
        This is a really long link. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </ui5-link>
  `,
  }),
};

export const CustomStylingLink: StoryObj<LinkComponent> = {
  render: (args: LinkComponent & any) => ({
    props: args,
    template: `
    <ui5-link
        href="https://www.sap.com"
        target="_blank"
        style="font-size: 1.25rem; color: var(--sapNegativeColor);"
    >Styled Link
    </ui5-link>

    <ui5-link
        href="https://www.sap.com"
        target="_blank"
        style="font-size: 1.25rem; color: var(--sapPositiveColor);"
    >Styled Link
    </ui5-link>
  `,
  }),
};

export const LinkWithIcon: StoryObj<LinkComponent> = {
  render: (args: LinkComponent & any) => ({
    props: args,
    template: `
    <ui5-link href="https://www.sap.com" target="_blank" icon="employee">
        View Profile
    </ui5-link>

    <br>

    <ui5-link href="https://www.sap.com" target="_blank" wrapping-type="Normal" end-icon="cloud">
        Check the weather
    </ui5-link>
  `,
  }),
};
