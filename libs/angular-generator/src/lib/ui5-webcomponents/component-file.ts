import {AngularGeneratedFile} from "../angular-generated-file";
import {ComponentData, ExportSpecifier, ExportSpecifierType} from "@ui5/webcomponents-wrapper";
import {AngularGeneratorOptions} from "../angular-generator-options";
import {AngularExportSpecifierType} from "../angular-export-specifier-type";
import {genericCva} from "./generic-cva";
import {ComponentWrapperCreator} from "./component-wrapper-creator";
import {format as prettierFormat} from "prettier";
import {utilsFile} from "./utils";
import {outputTypesImportData} from "./output-types-import-data";

export class ComponentFile extends AngularGeneratedFile {
  wrapperExportSpecifier!: ExportSpecifier<AngularExportSpecifierType>;
  getComponentCode = () => ComponentWrapperCreator(this, this.elementTypeName, this.eventsNameMapName, this.options, this.componentsMap);
  elementTypeName!: string;
  eventsNameMapName!: string;
  get selector(): string {
    if (this.options.selectorFactory) {
      return this.options.selectorFactory(this.componentData);
    }
    if (this.options.selectorPostfix) {
      return `${this.componentData.selector}-${this.options.selectorPostfix}`;
    }
    return this.componentData.selector;
  }

  constructor(readonly componentData: ComponentData, private options: AngularGeneratorOptions, private componentsMap: Map<ComponentData, AngularGeneratedFile>) {
    super();
    this.componentsMap.set(componentData, this);
    this.move(options.exportFileNameFactory(componentData.path));
    this.apfPath = options.apfPathFactory(componentData.path);
    this.initializeImportsAndExports();
    this.elementTypeName = `${this.wrapperExportSpecifier.local}Element`
    this.eventsNameMapName = `${this.wrapperExportSpecifier.local}EventsMap`
  }

  private initializeImportsAndExports(): void {
    this.wrapperExportSpecifier = {
      local: this.componentData.baseName + 'Component',
      exported: this.componentData.baseName + 'Component',
      types: [ExportSpecifierType.Class, AngularExportSpecifierType.NgModule]
    }
    this.addExport(this.wrapperExportSpecifier);
    this.addImport(['Component', 'ElementRef', 'NgZone', 'ChangeDetectorRef'], '@angular/core');
    this.addImport({specifiers: [], path: this.componentData.path});
    this.addImport(['ProxyInputs', 'ProxyMethods', 'ProxyOutputs'], utilsFile.relativePathFrom);
    if (this.componentData.formData.length > 0) {
      this.addImport('forwardRef', '@angular/core');
      this.addImport(['Observable', 'fromEvent', 'merge'], 'rxjs');
      this.addImport('NG_VALUE_ACCESSOR', '@angular/forms');
      this.addImport(genericCva.exports[0].specifiers[0].exported, genericCva.relativePathFrom);
    }
    if (this.componentData.outputs.length > 0) {
      this.addImport(outputTypesImportData(this.componentData, this.componentsMap));
    }
    if (this.componentData.inputs.length > 0) {
      this.componentData.inputs.filter(i => typeof i.type !== 'string').forEach((input) => {
        const types = input.type as ComponentData[];
        types.forEach(type => {
          const cmp = type === this.componentData ? this : this.componentsMap.get(type);
          if (!cmp) {
            throw new Error(`Component ${type.baseName} not found in the map`);
          }
          this.addImport(cmp.exports[0].specifiers[0].exported, cmp.relativePathFrom);
        });
      });
    }

    this.componentData.slots.forEach(slot => {
      slot.supportedElements.forEach(type => {
        const cmp = type === this.componentData ? this : this.componentsMap.get(type);
        if (!cmp) {
          throw new Error(`Component ${type.baseName} not found in the map`);
        }
        this.addImport(cmp.exports[0].specifiers[0].exported, cmp.relativePathFrom);
      })
    });
  }
  override getCode(): string {
    const fragments = [this.getImportsCode(), this.getComponentCode()];
    return prettierFormat(fragments.join('\n'), {parser: 'typescript'});
  }
}
