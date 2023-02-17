import {AngularGeneratorOptions} from "./angular-generator-options";
import {ComponentData, InputType, OutputType} from "@ui5/webcomponents-wrapper";
import {camelCase} from 'lodash';
import {ComponentFile} from "./ui5-webcomponents/component-file";
import {genericCva} from "./generic-cva";

function CvaBaseClassExtends(componentFile: ComponentFile): string {
  if (componentFile.componentData.formData.length === 0) {
    return '';
  }
  return `extends ${genericCva.exports[0].specifiers[0].exported}`;
}

function providers(componentFile: ComponentFile) {
  if (componentFile.componentData.formData.length === 0) {
    return '';
  }
  return `{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ${componentFile.wrapperExportSpecifier.local}), multi: true }`
}

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

export function DirectiveWrapperCreator(
  componentFile: ComponentFile,
  elementTypeName: string,
  eventsMapName: string,
  options: AngularGeneratorOptions,
  ComponentsMap: Map<ComponentData, ComponentFile>
): string {
  const getInputType = (input: InputType) => {
    const t = typeof input.type === 'string' ? input.type : input.type.map((cmp: ComponentData) => {
      const generatedFile = ComponentsMap.get(cmp);
      const exported = generatedFile!.wrapperExportSpecifier.exported;
      return (typeof exported === 'string' ? exported : exported()) + '["element"]';
    }).join(' | ');
    return input.isArray ? `Array<${t}>` : t;
  }
  const inputsStr = componentFile.componentData.inputs.map((input: InputType): string => {
    return `
  @Input()
  set ${input.name}(val: ${elementTypeName}['${input.name}']) {
  this.elementRef.nativeElement.${input.name} = val;
  }
  get ${input.name}(): ${elementTypeName}['${input.name}'] {
  return this.elementRef.nativeElement.${input.name};
  }`;
  });
  const outputs = componentFile.componentData.outputs;

  const eventsMap = `
      interface ${eventsMapName} extends Omit<HTMLElementEventMap, ${outputs.map(output => `'${output.name}'`).join(' | ')}> {
        ${outputs.map((output) => `${output.name}: CustomEvent<${output.type}>;`).join('\n')}
      }
    `;

  const inputsTypeStr = componentFile.componentData.inputs.map((input) => {
    return `${input.name}: ${getInputType(input)};`;
  }).join('\n');

  const outputsTypeStr = `
        addEventListener<K extends keyof ${eventsMapName}>(type: K, listener: (this: ${elementTypeName}, ev: ${eventsMapName}[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof ${eventsMapName}>(type: K, listener: (this: ${elementTypeName}, ev: ${eventsMapName}[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    `;

  const analyzedSlots = componentFile.componentData.slots.map((slot) => {
    const supportedElements = slot.supportedElements.map((element) => {
      const componentGeneratedFile = ComponentsMap.get(element);
      const exportedWrapperClassName = componentGeneratedFile!.wrapperExportSpecifier.exported;
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
    const componentInputsOutputsAndSlots = [...componentFile.componentData.inputs, ...componentFile.componentData.outputs, ...componentFile.componentData.slots];
    if (componentInputsOutputsAndSlots.length > 0) {
      return `Omit<HTMLElement, ${componentInputsOutputsAndSlots.map(output => `'${output.name}'`).join(' | ')}>`
    }
    return 'HTMLElement';
  })();

  const methodsTypeStr = componentFile.componentData.methods.map((method) => {
    const parameters = method.parameters.map((parameter) => {
      return `${parameter.name}: ${parameter.type}`;
    }).join(', ');
    return `
    ${method.name}(${parameters}): ${method.returnValue};
    `;
  }).join('\n');

  const methodsStr = componentFile.componentData.methods.map((method) => {
    const parameters = method.parameters.map((parameter) => {
      return `${parameter.name}: ${parameter.type}`;
    }).join(', ');
    return `
    ${method.name}(${parameters}): ${method.returnValue} {
      return this.elementRef.nativeElement.${method.name}(${method.parameters.map((parameter) => parameter.name).join(', ')});
    }
    `;
  }).join('\n');
  const elementType = `
      ${outputs.length > 0 ? eventsMap : ''}

      interface ${elementTypeName} extends ${htmlElementType} {
        ${inputsTypeStr}

        ${analyzedSlots.map(([name, type]) => `${name}: ${type};`).join('\n')}

        ${outputs.length > 0 ? outputsTypeStr : ''}

        ${methodsTypeStr}
      }
    `;
  const outputsStr = outputs.map((output) => {
    return `@Output() ${output.name}: Observable<${eventsMapName}['${output.name}']> = NEVER as any;`;
  });
  return `
      ${elementType}
      @Directive({
        selector: '${componentFile.selector}',
        exportAs: '${camelCase(componentFile.selector)}',
        standalone: true,
        providers: [
            ${providers(componentFile)}
        ]
      })
      class ${componentFile.wrapperExportSpecifier.local} ${CvaBaseClassExtends(componentFile)} {
        ${inputsStr.join('\n')}
        ${outputsStr.join('\n')}
        constructor(private elementRef: ElementRef<${elementTypeName}>) {
          ${CvaConstructor(componentFile)}
        }

        get element(): typeof this.elementRef.nativeElement {
          return this.elementRef.nativeElement;
        }

        ${slotsStr}
        ${methodsStr}
      }
    `;
}
