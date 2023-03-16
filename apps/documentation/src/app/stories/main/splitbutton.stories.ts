import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  SplitButtonComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3>

<code>ui5-split-button</code> enables users to trigger actions. It is constructed of two separate actions - default action and arrow action that can be activated by clicking or tapping, or by pressing certain keyboard keys - <code>Space</code> or <code>Enter</code> for default action, and <code>Arrow Down</code> or <code>Arrow Up</code> for arrow action.

<h3>Usage</h3>

<code>ui5-split-button</code> consists two separate buttons: <ul> <li>for the first one (default action) you can define some <code>text</code> or an <code>icon</code>, or both. Also, it is possible to define different icon for active state of this button - <code>activeIcon</code>.</li> <li>the second one (arrow action) contains only <code>slim-arrow-down</code> icon.</li> </ul> You can choose a <code>design</code> from a set of predefined types (the same as for ui5-button) that offer different styling to correspond to the triggered action. Both text and arrow actions have the same design. <br><br> You can set the <code>ui5-split-button</code> as enabled or disabled. Both parts of an enabled <code>ui5-split-button</code> can be pressed by clicking or tapping it, or by certain keys, which changes the style to provide visual feedback to the user that it is pressed or hovered over with the mouse cursor. A disabled <code>ui5-split-button</code> appears inactive and any of the two buttons cannot be pressed.

<h3>Keyboard Handling</h3> <ul> <li><code>Space</code> or <code>Enter</code> - triggers the default action</li> <li><code>Shift</code> or <code>Escape</code> - if <code>Space</code> is pressed, releases the default action button without triggering the click event.</li> <li><code>Arrow Down</code>, <code>Arrow Up</code>, <code>Alt</code>+<code>Arrow Down</code>, <code>Alt</code>+<code>Arrow Up</code>, or <code>F4</code> - triggers the arrow action</li> There are separate events that are fired on activating of <code>ui5-split-button</code> parts: <ul> <li><code>click</code> for the first button (default action)</li> <li><code>arrow-click</code> for the second button (arrow action)</li> </ul> </ul>

<h3>ES6 Module Import</h3>

<code>import { SplitButtonComponent } from "@ui5/webcomponents-ngx/main/split-button";</code>`;
export default {
  title: 'UI5 Web Components / Main / SplitButton',
  component: SplitButtonComponent,
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

export const ApplyChanges: Story<SplitButtonComponent> = (
  args: SplitButtonComponent & any
) => ({
  props: args,
  template: `
          <ui5-split-button>
            ${args.content}
          </ui5-split-button>
        `,
});

export const defaultSplitButton: Story<SplitButtonComponent> = (
  args: SplitButtonComponent & any
) => ({
  props: args,
  template: `
		<ui5-split-button class="samples-margin">Default</ui5-split-button>
		<ui5-split-button disabled="" class="samples-margin">Default</ui5-split-button>
	`,
});

export const splitButtonWithDesign: Story<SplitButtonComponent> = (
  args: SplitButtonComponent & any
) => ({
  props: args,
  template: `
		<ui5-split-button design="Default" class="samples-margin">Default</ui5-split-button>
		<ui5-split-button design="Emphasized" class="samples-margin">Emphasized</ui5-split-button>
		<ui5-split-button design="Positive" class="samples-margin">Positive</ui5-split-button>
		<ui5-split-button design="Negative" class="samples-margin">Negative</ui5-split-button>
		<ui5-split-button design="Attention" class="samples-margin">Attention</ui5-split-button>
		<ui5-split-button design="Transparent" class="samples-margin">Transparent</ui5-split-button>
	`,
});

export const splitButtonWithIcons: Story<SplitButtonComponent> = (
  args: SplitButtonComponent & any
) => ({
  props: args,
  template: `
		<ui5-split-button icon="add" class="samples-margin">Icon</ui5-split-button>
		<ui5-split-button icon="add" active-icon="accept" class="samples-margin">Icon + Active Icon</ui5-split-button>
	`,
});
