import {ComponentData, InputType} from "@ui5/webcomponents-wrapper";
import {AngularGeneratedFile} from "./angular-generated-file";

export interface ModuleDescription {
  fileName: string;
  included: (file: AngularGeneratedFile) => boolean;
}

export interface AngularGeneratorOptions {
  exportFileNameFactory: (sourceFilePath: string) => string;
  apfPathFactory: (sourceFilePath: string) => string;
  modules: ModuleDescription[];
  selectorPostfix?: string;
  selectorFactory?: (componentData: ComponentData) => string;

  /**
   * Returned input should have different reference than the original input.
   * */
  inputModifier?: (input: InputType, componentData: ComponentData) => ({
    valueMapper?: [any, any][]; // [from, to][]
    input: InputType;
  });
}
