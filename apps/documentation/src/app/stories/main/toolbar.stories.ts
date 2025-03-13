import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ToolbarComponent } from '@ui5/webcomponents-ngx/main/toolbar';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { ToolbarComponent } from "@ui5/webcomponents-ngx/main/toolbar";</code>`;
export default {
  title: 'UI5 Web Components / Main / Toolbar',
  component: ToolbarComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('ToolbarComponent', ToolbarComponent, description),
      },
    },
  },
} as Meta;

export const BasicTimePicker: StoryObj<ToolbarComponent> = {
  render: (args: ToolbarComponent & any) => ({
    props: args,
    template: `
  <ui5-toolbar>
    <ui5-toolbar-button
       icon="decline"
       text="Mid 2">
	  </ui5-toolbar-button>

	  <ui5-toolbar-button
  		icon="add"
  		text="Right 1">
	  </ui5-toolbar-button>

	  <ui5-toolbar-button
  		icon="employee"
		  text="Right 4">
	  </ui5-toolbar-button>

	  <ui5-toolbar-button
		  id="myOverflowBtn"
		  icon="employee"
		  text="Call me later">
	  </ui5-toolbar-button>
  </ui5-toolbar>
	`,
  }),
};
