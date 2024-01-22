import { ComponentData, ImportData, InputType, MethodType, OutputType } from "@ui5/webcomponents-transformer";
import { ParserConfiguration } from "../parser-configuration";
import { readFileSync } from "fs";
import {
  Attribute,
  ClassDeclaration,
  ClassField,
  ClassMethod,
  CustomElementDeclaration,
  Event,
  JavaScriptModule,
  Package,
  Reference,
  Slot, Type
} from '@ui5/webcomponents-tools/lib/cem/types-internal';
import * as process from "process";
import { camelCase } from "lodash";

type JavascriptModuleDeclaration = Required<JavaScriptModule>['declarations'][number]
type JavascriptModuleExport = Required<JavaScriptModule>['exports'][number];

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
const typesMap: Record<string, string> = {
  integer: 'number',
  float: 'number',
  double: 'number',
  boolean: 'boolean',
  string: 'string',
  csscolor: 'string',
  array: 'Array<any>',
  htmlelement: 'HTMLElement',
  element: 'Element',
  node: 'Node',
  '*': 'any',
  'undefined': 'any',
}

function getPropertyType(type: Type | undefined, resolvedJsons: Record<string, JavaScriptModule[]>): string {
  if (!type) {
    return 'any';
  }
  if (!type?.text) {
    console.log(type);
  }
  const mappedType = typesMap[type.text.toLowerCase()];
  if (mappedType) {
    return mappedType;
  }
  let typeText = type.text;
  const refsInfos = (type.references || []).map(r => getDeclarationDetails(resolvedJsons, r));
  for (const refInfo of refsInfos) {
    if (refInfo?.declaration.kind === 'enum') {
      typeText = typeText.replace(refInfo.declaration.name, (refInfo.declaration.members || [])?.map(m => m.kind === 'field' && JSON.stringify(m.default)).filter(Boolean).join(' | '));
    }
  }
  return typeText;
}

const resolveFile = (ref: Reference): string => {
  /**
   * TODO remove when it's fixed
   */
  if (!ref.module && ref.package) {
    return ref.package;
  }

  return (() => {
    try {
      return require.resolve(ref.module as string);
    } catch (e) {
      return require.resolve(`${ref.package}/${ref.module}`);
    }
  })()
    .replace(process.cwd(), '')
    .replace('/node_modules/', '');
}

const getDeclarationPath = (ref: Reference) => {
  const refFile = resolveFile(ref);
  return `${refFile}#${ref.name}`;
}

const declarationPathToRef = (path: string): Reference => {
  const [packageAndModule, name] = path.split('#');
  const pkg = packageAndModule.replace(/\/dist\/.*/, '');
  const module = packageAndModule.replace(pkg + '/', '');
  return {
    package: pkg,
    module,
    name
  };
}

const refToImportData = (resolvedJsons: Record<string, JavaScriptModule[]>, ref: Reference): ImportData => {
  const val = (() => {
    const declarationDetails = getDeclarationDetails(resolvedJsons, ref);
    if (declarationDetails?.export) {
      const exportInfo = declarationDetails.export;
      return {
        specifiers: [
          {
            local: exportInfo.declaration.name,
            imported: exportInfo.name
          }
        ],
        path: resolveFile(ref)
      };
    }
    return { // Just assuming it's exported like that
      specifiers: [
        {
          local: ref.name,
          imported: ref.name
        }
      ],
      path: resolveFile(ref)
    };
    // if (['AccessibilityTexts', 'AccessiblilityTexts', 'AccessibilityRoles', 'AccessibilityAttributes'].includes(ref.name)) {
    //
    // }
    // throw new Error(`Cannot find export for ${ref.package}/${ref.module}#${ref.name}`);
  })();
  if (val.path === '') {
    console.log(val);
  }
  return val;
}

type DeclsCacheValueType = { declaration: JavascriptModuleDeclaration, export?: JavascriptModuleExport };

const declarationsCache: Record<string, DeclsCacheValueType> = {};

const getDeclarationDetails = (resolvedJsons: Record<string, JavaScriptModule[]>, ref: Reference): DeclsCacheValueType | null => {
  const declPath = getDeclarationPath(ref);
  if (declarationsCache[declPath]) {
    return declarationsCache[declPath];
  }
  const [filePath, componentName] = declPath.split('#');
  const packageName = Object.keys(resolvedJsons).sort(
    (a, b) => b.length - a.length
  ).find(p => filePath.startsWith(p));
  if (packageName) {
    const jsModule = resolvedJsons[packageName]?.find(m => m.path === filePath);
    const decl = jsModule?.declarations?.find(d => d.name === componentName);
    if (decl) {
      declarationsCache[declPath] = {
        declaration: decl,
        export: jsModule?.exports?.find(e => e.declaration.name === componentName)
      };
      return declarationsCache[declPath];
    }
  }
  return null;
};

function mergeCustomElementDeclWithParents(resolvedJsons: Record<string, JavaScriptModule[]>, startingPoint: CustomElementDeclaration): CustomElementDeclaration {
  const elements: (CustomElementDeclaration | ClassDeclaration)[] = [startingPoint];
  let currentElement: CustomElementDeclaration | ClassDeclaration = startingPoint;
  while (currentElement.superclass) {
    const declarationDetails = getDeclarationDetails(resolvedJsons, currentElement.superclass);
    const declaration = declarationDetails?.declaration || null;
    if (declaration) {
      elements.unshift(declaration as CustomElementDeclaration | ClassDeclaration);
      currentElement = declaration as CustomElementDeclaration | ClassDeclaration;
    } else {
      break;
    }
  }
  const membersMap: Record<string, ClassField | ClassMethod> = {};
  const slotsMap: Record<string, Slot> = {};
  const attributesMap: Record<string, Attribute> = {};
  const eventsMap: Record<string, Event> = {};
  const implementsSet: Set<string> = new Set();
  for (const element of elements) {
    if (element.members) {
      element.members.forEach(member => {
        membersMap[member.name] = member;
      });
    }
    if ((element as CustomElementDeclaration).customElement) {
      const customElement = element as CustomElementDeclaration;
      if (customElement.slots) {
        customElement.slots.forEach(slot => {
          slotsMap[slot.name] = slot;
        });
      }
      if (customElement.attributes) {
        customElement.attributes.forEach(attribute => {
          attributesMap[attribute.name] = attribute;
        });
      }
      if (customElement.events) {
        customElement.events.forEach(event => {
          eventsMap[event.name] = event;
        });
      }
      if (customElement._ui5implements) {
        customElement._ui5implements.forEach(i => implementsSet.add(getDeclarationPath(i)));
      }
    }
  }
  return {
    ...startingPoint,
    members: Object.values(membersMap),
    slots: Object.values(slotsMap),
    attributes: Object.values(attributesMap),
    events: Object.values(eventsMap),
    _ui5implements: Array.from(implementsSet).map(declarationPathToRef)
  };
}

function populateInputs(symbol: CustomElementDeclaration, component: ComponentData, resolvedJsons: Record<string, JavaScriptModule[]>): void {
  for (const member of symbol.members || []) {
    if (member.kind === 'field' && !member.static && member.privacy === 'public' && !member.readonly) {
      const input: InputType = {
        name: member.name,
        publicName: camelCase(member.name),
        description: member.description || '',
        defaultValue: member.default || '',
        isArray: member.type!.text.endsWith('[]'),
        type: getPropertyType(member.type, resolvedJsons),
      };
      for (const ref of member.type?.references || []) {
        component.imports.push(refToImportData(resolvedJsons, ref));
      }
      component.inputs.push(input);
    }
  }
}

function populateMethods(symbol: CustomElementDeclaration, component: ComponentData) {
  for (const member of symbol.members || []) {
    if (member.kind === 'method' && !member.static && member.privacy === 'public') {
      const method: MethodType = {
        name: member.name,
        description: member.description || '',
      };
      component.methods.push(method);
    }
  }
}

function populateOutputs(symbol: CustomElementDeclaration, component: ComponentData, resolvedJsons: Record<string, JavaScriptModule[]>) {
  for (const ev of symbol.events || []) {
    let type = getPropertyType(ev.type, resolvedJsons).replace(/CustomEvent<(.*)>/, '$1');
    if (type === 'CustomEvent') {
      type = 'void';
    }
    const output: OutputType = {
      name: ev.name,
      description: ev.description || '',
      publicName: camelCase(ev.name),
      type,
      placeholderValues: {}
    }
    for (const ref of ev.type?.references || []) {
      component.imports.push(refToImportData(resolvedJsons, ref));
    }
    component.outputs.push(output);
  }
}

function populateFormData(symbol: CustomElementDeclaration, component: ComponentData) {
  for (const member of symbol.members || []) {
    if (member.kind === 'field' && !member.static && member.privacy === 'public' && !member.readonly && member._ui5formProperty) {
      const input = component.inputs.find(i => i.name === member.name);
      const outputs = member._ui5formEvents?.split(',').map(e => component.outputs?.find(o => o.name === e.trim())).filter(Boolean) as OutputType[];
      if (!input || !outputs) {
        throw new Error(`Cannot find input or output for ${member.name}`);
      }
      component.formData.push({
        property: input,
        events: outputs
      })
    }
  }
}

function populateComponentDatas(jsModule: JavaScriptModule, resolvedJsons: Record<string, JavaScriptModule[]>, componentDatas: Record<string, ComponentData>): void {
  const customElementExportName = jsModule.exports?.find(e => e.kind === 'custom-element-definition')?.declaration.name;

  if (customElementExportName) {
    const declPath = getDeclarationPath({ module: jsModule.path, name: customElementExportName });
    if (componentDatas[declPath]) {
      return;
    }
    const { declaration: customElDecl } = getDeclarationDetails(resolvedJsons, {
      module: jsModule.path,
      name: customElementExportName
    }) as DeclsCacheValueType;
    const fullCustomElDecl = mergeCustomElementDeclWithParents(resolvedJsons, customElDecl as CustomElementDeclaration);
    const component = {
      baseName: fullCustomElDecl.name,
      dependencies: [],
      description: fullCustomElDecl.description || '',
      formData: [],
      implements: fullCustomElDecl._ui5implements?.map(getDeclarationPath) || [],
      imports: [
        refToImportData(resolvedJsons, {
          module: jsModule.path,
          name: customElementExportName
        })
      ],
      inputs: [],
      methods: [],
      outputs: [],
      path: jsModule.path,
      selector: fullCustomElDecl.tagName,
      slots: []
    } as ComponentData;
    populateInputs(fullCustomElDecl, component, resolvedJsons);
    populateOutputs(fullCustomElDecl, component, resolvedJsons);
    populateMethods(fullCustomElDecl, component);
    populateFormData(fullCustomElDecl, component);
    componentDatas[declPath] = component;
  }
}

const customElementsToComponentDatas = (resolvedJsons: Record<string, JavaScriptModule[]>): ComponentData[] => {
  const componentDatas: Record<string, ComponentData> = {};
  Object.values(resolvedJsons).forEach(jsModules => {
    jsModules.forEach(jsModule => {
      populateComponentDatas(jsModule, resolvedJsons, componentDatas);
    });
  });
  return Object.values(componentDatas);
}

/**
 * Parses the custom-elements.json files and returns the list of the component data
 */
export async function customElementSchemaParser(options: ParserConfiguration): Promise<ComponentData[]> {
  const resolvedJsons: Record<string, JavaScriptModule[]> = options.sources.reduce((acc, pathToJson) => {
    let apiJsonPath: string;
    let srcBasePath: string;
    if (typeof pathToJson === 'string') {
      apiJsonPath = pathToJson;
      srcBasePath = (pathToJson.match(/(.*)\/dist(.*)/)?.[1] as string); // temporarily silencing TS
    } else {
      apiJsonPath = pathToJson.apiJsonPath;
      srcBasePath = pathToJson.srcBasePath;
    }
    const exports = JSON.parse(readFileSync(require.resolve(apiJsonPath), "utf-8")) as Package;
    acc[srcBasePath] = exports.modules.map(m => {
      return {
        ...m,
        path: `${srcBasePath}/${m.path}`
      } as JavaScriptModule;
    });
    return acc;
  }, {});
  const components = customElementsToComponentDatas(resolvedJsons)
  return components;
}
