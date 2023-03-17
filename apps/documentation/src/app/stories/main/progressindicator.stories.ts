import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ProgressIndicatorComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> Shows the progress of a process in a graphical way. To indicate the progress, the inside of the component is filled with a color.

<h3>Responsive Behavior</h3> You can change the size of the Progress Indicator by changing its <code>width</code> or <code>height</code> CSS properties.

<h3>ES6 Module Import</h3>

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
        component: description,
      },
    },
  },
} as Meta;

export const basicProgressIndicator: Story<ProgressIndicatorComponent> = (
  args: ProgressIndicatorComponent & any
) => ({
  props: args,
  template: `
        <ui5-progress-indicator value="0"></ui5-progress-indicator>
        <ui5-progress-indicator value="25"></ui5-progress-indicator>
        <ui5-progress-indicator value="75" disabled=""></ui5-progress-indicator>
        <ui5-progress-indicator value="100"></ui5-progress-indicator>
	`,
});

export const progressIndicatorWithCustomDisplayValue: Story<
  ProgressIndicatorComponent
> = (args: ProgressIndicatorComponent & any) => ({
  props: args,
  template: `
        <ui5-progress-indicator value="25" display-value="Custom Display Value"></ui5-progress-indicator>
	`,
});

export const progressIndicatorWithValueState: Story<
  ProgressIndicatorComponent
> = (args: ProgressIndicatorComponent & any) => ({
  props: args,
  template: `
        <ui5-progress-indicator value-state="None" value="25"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Error" value="50"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Warning" value="75"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Success" value="90"></ui5-progress-indicator>
        <ui5-progress-indicator value-state="Information" value="100"></ui5-progress-indicator>
	`,
});

export const progressIndicatorWithCustomSizes: Story<
  ProgressIndicatorComponent
> = (args: ProgressIndicatorComponent & any) => ({
  props: args,
  template: `
        <ui5-progress-indicator value="25" style="height: 50px; width: 200px;"></ui5-progress-indicator>
        <ui5-progress-indicator value="75" style="height: 50px; width: 200px;"></ui5-progress-indicator>
	`,
});
