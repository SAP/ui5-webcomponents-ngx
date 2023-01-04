import {GeneratedAngularComponentFile} from "./generated-angular-component-file";
import {AngularGeneratorOptions} from "./angular-generator-options";
import {ComponentData, InputType} from "@ui5/webcomponents-wrapper";
import {camelCase} from 'lodash';

export function DirectiveWrapperCreator(
  componentFile: GeneratedAngularComponentFile,
  elementTypeName: string,
  eventsMapName: string,
  options: AngularGeneratorOptions,
  ComponentsMap: Map<ComponentData, GeneratedAngularComponentFile>
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
        exportAs: '${camelCase(componentFile.selector)}'
      })
      class ${componentFile.wrapperExportSpecifier.local} {
        ${inputsStr.join('\n')}
        ${outputsStr.join('\n')}
        constructor(private elementRef: ElementRef<${elementTypeName}>) {}

        get element(): typeof this.elementRef.nativeElement {
          return this.elementRef.nativeElement;
        }

        ${slotsStr}
        ${methodsStr}
      }
    `;
}
