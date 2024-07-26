import { Meta, moduleMetadata } from '@storybook/angular';
import { LinkComponent, Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview

The <code>ui5-link</code> is a hyperlink component that is used to navigate to other apps and web pages, or to trigger actions. It is a clickable text element, visualized in such a way that it stands out from the standard text. On hover, it changes its style to an underlined text to provide additional feedback to the user.

### Usage

You can set the <code>ui5-link</code> to be enabled or disabled. <br><br> To create a visual hierarchy in large lists of links, you can set the less important links as <code>Subtle</code> or the more important ones as <code>Emphasized</code>, by using the <code>design</code> property. <br><br> If the <code>href</code> property is set, the link behaves as the HTML anchor tag (<code>&lt;a&gt;&lt;a&#47;&gt;</code>) and opens the specified URL in the given target frame (<code>target</code> property). To specify where the linked content is opened, you can use the <code>target</code> property.

### Responsive behavior

If there is not enough space, the text of the <code>ui5-link</code> becomes truncated. If the <code>wrappingType</code> property is set to <code>"Normal"</code>, the text is displayed on several lines instead of being truncated.

### ES6 Module Import

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
        component: description,
      },
    },
  },
} as Meta;

export const differentLinkDesigns = (
  args: LinkComponent & any
) => ({
  props: args,
  template: `
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank">Standard Link</ui5-link>
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" design="Subtle">Subtle link</ui5-link>
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" disabled>Disabled</ui5-link>
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" design="Emphasized">Emphasized</ui5-link>
	`,
});
