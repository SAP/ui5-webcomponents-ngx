import { AngularGeneratorOptions } from "../angular-generator-options";
import { ComponentData, OutputType } from "@ui5/webcomponents-transformer";
import { camelCase } from "lodash";

const defaultOptions: Partial<AngularGeneratorOptions> = {
  componentOutputNameFactory: (_: ComponentData, output: OutputType) => {
    const camelCaseName = camelCase(output.name);
    return `ui5${camelCaseName[0].toUpperCase()}${camelCaseName.slice(1)}`
  }
}

export function normalizeOptions(_options: AngularGeneratorOptions): AngularGeneratorOptions {
  return {
    ...defaultOptions,
    ..._options
  }
}
