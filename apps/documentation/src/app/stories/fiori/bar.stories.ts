import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, BarComponent } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and functionality is the basis for page headers and footers. The component consists of three areas to hold its content - startContent slot, default slot and endContent slot. It has the capability to center content, such as a title, while having other components on the left and right side.

<h3>Usage</h3> With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter. <br> <b>Note:</b> Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.

<h3>Responsive Behavior</h3> The default slot will be centered in the available space between the startContent and the endContent areas, therefore it might not always be centered in the entire bar.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-bar</code> exposes the following CSS Shadow Parts: <ul> <li>bar - Used to style the wrapper of the content of the component</li> </ul>

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

<h3>ES6 Module Import</h3>

<code>import { BarComponent } from "@ui5/webcomponents-ngx/fiori/bar";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Bar',
  component: BarComponent,
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

export const headerBar: Story<BarComponent> = (args: BarComponent & any) => ({
  props: args,
  template: `
		<ui5-bar design="Header">
			<ui5-button icon="home" tooltip="Go home" design="Transparent" slot="startContent"></ui5-button>
			<ui5-label id="basic-label">Header Title</ui5-label>
			<ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>
		</ui5-bar>
	`,
});

export const subheaderBar: Story<BarComponent> = (
  args: BarComponent & any
) => ({
  props: args,
  template: `
		<ui5-bar design="Subheader">
			<ui5-button icon="home" tooltip="Go home" slot="startContent"></ui5-button>
			<ui5-label id="basic-label">Subheader Title</ui5-label>
			<ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>
		</ui5-bar>
	`,
});

export const footerBar: Story<BarComponent> = (args: BarComponent & any) => ({
  props: args,
  template: `
		<ui5-bar design="Footer">
			<ui5-button design="Positive" slot="endContent">Agree</ui5-button>
			<ui5-button design="Negative" slot="endContent">Decline</ui5-button>
			<ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
		</ui5-bar>
	`,
});

export const floatingFooterBar: Story<BarComponent> = (
  args: BarComponent & any
) => ({
  props: args,
  template: `
		<ui5-bar design="FloatingFooter">
			<ui5-button design="Positive" slot="endContent">Agree</ui5-button>
			<ui5-button design="Negative" slot="endContent">Decline</ui5-button>
			<ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
		</ui5-bar>
	`,
});
