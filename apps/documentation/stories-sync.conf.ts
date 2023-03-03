import {WrapperConfig} from "@ui5/webcomponents-wrapper";
import {NodeFsImplementation} from "@ui5/webcomponents-wrapper-fs-commit";
import {ui5SamplesParser} from "@ui5/webcomponents-samples-parser";
import {storybookFilesGenerator} from "@ui5/webcomponents-ngx-generator";

const fsAdapter = new NodeFsImplementation();
export default {
  getComponents: () => ui5SamplesParser({
    sampleFiles: fsAdapter.queryFiles("apps/documentation/storybook-samples/**/*.sample.html", []),
    getStorySections: (rootElement: Document) => {
      return Array.from(rootElement.querySelectorAll('section'));
    },
    getStoryName: (storySection): string => {
      return storySection.querySelector(':scope > *:first-child')?.textContent as string;
    },
    getStoryCode: (storySection): string => {
      return storySection.querySelector('.snippet')?.innerHTML as string;
    },
  }),
  generator: (components: Array<{ sampleFilePath: string, stories: { name: string, code: string }[] }>) => {
    const stories = storybookFilesGenerator(components, {
      storyFileNameFactory: samplePath => {
        return samplePath.replace(/apps\/documentation\/storybook-samples\/(.*).sample.html$/, 'app/stories/$1.stories.ts').toLowerCase();
      }
    });
    Object.values(stories).forEach(story => {
      story.addImport(['Ui5WebcomponentsModule'], '@ui5/webcomponents-ngx');
      story.defaultExport = () => {
        return `
        export default {
          title: 'UI5 Web Components / ${story.sample.sampleFilePath.replace(/apps\/documentation\/storybook-samples\/(.*).sample.html$/, '$1').split('/').map(n => {
          return n.charAt(0).toUpperCase() + n.slice(1);
        }).join(' / ')}',
          decorators: [
           moduleMetadata({
             imports: [Ui5WebcomponentsModule],
           }),
         ],
        } as Meta;
      `
      };
    })
    return stories;
  },
} as Partial<WrapperConfig<any>>
