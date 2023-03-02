import {AngularGeneratedFile} from "../angular-generated-file";
import {ComponentData, ExportSpecifierType, OutputType} from "@ui5/webcomponents-wrapper";
import {AngularGeneratorOptions} from "../angular-generator-options";
import {format as prettierFormat} from "prettier";
import {camelCase} from "lodash";
import {AngularExportSpecifierType} from "../angular-export-specifier-type";
import {genericCva} from "./generic-cva";

export class TsComponentFile extends AngularGeneratedFile {
  private directiveClassName = `${this.componentData.baseName}Directive`;

  constructor(readonly componentData: ComponentData, private options: AngularGeneratorOptions) {
    super();
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
      local: this.directiveClassName,
      exported: this.directiveClassName,
      types: [ExportSpecifierType.Class, AngularExportSpecifierType.NgModule]
    })
    this.addImport(['Directive', 'ElementRef', 'NgZone'], '@angular/core');
    this.addImport(['ProxyInputs', 'ProxyMethods'], '@ui5/webcomponents-ngx/utils'); // @todo replace this with proper import
    if (this.componentData.outputs.length) {
      this.addImport(['EventEmitter', 'Output'], '@angular/core');
      this.addImport('NEVER', 'rxjs');
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
      interface ${this.directiveClassName}EventsMap extends Omit<HTMLElementEventMap, ${this.componentData.outputs.map(output => `'${output.name}'`).join(' | ')}> {
        ${this.componentData.outputs.map((output) => `${output.name}: CustomEvent<${output.type}>;`).join('\n')}
      }
    `;
  }

  private getElementInterface(): string {
    const baseInterface = this.componentData.outputs.length > 0 ? `Omit<${this.componentData.baseName}, ${this.componentData.outputs.map(o => JSON.stringify(o.name)).join(' | ')}>` : this.componentData.baseName;

    if (this.componentData.outputs.length === 0) {
      return `export declare interface ${this.componentData.baseName}Element extends ${baseInterface} {}`;
    }
    return `export declare interface ${this.componentData.baseName}Element extends ${baseInterface} {
        addEventListener<K extends keyof ${this.directiveClassName}EventsMap>(type: K, listener: (this: ${this.componentData.baseName}Element, ev: ${this.directiveClassName}EventsMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof ${this.directiveClassName}EventsMap>(type: K, listener: (this: ${this.componentData.baseName}Element, ev: ${this.directiveClassName}EventsMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
      }`
  }

  private getDirectiveCode(): string {
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
      @ProxyInputs(${JSON.stringify(this.componentData.inputs.map(i => i.name))})
      @ProxyMethods(${JSON.stringify(this.componentData.methods.map(m => m.name))})
      @Directive({
        selector: '${this.selector}',
        exportAs: '${camelCase('ui5-' + this.componentData.baseName)}',
        standalone: true,
        inputs: ${JSON.stringify(this.componentData.inputs.map(i => i.name))},
        outputs: ${JSON.stringify(this.componentData.outputs.map(o => o.publicName))},
        providers: [
            ${this.componentData.formData.length > 0 ? `{
              provide: NG_VALUE_ACCESSOR,
              useExisting: forwardRef(() => ${this.directiveClassName}),
              multi: true
            }` : ''}
        ]
      })
      export class ${this.directiveClassName} ${baseClass()}{
        ${this.componentData.outputs.map((output) => `@Output(${output.name === output.publicName ? '' : JSON.stringify(output.publicName)}) ${output.name}: EventEmitter<${this.directiveClassName}EventsMap['${output.name}']> = NEVER as any;`).join('\n')}
        constructor(private elementRef: ElementRef<${this.componentData.baseName}Element>, private zone: NgZone) {
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
      this.getDirectiveCode(),
      `export declare interface ${this.directiveClassName} extends ${this.componentData.baseName}Element {
        ${this.componentData.outputs.map((output) => `${output.name}: EventEmitter<${this.directiveClassName}EventsMap['${output.name}']>;`).join('\n')}
      }`
    ].join('\n'), {parser: 'typescript'});
  }
}
