import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx';
import { PageComponent } from '@ui5/webcomponents-ngx/fiori/page';
import { extractArgTypes, extractDescription } from '../../arg-type-tools';

const description = `

<h3>Module Import</h3>

<code>import { PageComponent } from "@ui5/webcomponents-ngx/fiori/page";</code>`;
export default {
  title: 'UI5 Web Components / Fiori / Page',
  component: PageComponent,
  decorators: [
    moduleMetadata({
      imports: [Ui5WebcomponentsModule],
    }),
  ],
  parameters: {
    docs: {
      extractArgTypes,
      description: {
        component: extractDescription('PageComponent', PageComponent, description),
      },
    },
  },
} as Meta;

export const PageWithFloatingFooter: StoryObj<PageComponent> = {
  render: (args) => ({
    props: args,
    template: `
          <ui5-page id="page" style="height: 700px; width: 500px" background-design="List" >
              <ui5-bar design="Header" slot="header">
                  <ui5-button icon="home" tooltip="Go home" slot="startContent"></ui5-button>
                  <ui5-label>Title</ui5-label>
                  <ui5-button icon="action-settings" tooltip="Go to settings" slot="endContent"></ui5-button>
              </ui5-bar>
  
              <div>
                  <p class="content-paragraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus pretium. Eget nullam non nisi est sit amet facilisis. Imperdiet dui accumsan sit amet nulla facilisi morbi. Sem viverra aliquet eget sit amet tellus cras adipiscing. Faucibus purus in massa tempor nec. Egestas quis ipsum suspendisse ultrices gravida dictum. Amet facilisis magna etiam tempor. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Ac orci phasellus egestas tellus. Quis imperdiet massa tincidunt nunc. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
                  </p>
  
                  <p class="content-paragraph">
                      Amet consectetur adipiscing elit duis tristique. Tortor condimentum lacinia quis vel eros. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed nisi lacus sed viverra tellus in hac habitasse. Praesent tristique magna sit amet purus gravida quis blandit. Magnis dis parturient montes nascetur ridiculus. Sit amet nulla facilisi morbi tempus iaculis urna id. Senectus et netus et malesuada fames. Faucibus ornare suspendisse sed nisi lacus sed. Facilisis volutpat est velit egestas dui id ornare arcu odio. In tellus integer feugiat scelerisque. Eu turpis egestas pretium aenean pharetra magna. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Ante in nibh mauris cursus mattis. Sagittis vitae et leo duis.
                  </p>
  
                  <p class="content-paragraph">
                      Sodales ut eu sem integer. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Tellus rutrum tellus pellentesque eu tincidunt tortor. Etiam tempor orci eu lobortis elementum nibh. Velit laoreet id donec ultrices tincidunt arcu non sodales. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Odio ut sem nulla pharetra diam sit amet nisl. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Donec enim diam vulputate ut pharetra sit. Posuere ac ut consequat semper viverra nam libero. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Ac placerat vestibulum lectus mauris ultrices.
                  </p>
  
                  <p class="content-paragraph">
                      Consequat semper viverra nam libero justo laoreet. In mollis nunc sed id. Eget egestas purus viverra accumsan in. Diam vulputate ut pharetra sit amet aliquam. Arcu bibendum at varius vel pharetra vel turpis nunc. Lacus sed turpis tincidunt id aliquet risus feugiat. Tempus urna et pharetra pharetra massa massa. Volutpat maecenas volutpat blandit aliquam etiam. Viverra suspendisse potenti nullam ac. Nisl purus in mollis nunc sed id. Nibh mauris cursus mattis molestie a iaculis at erat. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Tempor id eu nisl nunc mi ipsum faucibus vitae. Eget lorem dolor sed viverra. Pellentesque habitant morbi tristique senectus et. Et tortor at risus viverra adipiscing at in tellus.
                  </p>
  
                  <p class="content-paragraph">
                      Venenatis lectus magna fringilla urna. Sed cras ornare arcu dui vivamus arcu felis. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Arcu dictum varius duis at consectetur lorem donec. Tortor posuere ac ut consequat semper viverra nam. Vulputate mi sit amet mauris commodo quis. Convallis convallis tellus id interdum velit. Ac placerat vestibulum lectus mauris ultrices eros. Nulla at volutpat diam ut venenatis tellus.
                  </p>
  
                  <p class="content-paragraph">
                      Turpis in eu mi bibendum neque egestas congue quisque egestas. Tristique nulla aliquet enim tortor at auctor urna nunc id. Luctus venenatis lectus magna fringilla urna. Quis enim lobortis scelerisque fermentum dui faucibus in. Turpis massa sed elementum tempus egestas. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Justo laoreet sit amet cursus sit amet. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Erat imperdiet sed euismod nisi porta lorem mollis. Arcu ac tortor dignissim convallis aenean et tortor at risus. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Dui nunc mattis enim ut tellus elementum sagittis. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Elementum sagittis vitae et leo duis ut diam quam. Vulputate dignissim suspendisse in est ante. Enim diam vulputate ut pharetra sit amet aliquam id diam. Quam vulputate dignissim suspendisse in est ante in nibh. Vestibulum morbi blandit cursus risus at ultrices mi. Nam at lectus urna duis convallis.
                  </p>
  
                  <p class="content-paragraph">
                      Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Viverra aliquet eget sit amet tellus cras adipiscing enim. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. In est ante in nibh mauris cursus mattis molestie. Urna condimentum mattis pellentesque id nibh tortor id. Curabitur vitae nunc sed velit dignissim sodales ut. Ac ut consequat semper viverra. Diam maecenas sed enim ut sem viverra aliquet eget sit. Sagittis aliquam malesuada bibendum arcu. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Cras semper auctor neque vitae.
                  </p>
  
                  <p class="content-paragraph">
                      Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Ante in nibh mauris cursus. Iaculis at erat pellentesque adipiscing commodo elit. Lectus sit amet est placerat in egestas. Egestas pretium aenean pharetra magna ac placerat vestibulum. Sed blandit libero volutpat sed cras. At augue eget arcu dictum varius duis. Suscipit adipiscing bibendum est ultricies integer. Nullam ac tortor vitae purus faucibus. Ultricies mi eget mauris pharetra. Quisque non tellus orci ac.
                  </p>
  
                  <p class="content-paragraph">
                      Nisi vitae suscipit tellus mauris a diam. Eu nisl nunc mi ipsum faucibus vitae aliquet. Augue mauris augue neque gravida in fermentum et sollicitudin. Ullamcorper sit amet risus nullam eget felis eget nunc. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Quis commodo odio aenean sed adipiscing diam. Elit sed vulputate mi sit amet. Nullam vehicula ipsum a arcu. Sed sed risus pretium quam. Aliquam sem fringilla ut morbi tincidunt augue. At elementum eu facilisis sed odio. Volutpat sed cras ornare arcu dui. At lectus urna duis convallis convallis. Nunc faucibus a pellentesque sit. Molestie nunc non blandit massa. Eu non diam phasellus vestibulum. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Nisl tincidunt eget nullam non nisi. Nunc vel risus commodo viverra. At augue eget arcu dictum varius duis at.
                  </p>
  
                  <p class="content-paragraph">
                      Facilisi nullam vehicula ipsum a arcu cursus vitae. Massa sapien faucibus et molestie ac. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Sit amet massa vitae tortor condimentum lacinia. Sit amet risus nullam eget felis. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Tellus at urna condimentum mattis pellentesque id nibh tortor. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Magna etiam tempor orci eu lobortis elementum nibh tellus. Volutpat ac tincidunt vitae semper quis. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Id leo in vitae turpis massa sed elementum tempus. Convallis tellus id interdum velit laoreet id donec ultrices. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Amet cursus sit amet dictum sit amet justo donec. Habitant morbi tristique senectus et netus.
                  </p>
              </div>
              <div slot="footer">
                  <ui5-bar design="FloatingFooter">
                      <ui5-icon name="home" slot="startContent"></ui5-icon>
                      <ui5-button design="Positive" slot="endContent">Agree</ui5-button>
                      <ui5-button design="Negative" slot="endContent">Decline</ui5-button>
                      <ui5-button design="Transparent" slot="endContent">Cancel</ui5-button>
                  </ui5-bar>
              </div>
          </ui5-page>
    `,
  }),
};
