import {ComponentData, ImportData} from "@ui5/webcomponents-transformer";
import {AngularGeneratedFile} from "../angular-generated-file";

export function outputTypesImportData(componentData: ComponentData, componentsMap: Map<ComponentData, AngularGeneratedFile>): ImportData[] {
  const importData: ImportData[] = [];
  componentData.outputs.filter(o => Object.values(o.placeholderValues).some(v => typeof v !== 'string')).forEach((output) => {
    Object.values(output.placeholderValues).forEach(types => {
      if (typeof types !== "string") {
        types.forEach(type => {
          const cmp = type === componentData ? componentsMap.get(componentData) : componentsMap.get(type);
          if (!cmp) {
            throw new Error(`Component ${type.baseName} not found in the map`);
          }
          importData.push({specifiers: [{local: cmp.exports[0].specifiers[0].exported, imported: cmp.exports[0].specifiers[0].exported}], path: cmp.relativePathFrom})
        })
      }
    });
  });
  return importData;
}
