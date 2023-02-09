import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { AvatarDirective } from '../directives/avatar';

export default {
  component: AvatarDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const basicAvatar: Story = (args) => ({
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
});

export const avatarShapes: Story = (args) => ({
  props: args,
  template: `
        <ui5-avatar shape="Circle">
			<img src="../../../assets/images/avatars/woman_avatar_3.png" alt="Woman 3">
		</ui5-avatar>
		<ui5-avatar shape="Square">
			<img src="../../../assets/images/avatars/woman_avatar_4.png" alt="Woman 4">
		</ui5-avatar>
      `,
});

export const avatarSizes: Story = (args) => ({
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
});

export const avatarWithUi5Icons: Story = (args) => ({
  props: args,
  template: `
        <ui5-avatar icon="employee" size="XS"></ui5-avatar>
		<ui5-avatar icon="employee" size="S"></ui5-avatar>
		<ui5-avatar icon="employee" size="M"></ui5-avatar>
		<ui5-avatar icon="employee" size="L"></ui5-avatar>
		<ui5-avatar icon="employee" size="XL"></ui5-avatar>
      `,
});

export const avatarWithInitials: Story = (args) => ({
  props: args,
  template: `
        <ui5-avatar initials="XS" color-scheme="Accent1" size="XS"></ui5-avatar>
		<ui5-avatar initials="S" color-scheme="Accent2" size="S"></ui5-avatar>
		<ui5-avatar initials="M" color-scheme="Accent3" size="M"></ui5-avatar>
		<ui5-avatar initials="L" color-scheme="Accent4" size="L"></ui5-avatar>
		<ui5-avatar initials="XL" color-scheme="Accent5" size="XL"></ui5-avatar>
      `,
});

export const avatarObjectFitTypesContainAndCover: Story = (args) => ({
  props: args,
  template: `
        <ui5-avatar id="myCustomAvatar" shape="Square" size="XL" style="width: 250px; height: 250px; border: 1px solid var(--sapField_BorderColor)">
			<img src="../../../assets/images/avatars/Lamp_avatar_01.jpg" alt="Lamp" style="object-fit: cover">
		</ui5-avatar>
		<ui5-avatar id="myCustomAvatar1" shape="Square" size="XL" style="width: 250px; height: 250px; border: 1px solid var(--sapField_BorderColor)">
			<img src="../../../assets/images/avatars/Lamp_avatar_01.jpg" alt="Lamp" style="object-fit: contain">
		</ui5-avatar>
      `,
});

export const avatarWithVisualAffordance: Story = (args) => ({
  props: args,
  template: `
        <ui5-avatar shape="Circle">
			<img src="../../../assets/images/avatars/woman_avatar_3.png" alt="Woman 3">
			<ui5-badge slot="badge">
				<ui5-icon slot="icon" name="filter"></ui5-icon>
			</ui5-badge>
		</ui5-avatar>
		<ui5-avatar initials="AB" size="L" shape="Circle">
			<ui5-badge slot="badge">
				<ui5-icon slot="icon" name="document"></ui5-icon>
			</ui5-badge>
		</ui5-avatar>
		<ui5-avatar shape="Square">
			<img src="../../../assets/images/avatars/woman_avatar_4.png" alt="Woman 4">
			<ui5-badge slot="badge">
				<ui5-icon slot="icon" name="accept"></ui5-icon>
			</ui5-badge>
		</ui5-avatar>
		<ui5-avatar initials="CD" size="L" shape="Square">
			<ui5-badge slot="badge">
				<ui5-icon slot="icon" name="employee"></ui5-icon>
			</ui5-badge>
		</ui5-avatar>
		<ui5-avatar initials="AB" color-scheme="Accent1">
			<span slot="badge" class="custom-badge">1</span>
		</ui5-avatar>
      `,
});
