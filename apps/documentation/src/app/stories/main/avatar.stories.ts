import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  AvatarComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `### Overview

An image-like component that has different display options for representing images and icons in different shapes and sizes, depending on the use case.

The shape can be circular or square. There are several predefined sizes, as well as an option to set a custom size.

<br><br> <h3>Keyboard Handling</h3>

<ul> <li>[SPACE, ENTER, RETURN] - Fires the <code>click</code> event if the <code>interactive</code> property is set to true.</li> <li>[SHIFT] - If [SPACE] is pressed, pressing [SHIFT] releases the component without triggering the click event.</li> </ul> <br><br>

<h3>ES6 Module Import</h3>

<code>import { AvatarComponent } from "@ui5/webcomponents-ngx/main/avatar";</code>`;
export default {
  title: 'UI5 Web Components / Main / Avatar',
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: description,
      },
    },
  },
} as Meta;

export const BasicAvatar: StoryObj<AvatarComponent> = {
  render: (args) => ({
    props: args,
    template: `
			  <ui5-avatar>
				  <img src="../../../assets/images/avatars/man_avatar_1.png" alt="Woman 1">
			  </ui5-avatar>
			  <ui5-avatar>
				  <img src="../../../assets/images/avatars/woman_avatar_4.png" alt="Woman 4">
			  </ui5-avatar>
			  <ui5-avatar shape="Square">
				  <img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman 5">
			  </ui5-avatar>
			  <ui5-avatar shape="Square">
				  <img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man 3">
			  </ui5-avatar>
		  `,
  }),
};

export const AvatarShapes: StoryObj<AvatarComponent> = {
  render: (args) => ({
    props: args,
    template: `
			  <ui5-avatar shape="Circle">
				  <img src="../../../assets/images/avatars/woman_avatar_3.png" alt="Woman 3">
			  </ui5-avatar>
			  <ui5-avatar shape="Square">
				  <img src="../../../assets/images/avatars/woman_avatar_4.png" alt="Woman 4">
			  </ui5-avatar>
		  `,
  }),
};

export const AvatarSizes: StoryObj<AvatarComponent> = {
  render: (args) => ({
    props: args,
    template: `
			  <ui5-avatar size="XS">
				  <img src="../../../assets/images/avatars/woman_avatar_3.png" alt="Woman 3">
			  </ui5-avatar>
			  <ui5-avatar size="S">
				  <img src="../../../assets/images/avatars/woman_avatar_4.png" alt="Woman 4">
			  </ui5-avatar>
			  <ui5-avatar size="M">
				  <img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman 5">
			  </ui5-avatar>
			  <ui5-avatar size="L">
				  <img src="../../../assets/images/avatars/man_avatar_1.png" alt="Man 1">
			  </ui5-avatar>
			  <ui5-avatar size="XL">
				  <img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man 3">
			  </ui5-avatar>
		  `,
  }),
};

export const AvatarWithUi5Icons: StoryObj<AvatarComponent> = {
  render: (args) => ({
    props: args,
    template: `
			  <ui5-avatar icon="employee" size="XS"></ui5-avatar>
			  <ui5-avatar icon="employee" size="S"></ui5-avatar>
			  <ui5-avatar icon="employee" size="M"></ui5-avatar>
			  <ui5-avatar icon="employee" size="L"></ui5-avatar>
			  <ui5-avatar icon="employee" size="XL"></ui5-avatar>
		  `,
  }),
};

export const AvatarWithInitials: StoryObj<AvatarComponent> = {
  render: (args) => ({
    props: args,
    template: `
			  <ui5-avatar initials="XS" color-scheme="Accent1" size="XS"></ui5-avatar>
			  <ui5-avatar initials="S" color-scheme="Accent2" size="S"></ui5-avatar>
			  <ui5-avatar initials="M" color-scheme="Accent3" size="M"></ui5-avatar>
			  <ui5-avatar initials="L" color-scheme="Accent4" size="L"></ui5-avatar>
			  <ui5-avatar initials="XL" color-scheme="Accent5" size="XL"></ui5-avatar>
		  `,
  }),
};

export const AvatarObjectFitTypesContainAndCover: StoryObj<AvatarComponent> = {
  render: (args) => ({
    props: args,
    template: `
			  <ui5-avatar id="myCustomAvatar" shape="Square" size="XL" style="width: 250px; height: 250px; border: 1px solid var(--sapField_BorderColor)">
				  <img src="../../../assets/images/avatars/Lamp_avatar_01.jpg" alt="Lamp" style="object-fit: cover">
			  </ui5-avatar>
			  <ui5-avatar id="myCustomAvatar1" shape="Square" size="XL" style="width: 250px; height: 250px; border: 1px solid var(--sapField_BorderColor)">
				  <img src="../../../assets/images/avatars/Lamp_avatar_01.jpg" alt="Lamp" style="object-fit: contain">
			  </ui5-avatar>
		  `,
  }),
};

export const AvatarWithVisualAffordance: StoryObj<AvatarComponent> = {
  render: (args) => ({
    props: args,
    template: `
			  <ui5-avatar shape="Circle">
				  <img src="../../../assets/images/avatars/woman_avatar_3.png" alt="Woman 3">
				  <ui5-tag slot="badge">
					  <ui5-icon slot="icon" name="filter"></ui5-icon>
				  </ui5-tag>
			  </ui5-avatar>
			  <ui5-avatar initials="AB" size="L" shape="Circle">
				  <ui5-tag slot="badge">
					  <ui5-icon slot="icon" name="document"></ui5-icon>
				  </ui5-tag>
			  </ui5-avatar>
			  <ui5-avatar shape="Square">
				  <img src="../../../assets/images/avatars/woman_avatar_4.png" alt="Woman 4">
				  <ui5-tag slot="badge">
					  <ui5-icon slot="icon" name="accept"></ui5-icon>
				  </ui5-tag>
			  </ui5-avatar>
			  <ui5-avatar initials="CD" size="L" shape="Square">
				  <ui5-tag slot="badge">
					  <ui5-icon slot="icon" name="employee"></ui5-icon>
				  </ui5-tag>
			  </ui5-avatar>
			  <ui5-avatar initials="AB" color-scheme="Accent1">
				  <span slot="badge" class="custom-badge">1</span>
			  </ui5-avatar>
	  
			  <style>
				  .custom-badge {
					  color: var(--sapAccentColor2);
					  background: var(--sapAccentBackgroundColor3);
					  font-family: var(--sapFontFamily);
					  font-size: var(--sapFontSize);
					  text-align: center;
					  line-height: 1.125rem;
				  }
			  </style>
		  `,
  }),
};
