import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  IllustratedMessageComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3> An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging illustration, and conversational tone to better communicate an empty or a success state than just show a message alone.

Each illustration has default internationalised title and subtitle texts. Also they can be managed with <code>titleText</code> and <code>subtitleText</code> properties.

To display the desired illustration, use the <code>name</code> property, where you can find the list of all available illustrations. <br><br> <b>Note:</b> By default the “BeforeSearch” illustration is loaded. To use other illustrations, make sure you import them in addition, for example: <br> <code>import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"</code> <br> <b>Note:</b> Illustrations starting with the “Tnt” prefix are part of another illustration set. For example to use the “TntSuccess” illustration, add the following import:: <br> <code>import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Success.js"</code>

<h3>Structure</h3> The IllustratedMessage consists of the following elements, which are displayed below each other in the following order: <br> <ul> <li>Illustration</li> <li>Title</li> <li>Subtitle</li> <li>Actions</li> </ul>

<h3>Usage</h3> <code>ui5-illustrated-message</code> is meant to be used inside container component, for example a <code>ui5-card</code>, a <code>ui5-dialog</code> or a <code>ui5-page</code>

<h3>ES6 Module Import</h3>

<code>import { IllustratedMessageComponent } from "@ui5/webcomponents-ngx/fiori/illustrated-message";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / IllustratedMessage',
  component: IllustratedMessageComponent,
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

export const illustratedMessage: Story<IllustratedMessageComponent> = (
  args: IllustratedMessageComponent & any
) => ({
  props: args,
  template: `
		<ui5-illustrated-message name="UnableToUpload">
			<ui5-button design="Emphasized">Action 1</ui5-button>
			<ui5-button>Action 2</ui5-button>
		</ui5-illustrated-message>
	`,
});

export const illustratedMessageWithCustomTitleAndLinkInSubtitle: Story<
  IllustratedMessageComponent
> = (args: IllustratedMessageComponent & any) => ({
  props: args,
  template: `
		<ui5-illustrated-message name="UnableToUpload">
			<ui5-title slot="title" level="H1">Something went wrong</ui5-title>
			<div slot="subtitle">Please try again or contact us at <ui5-link>example@example.com</ui5-link></div>
			<ui5-button icon="refresh">Try again</ui5-button>
		</ui5-illustrated-message>
	`,
});
