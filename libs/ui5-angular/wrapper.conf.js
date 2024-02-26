const {
  AngularExportSpecifierType,
  AngularGeneratedFile,
  NgPackageFile,
  ui5componentsWrapper
} = require("@ui5/webcomponents-transformer");
const {customElementSchemaParser} = require("@ui5/webcomponents-schema-parser");
const {camelCase, kebabCase} = require("lodash");
const {join} = require("path");
const {format} = require("prettier");

const pascalCase = src => (str => str.charAt(0).toUpperCase() + str.slice(1))(camelCase(src));

const classNameForThemingService = (packageName: 'fiori' | 'main' | 'compat') => `Ui5Webcomponents${pascalCase(packageName)}ThemingService`;
/**
 * @param packageName {'fiori' | 'main'}
 * @returns {`Ui5Webcomponents${'Fiori' | 'Main'}ThemingService`}
 */
const classNameForThemingService = (packageName) => `Ui5Webcomponents${pascalCase(packageName)}ThemingService`;

class ThemingServiceFile extends AngularGeneratedFile {
  className;
  apfPath = `@ui5/webcomponents-ngx/${this.baseDir}`;

  /**
   * @param baseDir {string}
   * @param packageName {'fiori' | 'main' | 'compat'}
   */
  constructor(baseDir, packageName) {
    super();
    this.baseDir = baseDir;
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

  /**
   * @returns {string}
   */
  getServiceCode() {
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

  /**
   * @returns {Promise<string>}
   */
  async getCode() {
    return await format([
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

/**
 * @param components {import("@ui5/webcomponents-transformer").ComponentData[]}
 * @returns {*}
 */
const componentGenerator = (components) =>
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

/**
 * @type {import("@ui5/webcomponents-transformer").Ui5NgxTransformerConfig<import('@ui5/webcomponents-transformer').ComponentData>}
 */
const ui5WrapperConfig  = {
  gatherer: () => customElementSchemaParser({
    sources: [
      '@ui5/webcomponents-base/dist/custom-elements-internal.json',
      '@ui5/webcomponents-fiori/dist/custom-elements-internal.json',
      '@ui5/webcomponents-compat/dist/custom-elements-internal.json',
      '@ui5/webcomponents/dist/custom-elements-internal.json'
    ]
  }),
  transformers: [
    /**
     * @param components {import("@ui5/webcomponents-transformer").ComponentData[]}
     * @returns {import("@ui5/webcomponents-transformer").GeneratedFile[]}
     */
    (components) => {
      const filesMap = componentGenerator(components).reduce((acc, file) => {
        acc[file.path] = file;
        return acc;
      }, {});
      const indexFile = filesMap['index.ts'];
      if (!indexFile) {
        throw new Error('No index file found');
      }
      indexFile.addExport('*', '@ui5/webcomponents-ngx/theming');
      indexFile.addExport('*', '@ui5/webcomponents-ngx/icons');
      indexFile.addExport('*', '@ui5/webcomponents-ngx/config');
      for (const packageName of packageNames) {
        const themingServiceFile = new ThemingServiceFile(`${packageName}/theming`, packageName);
        const moduleFile = filesMap[`${packageName}/ui5-${packageName}.module.ts`];
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
      (filesMap['main/radio-button/index.ts']).cvaGetterCode = `get cvaValue() { return this.element.value; }`;
      (filesMap['main/radio-button/index.ts']).cvaSetterCode = `set cvaValue(val: string) { this.element.checked = this.element.value === val; }`;

      // There is a bug in the generator that causes the incorrect ng-package.json to be generated for the main package
      delete filesMap['ng-package.json'];
      return Object.values(filesMap);
    }
  ],
  logOutputFileNames: '.ngx-generation-result.json'
};

module.exports = ui5WrapperConfig;
