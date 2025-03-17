import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SortItemComponent } from '@ui5/webcomponents-ngx/fiori/sort-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { SortItemComponent } from "@ui5/webcomponents-ngx/fiori/sorting-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / ViewSettingsDialog / SortingItem',
  component: SortItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'SortItemComponent', SortItemComponent, description),
      },
    },
  },
} as Meta;


export const SortingItem: StoryObj<SortItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };