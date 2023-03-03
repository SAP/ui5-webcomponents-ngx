import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / MessageStrip',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const messageStrip: Story = (args) => ({
  props: args,
  template: `
		<ui5-message-strip class="samples-margin-bottom" design="Information">Information MessageStrip</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom" design="Positive">Positive MessageStrip</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom" design="Negative">Negative MessageStrip</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom" design="Warning">Warning MessageStrip</ui5-message-strip>
	`,
});

export const messageStripWithNoCloseButton: Story = (args) => ({
  props: args,
  template: `
		<ui5-message-strip class="samples-margin-bottom" design="Information" hide-close-button="">Information MessageStrip With No Close Button</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom" design="Positive" hide-close-button="">Positive MessageStrip With No Close Button</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom" design="Negative" hide-close-button="">Negative MessageStrip With No Close Button</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom" design="Warning" hide-close-button="">Warning MessageStrip With No Close Button</ui5-message-strip>
	`,
});

export const messageStripWithNoIcon: Story = (args) => ({
  props: args,
  template: `
		<ui5-message-strip class="samples-margin-bottom" design="Information" hide-icon="">Information MessageStrip With No Icon</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom" design="Positive" hide-icon="">Positive MessageStrip With No Icon</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom" design="Negative" hide-icon="">Negative MessageStrip With No Icon</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom" design="Warning" hide-icon="">Warning MessageStrip With No Icon</ui5-message-strip>
	`,
});

export const customMessageStrip: Story = (args) => ({
  props: args,
  template: `
		<ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Information" hide-icon="" hide-close-button="">You have new message.</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Positive" hide-close-button="">Successfull login!</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Negative" hide-icon="">Access denied!</ui5-message-strip>
		<ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Warning">Update is required.</ui5-message-strip>
        <ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Warning"><ui5-icon name="palette" slot="icon"></ui5-icon>Custom icon</ui5-message-strip>
        <ui5-message-strip class="samples-margin-bottom samples-vertical-align" style="width: 200px;" design="Positive"><img src="../../../assets/images/loading.gif" width="16" height="16" slot="icon">Custom animated gif</ui5-message-strip>
	`,
});
