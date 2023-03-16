import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule, ListComponent } from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3>

The <code>ui5-list</code> component allows displaying a list of items, advanced keyboard handling support for navigating between items, and predefined modes to improve the development efficiency. <br><br> The <code>ui5-list</code> is a container for the available list items: <ul> <li><code>ui5-li</code></li> <li><code>ui5-li-custom</code></li> <li><code>ui5-li-groupheader</code></li> </ul> <br><br> To benefit from the built-in selection mechanism, you can use the available selection modes, such as <code>SingleSelect</code>, <code>MultiSelect</code> and <code>Delete</code>. <br><br> Additionally, the <code>ui5-list</code> provides header, footer, and customization for the list item separators.

<br><br> <h3>Keyboard Handling</h3>

<h4>Basic Navigation</h4> The <code>ui5-list</code> provides advanced keyboard handling. When a list is focused the user can use the following keyboard shortcuts in order to perform a navigation: <br>

<ul> <li>[UP/DOWN] - Navigates up and down the items</li> <li>[HOME] - Navigates to first item</li> <li>[END] - Navigates to the last item</li> </ul>

The user can use the following keyboard shortcuts to perform actions (such as select, delete), when the <code>mode</code> property is in use: <ul> <li>[SPACE] - Select an item (if <code>type</code> is 'Active') when <code>mode</code> is selection</li> <li>[DELETE] - Delete an item if <code>mode</code> property is <code>Delete</code></li> </ul>

<h4>Fast Navigation</h4> This component provides a build in fast navigation group which can be used via <code>F6 / Shift + F6</code> or <code> Ctrl + Alt(Option) + Down / Ctrl + Alt(Option) + Up</code>. In order to use this functionality, you need to import the following module: <code>import "@ui5/webcomponents-base/dist/features/F6Navigation.js"</code> <br><br>

<h3>ES6 Module Import</h3>

<code>import { ListComponent } from "@ui5/webcomponents-ngx/main/list";</code> (for <code>ui5-li-groupheader</code>)`;
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
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const ApplyChanges: Story<ListComponent> = (
  args: ListComponent & any
) => ({
  props: args,
  template: `
          <ui5-list>
            ${args.content}
<slot slot="header">${args.header}</slot>
          </ui5-list>
        `,
});

export const basicList: Story<ListComponent> = (args: ListComponent & any) => ({
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

export const listWithGrowingScroll: Story<ListComponent> = (
  args: ListComponent & any
) => ({
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

export const listInMultiSelectionMode: Story<ListComponent> = (
  args: ListComponent & any
) => ({
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

export const busyList: Story<ListComponent> = (args: ListComponent & any) => ({
  props: args,
  template: `
		<ui5-list header-text="Fetching data ..." class="full-width" busy=""></ui5-list>
	`,
});

export const listWithGroupHeaders: Story<ListComponent> = (
  args: ListComponent & any
) => ({
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

export const listItemsUsingImageContentSlot: Story<ListComponent> = (
  args: ListComponent & any
) => ({
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

export const listInDeleteMode: Story<ListComponent> = (
  args: ListComponent & any
) => ({
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

export const listWithNoData: Story<ListComponent> = (
  args: ListComponent & any
) => ({
  props: args,
  template: `
		<ui5-list class="full-width" header-text="Products" no-data-text="No Data Available" separators="None"></ui5-list>
	`,
});

export const listItemSeparationTypes: Story<ListComponent> = (
  args: ListComponent & any
) => ({
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
