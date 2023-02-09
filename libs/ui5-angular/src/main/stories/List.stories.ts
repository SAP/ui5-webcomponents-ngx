import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { ListDirective } from '../directives/list';

export default {
  component: ListDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicList: Story = (args) => ({
  props: args,
  template: `
        <ui5-list id="myList" class="full-width">
			<ui5-li icon="nutrition-activity" description="Tropical plant with an edible fruit" additional-text="In-stock" additional-text-state="Success">Pineapple</ui5-li>
			<ui5-li icon="nutrition-activity" description="Occurs between red and yellow" additional-text="Expires" additional-text-state="Warning">Orange</ui5-li>
			<ui5-li icon="nutrition-activity" description="The yellow lengthy fruit" additional-text="Re-stock" additional-text-state="Information">Blueberry</ui5-li>
			<ui5-li icon="nutrition-activity" description="The tropical stone fruit" additional-text="Re-stock" additional-text-state="Error">Mango</ui5-li>
		</ui5-list>
      `,
});

export const listWithGrowingScroll: Story = (args) => ({
  props: args,
  template: `
        <ui5-list id="infiniteScrollEx" style="height: 300px" growing="Scroll">
			<ui5-li icon="nutrition-activity" description="Tropical plant with an edible fruit" additional-text="In-stock" additional-text-state="Success">Pineapple</ui5-li>
			<ui5-li icon="nutrition-activity" description="Occurs between red and yellow" additional-text="Expires" additional-text-state="Warning">Orange</ui5-li>
			<ui5-li icon="nutrition-activity" description="The yellow lengthy fruit" additional-text="Re-stock" additional-text-state="Error">Banana</ui5-li>
			<ui5-li icon="nutrition-activity" description="The tropical stone fruit" additional-text="Re-stock" additional-text-state="Error">Mango</ui5-li>
			<ui5-li icon="nutrition-activity" description="An apple is a sweet, edible fruit produced by an apple tree " additional-text="In-stock" additional-text-state="Success">Apple</ui5-li>
			<ui5-li icon="nutrition-activity" description="The peach (Prunus persica) is a deciduous tree native to the region of Northwest China" additional-text="Expires" additional-text-state="Warning">Peach</ui5-li>
			<ui5-li icon="nutrition-activity" description="The pomelo is the largest citrus fruit from the family Rutaceae and the principal ancestor of the grapefruit" additional-text="Re-stock" additional-text-state="Error">Pomelo</ui5-li>
			<ui5-li icon="nutrition-activity" description="The pear (/ˈpɛər/) tree and shrub are a species of genus Pyrus, bearing the pomaceous fruit of the same name." additional-text="Re-stock" additional-text-state="Error">Pear</ui5-li>
		</ui5-list>
      `,
});

export const listInSingleSelectionMode: Story = (args) => ({
  props: args,
  template: `
        <ui5-list id="country-selector" class="full-width" mode="SingleSelect" header-text="Select a country:">
			<ui5-li selected="" icon="map" icon-end="">Argentina</ui5-li>
			<ui5-li icon="map" icon-end="">Bulgaria</ui5-li>
			<ui5-li icon="map" icon-end="">China</ui5-li>
			<ui5-li type="Inactive" icon="map" icon-end="">Denmark (ui5-li type='Inactive')</ui5-li>
		</ui5-list>
      `,
});

export const listInMultiSelectionMode: Story = (args) => ({
  props: args,
  template: `
        <ui5-list id="myList1" class="samples-margin-bottom full-width" mode="MultiSelect" header-text="Multiple selection is possible">
				<ui5-li>Pineapple</ui5-li>
				<ui5-li selected="">Orange</ui5-li>
				<ui5-li>Banana</ui5-li>
				<ui5-li>Mango</ui5-li>
		</ui5-list>
      `,
});

export const busyList: Story = (args) => ({
  props: args,
  template: `
        <ui5-list header-text="Fetching data ..." class="full-width" busy=""></ui5-list>
      `,
});

export const listWithGroupHeaders: Story = (args) => ({
  props: args,
  template: `
        <ui5-list header-text="Community" mode="MultiSelect">
			<ui5-li-groupheader>Front End Developers</ui5-li-groupheader>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_3.png" icon="navigation-right-arrow" icon-end="">Jennifer</ui5-li>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_4.png" icon="navigation-right-arrow" icon-end="">Lora</ui5-li>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_5.png" icon="navigation-right-arrow" icon-end="">Carlotta</ui5-li>

			<ui5-li-groupheader>Back End Developers</ui5-li-groupheader>
			<ui5-li image="../../../assets/images/avatars/man_avatar_1.png" icon="navigation-right-arrow" icon-end="">Clark</ui5-li>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_1.png" icon="navigation-right-arrow" icon-end="">Ellen</ui5-li>
			<ui5-li image="../../../assets/images/avatars/man_avatar_2.png" icon="navigation-right-arrow" icon-end="">Adam</ui5-li>

			<ui5-li-groupheader>FullStack Developers</ui5-li-groupheader>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_2.png" icon="navigation-right-arrow" icon-end="">Susan</ui5-li>
			<ui5-li image="../../../assets/images/avatars/man_avatar_3.png" icon="navigation-right-arrow" icon-end="">David</ui5-li>
			<ui5-li image="../../../assets/images/avatars/woman_avatar_3.png" icon="navigation-right-arrow" icon-end="">Natalie</ui5-li>
		</ui5-list>
      `,
});

export const listItemsUsingImageContentSlot: Story = (args) => ({
  props: args,
  template: `
        <ui5-list class="full-width">
			<ui5-li> Avatar inside imageContent slot
				<div slot="imageContent">
					<ui5-avatar shape="Square" initials="ABC" color-scheme="Accent2"></ui5-avatar>
				</div>
			</ui5-li>
			<ui5-li> Avatar inside imageContent slot
				<div slot="imageContent">
					<ui5-avatar>
						<img src="./img/woman_avatar_5.png" alt="Woman image">
					</ui5-avatar>
				</div>
			</ui5-li>
		</ui5-list>
      `,
});

export const listInDeleteMode: Story = (args) => ({
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
});

export const listWithNoData: Story = (args) => ({
  props: args,
  template: `
        <ui5-list class="full-width" header-text="Products" no-data-text="No Data Available" separators="None"></ui5-list>
      `,
});

export const listItemSeparationTypes: Story = (args) => ({
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
});
