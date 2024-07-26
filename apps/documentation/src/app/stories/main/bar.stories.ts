import { Meta, moduleMetadata } from '@storybook/angular';
import { BarComponent, Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview
The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and functionality is the basis for page headers and footers. The component consists of three areas to hold its content - startContent slot, default slot and endContent slot. It has the capability to center content, such as a title, while having other components on the left and right side.

### Usage

With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter. <br> <b>Note:</b> Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.

### Responsive Behavior

The default slot will be centered in the available space between the startContent and the endContent areas, therefore it might not always be centered in the entire bar.

### CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-bar</code> exposes the following CSS Shadow Parts: <ul> <li>bar - Used to style the wrapper of the content of the component</li> </ul>

### Keyboard Handling

#### Fast Navigation

This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

### ES6 Module Import

<code>import { BarComponent } from "@ui5/webcomponents-ngx/main/bar";</code>`;
export default {
  title: 'UI5 Web Components / Main / Bar',
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

export const headerBar = (args) => ({
  props: args,
  template: `
		<ui5-bar design="Header">
			<ui5-button icon="home" tooltip="Go home" design="Transparent" slot="startContent"></ui5-button>
			<ui5-label id="basic-label">Header Title</ui5-label>
			<ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>
		</ui5-bar>
	`,
});

export const subheaderBar = (
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

export const footerBar= (args) => ({
  props: args,
  template: `
		<ui5-bar design="Footer">
			<ui5-button design="Positive" slot="endContent">Agree</ui5-button>
			<ui5-button design="Negative" slot="endContent">Decline</ui5-button>
			<ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
		</ui5-bar>
	`,
});

export const floatingFooterBar = (
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
