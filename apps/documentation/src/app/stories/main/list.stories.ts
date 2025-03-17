import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { ListComponent } from '@ui5/webcomponents-ngx/main/list';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

- import { ListComponent } from "@ui5/webcomponents-ngx/main/list"
`;

export default {
  title: 'UI5 Web Components / Main / List',
  component: ListComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('ListComponent', ListComponent, description),
      },
    },
  },
} as Meta;

export const BasicList: StoryObj<ListComponent> = {
  render: (args: ListComponent & any) => ({
    props: args,
    template: `
		<ui5-list id="myList" class="full-width">
			<ui5-li icon="nutrition-activity" description="Tropical plant with an edible fruit" additional-text="In-stock" additional-text-state="Success">Pineapple</ui5-li>
			<ui5-li icon="nutrition-activity" description="Occurs between red and yellow" additional-text="Expires" additional-text-state="Critical">Orange</ui5-li>
			<ui5-li icon="nutrition-activity" description="The yellow lengthy fruit" additional-text="Re-stock" additional-text-state="Information">Blueberry</ui5-li>
			<ui5-li icon="nutrition-activity" description="The tropical stone fruit" additional-text="Re-stock" additional-text-state="Error">Mango</ui5-li>
		</ui5-list>
	`,
  }),
};

export const ListWithGrowingScroll: StoryObj<ListComponent> = {
  render: (args: ListComponent & any) => ({
    props: args,
    template: `
		<ui5-list id="infiniteScrollEx" style="height: 300px" growing="Scroll">
			<ui5-li icon="nutrition-activity" description="Tropical plant with an edible fruit" additional-text="In-stock" additional-text-state="Success">Pineapple</ui5-li>
			<ui5-li icon="nutrition-activity" description="Occurs between red and yellow" additional-text="Expires" additional-text-state="Critical">Orange</ui5-li>
			<ui5-li icon="nutrition-activity" description="The yellow lengthy fruit" additional-text="Re-stock" additional-text-state="Error">Banana</ui5-li>
			<ui5-li icon="nutrition-activity" description="The tropical stone fruit" additional-text="Re-stock" additional-text-state="Error">Mango</ui5-li>
			<ui5-li icon="nutrition-activity" description="An apple is a sweet, edible fruit produced by an apple tree " additional-text="In-stock" additional-text-state="Success">Apple</ui5-li>
			<ui5-li icon="nutrition-activity" description="The peach (Prunus persica) is a deciduous tree native to the region of Northwest China" additional-text="Expires" additional-text-state="Critical">Peach</ui5-li>
			<ui5-li icon="nutrition-activity" description="The pomelo is the largest citrus fruit from the family Rutaceae and the principal ancestor of the grapefruit" additional-text="Re-stock" additional-text-state="Error">Pomelo</ui5-li>
			<ui5-li icon="nutrition-activity" description="The pear (/ˈpɛər/) tree and shrub are a species of genus Pyrus, bearing the pomaceous fruit of the same name." additional-text="Re-stock" additional-text-state="Error">Pear</ui5-li>
		</ui5-list>
	`,
  }),
};

export const ListInMultiSelectionMode: StoryObj<ListComponent> = {
  render: (args: ListComponent & any) => ({
    props: args,
    template: `
		<ui5-list id="myList1" class="samples-margin-bottom full-width" mode="MultiSelect" header-text="Multiple selection is possible">
				<ui5-li>Pineapple</ui5-li>
				<ui5-li selected>Orange</ui5-li>
				<ui5-li>Banana</ui5-li>
				<ui5-li>Mango</ui5-li>
		</ui5-list>
	`,
  }),
};

export const BusyList: StoryObj<ListComponent> = {
  render: (args: ListComponent & any) => ({
    props: args,
    template: `
		<ui5-list header-text="Fetching data ..." class="full-width" loading></ui5-list>
	`,
  }),
};

export const ListWithGroupHeaders: StoryObj<ListComponent> = {
  render: (args: ListComponent & any) => ({
    props: args,
    template: `
		<ui5-list header-text="Community" mode="MultiSelect">
			<ui5-li-group header-text="Front End Developers">
				<ui5-li icon="navigation-right-arrow" icon-end>
					Jennifer
					<img slot="image" src="../../../assets/images/avatars/woman_avatar_3.png" />
				</ui5-li>

				<ui5-li icon="navigation-right-arrow" icon-end>
					Lora
					<img slot="image" src="../../../assets/images/avatars/woman_avatar_4.png" />
				</ui5-li>

				<ui5-li icon="navigation-right-arrow" icon-end>
					Carlotta
					<img slot="image" src="../../../assets/images/avatars/woman_avatar_5.png" />
				</ui5-li>
			</ui5-li-group>

			<ui5-li-group header-text="Back End Developers">
				<ui5-li icon="navigation-right-arrow" icon-end>
					Clark
					<img slot="image" src="../../../assets/images/avatars/man_avatar_1.png" />
				</ui5-li>

				<ui5-li icon="navigation-right-arrow" icon-end>
					Ellen
					<img slot="image" src="../../../assets/images/avatars/woman_avatar_1.png" />
				</ui5-li>

				<ui5-li icon="navigation-right-arrow" icon-end>
					Adam
					<img slot="image" src="../../../assets/images/avatars/man_avatar_2.png" />
				</ui5-li>
			</ui5-li-group>

			<ui5-li-group header-text="Full-stack Developers">
				<ui5-li icon="navigation-right-arrow" icon-end>
					Susan
					<img slot="image" src="../../../assets/images/avatars/woman_avatar_2.png" />
				</ui5-li>

				<ui5-li icon="navigation-right-arrow" icon-end>
					David
					<img slot="image" src="../../../assets/images/avatars/man_avatar_3.png" />
				</ui5-li>

				<ui5-li icon="navigation-right-arrow" icon-end>
					Natalie
					<img slot="image" src="../../../assets/images/avatars/woman_avatar_3.png" />
				</ui5-li>
			</ui5-li-group>
		</ui5-list>
	`,
  }),
};

export const ListItemsUsingImageSlot: StoryObj<ListComponent> = {
  render: (args: ListComponent & any) => ({
    props: args,
    template: `
		<ui5-list class="full-width">
			<ui5-li> ui5-avatar element inside the "image" slot
					<ui5-avatar slot="image" shape="Square" initials="ABC" color-scheme="Accent2"></ui5-avatar>
			</ui5-li>
			<ui5-li>  native img element inside the "image" slot
					<img slot="image" src="../../../assets/images/avatars/woman_avatar_3.png" />
			</ui5-li>
		</ui5-list>
	`,
  }),
};

export const ListInDeleteMode: StoryObj<ListComponent> = {
  render: (args: ListComponent & any) => ({
    props: args,
    template: `
		<ui5-list id="myList5" class="full-width" mode="Delete" header-text="Note: The list items removal is up to application developers">
			<ui5-li>Argentina</ui5-li>
			<ui5-li>Bulgaria</ui5-li>
			<ui5-li>China</ui5-li>
			<ui5-li>Denmark
				<div slot="deleteButton">
					<ui5-button>Custom Delete Button</ui5-button>
				</div>
			</ui5-li>
		</ui5-list>
	`,
  }),
};

export const ListWithNoData: StoryObj<ListComponent> = {
  render: (args: ListComponent & any) => ({
    props: args,
    template: `
		<ui5-list class="full-width" header-text="Products" no-data-text="No Data Available" separators="None"></ui5-list>
	`,
  }),
};

export const ListItemSeparationTypes: StoryObj<ListComponent> = {
  render: (args: ListComponent & any) => ({
    props: args,
    template: `
		<ui5-list header-text="No separators" separators="None" class="full-width">
			<ui5-li icon="product">Item #1</ui5-li>
			<ui5-li icon="product">Item #2</ui5-li>
			<ui5-li icon="product">Item #3</ui5-li>
		</ui5-list>
		<ui5-list header-text="Inner separators" separators="Inner" class="full-width">
			<ui5-li icon="shipping-status">Devilered</ui5-li>
			<ui5-li icon="shipping-status">Pending</ui5-li>
			<ui5-li icon="shipping-status">Declined</ui5-li>
		</ui5-list>
	`,
  }),
};
