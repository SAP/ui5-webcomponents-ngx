import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule} from '@ui5/webcomponents-ngx';
import { ResponsivePopoverComponent} from '@ui5/webcomponents-ngx/main/responsive-popover';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { RatingIndicatorComponent } from "@ui5/webcomponents-ngx/main/rating-indicator";</code>`;
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
        component: extractDescription('ResponsivePopoverComponent', ResponsivePopoverComponent, description),
      },
    },
  },
} as Meta;

export const BasicResponsivePopover: StoryObj = {
  render: () => ({
    template: `
  <ui5-button id="btn"  (click)="popover.open=true"  design="Emphasized">Open ResponsivePopover</ui5-button>

  <ui5-responsive-popover opener="btn" #popover="ui5ResponsivePopover" header-text="Newsletter subscription">
      <div style="width: auto;padding: 2rem;display: flex;flex-direction: column;justify-content: center;">
          <ui5-label for="emailInput" required>Email:</ui5-label>
          <ui5-input id="emailInput" class="samples-margin-top" style="min-width: 150px;"
                    placeholder="Enter Email">
          </ui5-input>
      </div>

      <ui5-label>Note:</ui5-label><ui5-text>If you open the page in mobile, dialog would be displayed.</ui5-text>
  </ui5-responsive-popover>
  `,
  }),
};
