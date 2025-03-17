import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { IllustratedMessageComponent } from '@ui5/webcomponents-ngx/fiori/illustrated-message';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { IllustratedMessageComponent } from "@ui5/webcomponents-ngx/fiori/illustrated-message";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / IllustratedMessage',
  component: IllustratedMessageComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule, IllustratedMessageComponent],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('IllustratedMessageComponent' ,IllustratedMessageComponent, description),
      },
    },
  },
} as Meta;

export const IllustratedMessage: StoryObj<IllustratedMessageComponent> = {
  render: (args) => ({
    props: args,
    template: `
      <ui5-illustrated-message name="UnableToUpload">
        <ui5-button design="Emphasized">Action 1</ui5-button>
        <ui5-button>Action 2</ui5-button>
      </ui5-illustrated-message>
    `,
  }),
};

export const IllustratedMessageWithCustomTitleAndSubtitle: StoryObj<IllustratedMessageComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
    <ui5-illustrated-message name="tnt/Success">
        <ui5-title slot="title" level="H1">Great job!</ui5-title>
        <div slot="subtitle">Form more information: <ui5-link href="example.com">example.com</ui5-link></div>
      </ui5-illustrated-message>
    `,
    }),
  };

export const IllustratedMessageInDialog: StoryObj<IllustratedMessageComponent> =
  {
    render: (args) => ({
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
    }),
  };
