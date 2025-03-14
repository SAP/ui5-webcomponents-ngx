import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { MessageStripComponent } from '@ui5/webcomponents-ngx/main/message-strip';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

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
        component: extractDescription('MessageStripComponent', MessageStripComponent, description),
      },
    },
  },
} as Meta;

export const MessageStrip: StoryObj<MessageStripComponent> = {
  render: (args: MessageStripComponent & any) => ({
    props: args,
    template: `
		<ui5-message-strip design="Information">Information MessageStrip</ui5-message-strip>
		<ui5-message-strip design="Positive">Positive MessageStrip</ui5-message-strip>
		<ui5-message-strip design="Negative">Negative MessageStrip</ui5-message-strip>
		<ui5-message-strip design="Critical">Warning MessageStrip</ui5-message-strip>
	`,
  }),
};

export const MessageStripWithNoCloseButton: StoryObj<MessageStripComponent> = {
  render: (args: MessageStripComponent & any) => ({
    props: args,
    template: `
		<ui5-message-strip design="Information" hide-close-button>Information MessageStrip With No Close Button</ui5-message-strip>
		<ui5-message-strip design="Positive" hide-close-button>Positive MessageStrip With No Close Button</ui5-message-strip>
		<ui5-message-strip design="Negative" hide-close-button>Negative MessageStrip With No Close Button</ui5-message-strip>
		<ui5-message-strip design="Critical" hide-close-button>Warning MessageStrip With No Close Button</ui5-message-strip>
	`,
  }),
};

export const MessageStripWithNoIcon: StoryObj<MessageStripComponent> = {
  render: (args: MessageStripComponent & any) => ({
    props: args,
    template: `
		<ui5-message-strip design="Information" hide-icon>Information MessageStrip With No Icon</ui5-message-strip>
		<ui5-message-strip design="Positive" hide-icon>Positive MessageStrip With No Icon</ui5-message-strip>
		<ui5-message-strip design="Negative" hide-icon>Negative MessageStrip With No Icon</ui5-message-strip>
		<ui5-message-strip design="Critical" hide-icon>Warning MessageStrip With No Icon</ui5-message-strip>
	`,
  }),
};

export const CustomMessageStrip: StoryObj<MessageStripComponent> = {
  render: (args: MessageStripComponent & any) => ({
    props: args,
    template: `
    <ui5-message-strip style="width: 200px;" design="Information" hide-icon hide-close-button>You have new message.</ui5-message-strip>
    <ui5-message-strip style="width: 200px;" design="Positive" hide-close-button>Successfull login!</ui5-message-strip>
    <ui5-message-strip style="width: 200px;" design="Negative" hide-icon>Access denied!</ui5-message-strip>
    <ui5-message-strip style="width: 200px;" design="Critical">Update is required.</ui5-message-strip>
    <ui5-message-strip style="width: 200px;" design="Critical"><ui5-icon name="palette" slot="icon"></ui5-icon>Custom icon</ui5-message-strip>
    <ui5-message-strip style="width: 200px;" design="Positive"><img src="../../../assets/images/loading.gif" width="16" height="16" slot="icon">Custom animated gif</ui5-message-strip>
	`,
  }),
};
