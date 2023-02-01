import {ComponentData, GeneratedFile} from "@ui5/webcomponents-wrapper";
import {GeneratedStorybookPage} from "./generated-storybook-page";

const generator: (c: ComponentData[]) => Record<string, GeneratedFile> = (components) => {
  return components.reduce((acc, component) => {
    acc[component.path] = new GeneratedStorybookPage(component);
    return acc;
  }, {});
}

export generator;
