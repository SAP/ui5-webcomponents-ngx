import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ProgressIndicatorComponent } from '@ui5/webcomponents-ngx/main/progress-indicator';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { ProgressIndicatorComponent } from "@ui5/webcomponents-ngx/main/progress-indicator";</code>`;
export default {
  title: 'UI5 Web Components / Main / ProgressIndicator',
  component: ProgressIndicatorComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('ProgressIndicatorComponent', ProgressIndicatorComponent, description),
      },
    },
  },
} as Meta;

export const BasicProgressIndicator: StoryObj<ProgressIndicatorComponent> = {
  render: (args: ProgressIndicatorComponent & any) => ({
    props: args,
    template: `
        <ui5-progress-indicator value="0"></ui5-progress-indicator>
        <ui5-progress-indicator value="25"></ui5-progress-indicator>
        <ui5-progress-indicator value="75" disabled></ui5-progress-indicator>
        <ui5-progress-indicator value="100"></ui5-progress-indicator>
	`,
  }),
};

export const ProgressIndicatorWithCustomDisplayValue: StoryObj<ProgressIndicatorComponent> =
  {
    render: (args: ProgressIndicatorComponent & any) => ({
      props: args,
      template: `
        <ui5-progress-indicator value="25" display-value="Custom Display Value"></ui5-progress-indicator>
	`,
    }),
  };

export const ProgressIndicatorWithValueState: StoryObj<ProgressIndicatorComponent> =
  {
    render: (args: ProgressIndicatorComponent & any) => ({
      props: args,
      template: `
        <ui5-progress-indicator value-state="None" value="25"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Negative" value="50"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Critical" value="75"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Positive" value="90"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Information" value="100"></ui5-progress-indicator>
	`,
    }),
  };

export const ProgressIndicatorWithCustomSizes: StoryObj<ProgressIndicatorComponent> =
  {
    render: (args: ProgressIndicatorComponent & any) => ({
      props: args,
      template: `
        <ui5-progress-indicator value="25" style="height: 50px; width: 200px;"></ui5-progress-indicator>
        <ui5-progress-indicator value="75" style="height: 50px; width: 200px;"></ui5-progress-indicator>
	`,
    }),
  };
