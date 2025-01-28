import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  ToolbarComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `The <code>ui5-toolbar</code> component is used to create a horizontal layout with items. The items can be overflowing in a popover, when the space is not enough to show all of them.

<h3>Keyboard Handling</h3> The <code>ui5-toolbar</code> provides advanced keyboard handling.
<br>
<ul>
<li>The control is not interactive, but can contain of interactive elements </li>
<li>[TAB] - iterates through elements</li>
</ul>

<h3>ES6 Module Import</h3>

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
        component: description,
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
