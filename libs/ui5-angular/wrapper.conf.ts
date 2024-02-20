import { ComponentData } from "@ui5/webcomponents-transformer";
import { customElementSchemaParser } from "@ui5/webcomponents-schema-parser";
import {
  AngularExportSpecifierType,
  AngularGeneratedFile,
  AngularModuleFile,
  NgPackageFile,
  ComponentFile,
  ui5componentsWrapper
} from "@ui5/webcomponents-transformer";
import { camelCase, kebabCase } from "lodash";
import { join } from "path";
import { Ui5NgxTransformerConfig } from "@ui5/webcomponents-ngx-schematics";
import { format } from "prettier";

const pascalCase = src => (str => str.charAt(0).toUpperCase() + str.slice(1))(camelCase(src));

const classNameForThemingService = (packageName: 'fiori' | 'main' | 'compat') => `Ui5Webcomponents${pascalCase(packageName)}ThemingService`;

class ThemingServiceFile extends AngularGeneratedFile {
  className: string;
  override apfPath = `@ui5/webcomponents-ngx/${this.baseDir}`;

  constructor(protected baseDir: string, protected packageName: 'fiori' | 'main' | 'compat') {
    super();
    this.addImport('WebcomponentsThemingProvider', '@ui5/webcomponents-ngx/theming');
    this.addImport('Injectable', '@angular/core');
    this.move(`${baseDir}/index.ts`);
    this.className = classNameForThemingService(packageName);
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
          super(() => import('@ui5/webcomponents${this.packageName === 'main' ? '' : `-${this.packageName}`}/dist/generated/json-imports/Themes.js'))
        }
      }
    `
  }

  override getCode(): Promise<string> {
    return format([
      this.getImportsCode(),
      this.getServiceCode(),
      this.getExportsCode()
    ].join('\n'), {
      parser: 'typescript',
      singleQuote: true,
      plugins: ['prettier-plugin-organize-imports']
    });
  }
}

const packageNames = ['fiori', 'main', 'compat'];

const componentGenerator = (components: ComponentData[]) =>
  ui5componentsWrapper(components, {
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
      const finalPath = path.replace(/^@ui5\/webcomponents(-base|-fiori|-compat)?\/dist\/(.*)\.js$/, '$2').split('/');
      return join(module || 'main', finalPath.map(kebabCase).join('/'), 'index.ts')
    },
    apfPathFactory: (path) => {
      if (path.endsWith('.ts')) {
        const pathSegments = path.split('/').slice(0, -1);
        return join('@ui5', 'webcomponents-ngx', ...pathSegments);
      }
      const module = path.match(/^@ui5\/webcomponents-(.*)\/dist\/(.*)\.js$/)?.[1];
      const finalPath = path.replace(/^@ui5\/webcomponents(-base|-fiori|-compat)?\/dist\/(.*)(index)?\.(js|ts)$/, '$2').split('/');
      return join('@ui5/webcomponents-ngx', module || 'main', finalPath.map(kebabCase).join('/'))
    }
  })

const ui5WrapperConfig: Ui5NgxTransformerConfig<ComponentData> = {
  gatherer: () => customElementSchemaParser({
    sources: [
      '@ui5/webcomponents-base/dist/custom-elements-internal.json',
      '@ui5/webcomponents-fiori/dist/custom-elements-internal.json',
      '@ui5/webcomponents-compat/dist/custom-elements-internal.json',
      '@ui5/webcomponents/dist/custom-elements-internal.json'
    ]
  }),
  transformers: [
    (components: ComponentData[]) => {
      const filesMap = componentGenerator(components).reduce((acc, file) => {
        acc[file.path] = file;
        return acc;
      }, {});
      const indexFile = filesMap['index.ts'] as AngularGeneratedFile;
      if (!indexFile) {
        throw new Error('No index file found');
      }
      indexFile.addExport('*', '@ui5/webcomponents-ngx/theming');
      indexFile.addExport('*', '@ui5/webcomponents-ngx/icons');
      indexFile.addExport('*', '@ui5/webcomponents-ngx/config');
      for (const packageName of packageNames) {
        const themingServiceFile = new ThemingServiceFile(`${packageName}/theming`, packageName as 'fiori' | 'main' | 'compat');
        const moduleFile = filesMap[`${packageName}/ui5-${packageName}.module.ts`] as AngularModuleFile;
        const themingNgPackage = new NgPackageFile(themingServiceFile, `${packageName}/theming`);
        indexFile.addExport('*', `@ui5/webcomponents-ngx/${packageName}/theming`);

        filesMap[themingServiceFile.path] = themingServiceFile;
        filesMap[themingNgPackage.path] = themingNgPackage;
        moduleFile
          .addProvider(themingServiceFile, themingServiceFile.className, true, false)
          .addImport({
            specifiers: [],
            path: `@ui5/webcomponents${packageName === 'main' ? '' : `-${packageName}`}/dist/Assets.js`
          });
      }

      // There is a need for a custom getter and setter for the RadioButton
      (filesMap['main/radio-button/index.ts'] as ComponentFile).cvaGetterCode = `get cvaValue() { return this.element.value; }`;
      (filesMap['main/radio-button/index.ts'] as ComponentFile).cvaSetterCode = `set cvaValue(val: string) { this.element.checked = this.element.value === val; }`;

      // There is a bug in the generator that causes the incorrect ng-package.json to be generated for the main package
      delete filesMap['ng-package.json'];
      return Object.values(filesMap);
    }
  ]
};

export default ui5WrapperConfig;
