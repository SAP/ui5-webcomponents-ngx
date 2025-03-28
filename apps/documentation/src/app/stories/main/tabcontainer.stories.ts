import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { TabContainerComponent } from '@ui5/webcomponents-ngx/main/tab-container';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { TabContainerComponent } from "@ui5/webcomponents-ngx/main/tab-container";</code>`;
export default {
  title: 'UI5 Web Components / Main / TabContainer',
  component: TabContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('TabContainerComponent', TabContainerComponent, description),
      },
    },
  },
} as Meta;

export const BasicTabContainer: StoryObj<TabContainerComponent> = {
  render: (args: TabContainerComponent & any) => ({
    props: args,
    template: `
		<ui5-tabcontainer>
			<ui5-tab icon="menu" text="Tab 1">
				<ui5-label>Quibusdam, veniam! Architecto debitis iusto ad et, asperiores quisquam perferendis reprehenderit ipsa voluptate minus minima, perspiciatis cum. Totam harum necessitatibus numquam voluptatum.</ui5-label>
			</ui5-tab>
			<ui5-tab icon="activities" text="Tab 2" selected>
				<ui5-label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni facere error dicta beatae optio repudiandae vero, quidem voluptatibus perferendis eum maiores rem tempore voluptates aperiam eos enim delectus unde.</ui5-label>
			</ui5-tab>
			<ui5-tab icon="add" text="Tab 3">
				<ui5-label>Dignissimos debitis architecto temporibus doloribus reiciendis libero rem nemo, nobis quidem dolor praesentium, beatae voluptatum iste eveniet, nam voluptatem obcaecati ducimus dolore.</ui5-label>
			</ui5-tab>
			<ui5-tab icon="calendar" text="Tab 4">
				<ui5-label>Possimus ipsa eos impedit aut nisi repellendus recusandae, temporibus ducimus, necessitatibus tenetur facere, minima vero fugit rem reiciendis natus ratione quia numquam?</ui5-label>
			</ui5-tab>
			<ui5-tab-separator></ui5-tab-separator>
			<ui5-tab icon="action-settings" text="Tab 5">
				<ui5-label>Explicabo laboriosam ab consequuntur, qui dignissimos inventore sapiente ullam quaerat ratione libero vero, beatae laudantium! Aperiam numquam tempore, laudantium perferendis recusandae autem.</ui5-label>
			</ui5-tab>
		</ui5-tabcontainer>
	`,
  }),
};

export const TabContainerWithTextOnlyTabs: StoryObj<TabContainerComponent> = {
  render: (args: TabContainerComponent & any) => ({
    props: args,
    template: `
		<ui5-tabcontainer collapsed>
			<ui5-tab text="Home"></ui5-tab>
			<ui5-tab text="What's new" selected></ui5-tab>
			<ui5-tab text="Who are we"></ui5-tab>
			<ui5-tab text="About"></ui5-tab>
			<ui5-tab text="Contacts"></ui5-tab>
		</ui5-tabcontainer>
	`,
  }),
};

export const TextOnlyEndOverflow: StoryObj<TabContainerComponent> = {
  render: (args: TabContainerComponent & any) => ({
    props: args,
    template: `
		<ui5-tabcontainer collapsed>
			<ui5-tab text="Tab 1">
			</ui5-tab>
			<ui5-tab text="Tab 2">
			</ui5-tab>
			<ui5-tab text="Tab 3">
			</ui5-tab>
			<ui5-tab text="Tab 4">
			</ui5-tab>
			<ui5-tab text="Tab 5">
			</ui5-tab>
			<ui5-tab text="Tab 6">
			</ui5-tab>
			<ui5-tab text="Tab 7">
			</ui5-tab>
			<ui5-tab text="Tab 8">
			</ui5-tab>
			<ui5-tab text="Tab 9">
			</ui5-tab>
			<ui5-tab text="Tab 10">
			</ui5-tab>
			<ui5-tab text="Tab 11">
			</ui5-tab>
			<ui5-tab text="Tab 12">
			</ui5-tab>
			<ui5-tab text="Tab 13" selected>
			</ui5-tab>
			<ui5-tab text="Tab 14">
			</ui5-tab>
			<ui5-tab text="Tab 15">
			</ui5-tab>
			<ui5-tab text="Tab 16">
			</ui5-tab>
			<ui5-tab text="Tab 17">
			</ui5-tab>
			<ui5-tab text="Tab 18">
			</ui5-tab>
			<ui5-tab text="Tab 19">
			</ui5-tab>
			<ui5-tab text="Tab 20">
			</ui5-tab>
			<ui5-tab text="Tab 21">
			</ui5-tab>
			<ui5-tab text="Tab 22">
			</ui5-tab>
			<ui5-tab text="Tab 23">
			</ui5-tab>
		</ui5-tabcontainer>
	`,
  }),
};

export const TabContainerWithTextAndAdditionalText: StoryObj<TabContainerComponent> =
  {
    render: (args: TabContainerComponent & any) => ({
      props: args,
      template: `
		<ui5-tabcontainer collapsed>
			<ui5-tab text="Info" additional-text="3">
			</ui5-tab>
			<ui5-tab text="Attachments" additional-text="24" selected>
			</ui5-tab>
			<ui5-tab text="Notes" additional-text="16">
			</ui5-tab>
			<ui5-tab text="People" additional-text="34">
			</ui5-tab>
		</ui5-tabcontainer>
	`,
    }),
  };

export const TabContainerWithTabLayoutInline: StoryObj<TabContainerComponent> =
  {
    render: (args: TabContainerComponent & any) => ({
      props: args,
      template: `
		<ui5-tabcontainer tab-layout="Inline" collapsed>
			<ui5-tab text="Monitors" additional-text="10">
			</ui5-tab>
			<ui5-tab text="Cameras" additional-text="2" selected>
			</ui5-tab>
			<ui5-tab text="Rooms" additional-text="16">
			</ui5-tab>
		</ui5-tabcontainer>

		<ui5-tabcontainer tab-layout="Inline" collapsed>
			<ui5-tab icon="laptop" text="Monitors" additional-text="10">
			</ui5-tab>
			<ui5-tab icon="video" text="Cameras" additional-text="2" selected>
			</ui5-tab>
			<ui5-tab icon="home" text="Rooms" additional-text="16">
			</ui5-tab>
		</ui5-tabcontainer>
	`,
    }),
  };

export const TabContainerWithNestedTabs: StoryObj<TabContainerComponent> = {
  render: (args: TabContainerComponent & any) => ({
    props: args,
    template: `
		<ui5-tabcontainer collapsed>
			<ui5-tab text="Notes">
				Notes go here ...
			</ui5-tab>
			<ui5-tab text="Products">
				Products go here ...
				<ui5-tab slot="subTabs" text="Computers">
					Computers go here ...
					<ui5-tab slot="items" text="Laptops">
						Laptops go here ...
					</ui5-tab>
					<ui5-tab slot="items" text="Desktops">
						<ui5-tab slot="subTabs" text="Work Stations">
							Work Stations go here ...
						</ui5-tab>
						<ui5-tab slot="items" text="Game Stations">
							Game Stations go here ...
						</ui5-tab>
						Desktops go here ...
					</ui5-tab>
				</ui5-tab>
				<ui5-tab text="Phones" slot="items">
					<ui5-tab text="Smartphones" slot="items">
						Smartphones go here ...
					</ui5-tab>
					<ui5-tab text="Tablets" slot="items">
						Tablets go here ...
					</ui5-tab>
					Phones go here ...
				</ui5-tab>
			</ui5-tab>
			<ui5-tab text="Orders">
				Orders go here ...
				<ui5-tab slot="items" text="Attachments">
					Order attachments go here ...
				</ui5-tab>
			</ui5-tab>
		</ui5-tabcontainer>
	`,
  }),
};
