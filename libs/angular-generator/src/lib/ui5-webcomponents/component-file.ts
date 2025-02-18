import { AngularGeneratedFile } from '../angular-generated-file';
import { ComponentData, ExportSpecifierType, OutputType } from "@ui5/webcomponents-transformer";
import { AngularGeneratorOptions } from "../angular-generator-options";
import { AngularExportSpecifierType } from '../angular-export-specifier-type';
import { utilsFile } from "./utils";
import { outputTypesImportData } from "./output-types-import-data";
import { genericCva } from "./generic-cva";
import { format } from "prettier";
import { camelCase } from 'lodash';
export class ComponentFile extends AngularGeneratedFile {
  private componentClassName = `${this.componentData.baseName}Component`;
  private _cvaGetterCode?: string;
  private _cvaSetterCode?: string;

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

    let exportedName = this.componentClassName;

    if ( this.componentData.path.includes('/ai/') ) {
      console.warn('exportedName: ', exportedName);
      exportedName = `Ai${this.componentClassName}`;

    }
    this.addExport({
      local: this.componentClassName,
      exported: exportedName,
      types: [ExportSpecifierType.Class, AngularExportSpecifierType.NgModule]
    })
    this.addImport(['Component', 'ElementRef', 'NgZone', 'ChangeDetectorRef', 'booleanAttribute', 'Input as InputDecorator', 'inject'], '@angular/core');
    if (this.componentData.outputs.length) {
      this.addImport(['EventEmitter'], '@angular/core');
      this.addImport(['ProxyOutputs'], utilsFile.relativePathFrom);
      this.addImport(outputTypesImportData(this.componentData, this.componentsMap));
    }
    if (this.componentData.inputs.length) {
      this.addImport(['ProxyInputs'], utilsFile.relativePathFrom);
    }
    if (this.componentData.formData.length > 0) {
      this.addImport(() => genericCva.className, genericCva.relativePathFrom);
    }
    this.addImport({specifiers: [], path: this.componentData.path})
  }

  get componentMetadataCode() {
    const metadata = [
      ['standalone', 'true'],
      ['selector', JSON.stringify(this.selector)],
      ['template', JSON.stringify('<ng-content></ng-content>')],
    ];
    if (this.componentData.inputs.length) {
      metadata.push([
        'inputs',
        JSON.stringify(this.componentData.inputs.map(i => i.name))
      ]);
    }
    if (this.componentData.outputs.length) {
      metadata.push([
        'outputs',
        JSON.stringify(this.componentData.outputs.map(i => this.outputPublicName(i)))
      ]);
    }
    metadata.push(['exportAs', JSON.stringify(camelCase(this.selector))])
    if (this.componentData.formData.length > 0) {
      metadata.push([
        'hostDirectives',
        `[${genericCva.className}]`
      ]);
      metadata.push([
        'host',
        JSON.stringify(this.componentData.formData.reduce((acc, { events }) => {
          events.forEach(e => acc[`(${e.name})`] = `_cva?.onChange?.(cvaValue);`);
          return acc;
        }, {}))
      ]);
    }
    return `@Component({
      ${metadata.map(([k, v]) => `${k}: ${v},`).join('\n')}
    })`;
  }

  get outputsCode(): string {
    return this.componentData.outputs.map(o => `
    /**
     ${o.description}
    */
    ${this.outputPublicName(o)}!: EventEmitter<${o.type}>;
    `).join(';\n');
  }

  get inputsCode(): string {
    return this.componentData.inputs.map(i => {
      let decoratorExpr = "";

      if (i.type === "boolean") {
        decoratorExpr = `@InputDecorator({ transform: booleanAttribute })\n`;
      }

      return `
        /**
        ${i.description}
        */
        ${decoratorExpr} ${i.name}!: ${i.type};
      `
    }).join(';\n');
  }

  set cvaGetterCode(val: string) {
    this._cvaGetterCode = val;
  }

  get cvaGetterCode() {
    if (this._cvaGetterCode) {
      return this._cvaGetterCode;
    }
    if (this.componentData.formData.length === 0) {
      return '';
    }
    const [{ property }] = this.componentData.formData;
    return `get cvaValue() {
      return this.element.${property.name};
    }`
  }

  set cvaSetterCode(val: string) {
    this._cvaSetterCode = val;
  }

  get cvaSetterCode() {
    if (this._cvaSetterCode) {
      return this._cvaSetterCode;
    }
    if (this.componentData.formData.length === 0) {
      return '';
    }
    const [{ property }] = this.componentData.formData;
    return `set cvaValue(val) {
        this.element.${property.name} = val;
        this.cdr.detectChanges();
    }`
  }

  get componentClassCode() {
    const cvaDirectiveInjectionCode = this.componentData.formData.length > 0 ? `protected _cva = inject(${genericCva.className});` : ``;
    return `class ${this.componentClassName} {
      ${this.inputsCode}
      ${this.outputsCode}

      private elementRef: ElementRef<${this.componentData.baseName}> = inject(ElementRef);
      private zone = inject(NgZone);
      private cdr = inject(ChangeDetectorRef);
      ${cvaDirectiveInjectionCode}

      get element(): ${this.componentData.baseName} {
        return this.elementRef.nativeElement;
      }

      ${this.cvaSetterCode}
      ${this.cvaGetterCode}

      constructor(
      ) {
        this.cdr.detach();
        ${this.componentData.formData.length > 0 ? `this._cva.host = this;` : ''}
      }
    }`;
  }

  override async getCode(): Promise<string> {
    return await format(
      [
        this.getImportsCode(),
        `import '${this.componentData.path}';`,
        this.componentProxiesCode(),
        this.componentMetadataCode,
        this.componentClassCode,
        this.getExportsCode()
      ].join('\n'),
      {
        parser: 'typescript',
        singleQuote: true,
        plugins: ['prettier-plugin-organize-imports']
      }
    );
  }

  private outputPublicName(output: OutputType): string {
    if (this.options.componentOutputNameFactory) {
      return this.options.componentOutputNameFactory(this.componentData, output);
    }
    return output.publicName;
  }

  private componentProxiesCode() {
    return [
      this.componentData.inputs.length ? `@ProxyInputs(${JSON.stringify(this.componentData.inputs.map(i => i.name))})` : '',
      this.componentData.outputs.length ? `@ProxyOutputs(${JSON.stringify(this.componentData.outputs.map(i => `${i.name}: ${this.outputPublicName(i)}`))})` : ''
    ].join('\n');
  }
}
