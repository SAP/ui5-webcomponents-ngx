import {parse} from "flatted";
import flattedJson from "../api-json.json";
import {ArgTypes} from "@storybook/angular";
const apiJson = parse(JSON.stringify(flattedJson)).reduce((acc, next) => {
  acc[next.baseName] = next;
  return acc;
}, {});

export const extractArgTypes = (component: { name: string }): ArgTypes => {
  const componentName = component.name.replace('Component', '');
  const argTypes = {};

  apiJson[componentName]?.inputs.forEach((input) => {
    argTypes[input.name] = {
      type: input.type,
      description: input.description,
      name: input.name,
      defaultValue: input.defaultValue,
      table: {
        category: 'Inputs',
      },
      control: false
    };
  }, {});

  apiJson[componentName]?.outputs.forEach((output) => {
    argTypes[output.name] = {
      type: output.type,
      description: output.description,
      name: output.name,
      table: {
        category: 'Outputs',
      },
      control: false
    };
  });

  apiJson[componentName]?.slots.forEach((slot) => {
    argTypes[slot.name] = {
      type: slot.type,
      description: slot.description,
      name: slot.name,
      table: {
        category: 'Slots',
      },
      control: false
    };
  });

  apiJson[componentName]?.methods.forEach((property) => {
    argTypes[property.name] = {
      type: property.type,
      description: property.description,
      name: property.name,
      table: {
        category: 'Methods',
      },
      control: false
    };
  });

  return argTypes;
}
