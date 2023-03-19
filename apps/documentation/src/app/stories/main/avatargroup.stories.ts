import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  AvatarGroupComponent,
} from '@ui5/webcomponents-ngx';
import { extractArgTypes } from '../../arg-type-tools';

const description = `<h3 class="comment-api-title">Overview</h3>

Displays a group of avatars arranged horizontally. It is useful to visually showcase a group of related avatars, such as, project team members or employees.

The component allows you to display the avatars in different sizes, depending on your use case.

The <code>AvatarGroup</code> component has two group types: <ul> <li><code>Group</code> type: The avatars are displayed as partially overlapped on top of each other and the entire group has one click/tap area.</li> <li><code>Individual</code> type: The avatars are displayed side-by-side and each avatar has its own click/tap area.</li> </ul>

<h3>Responsive Behavior</h3>

When the available space is less than the width required to display all avatars, an overflow visualization appears as a button placed at the end with the same shape and size as the avatars. The visualization displays the number of avatars that have overflowed and are not currently visible.

<h3>Usage</h3>

Use the <code>AvatarGroup</code> if: <ul> <li>You want to display a group of avatars.</li> <li>You want to display several avatars which have something in common.</li> </ul>

Do not use the <code>AvatarGroup</code> if: <ul> <li>You want to display a single avatar.</li> <li>You want to display a gallery for simple images.</li> <li>You want to use it for other visual content than avatars.</li> </ul>

<h3>Keyboard Handling</h3> The component provides advanced keyboard handling. When focused, the user can use the following keyboard shortcuts in order to perform a navigation: <br> - <code>type</code> Individual: <br> <ul> <li>[TAB] - Move focus to the overflow button</li> <li>[LEFT] - Navigate one avatar to the left</li> <li>[RIGHT] - Navigate one avatar to the right</li> <li>[HOME] - Navigate to the first avatar</li> <li>[END] - Navigate to the last avatar</li> <li>[SPACE],[ENTER],[RETURN] - Trigger <code>ui5-click</code> event</li> </ul> <br> - <code>type</code> Group: <br> <ul> <li>[TAB] - Move focus to the next interactive element after the component</li> <li>[SPACE],[ENTER],[RETURN] - Trigger <code>ui5-click</code> event</li> </ul> <br>`;
export default {
  title: 'UI5 Web Components / Main / AvatarGroup',
  component: AvatarGroupComponent,
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

export const avatarGroupSizes: Story<AvatarGroupComponent> = (
  args: AvatarGroupComponent & any
) => ({
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
