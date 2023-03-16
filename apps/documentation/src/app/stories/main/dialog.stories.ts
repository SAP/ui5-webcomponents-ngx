import { Meta, Story, moduleMetadata } from '@storybook/angular';
import {
  Ui5WebcomponentsModule,
  DialogComponent,
} from '@ui5/webcomponents-ngx';

const description = `<h3 class="comment-api-title">Overview</h3> The <code>ui5-dialog</code> component is used to temporarily display some information in a size-limited window in front of the regular app screen. It is used to prompt the user for an action or a confirmation. The <code>ui5-dialog</code> interrupts the current app processing as it is the only focused UI element and the main screen is dimmed/blocked. The dialog combines concepts known from other technologies where the windows have names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box. <br><br> The <code>ui5-dialog</code> is modal, which means that an user action is required before it is possible to return to the parent window. To open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other. The content of the <code>ui5-dialog</code> is fully customizable.

<h3>Structure</h3> A <code>ui5-dialog</code> consists of a header, content, and a footer for action buttons. The <code>ui5-dialog</code> is usually displayed at the center of the screen. Its position can be changed by the user. To enable this, you need to set the property <code>draggable</code> accordingly.

<h3>Responsive Behavior</h3> The <code>stretch</code> property can be used to stretch the <code>ui5-dialog</code> on full screen.

<h3>CSS Shadow Parts</h3>

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM. <br> The <code>ui5-dialog</code> exposes the following CSS Shadow Parts: <ul> <li>header - Used to style the header of the component</li> <li>content - Used to style the content of the component</li> <li>footer - Used to style the footer of the component</li> </ul>

<h3>ES6 Module Import</h3>

<code>import { DialogComponent } from "@ui5/webcomponents-ngx/main/dialog";</code>

<b>Note:</b> We don't recommend nesting popup-like components (<code>ui5-dialog</code>, <code>ui5-popover</code>) inside <code>ui5-dialog</code>. Ideally you should create all popups on the same level inside your HTML page and just open them from one another, rather than nesting them.

<b>Note:</b> We don't recommend nesting popup-like components (<code>ui5-dialog</code>, <code>ui5-popover</code>) inside other components containing z-index. This might break z-index management.`;
export default {
  title: 'UI5 Web Components / Main / Dialog',
  component: DialogComponent,
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

export const ApplyChanges: Story<DialogComponent> = (
  args: DialogComponent & any
) => ({
  props: args,
  template: `
          <ui5-dialog>
            ${args.content}
<slot slot="footer">${args.footer}</slot>
<slot slot="header">${args.header}</slot>
          </ui5-dialog>
        `,
});

export const draggableAndResizableDialog: Story<DialogComponent> = (
  args: DialogComponent & any
) => ({
  props: args,
  template: `
		<ui5-button id="resizable-draggable-open">Open Draggable/Resizable dialog</ui5-button>

		<ui5-dialog id="resize-draggable-dialog" header-text="Draggable/Resizable dialog" resizable="" draggable="">
			<p>Resize this dialog by dragging it by its resize handle.</p>
			<p>This feature available only on Desktop.</p>

			<p>Move this dialog around the screen by dragging it by its header.</p>
			<p>This feature available only on Desktop.</p>

			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button id="resizable-drggable-close" design="Emphasized">OK</ui5-button>
			</div>
		</ui5-dialog>
	`,
});

export const dialogWithSapFioriStyledFooter: Story<DialogComponent> = (
  args: DialogComponent & any
) => ({
  props: args,
  template: `
		<ui5-button id="fiori-footer">Open dialog</ui5-button>

		<ui5-dialog id="fiori-footer-dialog" header-text="SAP Fiori Styled Footer">
			<p>Adding custom styles to achieve the look and feel of a SAP Fiori footer</p>
			<div slot="footer" style="display: flex; align-items: center; justify-content: end; width: 100%; box-sizing: border-box;">
				<ui5-button design="Emphasized" style="min-width: 4rem;">OK</ui5-button>
				<ui5-button id="fiori-close" style="margin: 0 0 0 0.5rem; min-width: 4rem;">Close</ui5-button>
			</div>
		</ui5-dialog>
	`,
});

export const dialogsWithVariousStateProperties: Story<DialogComponent> = (
  args: DialogComponent & any
) => ({
  props: args,
  template: `
		<ui5-button id="error-state">Open error state dialog</ui5-button>
		<ui5-button id="information-state">Open information state dialog</ui5-button>
		<ui5-button id="success-state">Open success state dialog</ui5-button>
		<ui5-button id="warning-state">Open warning state dialog</ui5-button>

		<ui5-dialog id="error-state-dialog" header-text="Error" state="Error">
			<p>Error state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button id="error-close">Close</ui5-button>
			</div>
		</ui5-dialog>

		<ui5-dialog id="information-state-dialog" header-text="Information" state="Information">
			<p>Information state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button id="information-close">Close</ui5-button>
			</div>
		</ui5-dialog>

		<ui5-dialog id="success-state-dialog" header-text="Success" state="Success">
			<p>Success state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button id="success-close">Close</ui5-button>
			</div>
		</ui5-dialog>

		<ui5-dialog id="warning-state-dialog" header-text="Warning" state="Warning">
			<p>Warning state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button id="warning-close">Close</ui5-button>
			</div>
		</ui5-dialog>
	`,
});
