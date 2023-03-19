import {ComponentData, WrapperConfig} from "@ui5/webcomponents-wrapper";
import {NodeFsImplementation} from "@ui5/webcomponents-wrapper-fs-commit";
import {ui5SamplesParser} from "@ui5/webcomponents-samples-parser";
import apiJsonParser from '@ui5/webcomponents-api-json-parser';
import {storybookFilesGenerator} from "@ui5/webcomponents-ngx-generator";
import {snakeCase} from "lodash";
import {JSDOM} from "jsdom";

const fsAdapter = new NodeFsImplementation();
export default {
  getComponents: async () => {
    const apiJson = await apiJsonParser({
      apiJsonPaths: [
        '@ui5/webcomponents-base/dist/api.json',
        '@ui5/webcomponents-fiori/dist/api.json',
        '@ui5/webcomponents/dist/api.json',
      ]
    }).then(components => {
      return components.reduce((acc: Record<string, ComponentData>, component: ComponentData) => {
        acc[component.baseName] = component;
        return acc;
      }, {});
    });
    return ui5SamplesParser({
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
    }).map(sample => {
      const baseName = sample.sampleFilePath.toString().replace(/apps\/documentation\/storybook-samples\/(.*)\/(.*).sample.html$/, '$2');
      return {
        ...sample,
        componentData: apiJson[baseName]
      }
    });
  },
  generator: (components: Array<{ sampleFilePath: string, componentData: ComponentData, stories: { name: string, code: string }[] }>) => {
    const stories = storybookFilesGenerator(components, {
      storyFileNameFactory: samplePath => {
        return samplePath.replace(/apps\/documentation\/storybook-samples\/(.*).sample.html$/, 'app/stories/$1.stories.ts').toLowerCase();
      }
    });
    Object.values(stories).forEach(story => {
      story.addImport(['Ui5WebcomponentsModule', story.componentClassName()], '@ui5/webcomponents-ngx');
      story.addImport(['extractArgTypes'], "../../arg-type-tools");
      story.defaultExport = () => {
        let description = story.sample.componentData.description;
        const componentPath = story.sample.sampleFilePath.replace(/apps\/documentation\/storybook-samples\/(.*).sample.html$/, '$1').split('/');

        description = description.replace(/import "@ui5\/webcomponents-?(.*)\/dist\/(\w+)(.js)?"/, `import { ${story.componentClassName()} } from "@ui5/webcomponents-ngx/${componentPath.map(n => snakeCase(n).replace(/_/g, '-')).join('/')}"`);
        return `
        const description = \`${description}\`;
        export default {
          title: 'UI5 Web Components / ${componentPath.map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(' / ')}',
          component: ${story.componentClassName()},
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
            }
           }
         }
        } as Meta;
      `
      };
    })
    return stories;
  },
} as Partial<WrapperConfig<any>>
