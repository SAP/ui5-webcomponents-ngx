import {SymbolObject} from "./symbol-types";
import {camelCase, kebabCase} from 'lodash';
import {ComponentData} from "@ui5/webcomponents-transformer";

const objectTypeMapper = (elementTagName: string, identifier: string) => {
  if (elementTagName === 'ui5-button') {
    if (identifier === 'accessibilityAttributes') {
      return `
        {
          expanded?: boolean;
          hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
          controls?: string | HTMLElement | Array<HTMLElement | string>;
        }
      `;
    }
  }
  if (elementTagName === 'ui5-link') {
    if (identifier === 'accessibilityAttributes') {
      return `
        {
          expanded?: boolean;
          hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
        }
      `;
    }
  }
  return 'Record<string, any>';
}

/**
 * Returns the list of the component data,
 * which contains typescript types for the inputs, outputs, slots and methods,
 * it also contains the references to it's dependencies
 * @param implementers
 * @param symbols
 * @param components
 */
export function getComponents({
                                implementers,
                                symbols,
                                components
                              }: { implementers: Record<string, SymbolObject[]>; symbols: Record<string, SymbolObject>, components: SymbolObject[] }): ComponentData[] {
  const processing = new Set<string>();
  const cache: Record<ComponentData['baseName'], ComponentData> = {};
  const typesMap: Record<string, string | ((tag: string, entryName: string) => string)> = {
    integer: 'number',
    float: 'number',
    double: 'number',
    boolean: 'boolean',
    string: 'string',
    csscolor: 'string',
    object: objectTypeMapper,
    array: 'Array<any>',
    htmlelement: 'HTMLElement',
    element: 'Element',
    node: 'Node',
    '*': 'any',
    'undefined': 'any',
  }

  function getPropertyType(type: string, tagname: string, identifier: string, component: ComponentData): string | ComponentData[] {
    const isArray = type.endsWith('[]');
    if (isArray) {
      type = type.slice(0, -2);
    }
    const mappedType = typesMap[type.toLowerCase()];
    if (!mappedType && symbols[type]) {
      const symbol = symbols[type];

      if (symbol.kind) {
        if (symbol.kind === 'interface') {
          const interfaceImplementers = implementers[type].map(getComponentData).filter(Boolean) as ComponentData[];
          if (interfaceImplementers.length > 0) {
            interfaceImplementers.forEach(impl => {
              component.imports.push({
                specifiers: [
                  {
                    local: impl.baseName,
                    imported: 'default'
                  }
                ],
                path: impl.path,
              })
            })
            return interfaceImplementers.map(({baseName}) => baseName).join(' | ');
          } else {
            return 'any';
          }
        }
        if (symbol.kind === 'enum') {
          return symbol.properties.map(p => `'${p.name}'`).join(' | ');
        }
        component.imports.push({
          specifiers: [
            {
              local: symbol.basename,
              imported: 'default'
            }
          ],
          path: symbol.resource.replace(/.js$/, ''),
        });
        return symbol.basename;
      }
    }
    if (typeof mappedType === 'function') {
      return mappedType(tagname, identifier);
    }
    return mappedType || 'any';
  }

  function getInputs(symbol: SymbolObject, component: ComponentData): ComponentData['inputs'] {
    return symbol.properties.filter(prop => prop.visibility === 'public').map((property) => {
      return {
        description: property.description,
        publicName: kebabCase(property.name),
        name: camelCase(property.name),
        type: getPropertyType(property.type, symbol.tagname, camelCase(property.name), component),
        defaultValue: property.defaultValue,
        isArray: property.type.endsWith('[]'),
      }
    })
  }

  function getOutputs(symbol: SymbolObject, component: ComponentData): ComponentData['outputs'] {
    return symbol.events.filter(event => event.visibility === 'public').map((event) => {
      const eventNames = {
        kebab: kebabCase(event.name),
        camel: camelCase(event.name)
      };
      const parameters = (event.parameters || []).reduce((acc, parameter) => {
        acc[parameter.name] = getPropertyType(parameter.type, symbol.tagname, eventNames.camel, component);
        return acc;
      }, {});
      const eventType = !event.parameters?.length ? 'void' : `{ ${Object.keys(parameters).map((key) => `'${key}': ${typeof parameters[key] === 'string' ? parameters[key] : `{${key}}`}`).join(',')} }`;
      return {
        description: event.description,
        name: eventNames.camel,
        publicName: eventNames.camel === eventNames.kebab ? eventNames.camel : eventNames.kebab,
        type: eventType,
        placeholderValues: Object.entries(parameters).reduce((acc, next) => {
          acc[next[0]] = next[1];
          return acc
        }, {})
      }
    });
  }

  function getSlots(symbol: SymbolObject, component: ComponentData): ComponentData['slots'] {
    return symbol.slots.filter(slot => slot.visibility === 'public').map((slot) => {
      const interfaceName = slot.type.replace('[]', '');
      const canBeSelf = component.implements.includes(interfaceName);
      let slotComponents: SymbolObject[] = implementers[interfaceName] || [];
      if (canBeSelf) {
        slotComponents = slotComponents.filter(c => c.basename !== component.baseName);
      }
      const supportedElements = slotComponents.map((i) => getComponentData(i)).filter(Boolean) as ComponentData[];
      if (supportedElements.length > 0) {
        supportedElements.forEach(e => component.dependencies.push(e));
      }
      canBeSelf && supportedElements.push(component);
      let type = supportedElements.map(({baseName}) => baseName).join(' | ') || 'HTMLElement';
      if (slot.type.endsWith('[]')) {
        type = `Array<${type}>`;
      }
      return {
        description: slot.description,
        name: slot.name,
        type,
        supportedElements,
        isArray: slot.type.endsWith('[]'),
      }

    })
  }

  function getMethods(symbol: SymbolObject): ComponentData['methods'] {
    return symbol.methods.filter(({visibility}) => visibility === 'public').map((method) => {
      return {
        name: method.name,
        description: method.description,
      }
    });
  }

  function getComponentData(symbol: SymbolObject): ComponentData | undefined {
    if (!symbol.tagname) return;
    if (cache[symbol.basename]) return cache[symbol.basename];
    const dependencies: Array<ComponentData> = [];
    const component: ComponentData = {
      description: symbol.description,
      baseName: symbol.basename,
      dependencies,
      imports: [],
      implements: symbol.implements,
      selector: symbol.tagname,
      path: symbol.resource,
      inputs: [],
      outputs: [],
      slots: [],
      formData: [],
      methods: []
    };
    if (processing.has(symbol.basename)) {
      return component;
    }
    processing.add(symbol.basename);
    component.inputs = getInputs(symbol, component);
    component.outputs = getOutputs(symbol, component);
    component.slots = getSlots(symbol, component);
    component.methods = getMethods(symbol);
    if (symbol.formData) {
      component.formData = symbol.formData.map(data => {
        return {
          property: component.inputs.find(i => i.name === data.property.name) as ComponentData["inputs"][number],
          events: component.outputs.filter(o => data.events.find(de => de.name === o.name)),
        }
      });
    }
    component.dependencies = [...new Set(dependencies)]
    cache[component.baseName] = component;
    processing.delete(symbol.basename);
    return component;
  }

  return components.map(getComponentData as (d) => ComponentData);
}
