import {GeneratedFile, WrapperConfig} from "@ui5/webcomponents-wrapper";
import apiJsonParser from "@ui5/webcomponents-api-json-parser";
import {AngularExportSpecifierType, angularGenerator} from "@ui5/webcomponents-ngx-generator";
import {kebabCase} from "lodash";
import {join} from "path";

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
        included: (file) => {
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
    }
  })
} as Partial<WrapperConfig>;
