import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { MultiComboBoxDirective } from '../directives/multi-combo-box';

export default {
  component: MultiComboBoxDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicMultiComboBox: Story = (args) => ({
  props: args,
  template: `
        <ui5-multi-combobox placeholder="Type your value">
			<ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>
		</ui5-multi-combobox>
		<ui5-multi-combobox readonly="" value="Readonly combo">
			<ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>
		</ui5-multi-combobox>
		<ui5-multi-combobox disabled="" value="Disabled combo">
			<ui5-mcb-item selected="" text="UI5"></ui5-mcb-item>
		</ui5-multi-combobox>
      `,
});

export const multiComboBoxWithItems: Story = (args) => ({
  props: args,
  template: `
        <ui5-multi-combobox style="width: 100%" placeholder="Choose your countries">
			<ui5-mcb-item selected="" text="Argentina"></ui5-mcb-item>
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
});

export const multiComboBoxWithFreeTextInput: Story = (args) => ({
  props: args,
  template: `
        <ui5-multi-combobox style="width: 100%" placeholder="Choose your countries" allow-custom-values="">
			<ui5-mcb-item text="Argentina"></ui5-mcb-item>
			<ui5-mcb-item selected="" text="Bulgaria"></ui5-mcb-item>
			<ui5-mcb-item text="Denmark"></ui5-mcb-item>
			<ui5-mcb-item selected="" text="England"></ui5-mcb-item>
			<ui5-mcb-item text="Albania"></ui5-mcb-item>
			<ui5-mcb-item text="Morocco"></ui5-mcb-item>
			<ui5-mcb-item text="Portugal"></ui5-mcb-item>
			<ui5-mcb-item selected="" text="Germany"></ui5-mcb-item>
			<ui5-mcb-item text="Philippines"></ui5-mcb-item>
			<ui5-mcb-item text="Paraguay"></ui5-mcb-item>
		</ui5-multi-combobox>
      `,
});

export const multiComboBoxWithValueState: Story = (args) => ({
  props: args,
  template: `
        <ui5-multi-combobox value-state="Success">
			<ui5-mcb-item text="Fortune"></ui5-mcb-item>
			<ui5-mcb-item text="Luck"></ui5-mcb-item>
			<ui5-mcb-item selected="" text="Success"></ui5-mcb-item>
		</ui5-multi-combobox>
		
		<ui5-multi-combobox value-state="Warning">
			<ui5-mcb-item text="Attention"></ui5-mcb-item>
			<ui5-mcb-item text="Caution"></ui5-mcb-item>
			<ui5-mcb-item selected="" text="Warning"></ui5-mcb-item>
		</ui5-multi-combobox>
		
		<ui5-multi-combobox value-state="Error">
			<ui5-mcb-item text="Fault"></ui5-mcb-item>
			<ui5-mcb-item selected="" text="Error"></ui5-mcb-item>
			<ui5-mcb-item text="Mistake"></ui5-mcb-item>
		</ui5-multi-combobox>
      `,
});

export const multiComboBoxWithGroupingOfItems: Story = (args) => ({
  props: args,
  template: `
        <ui5-multi-combobox placeholder="Select a country">
			<ui5-mcb-group-item text="Asia"></ui5-mcb-group-item>
			<ui5-mcb-item text="Afghanistan"></ui5-mcb-item>
			<ui5-mcb-item text="China"></ui5-mcb-item>
			<ui5-mcb-item text="India"></ui5-mcb-item>
			<ui5-mcb-item text="Indonesia"></ui5-mcb-item>
			<ui5-mcb-group-item text="Europe"></ui5-mcb-group-item>
			<ui5-mcb-item text="Austria"></ui5-mcb-item>
			<ui5-mcb-item text="Bulgaria"></ui5-mcb-item>
			<ui5-mcb-item text="Germany"></ui5-mcb-item>
			<ui5-mcb-item text="Italy"></ui5-mcb-item>
			<ui5-mcb-group-item text="North America"></ui5-mcb-group-item>
			<ui5-mcb-item text="Canada"></ui5-mcb-item>
			<ui5-mcb-item text="Granada"></ui5-mcb-item>
			<ui5-mcb-item text="Haiti"></ui5-mcb-item>
			<ui5-mcb-item text="United States"></ui5-mcb-item>
		</ui5-multi-combobox>
      `,
});
