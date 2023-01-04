import {SymbolObject} from "./symbol-types";

export const combinedSlots = (current: { extends: string; slots: Array<any>; }, ...bases: Record<SymbolObject['name'], SymbolObject>[]) => {
  if (current.extends && current.extends !== 'sap.ui.webcomponents.base.UI5Element') {
    const base = bases.find(b => b[current.extends])?.[current.extends];
    if (base) {
      const baseEvents: Record<string, any> = combinedSlots(base, ...bases).reduce((acc: Record<string, any>, p: {name: string}) => {
        acc[p.name] = p;
        return acc;
      }, {});
      return Object.values({
        ...baseEvents,
        ...(current.slots || []).reduce((acc, p) => {
          acc[p.name] = p;
          return acc;
        }, {}),
      });
    }
  }
  return current.slots || [];
}
