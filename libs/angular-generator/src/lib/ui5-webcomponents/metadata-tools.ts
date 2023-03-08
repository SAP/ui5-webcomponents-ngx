import {InputType, OutputType} from "@ui5/webcomponents-wrapper";
import {camelCase} from "lodash";

export function inputs(inputs: InputType[]): string[] {
  return inputs.map(i => {
    if (i.name === i.publicName) {
      return i.name;
    }
    return `${i.name}: ${i.publicName}`
  });
}

export function outputs(outputs: OutputType[]): string[] {
  return outputs.map(i => `${i.name}: ${camelCase('ui5-' + i.publicName)}`)
}
export const inputsJson = (inputItems: InputType[]): string => JSON.stringify(inputs(inputItems));
export const outputsJson = (outputItems: OutputType[]): string => JSON.stringify(outputs(outputItems));
