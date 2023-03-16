import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ToggleButtonComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3>

The <code>ui5-toggle-button</code> component is an enhanced <code>ui5-button</code> that can be toggled between pressed and normal states. Users can use the <code>ui5-toggle-button</code> as a switch to turn a setting on or off. It can also be used to represent an independent choice similar to a check box. <br><br> Clicking or tapping on a <code>ui5-toggle-button</code> changes its state to <code>pressed</code>. The button returns to its initial state when the user clicks or taps on it again. By applying additional custom CSS-styling classes, apps can give a different style to any <code>ui5-toggle-button</code>.

<h3>ES6 Module Import</h3>

<code>import { ToggleButtonComponent } from "@ui5/webcomponents-ngx/main/toggle-button";</code>`;
export default {
  title: 'UI5 Web Components / Main / ToggleButton',
  component: ToggleButtonComponent,
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

export const ApplyChanges: Story<ToggleButtonComponent> = (
  args: ToggleButtonComponent & any
) => ({
  props: args,
  template: `
          <ui5-toggle-button>
            ${args.content}
          </ui5-toggle-button>
        `,
});

export const toggleButtonStates: Story<ToggleButtonComponent> = (
  args: ToggleButtonComponent & any
) => ({
  props: args,
  template: `
		<ui5-toggle-button class="samples-margin">ToggleButton</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" pressed="">Pressed ToggleButton</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" disabled="">Disabled ToggleButton</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" disabled="" pressed="">Disabled and Pressed ToggleButton</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Positive">Accept ToggleButton</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Positive" pressed="">Pressed Accept ToggleButton</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Negative">Reject ToggleButton</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Negative" pressed="">Pressed Reject ToggleButton</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Transparent">Transparent ToggleButton</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Transparent" pressed="">Pressed Transparent ToggleButton</ui5-toggle-button>
	`,
});

export const toggleButtonWithIcon: Story<ToggleButtonComponent> = (
  args: ToggleButtonComponent & any
) => ({
  props: args,
  template: `
		<ui5-toggle-button class="samples-margin" icon="menu">Menu</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Emphasized" icon="add">Add</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Default" icon="nav-back">Back</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Positive" icon="accept">Accept</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Negative" icon="sys-cancel">Deny</ui5-toggle-button>
	`,
});

export const toggleButtonWithIconOnly: Story<ToggleButtonComponent> = (
  args: ToggleButtonComponent & any
) => ({
  props: args,
  template: `
			<ui5-toggle-button class="samples-margin" icon="away"></ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" icon="action-settings" pressed=""></ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" icon="add"></ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" icon="alert" pressed=""></ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" icon="accept" design="Positive"></ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" icon="bookmark" design="Positive" pressed=""></ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" icon="cancel" design="Negative"></ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" icon="call" design="Negative" pressed=""></ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" icon="camera" design="Transparent"></ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" icon="cart" design="Transparent" pressed=""></ui5-toggle-button>
	`,
});

export const toggleButton: Story<ToggleButtonComponent> = (
  args: ToggleButtonComponent & any
) => ({
  props: args,
  template: `
			<ui5-toggle-button class="samples-margin">Yes/No</ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" pressed="">Yes/No</ui5-toggle-button>
			<ui5-toggle-button class="samples-margin">Toggle Button</ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" pressed="">Toggle Button pressed</ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" design="Positive">On/Off</ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" design="Positive" pressed="">On/Off</ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" design="Negative">Menu</ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" design="Negative" pressed="">Menu</ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" design="Transparent">Transparent</ui5-toggle-button>
			<ui5-toggle-button class="samples-margin" design="Transparent" pressed="">Transparent</ui5-toggle-button>
	`,
});
