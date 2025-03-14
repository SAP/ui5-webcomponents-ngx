import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { PopoverComponent } from '@ui5/webcomponents-ngx/main/popover';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

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
        component: extractDescription('PopoverComponent', PopoverComponent, description),
      },
    },
  },
} as Meta;

export const BasicPopover: StoryObj = {
  render: () => ({
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
  `,
  }),
};
