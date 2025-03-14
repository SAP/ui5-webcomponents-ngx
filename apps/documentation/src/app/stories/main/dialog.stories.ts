import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { DialogComponent } from '@ui5/webcomponents-ngx/main/dialog';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { DialogComponent } from "@ui5/webcomponents-ngx/main/dialog";</code>

**Note:** We don't recommend nesting popup-like components (<code>ui5-dialog</code>, <code>ui5-popover</code>) inside <code>ui5-dialog</code>. Ideally you should create all popups on the same level inside your HTML page and just open them from one another, rather than nesting them.

**Note:** We don't recommend nesting popup-like components (<code>ui5-dialog</code>, <code>ui5-popover</code>) inside other components containing z-index. This might break z-index management.`;
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
      extractArgTypes,
      description: {
        component: extractDescription('DialogComponent', DialogComponent, description),
      },
    },
  },
} as Meta;

export const DraggableAndResizableDialog: StoryObj<DialogComponent> = {
  render: (args: DialogComponent & any) => ({
    props: args,
    template: `
		<ui5-button (click)="dialog.open=true" >Open Draggable/Resizable dialog</ui5-button>

		<ui5-dialog #dialog="ui5Dialog" header-text="Draggable/Resizable dialog" resizable draggable>
			<p>Resize this dialog by dragging it by its resize handle.</p>
			<p>This feature available only on Desktop.</p>

			<p>Move this dialog around the screen by dragging it by its header.</p>
			<p>This feature available only on Desktop.</p>

			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button (click)="dialog.open=false" design="Emphasized">OK</ui5-button>
			</div>
		</ui5-dialog>
	`,
  }),
};

export const DialogWithSapFioriStyledFooter: StoryObj<DialogComponent> = {
  render: (args: DialogComponent & any) => ({
    props: args,
    template: `
		<ui5-button (click)="dialog.open=true">Open dialog</ui5-button>

		<ui5-dialog #dialog="ui5Dialog" header-text="SAP Fiori Styled Footer">
			<p>Adding custom styles to achieve the look and feel of a SAP Fiori footer</p>
			<div slot="footer" style="display: flex; align-items: center; justify-content: end; width: 100%; box-sizing: border-box;">
				<ui5-button (click)="dialog.open=false" design="Emphasized" style="min-width: 4rem;">OK</ui5-button>
				<ui5-button (click)="dialog.open=false" style="margin: 0 0 0 0.5rem; min-width: 4rem;">Close</ui5-button>
			</div>
		</ui5-dialog>
	`,
  }),
};

export const DialogsWithVariousStateProperties: StoryObj<DialogComponent> = {
  render: (args: DialogComponent & any) => ({
    props: args,
    template: `
		<ui5-button (click)="dialog.open=true">Open error state dialog</ui5-button>
		<ui5-button (click)="dialog2.open=true">Open information state dialog</ui5-button>
		<ui5-button (click)="dialog3.open=true">Open success state dialog</ui5-button>
		<ui5-button (click)="dialog4.open=true">Open warning state dialog</ui5-button>

		<ui5-dialog #dialog="ui5Dialog" header-text="Negative" state="Negative">
			<p>Error state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button (click)="dialog.open=false">Close</ui5-button>
			</div>
		</ui5-dialog>

		<ui5-dialog #dialog2="ui5Dialog" header-text="Information" state="Information">
			<p>Information state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button (click)="dialog2.open=false">Close</ui5-button>
			</div>
		</ui5-dialog>

		<ui5-dialog #dialog3="ui5Dialog" header-text="Positive" state="Positive">
			<p>Success state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button (click)="dialog3.open=false">Close</ui5-button>
			</div>
		</ui5-dialog>

		<ui5-dialog #dialog4="ui5Dialog" header-text="Critical" state="Critical">
			<p>Warning state dialog</p>
			<div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; padding: .25rem 1rem;">
				<ui5-button (click)="dialog4.open=false">Close</ui5-button>
			</div>
		</ui5-dialog>
	`,
  }),
};
