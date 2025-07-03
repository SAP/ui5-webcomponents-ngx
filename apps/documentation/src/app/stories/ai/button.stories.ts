import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { ButtonComponent } from '@ui5/webcomponents-ngx/ai/button';
import { ButtonStateComponent } from '@ui5/webcomponents-ngx/ai/button-state';
import { MenuComponent } from '@ui5/webcomponents-ngx/main/menu';
import { MenuItemComponent } from '@ui5/webcomponents-ngx/main/menu-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';
import { AiButtonComponent } from './ai-button.component';

const additionalDescription = `

<h3>Module Import</h3>

<code>import { ButtonComponent } from "@ui5/webcomponents-ngx/ai/button";</code>`

export default {
  title: 'UI5 Web Components / AI / Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ButtonComponent, 
        ButtonStateComponent,
        MenuComponent,
        MenuItemComponent,
        AiButtonComponent],
    }),
  ],
  parameters: {
    docs: {
		extractArgTypes,
      description: {
        component: extractDescription('ButtonComponent', ButtonComponent, additionalDescription ),
      },
    },
  },
} as Meta;

export const DefaultButton: StoryObj<AiButtonComponent> = {
  render: (args) => ({
    props: args,
    template: `<ui-angular-ai-button></ui-angular-ai-button>`
  }),
};

