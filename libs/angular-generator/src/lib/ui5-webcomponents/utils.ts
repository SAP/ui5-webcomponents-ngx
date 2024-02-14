import {ExportSpecifierType} from "@ui5/webcomponents-transformer";
import {format} from "prettier";
import {AngularGeneratedFile} from "../angular-generated-file";

/**
 * The utils file generator.
 * The output code is responsible for creating the ProxyInputs, ProxyMethods and ProxyOutputs decorators,
 * which are used to proxy the inputs, outputs and methods of the web component to the Angular component.
 */
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
        local: 'ProxyOutputs',
        exported: 'ProxyOutputs',
        types: [ExportSpecifierType.Function]
      }
    ]);
  }

  override getCode(): Promise<string> {
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

      function ProxyOutputs(outputNames: string[]) {
        return (cls: any) => {
          outputNames.forEach((outputName) => {
            // eslint-disable-next-line prefer-const
            let [eventName, publicName] = outputName.split(':').map((s) => s.trim());
            publicName = publicName || eventName;
            Object.defineProperty(cls.prototype, publicName, {
              get(): any {
                return fromEvent<CustomEvent<any>>(this.element, eventName).pipe(
                  map((e) => e.detail),
                );
              },
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
