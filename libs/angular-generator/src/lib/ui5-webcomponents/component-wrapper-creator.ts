import {AngularGeneratorOptions} from "../angular-generator-options";
import {ComponentData, InputType, OutputType} from "@ui5/webcomponents-wrapper";
import {camelCase} from 'lodash';
import {ComponentFile} from "./component-file";
import {genericCva} from "./generic-cva";
import {AngularGeneratedFile} from "../angular-generated-file";
import {inputsJson, outputsJson} from "./metadata-tools";
import {outputType} from "./output-type";
import { ui5LifecyclesServiceFile } from "./utils-generated-files/ui5-lifecycles-service-file";

/**
 * Returns the base class extends string for the component file.
 *
 * @param componentFile
 * @constructor
 */
function CvaBaseClassExtends(componentFile: ComponentFile): string {
  if (componentFile.componentData.formData.length === 0) {
    return '';
  }
  return `extends ${genericCva.exports[0].specifiers[0].exported}`;
}

/**
 * Returns the providers string for the component file.
 * @param componentFile
 */
function providers(componentFile: ComponentFile): string[] {
  if (componentFile.componentData.formData.length === 0) {
    return [];
  }
  return [`{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ${componentFile.wrapperExportSpecifier.local}), multi: true }`, ui5LifecyclesServiceFile.exportClassName]
}

function constructorDeps(componentFile: ComponentFile): [string, string][] {
  const deps: [string, string][] = [
    ['private c', 'ChangeDetectorRef'],
    ['private elementRef', `ElementRef<${componentFile.elementTypeName}>`],
    ['private zone', 'NgZone']
  ];

  if (componentFile.componentData.formData.length > 0) {
    deps.push(['private ui5LifecyclesService', 'Ui5LifecyclesService'])
  }

  return deps;
}

/**
 * Returns the constructor string for the component file.
 * If it contains a formData, it means that it also extends the GenericCva class
 * and needs a super call with proper parameters.
 * @param componentFile
 * @constructor
 */
export function CvaConstructor(componentFile: ComponentFile): string {
  if (componentFile.componentData.formData.length > 0) {
    let getValue, setValue;
    const outputEvents = [...(new Set(componentFile.componentData.formData.reduce((acc: OutputType[], form) => {
      return acc.concat(form.events);
    }, []))).values()];
    if (componentFile.componentData.formData.length > 1) {
      getValue = `{
          ${componentFile.componentData.formData.map(({property}) => `${property.name}: elementRef.nativeElement.${property.name}`).join(',\n')}
        }`;
      setValue = `
          ${componentFile.componentData.formData.map(({property}) => `elementRef.nativeElement.${property.name} = val?.${property.name}`).join(';\n')}
        `;
    } else {
      try {
        getValue = `elementRef.nativeElement.${componentFile.componentData.formData[0].property.name}`;
        setValue = `elementRef.nativeElement.${componentFile.componentData.formData[0].property.name} = val;`;
      } catch (e) {
        console.log(e);
      }
    }

    return `super({
              get value() {
                return ${getValue}
              },
              set value(val) {
                ui5LifecyclesService.onDomEnter(() => {
                  ${setValue}
                }, 'cvaSetValue');
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

/**
 * Returns the component wrapper string.
 * The component wrapper is an Angular component that wraps the UI5 Web Component
 * and if needed also extends the GenericCva class.
 *
 * Output code also contains the interfaces which are used by the component wrapper.
 * things like the element type, the events map and the inputs type.
 *
 * Types are generated based on the component's inputs, outputs and slots.
 *
 * @param componentFile
 * @constructor
 */
export function ComponentWrapperCreator(
  componentFile: ComponentFile
): string {
  const {
    elementTypeName,
    eventsNameMapName: eventsMapName,
    componentsMap,
    componentData: {
      inputs,
      outputs,
      slots,
      methods
    }
  } = componentFile;
  const getInputType = (input: InputType) => {
    const t = typeof input.type === 'string' ? input.type : input.type.map((cmp: ComponentData) => {
      const generatedFile = componentsMap.get(cmp);
      const exported = generatedFile!.exports[0].specifiers[0].exported;
      return (typeof exported === 'string' ? exported : exported()) + '["element"]';
    }).join(' | ');
    return input.isArray ? `Array<${t}>` : t;
  }

  const eventsMap = `
      interface ${eventsMapName} extends Omit<HTMLElementEventMap, ${outputs.map(output => `'${output.name}'`).join(' | ')}> {
        ${outputs.map((output) => `${output.name}: CustomEvent<${outputType(output, componentsMap)}>;`).join('\n')}
      }
    `;

  const inputsTypeStr = inputs.map((input) => {
    return `${input.name}: ${getInputType(input)};`;
  }).join('\n');

  const outputsTypeStr = `
        addEventListener<K extends keyof ${eventsMapName}>(type: K, listener: (this: ${elementTypeName}, ev: ${eventsMapName}[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof ${eventsMapName}>(type: K, listener: (this: ${elementTypeName}, ev: ${eventsMapName}[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    `;

  const analyzedSlots = slots.filter(sl => sl.name !== 'default').map((slot) => {
    const supportedElements = slot.supportedElements.map((element) => {
      const componentGeneratedFile = componentsMap.get(element);
      const exportedWrapperClassName = componentGeneratedFile!.exports[0].specifiers[0].exported;
      if (!exportedWrapperClassName) {
        throw new Error(`Component ${element.baseName} is not exported`);
      }
      return `${exportedWrapperClassName}['element']`;
    }).join(' | ');
    const type = supportedElements ? (slot.isArray ? `Array<${supportedElements}>` : supportedElements) : slot.type;
    return [slot.name, type]
  });
  const slotsStr = analyzedSlots.map(([name, type]) => {
    return `get ${name}(): ${type} {
        return this.elementRef.nativeElement.${name};
      }`;
  }).join('\n');
  const htmlElementType = (() => {
    const componentInputsOutputsAndSlots = [...inputs, ...outputs, ...slots];
    if (componentInputsOutputsAndSlots.length > 0) {
      return `Omit<HTMLElement, ${componentInputsOutputsAndSlots.map(output => `'${output.name}'`).join(' | ')}>`
    }
    return 'HTMLElement';
  })();

  const elementType = `
      ${outputs.length > 0 ? eventsMap : ''}

      interface ${elementTypeName} extends ${htmlElementType} {
        ${inputsTypeStr}

        ${analyzedSlots.map(([name, type]) => `${name}: ${type};`).join('\n')}

        ${outputs.length > 0 ? outputsTypeStr : ''}
      }
    `;
  return `
      ${elementType}
      // JS source file
      @ProxyInputs([${inputs.map((input) => `'${input.name}'`)}])
      @ProxyOutputs([${outputs.map((output) => `'${output.name}'`)}])
      @ProxyMethods([${methods.map((method) => `'${method.name}'`)}])
      @Component({
        template: \`<ng-content></ng-content>\`,
        selector: '${componentFile.selector}',
        exportAs: '${camelCase(componentFile.selector)}',
        standalone: true,
        providers: [
            ${providers(componentFile).join(',\n')}
        ],
        inputs: ${inputsJson(inputs)},
        outputs: ${outputsJson(outputs)},
      })
      export class ${componentFile.wrapperExportSpecifier.local} ${CvaBaseClassExtends(componentFile)} {
        ${inputs.filter(({type}) => typeof type === 'string' && type.indexOf('any') === -1).map(({name}) => `${name}?: ${elementTypeName}['${name}'];`).join('\n')}
        constructor(
          ${constructorDeps(componentFile).map(([name, type]) => `${name}: ${type}`).join(',\n')}
        ) {
          c.detach();
          ${CvaConstructor(componentFile)}
        }

        get element(): typeof this.elementRef.nativeElement {
          return this.elementRef.nativeElement;
        }

        ${slotsStr}
      }
      export declare interface ${componentFile.wrapperExportSpecifier.local} extends Partial<${elementTypeName}> {}
    `;
}
