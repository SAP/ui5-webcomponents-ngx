import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';

export default {
  title: 'UI5 Web Components / Main / Dialog',
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
} as Meta;

export const draggableAndResizableDialog: Story = (args) => ({
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

export const dialogWithSapFioriStyledFooter: Story = (args) => ({
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

export const dialogsWithVariousStateProperties: Story = (args) => ({
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
