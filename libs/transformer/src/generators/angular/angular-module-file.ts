import { AngularGeneratedFile } from "./angular-generated-file";
import { ModuleDescription } from "./angular-generator-options";
import { camelCase, startCase } from "lodash";
import { AngularExportSpecifierType } from "./angular-export-specifier-type";
import { getExported } from "./utils/get-exported";
import { isDeclaration } from "./utils/is-declaration";
import { isModule } from "./utils/is-module";
import { isProvider } from "./utils/is-provider";
import { format as prettierFormat } from "prettier";

/**
 * The Angular NgModule file.
 */
export class AngularModuleFile extends AngularGeneratedFile {
  /** The files that are included in this module */
  protected includedFiles: AngularGeneratedFile[];
  /** The class name of the module */
  protected className: string;
  /** The providers that are included in this module */
  protected providers = new Map<string, Partial<{ init?: boolean; providersArray: boolean }>>();

  constructor(protected potentialFilesToInclude: AngularGeneratedFile[], protected moduleDescription: ModuleDescription) {
    super();
    this.move(this.moduleDescription.fileName);
    this.className = startCase(this.moduleDescription.fileName.split('/').pop()?.match(/(.*)\.ts$/)?.[1]).split(' ').join('');
    this.includedFiles = potentialFilesToInclude.filter(moduleDescription.included);
    this.addImport(['NgModule'], '@angular/core');
    this.addExport({
      local: () => this.className,
      exported: () => this.className,
      types: [AngularExportSpecifierType.NgModule]
    });
  }

  override getCode(): Promise<string> {
    const declarations = new Set<string>();
    const imports = new Set<string>();
    const providers = new Set([...this.providers.keys()].filter(className => !!this.providers.get(className)?.providersArray));
    this.includedFiles.forEach(file => {
      file.exports.forEach(exportData => {
        exportData.specifiers.forEach(specifier => {
          const exported = getExported(specifier);
          if (isDeclaration(specifier)) {
            declarations.add(exported);
            this.addImport(exported, exportData.path);
          }
          if (isModule(specifier)) {
            imports.add(exported);
            this.addImport(exported, exportData.path);
          }
          if (isProvider(specifier)) {
            providers.add(exported);
            this.addImport(exported, exportData.path);
          }
        });
      });
    });
    const exports = ['...imports', '...declarations'].filter((_, i) => [imports, declarations][i].size > 0);
    const needsConstructor = [...this.providers.keys()].filter(className => !!this.providers.get(className)?.init);
    const moduleContents = ((contents) => {
      return Object.keys(contents).reduce((acc, key) => {
        if (contents[key].length === 0) {
          return acc;
        }
        acc[key] = contents[key];
        return acc;
      }, {});
    })({
      imports: [...imports],
      declarations: [...declarations],
      providers: [...providers],
      exports
    });
    const variableDeclarations = Object.keys(moduleContents).map(key => {
      return `const ${key} = [${moduleContents[key].join(',')}]`
    }).join('\n');

    const moduleMetadata = Object.keys(moduleContents).map(key => {
      return `${key}: [...${key}]`;
    }).join(',\n');
    return prettierFormat(`
      ${this.getImportsCode()}

      ${variableDeclarations}

      @NgModule({
        ${moduleMetadata}
      })
      class ${this.className} {
        ${
      needsConstructor.length > 0 ? `constructor(${needsConstructor.map(className => camelCase(className) + ': ' + className).join(', ')}) {}` : ''
    }
      }
      ${this.getExportsCode()}
    `, { parser: 'typescript' });
  }

  /**
   * Adds a provider to the module.
   * @param file The file that contains the provider
   * @param specifier The specifier of the provider, e.g. `MyProvider`
   * @param shouldInitialize Whether the provider should be initialized in the constructor of the module.
   * @param providerInMetadata Whether the provider should be added to the `providers` array in the module metadata.
   */
  addProvider(file: AngularGeneratedFile, specifier: string, shouldInitialize = false, providerInMetadata = false): AngularModuleFile {
    this.addImport(specifier, file.relativePathFrom);
    this.providers.set(specifier, { init: shouldInitialize, providersArray: providerInMetadata });
    return this;
  }
}
