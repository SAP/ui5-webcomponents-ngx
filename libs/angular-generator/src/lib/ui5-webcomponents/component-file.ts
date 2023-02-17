import {AngularGeneratedFile} from "../angular-generated-file";
import {ComponentData, ExportSpecifier, ExportSpecifierType} from "@ui5/webcomponents-wrapper";
import {AngularGeneratorOptions} from "./angular-generator-options";
import {AngularExportSpecifierType} from "../angular-export-specifier-type";
import {genericCva} from "./generic-cva";
import {DirectiveWrapperCreator} from "./directive-wrapper-creator";
import {format as prettierFormat} from "prettier";

export class ComponentFile extends AngularGeneratedFile {
  wrapperExportSpecifier!: ExportSpecifier<AngularExportSpecifierType>;
  getDirectiveCode = () => DirectiveWrapperCreator(this, this.elementTypeName, this.eventsNameMapName, this.options, this.componentsMap);
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

  constructor(readonly componentData: ComponentData, private options: AngularGeneratorOptions, private componentsMap: Map<ComponentData, ComponentFile>) {
    super();
    this.move(options.exportFileNameFactory(componentData.path));
    this.apfPath = options.apfPathFactory(componentData.path);
    this.initializeImportsAndExports();
    this.elementTypeName = `${this.wrapperExportSpecifier.local}Element`
    this.eventsNameMapName = `${this.wrapperExportSpecifier.local}EventsMap`
  }

  private initializeImportsAndExports(): void {
    this.wrapperExportSpecifier = {
      local: this.componentData.baseName + 'Directive',
      exported: this.componentData.baseName + 'Directive',
      types: [ExportSpecifierType.Class, AngularExportSpecifierType.NgModule]
    }
    this.addExport(this.wrapperExportSpecifier);
    this.addImport(['Directive', 'ElementRef'], '@angular/core');
    this.addImport({specifiers: [], path: this.componentData.path})
    if (this.componentData.formData.length > 0) {
      this.addImport('forwardRef', '@angular/core');
      this.addImport(['Observable', 'fromEvent', 'merge'], 'rxjs');
      this.addImport('NG_VALUE_ACCESSOR', '@angular/forms');
      this.addImport(genericCva.exports[0].specifiers[0].exported, genericCva.relativePathFrom);
    }
    if (this.componentData.inputs.length > 0) {
      this.addImport('Input', '@angular/core');
      this.componentData.inputs.filter(i => typeof i.type !== 'string').forEach((input) => {
        const types = input.type as ComponentData[];
        types.forEach(type => {
          const cmp = type === this.componentData ? this : this.componentsMap.get(type);
          if (!cmp) {
            throw new Error(`Component ${type.baseName} not found in the map`);
          }
          this.addImport(cmp.wrapperExportSpecifier.exported, cmp.relativePathFrom);
        });
      });
    }
    if (this.componentData.outputs.length > 0) {
      this.addImport(['Observable', 'NEVER'], 'rxjs');
      this.addImport('Output', '@angular/core');
      this.addExport({
        exported: () => this.eventsNameMapName,
        local: () => this.eventsNameMapName,
        types: [ExportSpecifierType.Type]
      });
    }

    this.componentData.slots.forEach(slot => {
      slot.supportedElements.forEach(type => {
        const cmp = type === this.componentData ? this : this.componentsMap.get(type);
        if (!cmp) {
          throw new Error(`Component ${type.baseName} not found in the map`);
        }
        this.addImport(cmp.wrapperExportSpecifier.exported, cmp.relativePathFrom);
      })
    });
    this.addExport([
      {
        exported: () => this.elementTypeName,
        local: () => this.elementTypeName,
        types: [ExportSpecifierType.Type]
      }
    ]);
  }
  override getCode(): string {
    const fragments = [this.getImportsCode(), this.getDirectiveCode(), this.getExportsCode()];
    return prettierFormat(fragments.join('\n'), {parser: 'typescript'});
  }
}
