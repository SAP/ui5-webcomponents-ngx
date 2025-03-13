import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { AvatarGroupComponent } from '@ui5/webcomponents-ngx/main/avatar-group';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { AvatarGroupComponent } from "@ui5/webcomponents-ngx/main/avatar-group";</code>`;
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
        component: extractDescription('AvatarGroupComponent', AvatarGroupComponent, description),
      },
    },
  },
} as Meta;

export const AvatarGroupTypeIndividual: StoryObj<AvatarGroupComponent> = {
  render: (args) => ({
    props: args,
    template: `
				<ui5-avatar-group type="Individual">
					<ui5-avatar>
						<img src="../../../assets/images/avatars/man_avatar_1.png" alt="Man Avatar 1">
					</ui5-avatar>
					<ui5-avatar initials="JD"></ui5-avatar>
					<ui5-avatar>
						<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
					</ui5-avatar>
					<ui5-avatar>
						<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
					</ui5-avatar>
				</ui5-avatar-group>
			
			`,
  }),
};

export const AvatarGroupTypeGroup: StoryObj<AvatarGroupComponent> = {
  render: (args) => ({
    props: args,
    template: `
				<ui5-avatar-group type="Group">
					<ui5-avatar>
						<img src="../../../assets/images/avatars/man_avatar_1.png" alt="Man Avatar 1">
					</ui5-avatar>
					<ui5-avatar initials="JD"></ui5-avatar>
					<ui5-avatar>
						<img src="../../../assets/images/avatars/woman_avatar_5.png" alt="Woman Avatar 5">
					</ui5-avatar>
					<ui5-avatar>
						<img src="../../../assets/images/avatars/man_avatar_3.png" alt="Man Avatar 3">
					</ui5-avatar>
				</ui5-avatar-group>
			`,
  }),
};
