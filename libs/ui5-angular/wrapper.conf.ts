import {ComponentData, WrapperConfig} from "@ui5/webcomponents-wrapper";
import apiJsonParser from "@ui5/webcomponents-api-json-parser";
import {ui5componentsWrapper} from "@ui5/webcomponents-ngx-generator";
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
  generator: (components) => {
    const files = ui5componentsWrapper(components, {
      modules: [
        {
          fileName: 'fiori/ui5-fiori.module.ts',
          included: (file) => {
            return file.path.startsWith('fiori');
          }
        },
        {
          fileName: 'main/ui5-main.module.ts',
          included: (file) => {
            return file.path.startsWith('main');
          }
        }
      ],
      exportFileNameFactory: (path) => {
        const module = path.match(/^@ui5\/webcomponents-(.*)\/dist\/(.*)\.js$/)?.[1];
        const finalPath = path.replace(/^@ui5\/webcomponents(-base|-fiori)?\/dist\/(.*)\.js$/, '$2').split('/');
        return join(module || 'main', finalPath.map(kebabCase).join('/'), 'index.ts')
      },
      apfPathFactory: (path) => {
        if (path.endsWith('.ts')) {
          const pathSegments = path.split('/').slice(0, -1);
          return join('@ui5', 'webcomponents-ngx', ...pathSegments);
        }
        const module = path.match(/^@ui5\/webcomponents-(.*)\/dist\/(.*)\.js$/)?.[1];
        const finalPath = path.replace(/^@ui5\/webcomponents(-base|-fiori)?\/dist\/(.*)(index)?\.(js|ts)$/, '$2').split('/');
        return join('@ui5/webcomponents-ngx', module || 'main', finalPath.map(kebabCase).join('/'))
      }
    });
    files['index.ts'].addExport(['Ui5WebcomponentsThemingModule', 'Ui5WebcomponentsThemingService'], '@ui5/webcomponents-ngx/theming');
    return files;
  }
} as Partial<WrapperConfig<ComponentData>>;
