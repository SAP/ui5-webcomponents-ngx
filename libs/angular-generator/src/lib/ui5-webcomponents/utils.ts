import {ExportSpecifierType} from "@ui5/webcomponents-wrapper";
import {format} from "prettier";
import {AngularGeneratedFile} from "../angular-generated-file";

export class UtilsFile extends AngularGeneratedFile {
  constructor() {
    super();
    this.move('utils/index.ts');
    this.addImport(['fromEvent', 'map'], 'rxjs');
    this.addExport([
      {
        local: 'ProxyInputs',
        exported: 'ProxyInputs',
        types: [ExportSpecifierType.Function]
      },
      {
        local: 'ProxyMethods',
        exported: 'ProxyMethods',
        types: [ExportSpecifierType.Function]
      },
      {
        local: 'ProxyOutputs',
        exported: 'ProxyOutputs',
        types: [ExportSpecifierType.Function]
      }
    ]);
  }

  override getCode(): string {
    return format([
      this.getImportsCode(),
      `
      function ProxyInputs(inputNames: string[]) {
        return (cls: any) => {
          inputNames.forEach(inputName => {
            Object.defineProperty(cls.prototype, inputName, {
              get() {
                return this.element[inputName];
              },
              set(val: any) {
                this.zone.runOutsideAngular(() => (this.element[inputName] = val));
              }
            });
          });
        }
      }

      function ProxyMethods(methodNames: string[]) {
        return (cls: any) => {
          methodNames.forEach(methodName => {
            cls.prototype[methodName] = function (...args: any[]) {
              return this.zone.runOutsideAngular(() =>
                // eslint-disable-next-line prefer-spread
                this.element[methodName].apply(this.element, args)
              );
            };
          });
        }
      }

      function ProxyOutputs(outputNames: string[]) {
        return (cls: any) => {
          outputNames.forEach((outputName) => {
            Object.defineProperty(cls.prototype, outputName, {
              get(): any {
                return fromEvent<CustomEvent<any>>(this.element, outputName).pipe(map(e => e.detail));
              }
            });
          });
        };
      }
      `,
      this.getExportsCode()
    ].join('\n'), {parser: 'typescript'});
  }
}

export const utilsFile = new UtilsFile();
