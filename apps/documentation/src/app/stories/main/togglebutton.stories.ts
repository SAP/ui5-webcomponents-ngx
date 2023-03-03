import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / ToggleButton',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const toggleButtonStates: Story = (args) => ({
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

export const toggleButtonWithIcon: Story = (args) => ({
  props: args,
  template: `
		<ui5-toggle-button class="samples-margin" icon="menu">Menu</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Emphasized" icon="add">Add</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Default" icon="nav-back">Back</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Positive" icon="accept">Accept</ui5-toggle-button>
		<ui5-toggle-button class="samples-margin" design="Negative" icon="sys-cancel">Deny</ui5-toggle-button>
	`,
});

export const toggleButtonWithIconOnly: Story = (args) => ({
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

export const toggleButton: Story = (args) => ({
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
