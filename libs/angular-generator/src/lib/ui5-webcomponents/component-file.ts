import { AngularGeneratedFile } from '../angular-generated-file';
import { ComponentData, ExportSpecifierType } from "@ui5/webcomponents-transformer";
import { AngularGeneratorOptions } from "../angular-generator-options";
import { AngularExportSpecifierType } from "@ui5/webcomponents-ngx-generator";
import { utilsFile } from "./utils";
import { outputTypesImportData } from "./output-types-import-data";
import { genericCva } from "./generic-cva";

export class ComponentFile extends AngularGeneratedFile {
  private componentClassName = `${this.componentData.baseName}Component`;

  constructor(
    readonly componentData: ComponentData,
    private options: AngularGeneratorOptions,
    private componentsMap: Map<ComponentData, AngularGeneratedFile>
  ) {
    super();
    this.componentsMap.set(componentData, this);
    this.move(options.exportFileNameFactory(componentData.path));
    this.apfPath = options.apfPathFactory(componentData.path);
    this.initializeImportsAndExports();
  }

  get selector(): string {
    if (this.options.selectorFactory) {
      return this.options.selectorFactory(this.componentData);
    }
    if (this.options.selectorPostfix) {
      return `${this.componentData.selector}-${this.options.selectorPostfix}`;
    }
    return this.componentData.selector;
  }

  private initializeImportsAndExports(): void {
    this.addExport({
      local: this.componentClassName,
      exported: this.componentClassName,
      types: [ExportSpecifierType.Class, AngularExportSpecifierType.NgModule]
    })
    this.addImport(['Component', 'ElementRef', 'NgZone', 'ChangeDetectorRef'], '@angular/core');
    this.addImport(['ProxyInputs', 'ProxyMethods', 'ProxyOutputs'], utilsFile.relativePathFrom);
    if (this.componentData.outputs.length) {
      this.addImport(['EventEmitter'], '@angular/core');
      this.addImport(outputTypesImportData(this.componentData, this.componentsMap));
    }
    if (this.componentData.formData.length > 0) {
      this.addImport(['NG_VALUE_ACCESSOR'], '@angular/forms');
      this.addImport(['forwardRef'], '@angular/core');
      this.addImport(['merge', 'fromEvent', 'first'], 'rxjs');
      this.addImport(genericCva.exports[0].specifiers[0].exported, genericCva.relativePathFrom);
    }
    this.addImport({specifiers: [], path: this.componentData.path})
  }
}
