import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { BreadcrumbsItemComponent } from '@ui5/webcomponents-ngx/main/breadcrumbs-item';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

### Module Import

<code>import { BreadcrumbsItemComponent } from "@ui5/webcomponents-ngx/main/breadcrumbs-item";</code>
`;

export default {
  title: 'UI5 Web Components / Main / Breadcrumbs / BreadcrumbsItem',
  component: BreadcrumbsItemComponent,
  decorators: [
    moduleMetadata({
      imports: [
        Ui5WebcomponentsModule,
        BreadcrumbsItemComponent
      ],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription( 'BreadcrumbsItemComponent', BreadcrumbsItemComponent, description),
      },
    },
  },
} as Meta;


export const BreadcrumbsItem: StoryObj<BreadcrumbsItemComponent> = {
	render: (args) => ({
	  props: args,
	  template: `
	  `,
	}),
  };