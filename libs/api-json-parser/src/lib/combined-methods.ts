import {Method, SymbolObject} from "./symbol-types";

export const combinedMethods = (current: { extends: string; methods: Array<Method>; }, ...bases: Record<SymbolObject['name'], SymbolObject>[]): Method[] => {
  if (current.extends && current.extends !== 'sap.ui.webcomponents.base.UI5Element') {
    const base = bases.find(b => b[current.extends])?.[current.extends];
    if (base) {
      const baseMethods: Record<string, Method> = combinedMethods(base, ...bases).reduce((acc: Record<string, Method>, p: Method) => {
        acc[p.name] = p;
        return acc;
      }, {});
      return Object.values({
        ...baseMethods,
        ...(current.methods || []).reduce((acc, p) => {
          acc[p.name] = p;
          return acc;
        }, {}),
      });
    }
  }
  return current.methods || [];
}
