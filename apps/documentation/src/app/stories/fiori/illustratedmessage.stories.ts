import { Meta, moduleMetadata } from '@storybook/angular';
import { IllustratedMessageComponent, Ui5WebcomponentsModule, } from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `
### Overview

An IllustratedMessage is a recommended combination of a solution-oriented message, an engaging illustration, and conversational tone to better communicate an empty or a success state than just show a message alone.

Each illustration has default internationalised title and subtitle texts. Also they can be managed with <code>titleText</code> and <code>subtitleText</code> properties.

To display the desired illustration, use the <code>name</code> property, where you can find the list of all available illustrations. <br><br> <b>Note:</b> By default the “BeforeSearch” illustration is loaded. To use other illustrations, make sure you import them in addition, for example: <br> <code>import "@ui5/webcomponents-fiori/dist/illustrations/NoData.js"</code> <br> <b>Note:</b> Illustrations starting with the “Tnt” prefix are part of another illustration set. For example to use the “TntSuccess” illustration, add the following import:: <br> <code>import "@ui5/webcomponents-fiori/dist/illustrations/tnt/Success.js"</code>

### Structure

The IllustratedMessage consists of the following elements, which are displayed below each other in the following order: <br> <ul> <li>Illustration</li> <li>Title</li> <li>Subtitle</li> <li>Actions</li> </ul>

### Usage

<code>ui5-illustrated-message</code> is meant to be used inside container component, for example a <code>ui5-card</code>, a <code>ui5-dialog</code> or a <code>ui5-page</code>

### ES6 Module Import

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

export const illustratedMessage = (
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


export const illustratedMessageWithCustomTitleAndSubtitle = (
  args: IllustratedMessageComponent & any
) => ({
  props: args,
  template: `
	<ui5-illustrated-message name="tnt/Success">
			<ui5-title slot="title" level="H1">Great job!</ui5-title>
			<div slot="subtitle">Form more information: <ui5-link href="example.com">example.com</ui5-link></div>
		</ui5-illustrated-message>
	`,
});


export const illustratedMessageInDialog = (
  args: IllustratedMessageComponent & any
) => ({
  props: args,
  template: `
	<ui5-button (click)="dialog.open=true">Open Dialog</ui5-button>
    <ui5-dialog #dialog="ui5Dialog" header-text="Error">
        <ui5-illustrated-message name="UnableToLoad"></ui5-illustrated-message>
        <ui5-bar design="Footer" slot="footer">
            <ui5-button (click)="dialog.open=false" design="Emphasized" slot="endContent">Close</ui5-button>
        </ui5-bar>
    </ui5-dialog>
	`,
});
