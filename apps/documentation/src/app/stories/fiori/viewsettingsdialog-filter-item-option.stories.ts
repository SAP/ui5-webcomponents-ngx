import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { FilterItemOptionComponent } from '@ui5/webcomponents-ngx/fiori/filter-item-option';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

###Module Import

<code>import { FilterItemOptionComponent } from "@ui5/webcomponents-ngx/fiori/filter-item-option";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / ViewSettingsDialog / FilterItemOption',
  component: FilterItemOptionComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'FilterItemOptionComponent', FilterItemOptionComponent, description),
      },
    },
  },
} as Meta;


export const FilterItemOption: StoryObj<FilterItemOptionComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };