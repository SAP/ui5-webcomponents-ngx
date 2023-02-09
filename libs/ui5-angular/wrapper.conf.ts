import {ComponentData, GeneratedFile, WrapperConfig} from "@ui5/webcomponents-wrapper";
import apiJsonParser from "@ui5/webcomponents-api-json-parser";
import {AngularExportSpecifierType, angularGenerator} from "@ui5/webcomponents-ngx-generator";
import {kebabCase} from "lodash";
import {join, relative} from "path";
import {sync} from "fast-glob";
import {readFileSync} from "fs";

export default {
  getComponents: () => apiJsonParser({
    apiJsonPaths: [
      '@ui5/webcomponents-base/dist/api.json',
      '@ui5/webcomponents-fiori/dist/api.json',
      '@ui5/webcomponents/dist/api.json'
    ]
  }),
  generator: (components) => angularGenerator(components, {
    modules: [
      {
        fileName: 'ui5-angular.module.ts',
        className: 'Ui5AngularModule',
        primary: true,
        included: () => {
          return true;
        }
      },
      {
        fileName: 'fiori/ui5-fiori.module.ts',
        className: 'Ui5FioriModule',
        included: (file: GeneratedFile<AngularExportSpecifierType>) => {
          return file.path.startsWith('fiori');
        }
      },
      {
        fileName: 'main/ui5-main.module.ts',
        className: 'Ui5MainModule',
        included: (file: GeneratedFile<AngularExportSpecifierType>) => {
          return file.path.startsWith('main');
        }
      }
    ],
    exportFileNameFactory: (path) => {
      const module = path.match(/^@ui5\/webcomponents-(.*)\/dist\/(.*)\.js$/)?.[1];
      const finalPath = path.replace(/^@ui5\/webcomponents(-base|-fiori)?\/dist\/(.*)\.js$/, '$2').split('/');
      return join(module || 'main', 'directives/' + finalPath.map(kebabCase).join('/') + '.ts')
    },
    storybookConfig: {
      samples: sync(join(__dirname, 'src', '**', '*.html')).map((path) => {
        return {
          html: readFileSync(path, 'utf-8'),
          componentName: path.replace(/.+\/([^\\.]+)\.sample\.html$/, '$1'),
          storyPath: relative(join(__dirname, 'src'), path).replace(/\/(samples)\/(.+)(\.sample\.html)/g, '/stories/$2.stories.ts')
        }
      }),
      getStorySections: (rootElement: Document) => {
        return Array.from(rootElement.querySelectorAll('section'));
      },
      getStoryName: (storySection): string => {
        return storySection.querySelector(':scope > *:first-child')?.textContent as string;
      },
      getStoryCode: (storySection): string => {
        return storySection.querySelector('.snippet')?.innerHTML as string;
      }
    }
  })
} as Partial<WrapperConfig<ComponentData>>;
