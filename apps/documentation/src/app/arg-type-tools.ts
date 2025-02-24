import {parse} from "flatted";
import flattedJson from "../api-json.json";
import {ArgTypes} from "@storybook/angular";
import { reflectComponentType } from "@angular/core";
const apiJson = parse(JSON.stringify(flattedJson)).reduce((acc, next) => {
  acc[next.baseName + '/' + next.selector] = next;
  return acc;
}, {});

export const extractArgTypes = (component: { name: string }): ArgTypes => {
  const componentName = component.name.replace('Component', '');
  const argTypes: Record<string, any> = {};
  const idName = componentName + '/' + reflectComponentType(component as any)?.selector;

  const categories = {
    inputs: 'Inputs',
    outputs: 'Outputs',
    slots: 'Slots',
    methods: 'Methods',
  };
  
  Object.entries(categories).forEach(([key, category]) => {
    apiJson[idName]?.[key]?.forEach((item) => {
      argTypes[item.name] = {
        type: item.type,
        description: item.description,
        name: item.name,
        table: { category },
        control: false,
      };
    });
  });

  return argTypes;
}

export const extractDescription = (name: string, component: any, additionalDescription: string ): string => {
  const componentName = name.replace('Component', '');
  const idName = componentName + '/' + reflectComponentType(component as any)?.selector;
  return apiJson[idName]?.description + additionalDescription;
}
