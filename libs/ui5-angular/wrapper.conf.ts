import { ComponentData } from "@ui5/webcomponents-wrapper";
import { apiJsonParser } from "@ui5/webcomponents-schema-parser";
import {
  AngularExportSpecifierType,
  AngularGeneratedFile,
  AngularModuleFile,
  NgPackageFile,
  TsComponentFile,
  ui5componentsWrapper
} from "@ui5/webcomponents-ngx-generator";
import { camelCase, kebabCase } from "lodash";
import { join } from "path";
import { Ui5NxWrapperConfig } from "@ui5/webcomponents-nx";

const pascalCase = src => (str => str.charAt(0).toUpperCase() + str.slice(1))(camelCase(src));

class ThemingServiceFile extends AngularGeneratedFile {
  className: string;
  override apfPath = `@ui5/webcomponents-ngx/${this.baseDir}`;

  constructor(protected baseDir: string, protected packageName: 'fiori' | 'main') {
    super();
    this.addImport('WebcomponentsThemingProvider', '@ui5/webcomponents-ngx/theming');
    this.addImport('Injectable', '@angular/core');
    this.move(`${baseDir}/index.ts`);
    this.className = `Ui5Webcomponents${pascalCase(packageName)}ThemingService`;
    this.addExport({
      local: () => this.className,
      exported: () => this.className,
      types: [AngularExportSpecifierType.Provider]
    })
  }

  getServiceCode(): string {
    return `
      @Injectable({providedIn: 'root'})
      class ${this.className} extends WebcomponentsThemingProvider {
        name = ${JSON.stringify(kebabCase(this.className))};
        constructor() {
          super(() => import('@ui5/webcomponents${this.packageName === 'main' ? '' : '-fiori'}/dist/generated/json-imports/Themes.js'))
        }
      }
    `
  }

  override getCode(): string {
    return [this.getImportsCode(), this.getServiceCode(), this.getExportsCode()].join('\n');
  }
}

const packageNames = ['fiori', 'main'];

const ui5WrapperConfig: Ui5NxWrapperConfig<ComponentData> = {
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
        ...packageNames.map(packageName => ({
          fileName: `${packageName}/ui5-${packageName}.module.ts`,
          included: (file) => {
            return file.path.startsWith(packageName);
          }
        })),
        {
          fileName: 'ui5-webcomponents.module.ts',
          included: (file) => {
            return file.path.endsWith('module.ts');
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
    files['index.ts'].addExport('*', '@ui5/webcomponents-ngx/theming');
    files['index.ts'].addExport('*', '@ui5/webcomponents-ngx/icons');
    files['index.ts'].addExport('*', '@ui5/webcomponents-ngx/config');

    packageNames.forEach(packageName => {
      files[`${packageName}/theming/index.ts`] = new ThemingServiceFile(`${packageName}/theming`, packageName as 'fiori' | 'main');
      files[`${packageName}/theming/ng-package.json`] = new NgPackageFile(files[`${packageName}/theming/index.ts`], `${packageName}/theming`);
      files['index.ts'].addExport('*', `@ui5/webcomponents-ngx/${packageName}/theming`);

      (files[`${packageName}/ui5-${packageName}.module.ts`] as unknown as AngularModuleFile).addProvider(files[`${packageName}/theming/index.ts`], `Ui5Webcomponents${pascalCase(packageName)}ThemingService`, true, false);
      (files[`${packageName}/ui5-${packageName}.module.ts`] as unknown as AngularModuleFile).addImport({specifiers: [], path: `@ui5/webcomponents${packageName === 'main' ? '' : '-fiori'}/dist/Assets.js`})
    });
    (files['main/radio-button/index.ts'] as TsComponentFile).getCvaGetSetCode = () => ({
      getterContent: `return elementRef.nativeElement.value`,
      setterContent: `elementRef.nativeElement.checked = elementRef.nativeElement.value === val;`
    })
    delete files['ng-package.json']; // There is a bug and I have no idea how to fix it
    return files;
  }
};

export default ui5WrapperConfig;
