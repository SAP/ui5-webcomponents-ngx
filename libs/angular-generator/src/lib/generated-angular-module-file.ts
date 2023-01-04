import {AngularGeneratorOptions, ModuleDescription} from "./angular-generator-options";
import {ExportSpecifier, ExportSpecifierType, GeneratedFile} from "@ui5/webcomponents-wrapper";
import {format} from "prettier";
import {AngularExportSpecifierType} from "./angular-export-specifier-type";

const isDeclaration = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.Declaration);
};

const isModule = (specifier: ExportSpecifier<AngularExportSpecifierType>) => {
  return specifier.types.includes(AngularExportSpecifierType.NgModule);
}

const getExported = ({exported}: ExportSpecifier<AngularExportSpecifierType>) => typeof exported === 'string' ? exported : exported();

export class GeneratedAngularModuleFile extends GeneratedFile<AngularExportSpecifierType> {
  protected moduleNaming!: { className: string, fileName: string };

  constructor(private moduleDescriptor: ModuleDescription, private includedFiles: GeneratedFile<AngularExportSpecifierType>[], private options: AngularGeneratorOptions) {
    super();
    this.moduleNaming = {
      className: moduleDescriptor.className,
      fileName: moduleDescriptor.fileName
    };
    this.move(this.moduleNaming.fileName);
    this.addImport('NgModule', '@angular/core');
    this.addExport({
      local: () => this.moduleNaming.className,
      exported: () => this.moduleNaming.className,
      types: [ExportSpecifierType.Class, AngularExportSpecifierType.NgModule]
    });
  }

  getCode(): string {
    let code = '';
    const declarations = new Set();
    const imports = new Set();
    const includedFiles = this.includedFiles.filter(this.moduleDescriptor.included);

    includedFiles.forEach(component => {
      component.exports.forEach(exportData => {
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
        });
      });
    });
    code += `
      ${this.getImportsCode()}

      const declarations = [${Array.from(declarations).join(', \n')}];
      const imports = [${Array.from(imports).join(', \n')}];
      @NgModule({
        imports: [...imports],
        declarations: [
          ...declarations
        ],
        exports: [
          ...declarations,
          ...imports
        ]
      })\n
      class ${this.moduleNaming.className} {}
      ${this.getExportsCode()}
    `
    return format(code, {parser: 'typescript'});
  }
}
