import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  SwitchComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview 

The <code>ui5-switch</code> component is used for changing between binary states. <br> The component can display texts, that will be switched, based on the component state, via the <code>textOn</code> and <code>textOff</code> properties, but texts longer than 3 letters will be cutted off. <br> However, users are able to customize the width of <code>ui5-switch</code> with pure CSS (<code>&lt;ui5-switch style="width: 200px"></code>), and set widths, depending on the texts they would use. <br> Note: the component would not automatically stretch to fit the whole text width.

###Keyboard Handling

The state can be changed by pressing the Space and Enter keys.

###CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-switch</code> exposes the following CSS Shadow Parts: <ul> <li>slider - Used to style the track, where the handle is being slid</li> <li>text-on - Used to style the <code>textOn</code> property text</li> <li>text-off - Used to style the <code>textOff</code> property text</li> <li>handle - Used to style the handle of the switch</li> </ul>

###ES6 Module Import

<code>import { SwitchComponent } from "@ui5/webcomponents-ngx/main/switch";</code>`;
export default {
  title: 'UI5 Web Components / Main / Switch',
  component: SwitchComponent,
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

export const basicSwitch: Story<SwitchComponent> = (
  args: SwitchComponent & any
) => ({
  props: args,
  template: `
		<ui5-switch text-on="On" text-off="Off"></ui5-switch>
		<ui5-switch text-on="On" text-off="Off" checked></ui5-switch>
		<ui5-switch></ui5-switch>
		<ui5-switch checked></ui5-switch>
		<ui5-switch text-on="Yes" text-off="No" disabled></ui5-switch>
		<ui5-switch text-on="Yes" text-off="No" checked disabled></ui5-switch>
	`,
});

export const graphicalSwitch: Story<SwitchComponent> = (
  args: SwitchComponent & any
) => ({
  props: args,
  template: `
		<ui5-switch accessible-name="graphical" design="Graphical"></ui5-switch>
		<ui5-switch accessible-name="graphical" design="Graphical" checked></ui5-switch>
		<ui5-switch accessible-name="graphical" design="Graphical" disabled></ui5-switch>
		<ui5-switch accessible-name="graphical" design="Graphical" disabled checked></ui5-switch>
	`,
});
