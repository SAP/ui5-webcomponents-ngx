import {AngularGeneratedFile} from "../angular-generated-file";
import {ComponentData, ExportSpecifierType, OutputType} from "@ui5/webcomponents-wrapper";
import {AngularGeneratorOptions} from "../angular-generator-options";
import {format as prettierFormat} from "prettier";
import {camelCase} from "lodash";
import {AngularExportSpecifierType} from "../angular-export-specifier-type";
import {genericCva} from "./generic-cva";
import {utilsFile} from "./utils";
import {inputsJson, outputsJson} from "./metadata-tools";
import {outputType} from "./output-type";
import {outputTypesImportData} from "./output-types-import-data";

/**
 * Class is used when the source component is a typescript file.
 * This class is responsible for creating the Angular component file
 * from TS web component file.
 */
export class TsComponentFile extends AngularGeneratedFile {
  private componentClassName = `${this.componentData.baseName}Component`;

  constructor(readonly componentData: ComponentData, private options: AngularGeneratorOptions, private componentsMap: Map<ComponentData, AngularGeneratedFile>) {
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

  private initializeImportsAndExports() {
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
      this.addImport(['merge', 'fromEvent'], 'rxjs');
      this.addImport(genericCva.exports[0].specifiers[0].exported, genericCva.relativePathFrom);
    }
    this.addImport({specifiers: [], path: this.componentData.path})

  }

  private getEventsMapInterface(): string {
    if (this.componentData.outputs.length === 0) {
      return '';
    }
    return `
      interface ${this.componentClassName}EventsMap extends Omit<HTMLElementEventMap, ${this.componentData.outputs.map(output => `'${output.name}'`).join(' | ')}> {
        ${this.componentData.outputs.map((output) => `${output.name}: CustomEvent<${outputType(output, this.componentsMap)}>;`).join('\n')}
      }
    `;
  }

  private getElementInterface(): string {
    const excludedProperties: Array<any> = [];
    // This is a temporary measure, until ts is improved there
    const interfaceBody = this.componentData.inputs.map(({name, type}) => {
      if (typeof type !== 'string' || type.indexOf('any') > -1) {
        return '';
      }
      excludedProperties.push({name});
      return `${name}: ${type};`;
    }).join('\n');
    const baseInterface = this.componentData.outputs.length > 0 || excludedProperties.length > 0 ? `Omit<${this.componentData.baseName}, ${[...this.componentData.outputs, ...excludedProperties].map(o => JSON.stringify(o.name)).join(' | ')}>` : this.componentData.baseName;

    if (this.componentData.outputs.length === 0) {
      return `
      export declare interface ${this.componentData.baseName}Element extends Partial<${baseInterface}> {${interfaceBody}}`;
    }
    return `
      export declare interface ${this.componentData.baseName}Element extends Partial<${baseInterface}> {
        ${interfaceBody}
        addEventListener<K extends keyof ${this.componentClassName}EventsMap>(type: K, listener: (this: ${this.componentData.baseName}Element, ev: ${this.componentClassName}EventsMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof ${this.componentClassName}EventsMap>(type: K, listener: (this: ${this.componentData.baseName}Element, ev: ${this.componentClassName}EventsMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
      }`
  }

  private getComponentCode(): string {
    const baseClass = () => {
      if (this.componentData.formData.length === 0) {
        return '';
      }
      return `extends ${genericCva.exports[0].specifiers[0].exported}`;
    }
    const cvaConstructor = (): string => {
      if (this.componentData.formData.length > 0) {
        let getValue, setValue;
        const outputEvents = [...(new Set(this.componentData.formData.reduce((acc: OutputType[], form) => {
          return acc.concat(form.events);
        }, []))).values()];
        if (this.componentData.formData.length > 1) {
          getValue = `{
          ${this.componentData.formData.map(({property}) => `${property.name}: elementRef.nativeElement.${property.name}`).join(',\n')}
        }`;
          setValue = `
          ${this.componentData.formData.map(({property}) => `elementRef.nativeElement.${property.name} = val?.${property.name}`).join(';\n')}
        `;
        } else {
          try {
            getValue = `elementRef.nativeElement.${this.componentData.formData[0].property.name}`;
            setValue = `elementRef.nativeElement.${this.componentData.formData[0].property.name} = val;`;
          } catch (e) {
            console.log(e);
          }
        }

        return `super({
              get value() {
                return ${getValue}
              },
              set value(val) {
                ${setValue}
              },
              valueUpdatedNotifier$: merge(
                ${outputEvents.map((event) => `fromEvent(elementRef.nativeElement, '${event.name}')`).join(',\n')}
              ),
              setDisabledState: (isDisabled: boolean): void => {
                elementRef.nativeElement.disabled = isDisabled;
              }
            })`;
      }
      return '';
    }
    return `
      // TS source file
      @ProxyInputs(${JSON.stringify(this.componentData.inputs.map(i => i.name))})
      @ProxyOutputs(${JSON.stringify(this.componentData.outputs.map(o => o.name))})
      @ProxyMethods(${JSON.stringify(this.componentData.methods.map(m => m.name))})
      @Component({
        selector: '${this.selector}',
        template: \`<ng-content></ng-content>\`,
        exportAs: '${camelCase('ui5-' + this.componentData.baseName)}',
        standalone: true,
        inputs: ${inputsJson(this.componentData.inputs)},
        outputs: ${outputsJson(this.componentData.outputs)},
        providers: [
            ${this.componentData.formData.length > 0 ? `{
              provide: NG_VALUE_ACCESSOR,
              useExisting: forwardRef(() => ${this.componentClassName}),
              multi: true
            }` : ''}
        ]
      })
      export class ${this.componentClassName} ${baseClass()}{
        ${this.componentData.inputs.filter(({type}) => typeof type === 'string' && type.indexOf('any') === -1).map(({name}) => `${name}?: ${this.componentData.baseName}Element['${name}'];`).join('\n')}
        constructor(private c: ChangeDetectorRef, private elementRef: ElementRef<${this.componentData.baseName}Element>, private zone: NgZone) {
          c.detach();
          ${cvaConstructor()}
        }

        get element(): ${this.componentData.baseName}Element {
          return this.elementRef.nativeElement;
        }
      }
      `
  }

  override getCode(): string {
    return prettierFormat([
      this.getImportsCode(),
      `import type ${this.componentData.baseName} from '${this.componentData.path}';`,
      this.getEventsMapInterface(),
      this.getElementInterface(),
      this.getComponentCode(),
      `export declare interface ${this.componentClassName} extends Partial<${this.componentData.baseName}Element> {
        ${this.componentData.outputs.map((output) => `${output.name}: EventEmitter<${this.componentClassName}EventsMap['${output.name}']>;`).join('\n')}
      }`
    ].join('\n'), {parser: 'typescript'});
  }
}
