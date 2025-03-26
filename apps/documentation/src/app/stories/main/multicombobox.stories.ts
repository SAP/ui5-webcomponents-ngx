import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { MultiComboBoxComponent } from '@ui5/webcomponents-ngx/main/multi-combo-box';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { MultiComboBoxComponent } from "@ui5/webcomponents-ngx/main/multi-combo-box";</code>`;
export default {
  title: 'UI5 Web Components / Main / MultiComboBox',
  component: MultiComboBoxComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription(
          'MultiComboBoxComponent',
          MultiComboBoxComponent,
          description,
        ),
      },
    },
  },
} as Meta;

export const BasicMultiComboBox: StoryObj<MultiComboBoxComponent> = {
  render: (args: MultiComboBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-multi-combobox placeholder="Type your value">
			<ui5-mcb-item selected text="UI5"></ui5-mcb-item>
		</ui5-multi-combobox>
		<ui5-multi-combobox readonly value="Readonly combo">
			<ui5-mcb-item selected text="UI5"></ui5-mcb-item>
		</ui5-multi-combobox>
		<ui5-multi-combobox disabled value="Disabled combo">
			<ui5-mcb-item selected text="UI5"></ui5-mcb-item>
		</ui5-multi-combobox>
	`,
  }),
};

export const MultiComboBoxWithItems: StoryObj<MultiComboBoxComponent> = {
  render: (args: MultiComboBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-multi-combobox style="width: 100%" placeholder="Choose your countries">
			<ui5-mcb-item selected text="Argentina"></ui5-mcb-item>
			<ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
			<ui5-mcb-item text="Denmark"></ui5-mcb-item>
			<ui5-mcb-item text="England"></ui5-mcb-item>
			<ui5-mcb-item text="Albania"></ui5-mcb-item>
			<ui5-mcb-item text="Morocco"></ui5-mcb-item>
			<ui5-mcb-item text="Portugal"></ui5-mcb-item>
			<ui5-mcb-item text="Germany"></ui5-mcb-item>
			<ui5-mcb-item text="Philippines"></ui5-mcb-item>
			<ui5-mcb-item text="Paraguay"></ui5-mcb-item>
		</ui5-multi-combobox>
	`,
  }),
};

export const MultiComboBoxWithSelectAllItemsButton: StoryObj<MultiComboBoxComponent> =
  {
    render: (args: MultiComboBoxComponent & any) => ({
      props: args,
      template: `
		<ui5-multi-combobox placeholder="Type your value" show-select-all>
			<ui5-mcb-item text="Albania"></ui5-mcb-item>
			<ui5-mcb-item selected text="Argentina"></ui5-mcb-item>
			<ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
			<ui5-mcb-item text="Denmark"></ui5-mcb-item>
			<ui5-mcb-item text="England"></ui5-mcb-item>
			<ui5-mcb-item text="Germany"></ui5-mcb-item>
			<ui5-mcb-item text="Philippines"></ui5-mcb-item>
			<ui5-mcb-item text="Portugal"></ui5-mcb-item>
			<ui5-mcb-item text="The United Kingdom of Great Britain and Northern Ireland"></ui5-mcb-item>
		</ui5-multi-combobox>
	  `,
    }),
  };

export const MultiComboBoxWithFreeTextInput: StoryObj<MultiComboBoxComponent> =
  {
    render: (args: MultiComboBoxComponent & any) => ({
      props: args,
      template: `
		<ui5-multi-combobox style="width: 100%" placeholder="Choose your countries" allow-custom-values>
			<ui5-mcb-item text="Argentina"></ui5-mcb-item>
			<ui5-mcb-item selected text="Bulgaria"></ui5-mcb-item>
			<ui5-mcb-item text="Denmark"></ui5-mcb-item>
			<ui5-mcb-item selected text="England"></ui5-mcb-item>
			<ui5-mcb-item text="Albania"></ui5-mcb-item>
			<ui5-mcb-item text="Morocco"></ui5-mcb-item>
			<ui5-mcb-item text="Portugal"></ui5-mcb-item>
			<ui5-mcb-item selected text="Germany"></ui5-mcb-item>
			<ui5-mcb-item text="Philippines"></ui5-mcb-item>
			<ui5-mcb-item text="Paraguay"></ui5-mcb-item>
		</ui5-multi-combobox>
	`,
    }),
  };

export const MultiComboBoxWithValueState: StoryObj<MultiComboBoxComponent> = {
  render: (args: MultiComboBoxComponent & any) => ({
    props: args,
    template: `
		<ui5-multi-combobox value-state="Positive">
			<ui5-mcb-item text="Fortune"></ui5-mcb-item>
			<ui5-mcb-item text="Luck"></ui5-mcb-item>
			<ui5-mcb-item selected text="Positive"></ui5-mcb-item>
		</ui5-multi-combobox>
		
		<ui5-multi-combobox value-state="Critical">
			<ui5-mcb-item text="Attention"></ui5-mcb-item>
			<ui5-mcb-item text="Caution"></ui5-mcb-item>
			<ui5-mcb-item selected text="Critical"></ui5-mcb-item>
		</ui5-multi-combobox>
		
		<ui5-multi-combobox value-state="Negative">
			<ui5-mcb-item text="Fault"></ui5-mcb-item>
			<ui5-mcb-item selected text="Negative"></ui5-mcb-item>
			<ui5-mcb-item text="Mistake"></ui5-mcb-item>
		</ui5-multi-combobox>
	`,
  }),
};

export const MultiComboBoxWithGroupingOfItems: StoryObj<MultiComboBoxComponent> =
  {
    render: (args: MultiComboBoxComponent & any) => ({
      props: args,
      template: `
		<ui5-multi-combobox placeholder="Select a country">
			<ui5-mcb-item-group header-text="Asia">
				<ui5-mcb-item text="Afghanistan"></ui5-mcb-item>
				<ui5-mcb-item text="China"></ui5-mcb-item>
				<ui5-mcb-item text="India"></ui5-mcb-item>
				<ui5-mcb-item text="Indonesia"></ui5-mcb-item>
			</ui5-mcb-item-group>

			<ui5-mcb-item-group header-text="Europe">
				<ui5-mcb-item text="Austria"></ui5-mcb-item>
				<ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
				<ui5-mcb-item text="Germany"></ui5-mcb-item>
				<ui5-mcb-item text="Italy"></ui5-mcb-item>
			</ui5-mcb-item-group>

			<ui5-mcb-item-group header-text="North America">
				<ui5-mcb-item text="Canada"></ui5-mcb-item>
				<ui5-mcb-item text="Granada"></ui5-mcb-item>
				<ui5-mcb-item text="Haiti"></ui5-mcb-item>
				<ui5-mcb-item text="United States"></ui5-mcb-item>
			</ui5-mcb-item-group>
		</ui5-multi-combobox>
	`,
    }),
  };
