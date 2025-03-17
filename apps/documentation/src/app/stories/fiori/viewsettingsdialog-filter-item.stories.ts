import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { FilterItemComponent } from '@ui5/webcomponents-ngx/fiori/filter-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { FilterItemComponent } from "@ui5/webcomponents-ngx/fiori/filter-item";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / ViewSettingsDialog / FilterItem',
  component: FilterItemComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'FilterItemComponent', FilterItemComponent, description),
      },
    },
  },
} as Meta;


export const FilterItem: StoryObj<FilterItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };