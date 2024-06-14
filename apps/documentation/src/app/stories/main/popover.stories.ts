import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  PopoverComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-popover</code> component displays additional information for an object in a compact way and without leaving the page. The Popover can contain various UI elements, such as fields, tables, images, and charts. It can also include actions in the footer.

<h3>Structure</h3>

The popover has three main areas: <ul> <li>Header (optional)</li> <li>Content</li> <li>Footer (optional)</li> </ul>

<b>Note:</b> The <code>ui5-popover</code> is closed when the user clicks or taps outside the popover or selects an action within the popover. You can prevent this with the <code>modal</code> property.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-popover</code> exposes the following CSS Shadow Parts: <ul> <li>header - Used to style the header of the component</li> <li>content - Used to style the content of the component</li> <li>footer - Used to style the footer of the component</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { PopoverComponent } from "@ui5/webcomponents-ngx/main/popover";</code>`;
export default {
  title: 'UI5 Web Components / Main / Popover',
  component: PopoverComponent,
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

export const BasicPopover: Story = () => ({
  template: `
    <ui5-button
      id="btn"
      design="Emphasized"
      (click)="popover.open=true" 
    >
      Open Popover
    </ui5-button>

    <ui5-popover #popover="ui5Popover"
      opener="btn" 
      header-text="Newsletter subscription"
      >
        <ui5-label for="emailInput" required>Email:</ui5-label>
        <ui5-input id="emailInput" style="min-width: 150px;"placeholder="Enter Email"></ui5-input>
    </ui5-popover>
  `
});
