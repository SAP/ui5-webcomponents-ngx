import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, LinkComponent } from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3> The <code>ui5-link</code> is a hyperlink component that is used to navigate to other apps and web pages, or to trigger actions. It is a clickable text element, visualized in such a way that it stands out from the standard text. On hover, it changes its style to an underlined text to provide additional feedback to the user.

<h3>Usage</h3>

You can set the <code>ui5-link</code> to be enabled or disabled. <br><br> To create a visual hierarchy in large lists of links, you can set the less important links as <code>Subtle</code> or the more important ones as <code>Emphasized</code>, by using the <code>design</code> property. <br><br> If the <code>href</code> property is set, the link behaves as the HTML anchor tag (<code>&lt;a&gt;&lt;a&#47;&gt;</code>) and opens the specified URL in the given target frame (<code>target</code> property). To specify where the linked content is opened, you can use the <code>target</code> property.

<h3>Responsive behavior</h3>

If there is not enough space, the text of the <code>ui5-link</code> becomes truncated. If the <code>wrappingType</code> property is set to <code>"Normal"</code>, the text is displayed on several lines instead of being truncated.

<h3>ES6 Module Import</h3>

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
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const ApplyChanges: Story<LinkComponent> = (
  args: LinkComponent & any
) => ({
  props: args,
  template: `
          <ui5-link>
            ${args.content}
          </ui5-link>
        `,
});

export const differentLinkDesigns: Story<LinkComponent> = (
  args: LinkComponent & any
) => ({
  props: args,
  template: `
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank">Standard Link</ui5-link>
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" design="Subtle">Subtle link</ui5-link>
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" disabled="">Disabled</ui5-link>
		<ui5-link class="samples-big-margin-right" href="https://www.sap.com" target="_blank" design="Emphasized">Emphasized</ui5-link>
	`,
});
