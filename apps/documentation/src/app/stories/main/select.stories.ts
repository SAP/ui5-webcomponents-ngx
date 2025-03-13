import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { SelectComponent } from '@ui5/webcomponents-ngx/main/select';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import 

<code>import { SelectComponent } from "@ui5/webcomponents-ngx/main/select";</code>`;
export default {
  title: 'UI5 Web Components / Main / Select',
  component: SelectComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('SelectComponent', SelectComponent, description),
      },
    },
  },
} as Meta;

export const BasicSelect: StoryObj<SelectComponent> = {
  render: (args: SelectComponent & any) => ({
    props: args,
    template: `
		<ui5-select>
			<ui5-option icon="iphone">Phone</ui5-option>
			<ui5-option icon="ipad">Tablet</ui5-option>
			<ui5-option icon="laptop" selected>Desktop</ui5-option>
		</ui5-select>
	`,
  }),
};

export const SelectWithValueStateAndValueStateMessage: StoryObj<SelectComponent> =
  {
    render: (args: SelectComponent & any) => ({
      props: args,
      template: `
		<ui5-select value-state="Positive">
				<ui5-option icon="meal" selected>Apple</ui5-option>
				<ui5-option icon="meal">Avocado</ui5-option>
				<ui5-option icon="meal">Mango</ui5-option>
		</ui5-select>
		<ui5-select value-state="Critical">
				<ui5-option icon="meal">Orange</ui5-option>
				<ui5-option icon="meal" selected>Pumpkin</ui5-option>
				<ui5-option icon="meal">Carrot</ui5-option>
				<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
				<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
		</ui5-select>
		<ui5-select value-state="Negative">
				<ui5-option icon="meal">Strawberry</ui5-option>
				<ui5-option icon="meal">Tomato</ui5-option>
				<ui5-option icon="meal" selected>Red Chili Pepper</ui5-option>
				<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
				<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
		</ui5-select>
		<ui5-select value-state="Information">
			<ui5-option icon="meal">Blueberry</ui5-option>
			<ui5-option icon="meal">Grape</ui5-option>
			<ui5-option icon="meal" selected>Plum</ui5-option>
			<div slot="valueStateMessage">Information message. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
			<div slot="valueStateMessage">Information message 2. This is a <a href="#">Link</a>. Extra long text used as an information message. Extra long text used as an information message - 2. Extra long text used as an information message - 3.</div>
		</ui5-select>
	`,
    }),
  };

export const SelectWithTwoColumnLayoutItems: StoryObj<SelectComponent> = {
  render: (args: SelectComponent & any) => ({
    props: args,
    template: `
		<ui5-select>
			<ui5-option additional-text="AT">Austria</ui5-option>
			<ui5-option additional-text="BE">Belgium</ui5-option>
			<ui5-option additional-text="BR">Brazil</ui5-option>
			<ui5-option additional-text="BG">Bulgaria</ui5-option>
			<ui5-option additional-text="CA">Canada</ui5-option>
		</ui5-select>
	`,
  }),
};

export const SelectWithCustomOptions: StoryObj<SelectComponent> = {
  render: (args: SelectComponent & any) => ({
    props: args,
    template: `
		<style>
			.optContainer {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 1rem;
			}
		</style>

		  <ui5-select>
				<ui5-option-custom display-text="T-shirt, $35">
					<div class="optContainer">
						T-shirt
						<ui5-text>cotton</ui5-text>
						<ui5-text>$35</ui5-text>
					</div>
				</ui5-option-custom>

				<ui5-option-custom display-text="Jacket, $55">
					<div class="optContainer">
						Jacket
						<ui5-text>outwear</ui5-text>
						<ui5-text>$55</ui5-text>
					</div>
				</ui5-option-custom>

				<ui5-option-custom display-text="Dress, $10">
					<div class="optContainer">
						Dress
						<ui5-text>casual</ui5-text>
						<ui5-text>$55</ui5-text>
					</div>
				</ui5-option-custom>
		  </ui5-select>


		  <ui5-select>
			<ui5-option-custom display-text="T-shirt">
				<div class="optContainer">
					T-shirt
					<div>
						<ui5-icon name="accept"></ui5-icon>
						<ui5-icon name="product"></ui5-icon>
					</div>
				</div>
			</ui5-option-custom>

			<ui5-option-custom display-text="Jacket">
				<div class="optContainer">
					Jacket
					<div>
						<ui5-icon name="accept"></ui5-icon>
						<ui5-icon name="product"></ui5-icon>
					</div>
				</div>
			</ui5-option-custom>

			<ui5-option-custom display-text="Dress">
				<div class="optContainer">
					Dress
					<div>
						<ui5-icon name="accept"></ui5-icon>
						<ui5-icon name="product"></ui5-icon>
					</div>
				</div>
			</ui5-option-custom>
		</ui5-select>
	  `,
  }),
};
