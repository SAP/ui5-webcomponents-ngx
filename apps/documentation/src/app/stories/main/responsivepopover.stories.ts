import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ResponsivePopoverComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> The <code>ui5-responsive-popover</code> acts as a Popover on desktop and tablet, while on phone it acts as a Dialog. The component improves tremendously the user experience on mobile.

<h3>Usage</h3> Use it when you want to make sure that all the content is visible on any device.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-responsive-popover</code> exposes the following CSS Shadow Parts: <ul> <li>header - Used to style the header of the component</li> <li>content - Used to style the content of the component</li> <li>footer - Used to style the footer of the component</li> </ul>`;
export default {
  title: 'UI5 Web Components / Main / ResponsivePopover',
  component: ResponsivePopoverComponent,
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

export const BasicResponsivePopover: Story = () => ({
  template: `<ui5-button #openBtn="ui5Button" (ui5Click)="popover.showAt(openBtn.element)" design="Emphasized">Open ResponsivePopover</ui5-button>

<ui5-responsive-popover #popover="ui5ResponsivePopover" header-text="Newsletter subscription">
    <div style="width: auto;padding: 2rem;display: flex;flex-direction: column;justify-content: center;">
        <ui5-label for="emailInput" required>Email:</ui5-label>
        <ui5-input id="emailInput" class="samples-margin-top" style="min-width: 150px;"
                   placeholder="Enter Email"></ui5-input>
        <ui5-label>Note: If you open the page in mobile, dialog would be displayed.</ui5-label>
    </div>
    <div slot="footer" class="popover-footer">
        <ui5-button id="closePopoverButton" design="Emphasized">Subscribe</ui5-button>
    </div>
</ui5-responsive-popover>
  `
});
