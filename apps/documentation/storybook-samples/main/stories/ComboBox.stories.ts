import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { ComboBoxDirective } from '../directives/combo-box';

export default {
  component: ComboBoxDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicExample: Story = (args) => ({
  props: args,
  template: `
        <ui5-combobox placeholder="Enter value">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value-state="Success" value="Item 1">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value-state="Warning" value="Item 2">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value-state="Error" value="Item 3">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>
      `,
});

export const disabledAndReadonlyProperties: Story = (args) => ({
  props: args,
  template: `
        <ui5-combobox value="Disabled" disabled="">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value="Readonly" readonly="">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>
      `,
});

export const filtersStartsWithPerTermDefaultStartsWithContains: Story = (
  args
) => ({
  props: args,
  template: `
        <ui5-combobox placeholder="Starts With Per Term filter (default)">
				<ui5-cb-item text="Austria"></ui5-cb-item>
				<ui5-cb-item text="Bulgaria"></ui5-cb-item>
				<ui5-cb-item text="Germany"></ui5-cb-item>
				<ui5-cb-item text="United Kingdom"></ui5-cb-item>
				<ui5-cb-item text="Kazakhstan"></ui5-cb-item>
			</ui5-combobox>

			<ui5-combobox placeholder="StartsWith" filter="StartsWith">
				<ui5-cb-item text="Austria"></ui5-cb-item>
				<ui5-cb-item text="Bulgaria"></ui5-cb-item>
				<ui5-cb-item text="Germany"></ui5-cb-item>
				<ui5-cb-item text="United Kingdom"></ui5-cb-item>
				<ui5-cb-item text="Kazakhstan"></ui5-cb-item>
			</ui5-combobox>

			<ui5-combobox placeholder="Contains" filter="Contains">
				<ui5-cb-item text="Austria"></ui5-cb-item>
				<ui5-cb-item text="Bulgaria"></ui5-cb-item>
				<ui5-cb-item text="Germany"></ui5-cb-item>
				<ui5-cb-item text="United Kingdom"></ui5-cb-item>
				<ui5-cb-item text="Kazakhstan"></ui5-cb-item>
			</ui5-combobox>
      `,
});

export const comboBoxWithTwoColumnLayoutItems: Story = (args) => ({
  props: args,
  template: `
        <ui5-combobox placeholder="Two-column Layout">
			<ui5-cb-item text="Austria" additional-text="AT"></ui5-cb-item>
			<ui5-cb-item text="Belgium" additional-text="BE"></ui5-cb-item>
			<ui5-cb-item text="Brazil" additional-text="BR"></ui5-cb-item>
			<ui5-cb-item text="Bulgaria" additional-text="BG"></ui5-cb-item>
			<ui5-cb-item text="Canada" additional-text="CA"></ui5-cb-item>
		</ui5-combobox>
      `,
});

export const comboBoxWithGroupingOfItems: Story = (args) => ({
  props: args,
  template: `
        <ui5-combobox placeholder="ComboBox with grouping of suggestions">
			<ui5-cb-group-item text="A"></ui5-cb-group-item>
			<ui5-cb-item text="Argentina"></ui5-cb-item>
			<ui5-cb-item text="Australia"></ui5-cb-item>
			<ui5-cb-item text="Austria"></ui5-cb-item>	
			<ui5-cb-group-item text="B"></ui5-cb-group-item>
			<ui5-cb-item text="Bahrain"></ui5-cb-item>
			<ui5-cb-item text="Belgium"></ui5-cb-item>
			<ui5-cb-item text="Brazil"></ui5-cb-item>
			<ui5-cb-group-item text="C"></ui5-cb-group-item>
			<ui5-cb-item text="Canada"></ui5-cb-item>
			<ui5-cb-item text="Chile"></ui5-cb-item>
		</ui5-combobox>
      `,
});
