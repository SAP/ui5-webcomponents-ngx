import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5ThemingModule } from '@ui5/theming-ngx';

import { Ui5AngularModule } from '../../ui5-angular.module';
import { AvatarGroupDirective } from '../directives/avatar-group';

export default {
  component: AvatarGroupDirective,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5AngularModule,
        Ui5ThemingModule.forRoot({ defaultTheme: 'sap_horizon' }),
      ],
    }),
  ],
} as Meta;

export const avatarGroupTypeIndividual: Story = (args) => ({
  props: args,
  template: `
        <ui5-popover header-text="Person Card" class="personPopover" style="width: 300px" placement-type="Bottom" prevent-focus-restore="">
			<div class="avatar-slot" style="display: inline-block;">
				<ui5-avatar id="popAvatar"></ui5-avatar>
			</div>

			<div class="title-slot" style="display: inline-block;">
				<ui5-title level="H5">John Doe</ui5-title>
				<ui5-title level="H5">Software Developer</ui5-title>
			</div>
		</ui5-popover>

		<ui5-popover header-text="My people" class="peoplePopover" style="width: 400px" placement-type="Bottom">
			<div class="placeholder" style="display: flex; flex-wrap: wrap;"></div>
		</ui5-popover>

		<ui5-slider id="sliderIndividual" min="1" max="100" value="60"></ui5-slider>

		<ui5-avatar-group type="Individual">
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" initials="JD"></ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" initials="JD"></ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" initials="JD"></ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
		</ui5-avatar-group>
      `,
});

export const avatarGroupTypeGroup: Story = (args) => ({
  props: args,
  template: `
        <ui5-popover header-text="My people" class="peoplePopover" style="width: 400px" placement-type="Bottom">
			<div class="placeholder" style="display: flex; flex-wrap: wrap;"></div>
		</ui5-popover>

		<ui5-slider min="1" max="100" value="60"></ui5-slider>

		<ui5-avatar-group type="Group">
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" initials="JD"></ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" initials="JD"></ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" icon="employee"></ui5-avatar>
			<ui5-avatar size="M" initials="JD"></ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
		</ui5-avatar-group>
      `,
});

export const avatarGroupSizes: Story = (args) => ({
  props: args,
  template: `
        <ui5-avatar-group type="Individual">
			<ui5-avatar size="S">
				<img src="../../../assets/images/avatars/man_avatar_1.png" alt="Man Avatar 1">
			</ui5-avatar>
			<ui5-avatar size="S" initials="JD"></ui5-avatar>
			<ui5-avatar size="S">
				<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="S">
				<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
		</ui5-avatar-group>

		<br>

		<ui5-avatar-group type="Individual">
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/man_avatar_1.png" alt="Man Avatar 1">
			</ui5-avatar>
			<ui5-avatar size="M" initials="JD"></ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="M">
				<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
		</ui5-avatar-group>

		<br>

		<ui5-avatar-group type="Group">
			<ui5-avatar size="L">
				<img src="../../../assets/images/avatars/man_avatar_1.png" alt="Man Avatar 1">
			</ui5-avatar>
			<ui5-avatar size="L" initials="JD"></ui5-avatar>
			<ui5-avatar size="L">
				<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
			</ui5-avatar>
			<ui5-avatar size="L">
				<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
			</ui5-avatar>
		</ui5-avatar-group>
      `,
});
