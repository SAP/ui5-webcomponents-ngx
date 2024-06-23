import { ComponentData, OutputType } from "../../../lib/types";
import { AngularGeneratedFile } from "../angular-generated-file";

export function outputType(outputType: OutputType, componentsMap: Map<ComponentData, AngularGeneratedFile>): string {
  let type = outputType.type;
  Object.keys(outputType.placeholderValues).forEach((key) => {
    if (typeof outputType.placeholderValues[key] === 'string') {
      type = type.replace(`{${key}}`, outputType.placeholderValues[key] as string);
    } else {
      const placeholderType = (outputType.placeholderValues[key] as ComponentData[]).map(c => {
        const componentFile = componentsMap.get(c)!;
        return `${componentFile.exports[0].specifiers[0].exported}['element']`;
      }).join(' | ');
      type = type.replace(`{${key}}`, placeholderType);
    }
  });
  return type;
}
