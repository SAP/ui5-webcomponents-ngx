import {SymbolObject} from "./symbol-types";

export const combinedProperties = (current: { extends: string; properties: Array<any>; }, ...bases: Record<SymbolObject['name'], SymbolObject>[]) => {
  if (current.extends && current.extends !== 'sap.ui.webcomponents.base.UI5Element') {
    const base = bases.find(b => b[current.extends])?.[current.extends];
    if (base) {
      const baseProperties: Record<string, any> = combinedProperties(base, ...bases).reduce((acc: Record<string, any>, p: {name: string}) => {
        acc[p.name] = p;
        return acc;
      }, {});
      return Object.values({
        ...baseProperties,
        ...(current.properties || []).reduce((acc: Record<string, any>, p: {name: string}) => {
          acc[p.name] = p;
          return acc;
        }, {}),
      });
    }
  }
  return current.properties || [];
}
