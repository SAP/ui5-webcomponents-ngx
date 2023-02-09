import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { SelectDirective } from '../directives/select';

export default {
  component: SelectDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicSelect: Story = (args) => ({
  props: args,
  template: `
        <ui5-select class="select">
			<ui5-option icon="iphone">Phone</ui5-option>
			<ui5-option icon="ipad">Tablet</ui5-option>
			<ui5-option icon="laptop" selected="">Desktop</ui5-option>
		</ui5-select>
		<ui5-select disabled="" class="select">
				<ui5-option icon="iphone" selected="">Phone</ui5-option>
				<ui5-option icon="ipad">Tablet</ui5-option>
				<ui5-option icon="laptop">Desktop</ui5-option>
		</ui5-select>
      `,
});

export const selectWithValueStateAndValueStateMessage: Story = (args) => ({
  props: args,
  template: `
        <ui5-select value-state="Success" class="select">
				<ui5-option icon="meal" selected="">Apple</ui5-option>
				<ui5-option icon="meal">Avocado</ui5-option>
				<ui5-option icon="meal">Mango</ui5-option>
		</ui5-select>
		<ui5-select value-state="Warning" class="select">
				<ui5-option icon="meal">Orange</ui5-option>
				<ui5-option icon="meal" selected="">Pumpkin</ui5-option>
				<ui5-option icon="meal">Carrot</ui5-option>
				<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
				<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
		</ui5-select>
		<ui5-select value-state="Error" class="select">
				<ui5-option icon="meal">Strawberry</ui5-option>
				<ui5-option icon="meal">Tomato</ui5-option>
				<ui5-option icon="meal" selected="">Red Chili Pepper</ui5-option>
				<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
				<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
		</ui5-select>
		<ui5-select value-state="Information" class="select">
			<ui5-option icon="meal">Blueberry</ui5-option>
			<ui5-option icon="meal">Grape</ui5-option>
			<ui5-option icon="meal" selected="">Plum</ui5-option>
			<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
			<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
		</ui5-select>
      `,
});

export const selectWithTwoColumnLayoutItems: Story = (args) => ({
  props: args,
  template: `
        <ui5-select class="select">
			<ui5-option additional-text="AT">Austria</ui5-option>
			<ui5-option additional-text="BE">Belgium</ui5-option>
			<ui5-option additional-text="BR">Brazil</ui5-option>
			<ui5-option additional-text="BG">Bulgaria</ui5-option>
			<ui5-option additional-text="CA">Canada</ui5-option>
		</ui5-select>
      `,
});
