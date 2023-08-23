import {InputType, OutputType} from "@ui5/webcomponents-wrapper";
import {camelCase} from "lodash";

/**
 * Creates an array of the strings,
 * where if the input's name is the same as the publicName,
 * it will be only the name,
 * otherwise it will be the name: publicName for aligning with the
 * Angular's Component metadata inputs.
 * @param inputs
 */
export function inputs(inputs: InputType[]): string[] {
  return inputs.map(i => {
    if (i.name === i.publicName) {
      return i.name;
    }
    return `${i.name}: ${i.publicName}`
  });
}

/**
 * Creates an array of the strings, where each string is the output's name: publicName,
 * this also prefixes the publicName with 'ui5-' to align with the UI5 Web Components naming.
 * @param outputs
 */
export function outputs(outputs: OutputType[]): string[] {
  return outputs.map(i => `${i.name}: ${camelCase('ui5-' + i.publicName)}`)
}
export const inputsJson = (inputItems: InputType[]): string => JSON.stringify(inputs(inputItems));
export const outputsJson = (outputItems: OutputType[]): string => JSON.stringify(outputs(outputItems));
