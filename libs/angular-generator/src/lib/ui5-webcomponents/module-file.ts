import {AngularGeneratedFile} from "../angular-generated-file";
import {AngularGeneratorOptions, ModuleDescription} from "./angular-generator-options";
import {startCase} from "lodash";
import {AngularExportSpecifierType} from "../angular-export-specifier-type";
import {ExportSpecifier} from "@ui5/webcomponents-wrapper";

const isDeclaration = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.Declaration);
};

const isModule = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.NgModule);
}

const isProvider = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.Provider);
}

const getExported = ({exported}: ExportSpecifier<AngularExportSpecifierType>) => typeof exported === 'string' ? exported : exported();

export class ModuleFile extends AngularGeneratedFile {
  protected includedFiles: AngularGeneratedFile[];
  protected className: string;

  constructor(protected potentialFilesToInclude: AngularGeneratedFile[], protected moduleDescription: ModuleDescription, protected options: AngularGeneratorOptions) {
    super();
    this.move(this.moduleDescription.fileName);
    this.className = startCase(this.moduleDescription.fileName.split('/').pop()!.match(/(.*)\.ts$/)![1]).split(' ').join('');
    this.apfPath = this.options.apfPathFactory(this.moduleDescription.fileName);
    this.includedFiles = potentialFilesToInclude.filter(moduleDescription.included);
    this.addImport(['NgModule'], '@angular/core');
    this.addExport({
      local: () => this.className,
      exported: () => this.className,
      types: [AngularExportSpecifierType.NgModule]
    });
  }

  addToImportsMetadata(): void {
  }

  override getCode(): string {
    const declarations = new Set<string>();
    const imports = new Set<string>();
    const providers = new Set<string>();
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
    return `
      ${this.getImportsCode()}

      const declarations = [${[...declarations.values()].join(',\n')}];
      const imports = [${[...imports.values()].join(',\n')}];
      const providers = [${[...providers.values()].join(',\n')}];

      @NgModule({
        imports: [...imports],
        declarations: [...declarations],
        providers: [...providers],
        exports: [...imports, ...declarations]
      })
      class ${this.className} {}
      ${this.getExportsCode()}
    `;
  }
}
