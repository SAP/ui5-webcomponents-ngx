import {SymbolObject} from "./symbol-types";

export const combinedEvents = (current: { extends: string; events: Array<any>; }, ...bases: Record<SymbolObject['name'], SymbolObject>[]) => {
  if (current.extends && current.extends !== 'sap.ui.webcomponents.base.UI5Element') {
    const base = bases.find(b => b[current.extends])?.[current.extends];
    if (base) {
      const baseEvents: Record<string, any> = combinedEvents(base, ...bases).reduce((acc: Record<string, any>, p: {name: string}) => {
        acc[p.name] = p;
        return acc;
      }, {});
      return Object.values({
        ...baseEvents,
        ...(current.events || []).reduce((acc, p) => {
          acc[p.name] = p;
          return acc;
        }, {}),
      });
    }
  }
  return current.events || [];
}
