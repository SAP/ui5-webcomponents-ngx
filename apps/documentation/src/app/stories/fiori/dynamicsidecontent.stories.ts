import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { DynamicSideContentComponent } from '@ui5/webcomponents-ngx/fiori/dynamic-side-content';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { DynamicSideContentComponent } from "@ui5/webcomponents-ngx/fiori/dynamic-side-content";</code>`;
const meta: Meta<DynamicSideContentComponent> = {
  title: 'UI5 Web Components / Fiori / DynamicSideContent',
  component: DynamicSideContentComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('DynamicSideContentComponent', DynamicSideContentComponent, description),
      },
    },
  },
};

export default meta;

export const DynamicSideContentWithDefaultProperties: StoryObj<DynamicSideContentComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
			<style>
				.wrapper100 {
					height: 500px;
					width: 1200px;
				}
			</style>
	
			<div class="wrapper100">
				<ui5-page>
					<ui5-dynamic-side-content>
						<div>
							<h1>Main Content</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
						</div>
						<div slot="sideContent">
							<h1>Side Content</h1>
							<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
						</div>
					</ui5-dynamic-side-content>
				</ui5-page>
			</div>
		`,
    }),
  };

export const DynamicSideContentWithHideMainContentSet: StoryObj<DynamicSideContentComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
			<style>
				.wrapper100 {
					height: 500px;
					width: 1200px;
				}
			</style>
	
			<div class="wrapper100">
				<ui5-page>
					<ui5-dynamic-side-content hide-main-content>
						<div>
							<h1>Main Content</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
						</div>
						<div slot="sideContent">
							<h1>Side Content</h1>
							<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
						</div>
					</ui5-dynamic-side-content>
				</ui5-page>
			</div>
		`,
    }),
  };

export const DynamicSideContentWithHideSideContentSet: StoryObj<DynamicSideContentComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
			<style>
					.wrapper100 {
						height: 500px;
						width: 1200px;
					}
				</style>
		
				<div class="wrapper100">
					<ui5-page>
						<ui5-dynamic-side-content hide-side-content>
							<div>
								<h1>Main Content</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
							</div>
							<div slot="sideContent">
								<h1>Side Content</h1>
								<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
							</div>
						</ui5-dynamic-side-content>
					</ui5-page>
				</div>
			`,
    }),
  };

export const DynamicSideContentWithEqualSplitSet: StoryObj<DynamicSideContentComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
				<style>
					.wrapper100 {
						height: 500px;
						width: 1200px;
					}
				</style>
		
				<div class="wrapper100">
					<ui5-page>
						<ui5-dynamic-side-content equal-split>
							<div>
								<h1>Main Content</h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
							</div>
							<div slot="sideContent">
								<h1>Side Content</h1>
								<p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
							</div>
						</ui5-dynamic-side-content>
					</ui5-page>
				</div>
			`,
    }),
  };

export const DynamicSideContentWithSideContentPositionStart: StoryObj<DynamicSideContentComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
				<style>
				  .wrapper100 {
					  height: 500px;
					  width: 1200px;
				  }
			  </style>
	  
			  <div class="wrapper100">
				  <ui5-page>
					  <ui5-dynamic-side-content side-content-position="Start" >
						  <div>
							  <h1>Main Content</h1>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
						  </div>
						  <div slot="sideContent">
							  <h1>Side Content</h1>
							  <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
						  </div>
					  </ui5-dynamic-side-content>
				  </ui5-page>
			  </div>
		  `,
    }),
  };

export const DynamicSideContentWithSideContentFallDownBelowXl: StoryObj<DynamicSideContentComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
				<style>
				  .wrapper100 {
					  height: 500px;
					  width: 1200px;
				  }
			  </style>
	  
			  <div class="wrapper100">
				  <ui5-page>
					  <ui5-dynamic-side-content side-content-fall-down="BelowXL" >
						  <div>
							  <h1>Main Content</h1>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
						  </div>
						  <div slot="sideContent">
							  <h1>Side Content</h1>
							  <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
						  </div>
					  </ui5-dynamic-side-content>
				  </ui5-page>
			  </div>
		  `,
    }),
  };

export const DynamicSideContentWithSideContentVisibilityShowAboveM: StoryObj<DynamicSideContentComponent> =
  {
    render: (args) => ({
      props: args,
      template: `
				<style>
				  .wrapper100 {
					  height: 500px;
					  width: 1200px;
				  }
			  </style>
	  
			  <div class="wrapper100">
				  <ui5-page>
					  <ui5-dynamic-side-content side-content-visibility="ShowAboveM" >
						  <div>
							  <h1>Main Content</h1>
							  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ex mi, elementum et ante commodo, semper sollicitudin magna. Sed dapibus ut tortor quis varius. Sed luctus sem at nunc porta vulputate. Suspendisse lobortis arcu est, quis ultrices ipsum fermentum a. Vestibulum a ipsum placerat ligula gravida fringilla at id ex. Etiam pellentesque lorem sed sagittis aliquam. Quisque semper orci risus, vel efficitur dui euismod aliquet. Morbi sapien sapien, rhoncus et rutrum nec, rhoncus id nisl. Cras non tincidunt enim, id eleifend neque.</p>
						  </div>
						  <div slot="sideContent">
							  <h1>Side Content</h1>
							  <p>Morbi lorem libero, imperdiet id condimentum ac, tempor ut velit. Integer a laoreet sem. Nunc at sagittis nisi. Sed placerat diam eu porttitor dignissim. Maecenas nec fringilla tortor. Pellentesque ut elit est. Curabitur quis elit at mauris ullamcorper fringilla. Nullam diam mi, porttitor dictum orci nec, molestie luctus metus. Nunc ut ex blandit, elementum erat eget, pulvinar sapien. Donec nec lorem eu nunc eleifend tempor at non tortor. In quam velit, ornare at rutrum ac, porta ac augue. Suspendisse venenatis semper lacus at venenatis. Praesent vestibulum ligula nulla, at tempus lorem consequat suscipit. Aenean consequat dapibus dui, at bibendum mauris porta a.</p>
						  </div>
					  </ui5-dynamic-side-content>
				  </ui5-page>
			  </div>
		  `,
    }),
  };
