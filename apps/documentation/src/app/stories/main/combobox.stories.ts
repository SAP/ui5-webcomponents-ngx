import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ComboBoxComponent } from '@ui5/webcomponents-ngx/main/combo-box';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { ComboBoxComponent } from "@ui5/webcomponents-ngx/main/combo-box";</code>`;
export default {
  title: 'UI5 Web Components / Main / ComboBox',
  component: ComboBoxComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('ComboBoxComponent', ComboBoxComponent, description)
      },
    },
  },
} as Meta;

export const BasicExample: StoryObj<ComboBoxComponent> = {
  render: (args: ComboBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-combobox placeholder="Enter value">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value-state="Positive" value="Item 1">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value-state="Critical" value="Item 2">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value-state="Negative" value="Item 3">
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>
	`,
  }),
};

export const DisabledAndReadonlyProperties: StoryObj<ComboBoxComponent> = {
  render: (args: ComboBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-combobox value="Disabled" disabled>
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>

		<ui5-combobox value="Readonly" readonly>
			<ui5-cb-item text="Item 1"></ui5-cb-item>
			<ui5-cb-item text="Item 2"></ui5-cb-item>
			<ui5-cb-item text="Item 3"></ui5-cb-item>
		</ui5-combobox>
	`,
  }),
};

export const FiltersStartsWithPerTermDefaultStartsWithContains: StoryObj<ComboBoxComponent> =
  {
    render: (args: ComboBoxComponent & any) => ({
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
    }),
  };

export const ComboBoxWithTwoColumnLayoutItems: StoryObj<ComboBoxComponent> = {
  render: (args: ComboBoxComponent & any) => ({
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
  }),
};

export const ComboBoxWithGroupingOfItems: StoryObj<ComboBoxComponent> = {
  render: (args: ComboBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-combobox placeholder="Grouping of items">
			<ui5-cb-item-group header-text="A">
				<ui5-cb-item text="Argentina"></ui5-cb-item>
				<ui5-cb-item text="Australia"></ui5-cb-item>
				<ui5-cb-item text="Austria"></ui5-cb-item>
			</ui5-cb-item-group>

			<ui5-cb-item-group header-text="B">
				<ui5-cb-item text="Bahrain"></ui5-cb-item>
				<ui5-cb-item text="Belgium"></ui5-cb-item>
				<ui5-cb-item text="Brazil"></ui5-cb-item>
			</ui5-cb-item-group>

			<ui5-cb-item-group header-text="C">
				<ui5-cb-item text="Canada"></ui5-cb-item>
				<ui5-cb-item text="Chile"></ui5-cb-item>
			</ui5-cb-item-group>
	  </ui5-combobox>
	`,
  }),
};
