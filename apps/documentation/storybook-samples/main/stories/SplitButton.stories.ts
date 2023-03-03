import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { SplitButtonDirective } from '../directives/split-button';

export default {
  component: SplitButtonDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const defaultSplitButton: Story = (args) => ({
  props: args,
  template: `
        <ui5-split-button class="samples-margin">Default</ui5-split-button>
		<ui5-split-button disabled="" class="samples-margin">Default</ui5-split-button>
      `,
});

export const splitButtonWithDesign: Story = (args) => ({
  props: args,
  template: `
        <ui5-split-button design="Default" class="samples-margin">Default</ui5-split-button>
		<ui5-split-button design="Emphasized" class="samples-margin">Emphasized</ui5-split-button>
		<ui5-split-button design="Positive" class="samples-margin">Positive</ui5-split-button>
		<ui5-split-button design="Negative" class="samples-margin">Negative</ui5-split-button>
		<ui5-split-button design="Attention" class="samples-margin">Attention</ui5-split-button>
		<ui5-split-button design="Transparent" class="samples-margin">Transparent</ui5-split-button>
      `,
});

export const splitButtonWithIcons: Story = (args) => ({
  props: args,
  template: `
        <ui5-split-button icon="add" class="samples-margin">Icon</ui5-split-button>
		<ui5-split-button icon="add" active-icon="accept" class="samples-margin">Icon + Active Icon</ui5-split-button>
      `,
});
