import { Meta, moduleMetadata } from '@storybook/angular';
import { MessageStripComponent, Ui5WebcomponentsModule, } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

The <code>ui5-message-strip</code> component enables the embedding of app-related messages. It displays 4 designs of messages, each with corresponding semantic color and icon: Information, Positive, Warning and Negative. Each message can have a Close button, so that it can be removed from the UI, if needed.

<h3>Usage</h3>

For the <code>ui5-message-strip</code> component, you can define whether it displays an icon in the beginning and a close button. Moreover, its size and background can be controlled with CSS.

<h3>Keyboard Handling</h3>

<h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

<h3>ES6 Module Import</h3>

<code>import { MessageStripComponent } from "@ui5/webcomponents-ngx/main/message-strip";</code>`;
export default {
  title: 'UI5 Web Components / Main / MessageStrip',
  component: MessageStripComponent,
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

export const messageStrip = (
  args: MessageStripComponent & any
) => ({
  props: args,
  template: `
		<ui5-message-strip design="Information">Information MessageStrip</ui5-message-strip>
		<ui5-message-strip design="Positive">Positive MessageStrip</ui5-message-strip>
		<ui5-message-strip design="Negative">Negative MessageStrip</ui5-message-strip>
		<ui5-message-strip design="Critical">Warning MessageStrip</ui5-message-strip>
	`,
});

export const messageStripWithNoCloseButton = (
  args: MessageStripComponent & any
) => ({
  props: args,
  template: `
		<ui5-message-strip design="Information" hide-close-button>Information MessageStrip With No Close Button</ui5-message-strip>
		<ui5-message-strip design="Positive" hide-close-button>Positive MessageStrip With No Close Button</ui5-message-strip>
		<ui5-message-strip design="Negative" hide-close-button>Negative MessageStrip With No Close Button</ui5-message-strip>
		<ui5-message-strip design="Critical" hide-close-button>Warning MessageStrip With No Close Button</ui5-message-strip>
	`,
});

export const messageStripWithNoIcon = (
  args: MessageStripComponent & any
) => ({
  props: args,
  template: `
		<ui5-message-strip design="Information" hide-icon>Information MessageStrip With No Icon</ui5-message-strip>
		<ui5-message-strip design="Positive" hide-icon>Positive MessageStrip With No Icon</ui5-message-strip>
		<ui5-message-strip design="Negative" hide-icon>Negative MessageStrip With No Icon</ui5-message-strip>
		<ui5-message-strip design="Critical" hide-icon>Warning MessageStrip With No Icon</ui5-message-strip>
	`,
});

export const customMessageStrip = (
  args: MessageStripComponent & any
) => ({
  props: args,
  template: `
    <ui5-message-strip style="width: 200px;" design="Information" hide-icon hide-close-button>You have new message.</ui5-message-strip>
    <ui5-message-strip style="width: 200px;" design="Positive" hide-close-button>Successfull login!</ui5-message-strip>
    <ui5-message-strip style="width: 200px;" design="Negative" hide-icon>Access denied!</ui5-message-strip>
    <ui5-message-strip style="width: 200px;" design="Critical">Update is required.</ui5-message-strip>
    <ui5-message-strip style="width: 200px;" design="Critical"><ui5-icon name="palette" slot="icon"></ui5-icon>Custom icon</ui5-message-strip>
    <ui5-message-strip style="width: 200px;" design="Positive"><img src="../../../assets/images/loading.gif" width="16" height="16" slot="icon">Custom animated gif</ui5-message-strip>
	`,
});
